import { Lock, Shield, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GatedAccessBanner = () => {
  const { t } = useTranslation();

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
            {t('detail.gated.title')}
          </h3>

          {/* Message */}
          <p className="text-sm text-stone-600 leading-relaxed max-w-md">
            {t('detail.gated.message')}
          </p>

          {/* What's hidden list */}
          <div className="w-full max-w-sm space-y-2 text-left">
            {(['companyName', 'brand', 'exactLocation', 'website', 'ownerIdentity', 'legalEntity'] as const).map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-stone-500">
                <Eye className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>{t(`detail.gated.hidden.${item}`)}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-base font-semibold mt-2">
            {t('detail.gated.cta')}
          </Button>

          <p className="text-xs text-stone-400">
            {t('detail.gated.terms')}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GatedAccessBanner;
