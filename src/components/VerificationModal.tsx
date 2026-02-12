import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Lock, Shield, FileCheck } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const verificationSchema = z.object({
  fullName: z.string().trim().min(2, { message: 'verification.errors.nameMin' }).max(100, { message: 'verification.errors.nameMax' }),
  phone: z.string().trim().min(6, { message: 'verification.errors.phoneMin' }).max(20, { message: 'verification.errors.phoneMax' }),
  email: z.string().trim().email({ message: 'verification.errors.emailInvalid' }).max(255, { message: 'verification.errors.emailMax' }),
  idDocument: z.string().trim().min(5, { message: 'verification.errors.idMin' }).max(30, { message: 'verification.errors.idMax' }),
  country: z.string().trim().min(1, { message: 'verification.errors.countryRequired' }),
  acceptConfidentiality: z.literal(true, { errorMap: () => ({ message: 'verification.errors.confidentialityRequired' }) }),
  acceptCommission: z.literal(true, { errorMap: () => ({ message: 'verification.errors.commissionRequired' }) }),
});

type VerificationFormData = z.infer<typeof verificationSchema>;

interface VerificationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onVerified: () => void;
  businessSlug: string;
}

const COUNTRIES = [
  { value: 'AD', labelKey: 'verification.countries.AD' },
  { value: 'ES', labelKey: 'verification.countries.ES' },
  { value: 'FR', labelKey: 'verification.countries.FR' },
  { value: 'PT', labelKey: 'verification.countries.PT' },
  { value: 'DE', labelKey: 'verification.countries.DE' },
  { value: 'IT', labelKey: 'verification.countries.IT' },
  { value: 'GB', labelKey: 'verification.countries.GB' },
  { value: 'US', labelKey: 'verification.countries.US' },
  { value: 'OTHER', labelKey: 'verification.countries.OTHER' },
];

const VerificationModal = ({ open, onOpenChange, onVerified, businessSlug }: VerificationModalProps) => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<VerificationFormData>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: user?.email || '',
      idDocument: '',
      country: '',
      acceptConfidentiality: undefined,
      acceptCommission: undefined,
    },
  });

  const onSubmit = async (data: VerificationFormData) => {
    if (!user) {
      onOpenChange(false);
      navigate('/auth');
      return;
    }

    setIsSubmitting(true);

    const { data: sessionData } = await supabase.auth.getSession();
    const accessToken = sessionData?.session?.access_token;

    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/verify-business-access`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
        },
        body: JSON.stringify({
          businessSlug,
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          idDocument: data.idDocument,
          country: data.country,
          acceptConfidentiality: data.acceptConfidentiality,
          acceptCommission: data.acceptCommission,
        }),
      }
    );

    const result = await response.json();
    setIsSubmitting(false);

    if (!response.ok) {
      toast({
        title: t('auth.error'),
        description: result.error || 'Verification failed',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: t('verification.successTitle'),
      description: `${t('verification.successMessage')} (Token: ${result.tokenId?.slice(0, 8)}...)`,
    });

    onVerified();
    onOpenChange(false);
    form.reset();
  };

  // If not logged in, show login prompt
  if (!user) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center sm:text-center">
            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 bg-stone-800 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-amber-400" />
              </div>
            </div>
            <DialogTitle className="font-serif text-xl">
              {t('auth.loginRequired')}
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed">
              {t('auth.loginRequiredDesc')}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <Button
              onClick={() => { onOpenChange(false); navigate('/auth'); }}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white"
            >
              {t('auth.login')}
            </Button>
            <Button
              variant="outline"
              onClick={() => { onOpenChange(false); navigate('/auth'); }}
            >
              {t('auth.signup')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center sm:text-center">
          <div className="flex justify-center mb-3">
            <div className="relative">
              <div className="w-14 h-14 bg-stone-800 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-amber-400" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                <FileCheck className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
          <DialogTitle className="font-serif text-xl">
            {t('verification.title')}
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed">
            {t('verification.description')}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-2">
            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>{t('verification.fullName')} *</FormLabel>
                  <FormControl>
                    <Input placeholder={t('verification.fullNamePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage>{fieldState.error && t(fieldState.error.message || '')}</FormMessage>
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>{t('verification.phone')} *</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder={t('verification.phonePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage>{fieldState.error && t(fieldState.error.message || '')}</FormMessage>
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>{t('verification.email')} *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder={t('verification.emailPlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage>{fieldState.error && t(fieldState.error.message || '')}</FormMessage>
                </FormItem>
              )}
            />

            {/* ID Document */}
            <FormField
              control={form.control}
              name="idDocument"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>{t('verification.idDocument')} *</FormLabel>
                  <FormControl>
                    <Input placeholder={t('verification.idDocumentPlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage>{fieldState.error && t(fieldState.error.message || '')}</FormMessage>
                </FormItem>
              )}
            />

            {/* Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>{t('verification.country')} *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t('verification.countryPlaceholder')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {COUNTRIES.map((c) => (
                        <SelectItem key={c.value} value={c.value}>
                          {t(c.labelKey)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage>{fieldState.error && t(fieldState.error.message || '')}</FormMessage>
                </FormItem>
              )}
            />

            {/* Terms Section */}
            <div className="space-y-4 pt-2 border-t border-stone-200">
              <p className="text-xs font-medium text-stone-500 uppercase tracking-wide pt-2">
                {t('verification.termsSection')}
              </p>

              <FormField
                control={form.control}
                name="acceptConfidentiality"
                render={({ field, fieldState }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value === true}
                        onCheckedChange={(checked) => field.onChange(checked === true ? true : undefined)}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal text-stone-600 leading-relaxed cursor-pointer">
                        {t('verification.confidentialityTerms')}
                      </FormLabel>
                      {fieldState.error && (
                        <p className="text-xs text-red-500">{t(fieldState.error.message || '')}</p>
                      )}
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="acceptCommission"
                render={({ field, fieldState }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value === true}
                        onCheckedChange={(checked) => field.onChange(checked === true ? true : undefined)}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal text-stone-600 leading-relaxed cursor-pointer">
                        {t('verification.commissionTerms')}
                      </FormLabel>
                      {fieldState.error && (
                        <p className="text-xs text-red-500">{t(fieldState.error.message || '')}</p>
                      )}
                    </div>
                  </FormItem>
                )}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-base font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4 animate-pulse" />
                  {t('verification.verifying')}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  {t('verification.submit')}
                </span>
              )}
            </Button>

            <p className="text-xs text-stone-400 text-center leading-relaxed">
              {t('verification.disclaimer')}
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default VerificationModal;
