-- Create mandate_signatures table for legally binding contract records
CREATE TABLE public.mandate_signatures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_slug TEXT NOT NULL,

  -- Buyer personal data
  full_name TEXT NOT NULL,
  birth_date DATE NOT NULL,
  nationality TEXT NOT NULL,
  doc_type TEXT NOT NULL CHECK (doc_type IN ('dni', 'passport', 'residence')),
  doc_number TEXT NOT NULL,
  address TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  position TEXT,
  company_reg_number TEXT,
  investment_capacity TEXT NOT NULL CHECK (investment_capacity IN ('<100k', '100k-500k', '500k-1M', '1M-5M', '>5M')),

  -- Signature checkboxes
  check_read_fully BOOLEAN NOT NULL DEFAULT false,
  check_accept_clauses BOOLEAN NOT NULL DEFAULT false,
  check_acknowledge_honoraires BOOLEAN NOT NULL DEFAULT false,
  check_accept_electronic_signature BOOLEAN NOT NULL DEFAULT false,

  -- Legal metadata
  ip_address TEXT NOT NULL,
  user_agent TEXT,
  contract_version TEXT NOT NULL DEFAULT '1.0',
  contract_language TEXT NOT NULL DEFAULT 'ca',
  signed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),

  -- PDF proof
  pdf_storage_path TEXT,

  -- Email confirmation
  confirmation_email_sent BOOLEAN NOT NULL DEFAULT false,
  confirmation_email_sent_at TIMESTAMP WITH TIME ZONE,

  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Index for lookups by business
CREATE INDEX idx_mandate_signatures_business ON public.mandate_signatures(business_slug);
-- Index for lookups by email
CREATE INDEX idx_mandate_signatures_email ON public.mandate_signatures(email);
-- Index for lookups by doc_number
CREATE INDEX idx_mandate_signatures_doc ON public.mandate_signatures(doc_number);

-- RLS: only service role can insert/read (no public access)
ALTER TABLE public.mandate_signatures ENABLE ROW LEVEL SECURITY;

-- No RLS policies = only service_role can access (edge functions use service_role)

-- Also create interest_registrations table for Level 2
CREATE TABLE public.interest_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_slug TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  phone TEXT NOT NULL,
  reason TEXT,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_interest_registrations_email ON public.interest_registrations(email);
CREATE INDEX idx_interest_registrations_business ON public.interest_registrations(business_slug);

ALTER TABLE public.interest_registrations ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (from frontend without auth)
CREATE POLICY "Anyone can register interest"
  ON public.interest_registrations FOR INSERT
  WITH CHECK (true);

-- Only service_role can read (admin access only)
-- No SELECT policy = anon/authenticated cannot read other registrations

-- Create storage bucket for mandate PDFs
INSERT INTO storage.buckets (id, name, public)
VALUES ('mandate-pdfs', 'mandate-pdfs', false)
ON CONFLICT (id) DO NOTHING;
