import { useState } from 'react';
import { Lock, Shield, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface MandateBannerProps {
  onMandateSigned: () => void;
  businessSlug: string;
}

const MandateBanner = ({ onMandateSigned, businessSlug }: MandateBannerProps) => {
  const { t } = useTranslation();
  const [showContract, setShowContract] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    birthDate: '',
    nationality: '',
    docType: '',
    docNumber: '',
    address: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    companyRegNumber: '',
    investmentCapacity: '',
  });

  const [checks, setChecks] = useState({
    readFully: false,
    acceptClauses: false,
    acknowledgeHonoraires: false,
    acceptElectronicSignature: false,
  });

  const allChecked = checks.readFully && checks.acceptClauses && checks.acknowledgeHonoraires && checks.acceptElectronicSignature;
  const requiredFieldsFilled = form.fullName && form.birthDate && form.nationality && form.docType && form.docNumber && form.address && form.email && form.phone && form.investmentCapacity;
  const canSubmit = allChecked && requiredFieldsFilled;

  const handleSubmit = () => {
    if (!canSubmit) return;
    const signatureData = {
      ...form,
      checks,
      signedAt: new Date().toISOString(),
      businessSlug,
    };
    localStorage.setItem(`bb_mandate_${businessSlug}`, JSON.stringify(signatureData));
    onMandateSigned();
  };

  const updateForm = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const toggleCheck = (field: keyof typeof checks) => {
    setChecks(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const clauses = t('mandate.contract.clauses', { returnObjects: true }) as Array<{ title: string; body: string; items?: string[] }>;

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
          <p className="text-sm text-stone-600 leading-relaxed max-w-lg">
            {t('mandate.description')}
          </p>

          {/* Expand Contract Button */}
          <Button
            variant="outline"
            onClick={() => setShowContract(!showContract)}
            className="border-amber-400 text-amber-700 hover:bg-amber-50 gap-2"
          >
            <FileText className="w-4 h-4" />
            {t('mandate.viewContract')}
            {showContract ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>

          {showContract && (
            <div className="w-full max-w-2xl text-left space-y-8">

              {/* Contract Title */}
              <h4 className="text-base font-bold text-stone-800 text-center uppercase tracking-wide">
                {t('mandate.contract.title')}
              </h4>

              {/* Buyer Data Form */}
              <div className="bg-white border border-stone-200 rounded-lg p-5 space-y-4">
                <h5 className="font-semibold text-stone-800 text-sm uppercase tracking-wide">
                  {t('mandate.contract.buyerData')}
                </h5>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="m-fullName" className="text-xs text-stone-600">{t('mandate.contract.fields.fullName')} *</Label>
                    <Input id="m-fullName" value={form.fullName} onChange={e => updateForm('fullName', e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="m-birthDate" className="text-xs text-stone-600">{t('mandate.contract.fields.birthDate')} *</Label>
                    <Input id="m-birthDate" type="date" value={form.birthDate} onChange={e => updateForm('birthDate', e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="m-nationality" className="text-xs text-stone-600">{t('mandate.contract.fields.nationality')} *</Label>
                    <Input id="m-nationality" value={form.nationality} onChange={e => updateForm('nationality', e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-xs text-stone-600">{t('mandate.contract.fields.docType')} *</Label>
                    <Select value={form.docType} onValueChange={v => updateForm('docType', v)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="—" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dni">DNI</SelectItem>
                        <SelectItem value="passport">{t('mandate.contract.fields.passport')}</SelectItem>
                        <SelectItem value="residence">{t('mandate.contract.fields.residencePermit')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="m-docNumber" className="text-xs text-stone-600">{t('mandate.contract.fields.docNumber')} *</Label>
                    <Input id="m-docNumber" value={form.docNumber} onChange={e => updateForm('docNumber', e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="m-address" className="text-xs text-stone-600">{t('mandate.contract.fields.address')} *</Label>
                    <Input id="m-address" value={form.address} onChange={e => updateForm('address', e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="m-email" className="text-xs text-stone-600">{t('mandate.contract.fields.email')} *</Label>
                    <Input id="m-email" type="email" value={form.email} onChange={e => updateForm('email', e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="m-phone" className="text-xs text-stone-600">{t('mandate.contract.fields.phone')} *</Label>
                    <Input id="m-phone" type="tel" value={form.phone} onChange={e => updateForm('phone', e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="m-company" className="text-xs text-stone-600">{t('mandate.contract.fields.company')}</Label>
                    <Input id="m-company" value={form.company} onChange={e => updateForm('company', e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="m-position" className="text-xs text-stone-600">{t('mandate.contract.fields.position')}</Label>
                    <Input id="m-position" value={form.position} onChange={e => updateForm('position', e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="m-regNumber" className="text-xs text-stone-600">{t('mandate.contract.fields.companyRegNumber')}</Label>
                    <Input id="m-regNumber" value={form.companyRegNumber} onChange={e => updateForm('companyRegNumber', e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-xs text-stone-600">{t('mandate.contract.fields.investmentCapacity')} *</Label>
                    <Select value={form.investmentCapacity} onValueChange={v => updateForm('investmentCapacity', v)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="—" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<100k">{t('mandate.contract.fields.capacityLess100k')}</SelectItem>
                        <SelectItem value="100k-500k">{t('mandate.contract.fields.capacity100k500k')}</SelectItem>
                        <SelectItem value="500k-1M">{t('mandate.contract.fields.capacity500k1M')}</SelectItem>
                        <SelectItem value="1M-5M">{t('mandate.contract.fields.capacity1M5M')}</SelectItem>
                        <SelectItem value=">5M">{t('mandate.contract.fields.capacityMore5M')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Contract Clauses */}
              <div className="bg-white border border-stone-200 rounded-lg p-5 space-y-5 max-h-[500px] overflow-y-auto">
                {Array.isArray(clauses) && clauses.map((clause, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <h6 className="text-sm font-bold text-stone-800">{idx + 1}. {clause.title}</h6>
                    <p className="text-xs text-stone-600 leading-relaxed whitespace-pre-line">{clause.body}</p>
                    {clause.items && (
                      <ul className="text-xs text-stone-600 space-y-0.5 ml-4">
                        {clause.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-1.5">
                            <span className="text-amber-500 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Signature Checkboxes */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 space-y-4">
                <h5 className="font-semibold text-stone-800 text-sm uppercase tracking-wide">
                  {t('mandate.contract.electronicSignature')}
                </h5>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="check-read"
                      checked={checks.readFully}
                      onCheckedChange={() => toggleCheck('readFully')}
                      className="mt-0.5 border-amber-400 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
                    />
                    <label htmlFor="check-read" className="text-sm text-stone-700 leading-snug cursor-pointer select-none">
                      {t('mandate.contract.checks.readFully')}
                    </label>
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="check-clauses"
                      checked={checks.acceptClauses}
                      onCheckedChange={() => toggleCheck('acceptClauses')}
                      className="mt-0.5 border-amber-400 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
                    />
                    <label htmlFor="check-clauses" className="text-sm text-stone-700 leading-snug cursor-pointer select-none">
                      {t('mandate.contract.checks.acceptClauses')}
                    </label>
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="check-honoraires"
                      checked={checks.acknowledgeHonoraires}
                      onCheckedChange={() => toggleCheck('acknowledgeHonoraires')}
                      className="mt-0.5 border-amber-400 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
                    />
                    <label htmlFor="check-honoraires" className="text-sm text-stone-700 leading-snug cursor-pointer select-none">
                      {t('mandate.contract.checks.acknowledgeHonoraires')}
                    </label>
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="check-esign"
                      checked={checks.acceptElectronicSignature}
                      onCheckedChange={() => toggleCheck('acceptElectronicSignature')}
                      className="mt-0.5 border-amber-400 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
                    />
                    <label htmlFor="check-esign" className="text-sm text-stone-700 leading-snug cursor-pointer select-none">
                      {t('mandate.contract.checks.acceptElectronicSignature')}
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="text-center">
                <Button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-3 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t('mandate.submit')}
                </Button>
                {!canSubmit && (
                  <p className="text-xs text-stone-400 mt-2">{t('mandate.fillAllRequired')}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MandateBanner;
