import { useState } from 'react';
import { Lock, Shield, FileCheck, FileText, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

interface MandateBannerProps {
  onMandateSigned: () => void;
  businessSlug: string;
}

const MandateBanner = ({ onMandateSigned, businessSlug }: MandateBannerProps) => {
  const { t } = useTranslation();
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = () => {
    if (!accepted) return;
    localStorage.setItem(`bb_mandate_${businessSlug}`, 'true');
    onMandateSigned();
  };

  return (
    <Card className="border-2 border-amber-300 bg-gradient-to-br from-amber-50 via-white to-stone-50 shadow-lg">
      <CardContent className="py-8 px-6">
        <div className="flex flex-col items-center text-center space-y-5">
          {/* Lock Icon */}
          <div className="relative">
            <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center">
              <Lock className="w-7 h-7 text-amber-400" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
              <Shield className="w-3.5 h-3.5 text-white" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-serif font-bold text-stone-800">
            {t('mandate.title')}
          </h3>

          {/* Description */}
          <p className="text-sm text-stone-600 leading-relaxed max-w-md">
            {t('mandate.description')}
          </p>

          {/* Key Terms */}
          <div className="w-full max-w-sm space-y-3 text-left">
            <div className="flex items-start gap-3 text-sm text-stone-600">
              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{t('mandate.terms.commission')}</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-stone-600">
              <FileCheck className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{t('mandate.terms.traceability')}</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-stone-600">
              <FileText className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{t('mandate.terms.confidentiality')}</span>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3 text-left max-w-sm">
            <Checkbox
              id="mandate-terms"
              checked={accepted}
              onCheckedChange={(checked) => setAccepted(checked === true)}
              className="mt-0.5 border-amber-400 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
            />
            <label
              htmlFor="mandate-terms"
              className="text-sm text-stone-700 leading-snug cursor-pointer select-none"
            >
              {t('mandate.acceptTerms')}
            </label>
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={!accepted}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-base font-semibold mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('mandate.submit')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MandateBanner;
