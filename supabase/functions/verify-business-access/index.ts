import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } }
    );

    const token = authHeader.replace("Bearer ", "");
    const { data: claimsData, error: claimsError } = await supabase.auth.getClaims(token);
    if (claimsError || !claimsData?.claims) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userId = claimsData.claims.sub;

    const body = await req.json();
    const { businessSlug, fullName, email, phone, idDocument, country, acceptConfidentiality, acceptCommission } = body;

    // Validate required fields
    if (!businessSlug || !fullName || !email || !phone || !idDocument || !country) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!acceptConfidentiality || !acceptCommission) {
      return new Response(JSON.stringify({ error: "Terms must be accepted" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Validate field lengths
    if (fullName.trim().length < 2 || fullName.trim().length > 100) {
      return new Response(JSON.stringify({ error: "Invalid name length" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (idDocument.trim().length < 5 || idDocument.trim().length > 30) {
      return new Response(JSON.stringify({ error: "Invalid document length" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (phone.trim().length < 6 || phone.trim().length > 20) {
      return new Response(JSON.stringify({ error: "Invalid phone length" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Capture IP address
    const ipAddress =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Generate token and timestamp
    const tokenId = crypto.randomUUID();
    const verifiedAt = new Date().toISOString();

    // Use service role to insert (bypasses RLS for server-side insert with validated user)
    const serviceClient = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data, error } = await serviceClient
      .from("business_verifications")
      .insert({
        user_id: userId,
        business_slug: businessSlug.trim(),
        full_name: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        id_document: idDocument.trim(),
        country: country.trim(),
        accepted_confidentiality: true,
        accepted_commission: true,
        token_id: tokenId,
        ip_address: ipAddress,
        verified_at: verifiedAt,
      })
      .select("token_id, verified_at")
      .single();

    if (error) {
      // Check for duplicate
      if (error.code === "23505") {
        return new Response(
          JSON.stringify({ error: "Already verified for this business" }),
          { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      console.error("Insert error:", error);
      return new Response(JSON.stringify({ error: "Verification failed" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        tokenId: data.token_id,
        verifiedAt: data.verified_at,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
