
-- Add new columns to business_verifications
ALTER TABLE public.business_verifications
  ADD COLUMN phone TEXT NOT NULL DEFAULT '',
  ADD COLUMN country TEXT NOT NULL DEFAULT '',
  ADD COLUMN token_id UUID NOT NULL DEFAULT gen_random_uuid(),
  ADD COLUMN ip_address TEXT,
  ADD COLUMN verified_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now();

-- Remove the default on phone/country after adding (they need values for existing rows)
ALTER TABLE public.business_verifications ALTER COLUMN phone DROP DEFAULT;
ALTER TABLE public.business_verifications ALTER COLUMN country DROP DEFAULT;

-- Add unique index on token_id
CREATE UNIQUE INDEX idx_business_verifications_token ON public.business_verifications(token_id);
