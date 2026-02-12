import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
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
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const verificationSchema = z.object({
  fullName: z.string().trim().min(2, { message: 'verification.errors.nameMin' }).max(100, { message: 'verification.errors.nameMax' }),
  email: z.string().trim().email({ message: 'verification.errors.emailInvalid' }).max(255, { message: 'verification.errors.emailMax' }),
  idDocument: z.string().trim().min(5, { message: 'verification.errors.idMin' }).max(30, { message: 'verification.errors.idMax' }),
  acceptConfidentiality: z.literal(true, { errorMap: () => ({ message: 'verification.errors.confidentialityRequired' }) }),
  acceptCommission: z.literal(true, { errorMap: () => ({ message: 'verification.errors.commissionRequired' }) }),
});

type VerificationFormData = z.infer<typeof verificationSchema>;

interface VerificationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onVerified: () => void;
}

const VerificationModal = ({ open, onOpenChange, onVerified }: VerificationModalProps) => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<VerificationFormData>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      idDocument: '',
      acceptConfidentiality: undefined,
      acceptCommission: undefined,
    },
  });

  const onSubmit = async (data: VerificationFormData) => {
    setIsSubmitting(true);
    // Simulate verification process
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    onVerified();
    onOpenChange(false);
    form.reset();
  };

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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-2">
            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>{t('verification.fullName')} *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('verification.fullNamePlaceholder')}
                      {...field}
                    />
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
                    <Input
                      type="email"
                      placeholder={t('verification.emailPlaceholder')}
                      {...field}
                    />
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
                    <Input
                      placeholder={t('verification.idDocumentPlaceholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>{fieldState.error && t(fieldState.error.message || '')}</FormMessage>
                </FormItem>
              )}
            />

            {/* Terms Section */}
            <div className="space-y-4 pt-2 border-t border-stone-200">
              <p className="text-xs font-medium text-stone-500 uppercase tracking-wide pt-2">
                {t('verification.termsSection')}
              </p>

              {/* Confidentiality Terms */}
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

              {/* Commission Terms */}
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
