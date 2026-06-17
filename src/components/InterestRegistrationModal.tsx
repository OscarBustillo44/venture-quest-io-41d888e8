import { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Lock, Send } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';

interface InterestRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRegistered: () => void;
  businessSlug: string;
  businessTitle: string;
}

const InterestRegistrationModal = ({
  open,
  onOpenChange,
  onRegistered,
  businessSlug,
  businessTitle,
}: InterestRegistrationModalProps) => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Store interest registration for this specific business
    const registration = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      reason: reason.trim(),
      businessSlug,
      businessTitle,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem(
      `bb_interest_${businessSlug}`,
      JSON.stringify(registration)
    );
    localStorage.setItem('bb_registered', 'true');

    // Persist to Supabase (best-effort, don't block UX)
    supabase
      .from('interest_registrations')
      .insert({
        business_slug: businessSlug,
        full_name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        reason: reason.trim() || null,
      })
      .then(({ error }) => { if (error) console.error('Interest save error:', error); });

    setIsSubmitting(false);
    onRegistered();
    onOpenChange(false);

    setName('');
    setEmail('');
    setPhone('');
    setReason('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center sm:text-center">
          <div className="flex justify-center mb-3">
            <div className="w-14 h-14 bg-stone-800 rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6 text-amber-400" />
            </div>
          </div>
          <DialogTitle className="font-serif text-xl">
            {t('interest.title')}
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed">
            {t('interest.description')}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="interest-name">
              {t('interest.name')} *
            </Label>
            <Input
              id="interest-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('interest.namePlaceholder')}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="interest-email">
              {t('interest.email')} *
            </Label>
            <Input
              id="interest-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('interest.emailPlaceholder')}
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="interest-phone">
              {t('interest.phone')} *
            </Label>
            <Input
              id="interest-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t('interest.phonePlaceholder')}
            />
          </div>

          {/* Reason / Interest comment */}
          <div className="space-y-2">
            <Label htmlFor="interest-reason">
              {t('interest.reason')} *
            </Label>
            <Textarea
              id="interest-reason"
              required
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder={t('interest.reasonPlaceholder')}
              rows={3}
              className="resize-none"
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
                {t('interest.submitting')}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                {t('interest.submit')}
              </span>
            )}
          </Button>

          {/* Privacy note */}
          <p className="text-xs text-stone-400 text-center leading-relaxed">
            {t('interest.privacyNote')}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InterestRegistrationModal;
