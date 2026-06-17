export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      business_verifications: {
        Row: {
          accepted_commission: boolean
          accepted_confidentiality: boolean
          business_slug: string
          country: string
          created_at: string
          email: string
          full_name: string
          id: string
          id_document: string
          ip_address: string | null
          phone: string
          token_id: string
          user_id: string
          verified_at: string
        }
        Insert: {
          accepted_commission?: boolean
          accepted_confidentiality?: boolean
          business_slug: string
          country: string
          created_at?: string
          email: string
          full_name: string
          id?: string
          id_document: string
          ip_address?: string | null
          phone: string
          token_id?: string
          user_id: string
          verified_at?: string
        }
        Update: {
          accepted_commission?: boolean
          accepted_confidentiality?: boolean
          business_slug?: string
          country?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          id_document?: string
          ip_address?: string | null
          phone?: string
          token_id?: string
          user_id?: string
          verified_at?: string
        }
        Relationships: []
      }
      interest_registrations: {
        Row: {
          id: string
          business_slug: string
          full_name: string
          email: string
          phone: string
          reason: string | null
          ip_address: string | null
          created_at: string
        }
        Insert: {
          id?: string
          business_slug: string
          full_name: string
          email: string
          phone: string
          reason?: string | null
          ip_address?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          business_slug?: string
          full_name?: string
          email?: string
          phone?: string
          reason?: string | null
          ip_address?: string | null
          created_at?: string
        }
        Relationships: []
      }
      mandate_signatures: {
        Row: {
          id: string
          business_slug: string
          full_name: string
          birth_date: string
          nationality: string
          doc_type: string
          doc_number: string
          address: string
          email: string
          phone: string
          company: string | null
          position: string | null
          company_reg_number: string | null
          investment_capacity: string
          check_read_fully: boolean
          check_accept_clauses: boolean
          check_acknowledge_honoraires: boolean
          check_accept_electronic_signature: boolean
          ip_address: string
          user_agent: string | null
          contract_version: string
          contract_language: string
          signed_at: string
          pdf_storage_path: string | null
          confirmation_email_sent: boolean
          confirmation_email_sent_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          business_slug: string
          full_name: string
          birth_date: string
          nationality: string
          doc_type: string
          doc_number: string
          address: string
          email: string
          phone: string
          company?: string | null
          position?: string | null
          company_reg_number?: string | null
          investment_capacity: string
          check_read_fully?: boolean
          check_accept_clauses?: boolean
          check_acknowledge_honoraires?: boolean
          check_accept_electronic_signature?: boolean
          ip_address: string
          user_agent?: string | null
          contract_version?: string
          contract_language?: string
          signed_at?: string
          pdf_storage_path?: string | null
          confirmation_email_sent?: boolean
          confirmation_email_sent_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          business_slug?: string
          full_name?: string
          birth_date?: string
          nationality?: string
          doc_type?: string
          doc_number?: string
          address?: string
          email?: string
          phone?: string
          company?: string | null
          position?: string | null
          company_reg_number?: string | null
          investment_capacity?: string
          check_read_fully?: boolean
          check_accept_clauses?: boolean
          check_acknowledge_honoraires?: boolean
          check_accept_electronic_signature?: boolean
          ip_address?: string
          user_agent?: string | null
          contract_version?: string
          contract_language?: string
          signed_at?: string
          pdf_storage_path?: string | null
          confirmation_email_sent?: boolean
          confirmation_email_sent_at?: string | null
          created_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_business_access: { Args: { slug: string }; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
