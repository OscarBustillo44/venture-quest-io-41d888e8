import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, Users, Calendar, TrendingUp, Phone, Mail, Building2, ChevronLeft, ChevronRight, Shield, Target, AlertTriangle, UtensilsCrossed, CreditCard, Info, Lock, FileText } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import GatedAccessBanner from '@/components/GatedAccessBanner';
import VerificationModal from '@/components/VerificationModal';
import {
  businessesData,
  labordaKPIs,
  labordaRevenueData,
  labordaEbitdaData,
  labordaProjectionData,
  labordaPortfolioData,
  labordaPnLData,
  labordaBalanceData,
  labordaValuationData,
  alpineKPIs,
  alpineRevenueData,
  alpineEbitdaData,
  alpineClientsData,
  alpinePortfolioData,
  infinitypayKPIs,
  infinitypayRevenueEbitdaData,
  infinitypayPortfolioData,
  confHosteleriaRevenueData,
  confHosteleriaEbitdaData,
  confHosteleriaProjectionData,
  confHosteleriaPortfolioData,
  confHosteleriaPnLData,
  confHosteleriaBalanceData,
  confHosteleriaValuationData,
  restaurantCentroRevenueData,
  restaurantCentroEbitdaData,
  restaurantCentroProjectionData,
  restaurantCentroPortfolioData,
  restaurantCentroPnLData,
  restaurantCentroBalanceData,
  restaurantCentroValuationData,
} from '@/data/businesses';

const NegocioDetalle = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { user } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [verificationOpen, setVerificationOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacyAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Check if user already verified this business
  useEffect(() => {
    if (!user || !id) return;
    const checkAccess = async () => {
      const { data } = await supabase
        .from('business_verifications')
        .select('id')
        .eq('user_id', user.id)
        .eq('business_slug', id)
        .maybeSingle();
      if (data) setIsUnlocked(true);
    };
    checkAccess();
  }, [user, id]);

  const business = id ? businessesData[id] : null;

  if (!business) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-800 mb-4">{t('detail.businessNotFound')}</h1>
          <Link to="/comprar">
            <Button>{t('detail.backToList')}</Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % business.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + business.images.length) % business.images.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  // Get translated highlights array
  const highlights = t(business.highlightsKey, { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar variant="dark" />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/comprar" className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          {t('nav.backToList')}
        </Link>

        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
          <div>
            <Badge className="bg-amber-600 text-white mb-2">{t(business.sectorKey)}</Badge>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-2">
              {isUnlocked || !business.isConfidential ? t(business.titleKey) : t('detail.gated.anonymousTitle', { sector: t(business.sectorKey) })}
            </h1>
            <div className="flex items-center gap-2 text-stone-600">
              {isUnlocked || !business.isConfidential ? (
                <>
                  <MapPin className="w-4 h-4" />
                  {business.location}
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-stone-400" />
                  <span className="text-stone-400 italic">{t('detail.gated.hiddenLocation')}</span>
                </>
              )}
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-stone-500">{t('detail.salePrice')}</p>
            <p className="text-3xl md:text-4xl font-bold text-amber-600">{business.price}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Gallery & Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <Card className="overflow-hidden relative">
              {!isUnlocked && business.isConfidential && (
                <div className="absolute inset-0 z-10 bg-stone-800/60 backdrop-blur-md flex flex-col items-center justify-center text-white p-6">
                  <Lock className="w-10 h-10 text-amber-400 mb-3" />
                  <p className="text-sm text-stone-200 text-center">{t('detail.gated.hiddenLocation')}</p>
                </div>
              )}
              <div className="relative">
                <img
                  src={business.images[currentImageIndex]}
                  alt={`${isUnlocked || !business.isConfidential ? t(business.titleKey) : t('detail.gated.anonymousTitle', { sector: t(business.sectorKey) })} - ${currentImageIndex + 1}`}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                
                {business.images.length > 1 && (isUnlocked || !business.isConfidential) && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-stone-800" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-stone-800" />
                    </button>
                  </>
                )}

                {(isUnlocked || !business.isConfidential) && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {business.images.length}
                  </div>
                )}
              </div>

              {business.images.length > 1 && (isUnlocked || !business.isConfidential) && (
                <div className="flex gap-2 p-4 bg-stone-100">
                  {business.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-20 h-16 rounded overflow-hidden border-2 transition-colors ${
                        idx === currentImageIndex ? 'border-amber-500' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">{t('detail.businessDescription')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 leading-relaxed">{t(business.descriptionKey)}</p>
                
                <h3 className="font-semibold text-stone-800 mt-6 mb-4">{t('detail.keyHighlights')}</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {Array.isArray(highlights) && highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-stone-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gated Access Banner */}
            {!isUnlocked && business.isConfidential && (
              <GatedAccessBanner onRequestAccess={() => setVerificationOpen(true)} />
            )}

            {/* Post-Unlock Warning Banner */}
            {isUnlocked && business.isConfidential && (
              <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-800 leading-relaxed">
                  {t('detail.postUnlockWarning')}{' '}
                  <Link to="/aviso-legal" className="underline font-medium hover:text-amber-900">
                    {t('detail.postUnlockWarningLink')}
                  </Link>
                </p>
              </div>
            )}

            {/* La Borda KPIs */}
            {business.id === 'la-borda' && (
              <Card className="bg-gradient-to-r from-amber-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <UtensilsCrossed className="w-5 h-5 text-amber-700" />
                    {t('detail.keyIndicators')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {labordaKPIs.map((kpi, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-amber-200 text-center">
                        <div className="text-4xl font-bold text-amber-700 mb-3">{t(kpi.valueKey)}</div>
                        <p className="text-sm text-stone-600 leading-tight">{t(kpi.labelKey)}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Economic Summary - La Borda */}
            {business.id === 'la-borda' && (
              <Card className="border-2 border-amber-200 bg-gradient-to-br from-stone-50 to-amber-50/30">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-700" />
                    {t('detail.economicSummary.title')}
                  </CardTitle>
                  <p className="text-sm text-stone-500">{t('detail.economicSummary.subtitle')}</p>
                </CardHeader>
                <CardContent>
                  {/* Key metrics summary */}
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-amber-300">
                          <th className="text-left py-3 px-4 font-semibold text-stone-700">{t('detail.economicSummary.concept')}</th>
                          <th className="text-right py-3 px-4 font-semibold text-stone-700">{t('detail.economicSummary.value')}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200">
                        <tr className="hover:bg-amber-50/50">
                          <td className="py-3 px-4 text-stone-600">{t('detail.economicSummary.annualRevenue')}</td>
                          <td className="py-3 px-4 text-right font-semibold text-stone-800">217.760 €</td>
                        </tr>
                        <tr className="hover:bg-amber-50/50">
                          <td className="py-3 px-4 text-stone-600">{t('detail.economicSummary.operatingProfit')}</td>
                          <td className="py-3 px-4 text-right font-semibold text-stone-800">83.449 €</td>
                        </tr>
                        <tr className="hover:bg-amber-50/50">
                          <td className="py-3 px-4 text-stone-600">{t('detail.economicSummary.profitMargin')}</td>
                          <td className="py-3 px-4 text-right font-semibold text-amber-700">38,3%</td>
                        </tr>
                        <tr className="hover:bg-amber-50/50">
                          <td className="py-3 px-4 text-stone-600">{t('detail.pnl.netProfit')}</td>
                          <td className="py-3 px-4 text-right font-semibold text-stone-800">71.778 €</td>
                        </tr>
                        <tr className="hover:bg-amber-50/50 bg-amber-50/30">
                          <td className="py-3 px-4 text-stone-600 font-medium">{t('detail.economicSummary.askingPrice')}</td>
                          <td className="py-3 px-4 text-right font-bold text-amber-700 text-base">75.000 €</td>
                        </tr>
                        <tr className="hover:bg-amber-50/50">
                          <td className="py-3 px-4 text-stone-600">{t('detail.economicSummary.priceRevenueRatio')}</td>
                          <td className="py-3 px-4 text-right font-semibold text-stone-800">0,34x</td>
                        </tr>
                        <tr className="hover:bg-amber-50/50">
                          <td className="py-3 px-4 text-stone-600">{t('detail.economicSummary.priceEbitdaMultiple')}</td>
                          <td className="py-3 px-4 text-right font-semibold text-stone-800">0,90x</td>
                        </tr>
                        <tr className="hover:bg-amber-50/50">
                          <td className="py-3 px-4 text-stone-600">{t('detail.pnl.margeComercial')}</td>
                          <td className="py-3 px-4 text-right font-semibold text-stone-800">70,0%</td>
                        </tr>
                        <tr className="hover:bg-amber-50/50">
                          <td className="py-3 px-4 text-stone-600">{t('detail.economicSummary.employeesCount')}</td>
                          <td className="py-3 px-4 text-right font-semibold text-stone-800">2</td>
                        </tr>
                        <tr className="hover:bg-amber-50/50">
                          <td className="py-3 px-4 text-stone-600">{t('detail.economicSummary.businessAge')}</td>
                          <td className="py-3 px-4 text-right font-semibold text-stone-800">+45 años (est. 1790)</td>
                        </tr>
                        <tr className="hover:bg-amber-50/50">
                          <td className="py-3 px-4 text-stone-600">{t('detail.economicSummary.location')}</td>
                          <td className="py-3 px-4 text-right font-semibold text-stone-800">La Massana, Andorra</td>
                        </tr>
                        <tr className="hover:bg-amber-50/50">
                          <td className="py-3 px-4 text-stone-600">{t('detail.economicSummary.projectedGrowth')}</td>
                          <td className="py-3 px-4 text-right font-semibold text-stone-800">240k € / 86k € EBITDA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Full P&L Table */}
                  <h4 className="text-sm font-semibold text-stone-700 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                    {t('detail.pnl.title')}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b-2 border-stone-300 bg-stone-100">
                          <th className="text-left py-2 px-3 font-semibold text-stone-700">{'(€)'}</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n0</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+1</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+2</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+3</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+4</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {labordaPnLData.map((row) => {
                          const isHighlight = ['ebitda', 'ebit', 'netProfit', 'margeBrut'].includes(row.concept);
                          const fmt = (v: number) => v.toLocaleString('es-ES');
                          return (
                            <tr key={row.concept} className={isHighlight ? 'bg-amber-50/50 font-semibold' : 'hover:bg-stone-50'}>
                              <td className={`py-2 px-3 ${isHighlight ? 'text-stone-800' : 'text-stone-600'}`}>
                                {t(`detail.pnl.${row.concept}`)}
                                {row.pct && <span className="text-stone-400 ml-1">({row.pct})</span>}
                              </td>
                              <td className={`py-2 px-3 text-right ${row.n0 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n0)}</td>
                              <td className={`py-2 px-3 text-right ${row.n1 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n1)}</td>
                              <td className={`py-2 px-3 text-right ${row.n2 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n2)}</td>
                              <td className={`py-2 px-3 text-right ${row.n3 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n3)}</td>
                              <td className={`py-2 px-3 text-right ${row.n4 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n4)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Balance Sheet Table */}
                  <h4 className="text-sm font-semibold text-stone-700 mb-3 mt-8 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    {t('detail.balance.title')}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b-2 border-stone-300 bg-stone-100">
                          <th className="text-left py-2 px-3 font-semibold text-stone-700">{'(€)'}</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n0</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+1</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+2</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+3</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+4</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {labordaBalanceData.map((row) => {
                          const isHighlight = ['actiuTotal', 'nof', 'pnPassiuTotal'].includes(row.concept);
                          const fmt = (v: number) => v.toLocaleString('es-ES');
                          return (
                            <tr key={row.concept} className={isHighlight ? 'bg-amber-50/50 font-semibold' : 'hover:bg-stone-50'}>
                              <td className={`py-2 px-3 ${isHighlight ? 'text-stone-800' : 'text-stone-600'}`}>
                                {t(`detail.balance.${row.concept}`)}
                              </td>
                              <td className={`py-2 px-3 text-right ${row.n0 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n0)}</td>
                              <td className={`py-2 px-3 text-right ${row.n1 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n1)}</td>
                              <td className={`py-2 px-3 text-right ${row.n2 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n2)}</td>
                              <td className={`py-2 px-3 text-right ${row.n3 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n3)}</td>
                              <td className={`py-2 px-3 text-right ${row.n4 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n4)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Valuation Table */}
                  <h4 className="text-sm font-semibold text-stone-700 mb-3 mt-8 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                    {t('detail.valuation.title')}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b-2 border-stone-300 bg-stone-100">
                          <th className="text-left py-2 px-3 font-semibold text-stone-700">{t('detail.economicSummary.concept')}</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">{t('detail.economicSummary.value')}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {labordaValuationData.map((row) => {
                          const fmt = (v: number) => row.isRatio ? v.toFixed(2).replace('.', ',') : v.toLocaleString('es-ES');
                          return (
                            <tr key={row.concept} className={row.isHighlight ? 'bg-amber-50/50 font-bold' : 'hover:bg-stone-50'}>
                              <td className={`py-2 px-3 ${row.isHighlight ? 'text-stone-800' : 'text-stone-600'}`}>
                                {t(`detail.valuation.${row.concept}`)}
                              </td>
                              <td className={`py-2 px-3 text-right ${row.isNegative ? 'text-red-600' : ''} ${row.isHighlight ? 'text-stone-800' : ''}`}>
                                {row.isNegative ? `(${fmt(Math.abs(row.value))})` : row.isRatio ? `${fmt(row.value)}x` : fmt(row.value)}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-stone-400 mt-4 italic leading-relaxed">
                    {t('detail.economicSummary.note')}
                  </p>
                </CardContent>
              </Card>
            )}


            {business.id === 'alpine-security' && (
              <Card className="bg-gradient-to-r from-stone-100 to-stone-50">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-700" />
                    {t('detail.keyIndicators')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {alpineKPIs.map((kpi, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-stone-200 text-center">
                        <div className="text-4xl font-bold text-stone-500 mb-3">{t(kpi.valueKey)}</div>
                        <p className="text-sm text-stone-600 leading-tight">{t(kpi.labelKey)}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Financial Charts - La Borda specific */}
            {business.id === 'la-borda' && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-amber-600" />
                    {t('detail.revenueEvolution')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Revenue Evolution */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.revenue')} (k€)</h4>
                    <ResponsiveContainer width="100%" height={280}>
                      <AreaChart data={labordaRevenueData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                        <YAxis tick={{ fill: '#78716c' }} domain={[0, 400]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                          formatter={(value: number) => [`${value}k €`, t('detail.revenue')]}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="revenue" 
                          stroke="#d97706" 
                          fill="#fcd34d" 
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* EBITDA Evolution */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.ebitda')} (k€)</h4>
                    <ResponsiveContainer width="100%" height={280}>
                      <BarChart data={labordaEbitdaData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                        <YAxis tick={{ fill: '#78716c' }} domain={[0, 100]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                          formatter={(value: number) => [`${value}k €`, 'EBITDA']}
                        />
                        <Bar dataKey="ebitda" fill="#92400e" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#92400e', fontSize: 12 }} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Revenue vs EBITDA Projection */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.revenueProjection')} (k€)</h4>
                    <ResponsiveContainer width="100%" height={280}>
                      <BarChart data={labordaProjectionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                        <YAxis tick={{ fill: '#78716c' }} domain={[0, 450]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                        />
                        <Legend />
                        <Bar dataKey="revenue" name={t('detail.revenue')} fill="#d97706" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="ebitda" name="EBITDA" fill="#92400e" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Portfolio Distribution */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.portfolioDistribution')}</h4>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                      <ResponsiveContainer width={300} height={250}>
                        <PieChart>
                          <Pie
                            data={labordaPortfolioData.map(item => ({ ...item, name: t(item.nameKey) }))}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            dataKey="value"
                            label={({ name, value }) => `${name}; ${value}%`}
                          >
                            {labordaPortfolioData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="space-y-2 text-sm text-stone-600">
                        {labordaPortfolioData.map((item, idx) => (
                          <p key={idx}>• {item.value}% {t(item.nameKey)} ({item.amount} €)</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Financial Charts - Alpine Security specific */}
            {business.id === 'alpine-security' && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-amber-600" />
                    {t('detail.revenueProjection')} (2025-2029)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Revenue Projection */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.revenue')} (k€)</h4>
                    <ResponsiveContainer width="100%" height={280}>
                      <AreaChart data={alpineRevenueData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                        <YAxis tick={{ fill: '#78716c' }} domain={[0, 4500]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                          formatter={(value: number) => [`${value}k €`, t('detail.revenue')]}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="revenue" 
                          stroke="#2d6a2d" 
                          fill="#90EE90" 
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* EBITDA Projection */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.ebitda')} (k€)</h4>
                    <ResponsiveContainer width="100%" height={280}>
                      <BarChart data={alpineEbitdaData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                        <YAxis tick={{ fill: '#78716c' }} domain={[0, 1400]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                          formatter={(value: number) => [`${value}k €`, 'EBITDA']}
                        />
                        <Bar dataKey="ebitda" fill="#1e4d5c" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#1e4d5c', fontSize: 12 }} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* New Clients Projection */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.clientEvolution')} (k€)</h4>
                    <ResponsiveContainer width="100%" height={280}>
                      <BarChart data={alpineClientsData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                        <YAxis tick={{ fill: '#78716c' }} domain={[0, 3000]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                        />
                        <Legend />
                        <Bar dataKey="th" name="TH" stackId="a" fill="#1e4d5c" />
                        <Bar dataKey="cycon" name="CYCON/DFIR" stackId="a" fill="#b91c1c" />
                        <Bar dataKey="offensive" name="OFFENSIVE" stackId="a" fill="#84cc16" />
                        <Line type="monotone" dataKey="total" stroke="#1e3a5f" strokeWidth={2} name="Total" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Portfolio Distribution */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.portfolioDistribution')}</h4>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                      <ResponsiveContainer width={300} height={250}>
                        <PieChart>
                          <Pie
                            data={alpinePortfolioData.map(item => ({ ...item, name: t(item.nameKey) }))}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            dataKey="value"
                            label={({ name, value }) => `${name}; ${value}%`}
                          >
                            {alpinePortfolioData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="space-y-2 text-sm text-stone-600">
                        {alpinePortfolioData.map((item, idx) => (
                          <p key={idx}>• {item.value}% {t(item.nameKey)} ({item.amount} €)</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* InfinityPay KPIs */}
            {business.id === 'infinitypay' && (
              <Card className="bg-gradient-to-r from-blue-50 to-slate-50">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-blue-700" />
                    {t('detail.keyIndicators')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {infinitypayKPIs.map((kpi, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-blue-200 text-center">
                        <div className="text-4xl font-bold text-blue-700 mb-3">{t(kpi.valueKey)}</div>
                        <p className="text-sm text-stone-600 leading-tight">{t(kpi.labelKey)}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Financial Charts - InfinityPay specific */}
            {business.id === 'infinitypay' && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    {t('detail.revenueProjection')} (2023-2029)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Revenue vs EBITDA Projection */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.revenue')} vs EBITDA (k€)</h4>
                    <ResponsiveContainer width="100%" height={320}>
                      <BarChart data={infinitypayRevenueEbitdaData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                        <YAxis tick={{ fill: '#78716c' }} domain={[0, 500]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                          formatter={(value: number, name: string) => [`${value}k €`, name === 'ventas' ? t('detail.revenue') : 'EBITDA']}
                        />
                        <Legend formatter={(value) => value === 'ventas' ? t('detail.revenue') : 'EBITDA'} />
                        <Bar dataKey="ventas" name="ventas" fill="#1e4d7b" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#1e4d7b', fontSize: 10 }} />
                        <Bar dataKey="ebitda" name="ebitda" fill="#d97706" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#d97706', fontSize: 10 }} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Portfolio Distribution */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.portfolioDistribution')}</h4>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                      <ResponsiveContainer width={300} height={250}>
                        <PieChart>
                          <Pie
                            data={infinitypayPortfolioData.map(item => ({ ...item, name: t(item.nameKey) }))}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            dataKey="value"
                            label={({ value }) => `${value}%`}
                          >
                            {infinitypayPortfolioData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="space-y-2 text-sm text-stone-600">
                        {infinitypayPortfolioData.map((item, idx) => (
                          <p key={idx}>• {item.value}% {t(item.nameKey)} ({item.amount} €)</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Growth Targets */}
                  <div className="bg-gradient-to-r from-blue-50 to-slate-100 rounded-lg p-6">
                    <h4 className="text-sm font-medium text-stone-700 mb-4">{t('detail.targetRevenue')}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-xs text-stone-500 mb-1">{t('detail.revenue')}</p>
                        <p className="text-2xl font-bold text-stone-700">0,5 Mio €</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-stone-500 mb-1">{t('detail.targetRevenue')}</p>
                        <p className="text-2xl font-bold text-green-600">&gt;3 Mio €</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-stone-500 mb-1">{t('detail.ebitda')}</p>
                        <p className="text-2xl font-bold text-stone-700">0,2 Mio €</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-stone-500 mb-1">{t('detail.targetEbitda')}</p>
                        <p className="text-2xl font-bold text-green-600">1 Mio €</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Financial Charts - Confidencial Hostelería */}
            {business.id === 'confidencial-hosteleria' && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-amber-600" />
                    {t('detail.revenueProjection')} (n+1 → n+5)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Revenue Evolution */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.revenue')} (k€)</h4>
                    <ResponsiveContainer width="100%" height={280}>
                      <AreaChart data={confHosteleriaRevenueData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                        <YAxis tick={{ fill: '#78716c' }} domain={[0, 800]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                          formatter={(value: number) => [`${value}k €`, t('detail.revenue')]}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="revenue" 
                          stroke="#d97706" 
                          fill="#fcd34d" 
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* EBITDA Evolution */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.ebitda')} (k€)</h4>
                    <ResponsiveContainer width="100%" height={280}>
                      <BarChart data={confHosteleriaEbitdaData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                        <YAxis tick={{ fill: '#78716c' }} domain={[0, 200]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                          formatter={(value: number) => [`${value}k €`, 'EBITDA']}
                        />
                        <Bar dataKey="ebitda" fill="#92400e" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#92400e', fontSize: 12 }} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Revenue vs EBITDA Projection */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.revenueProjection')} (k€)</h4>
                    <ResponsiveContainer width="100%" height={280}>
                      <BarChart data={confHosteleriaProjectionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                        <YAxis tick={{ fill: '#78716c' }} domain={[0, 800]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                        />
                        <Legend />
                        <Bar dataKey="revenue" name={t('detail.revenue')} fill="#d97706" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="ebitda" name="EBITDA" fill="#92400e" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Portfolio Distribution - Ticket */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.portfolioDistribution')}</h4>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                      <ResponsiveContainer width={300} height={250}>
                        <PieChart>
                          <Pie
                            data={confHosteleriaPortfolioData.map(item => ({ ...item, name: t(item.nameKey) }))}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            dataKey="value"
                            label={({ name, value }) => `${name}; ${value}%`}
                          >
                            {confHosteleriaPortfolioData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="space-y-3">
                        {confHosteleriaPortfolioData.map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-sm text-stone-700">
                              {item.value}% {t(item.nameKey)} ({item.amount})
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Economic Summary - Confidencial Hostelería */}
            {business.id === 'confidencial-hosteleria' && (
              <Card className="border-2 border-amber-200 bg-gradient-to-br from-stone-50 to-amber-50/30">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-700" />
                    {t('detail.economicSummary.title')}
                  </CardTitle>
                  <p className="text-sm text-stone-500">{t('detail.economicSummary.subtitle')}</p>
                </CardHeader>
                <CardContent>
                  {/* P&L Table */}
                  <h4 className="text-sm font-semibold text-stone-700 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                    {t('detail.pnl.title')}
                  </h4>
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b-2 border-stone-300 bg-stone-100">
                          <th className="text-left py-2 px-3 font-semibold text-stone-700">{"('000€)"}</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+1</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+2</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+3</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+4</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+5</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {confHosteleriaPnLData.map((row) => {
                          const isHighlight = ['ebitda', 'ebit', 'ebt', 'netProfit', 'margeBrut'].includes(row.concept);
                          const fmt = (v: number) => v.toLocaleString('es-ES');
                          return (
                            <tr key={row.concept} className={isHighlight ? 'bg-amber-50/50 font-semibold' : 'hover:bg-stone-50'}>
                              <td className={`py-2 px-3 ${isHighlight ? 'text-stone-800' : 'text-stone-600'}`}>
                                {t(`detail.pnl.${row.concept}`)}
                                {row.pct && <span className="text-stone-400 ml-1">({row.pct})</span>}
                              </td>
                              <td className={`py-2 px-3 text-right ${row.n1 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n1)}</td>
                              <td className={`py-2 px-3 text-right ${row.n2 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n2)}</td>
                              <td className={`py-2 px-3 text-right ${row.n3 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n3)}</td>
                              <td className={`py-2 px-3 text-right ${row.n4 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n4)}</td>
                              <td className={`py-2 px-3 text-right ${row.n5 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n5)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Balance Sheet Table */}
                  <h4 className="text-sm font-semibold text-stone-700 mb-3 mt-8 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    {t('detail.balance.title')}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b-2 border-stone-300 bg-stone-100">
                          <th className="text-left py-2 px-3 font-semibold text-stone-700">{"('000€)"}</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+1</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+2</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+3</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+4</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+5</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {confHosteleriaBalanceData.map((row) => {
                          const isHighlight = ['actiuTotal', 'nof', 'pnPassiuTotal'].includes(row.concept);
                          const fmt = (v: number) => v.toLocaleString('es-ES');
                          return (
                            <tr key={row.concept} className={isHighlight ? 'bg-amber-50/50 font-semibold' : 'hover:bg-stone-50'}>
                              <td className={`py-2 px-3 ${isHighlight ? 'text-stone-800' : 'text-stone-600'}`}>
                                {t(`detail.balance.${row.concept}`)}
                              </td>
                              <td className={`py-2 px-3 text-right ${row.n1 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n1)}</td>
                              <td className={`py-2 px-3 text-right ${row.n2 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n2)}</td>
                              <td className={`py-2 px-3 text-right ${row.n3 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n3)}</td>
                              <td className={`py-2 px-3 text-right ${row.n4 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n4)}</td>
                              <td className={`py-2 px-3 text-right ${row.n5 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n5)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Valuation Table */}
                  <h4 className="text-sm font-semibold text-stone-700 mb-3 mt-8 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                    {t('detail.valuation.title')}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b-2 border-stone-300 bg-stone-100">
                          <th className="text-left py-2 px-3 font-semibold text-stone-700">{t('detail.economicSummary.concept')}</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">{t('detail.economicSummary.value')}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {confHosteleriaValuationData.map((row) => {
                          const fmt = (v: number) => row.isRatio ? v.toFixed(2).replace('.', ',') : v.toLocaleString('es-ES');
                          return (
                            <tr key={row.concept} className={row.isHighlight ? 'bg-amber-50/50 font-bold' : 'hover:bg-stone-50'}>
                              <td className={`py-2 px-3 ${row.isHighlight ? 'text-stone-800' : 'text-stone-600'}`}>
                                {t(`detail.valuation.${row.concept}`)}
                              </td>
                              <td className={`py-2 px-3 text-right ${row.isNegative ? 'text-red-600' : ''} ${row.isHighlight ? 'text-stone-800' : ''}`}>
                                {row.isNegative ? `(${fmt(Math.abs(row.value))})` : row.isRatio ? `${fmt(row.value)}x` : fmt(row.value)}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-stone-400 mt-4 italic leading-relaxed">
                    {t('detail.economicSummary.note')}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Financial Charts - Restaurant Centro del País */}
            {business.id === 'confidencial-restaurant-centro' && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-amber-600" />
                    {t('detail.revenueEvolution')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Revenue Evolution */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.revenue')} (k€)</h4>
                    <ResponsiveContainer width="100%" height={280}>
                      <AreaChart data={restaurantCentroRevenueData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                        <YAxis tick={{ fill: '#78716c' }} domain={[0, 800]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                          formatter={(value: number) => [`${value}k €`, t('detail.revenue')]}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="revenue" 
                          stroke="#d97706" 
                          fill="#fcd34d" 
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* EBITDA Evolution */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.ebitda')} (k€)</h4>
                    <ResponsiveContainer width="100%" height={280}>
                      <BarChart data={restaurantCentroEbitdaData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                        <YAxis tick={{ fill: '#78716c' }} domain={[0, 200]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                          formatter={(value: number) => [`${value}k €`, 'EBITDA']}
                        />
                        <Bar dataKey="ebitda" fill="#92400e" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#92400e', fontSize: 12 }} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Revenue vs EBITDA Projection */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.revenueProjection')} (k€)</h4>
                    <ResponsiveContainer width="100%" height={280}>
                      <BarChart data={restaurantCentroProjectionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <XAxis dataKey="year" tick={{ fill: '#78716c' }} />
                        <YAxis tick={{ fill: '#78716c' }} domain={[0, 800]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fafaf9', border: '1px solid #d6d3d1', borderRadius: '8px' }}
                        />
                        <Legend />
                        <Bar dataKey="revenue" name={t('detail.revenue')} fill="#d97706" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="ebitda" name="EBITDA" fill="#92400e" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Portfolio Distribution */}
                  <div>
                    <h4 className="text-sm font-medium text-stone-600 mb-4">{t('detail.portfolioDistribution')}</h4>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                      <ResponsiveContainer width={300} height={250}>
                        <PieChart>
                          <Pie
                            data={restaurantCentroPortfolioData.map(item => ({ ...item, name: t(item.nameKey) }))}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            dataKey="value"
                            label={({ name, value }) => `${name}; ${value}%`}
                          >
                            {restaurantCentroPortfolioData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="space-y-3">
                        {restaurantCentroPortfolioData.map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-sm text-stone-700">
                              {item.value}% {t(item.nameKey)} ({item.amount})
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Economic Summary - Restaurant Centro del País */}
            {business.id === 'confidencial-restaurant-centro' && (
              <Card className="border-2 border-amber-200 bg-gradient-to-br from-stone-50 to-amber-50/30">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-700" />
                    {t('detail.economicSummary.title')}
                  </CardTitle>
                  <p className="text-sm text-stone-500">{t('detail.economicSummary.subtitle')}</p>
                </CardHeader>
                <CardContent>
                  {/* P&L Table */}
                  <h4 className="text-sm font-semibold text-stone-700 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                    {t('detail.pnl.title')}
                  </h4>
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b-2 border-stone-300 bg-stone-100">
                          <th className="text-left py-2 px-3 font-semibold text-stone-700">{"('000€)"}</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+1</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+2</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+3</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+4</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+5</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {restaurantCentroPnLData.map((row) => {
                          const isHighlight = ['ebitda', 'ebit', 'ebt', 'netProfit', 'margeBrut'].includes(row.concept);
                          const fmt = (v: number) => v.toLocaleString('es-ES');
                          return (
                            <tr key={row.concept} className={isHighlight ? 'bg-amber-50/50 font-semibold' : 'hover:bg-stone-50'}>
                              <td className={`py-2 px-3 ${isHighlight ? 'text-stone-800' : 'text-stone-600'}`}>
                                {t(`detail.pnl.${row.concept}`)}
                                {row.pct && <span className="text-stone-400 ml-1">({row.pct})</span>}
                              </td>
                              <td className={`py-2 px-3 text-right ${row.n1 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n1)}</td>
                              <td className={`py-2 px-3 text-right ${row.n2 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n2)}</td>
                              <td className={`py-2 px-3 text-right ${row.n3 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n3)}</td>
                              <td className={`py-2 px-3 text-right ${row.n4 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n4)}</td>
                              <td className={`py-2 px-3 text-right ${row.n5 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n5)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Balance Sheet Table */}
                  <h4 className="text-sm font-semibold text-stone-700 mb-3 mt-8 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    {t('detail.balance.title')}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b-2 border-stone-300 bg-stone-100">
                          <th className="text-left py-2 px-3 font-semibold text-stone-700">{"('000€)"}</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+1</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+2</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+3</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+4</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">n+5</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {restaurantCentroBalanceData.map((row) => {
                          const isHighlight = ['actiuTotal', 'nof', 'pnPassiuTotal'].includes(row.concept);
                          const fmt = (v: number) => v.toLocaleString('es-ES');
                          return (
                            <tr key={row.concept} className={isHighlight ? 'bg-amber-50/50 font-semibold' : 'hover:bg-stone-50'}>
                              <td className={`py-2 px-3 ${isHighlight ? 'text-stone-800' : 'text-stone-600'}`}>
                                {t(`detail.balance.${row.concept}`)}
                              </td>
                              <td className={`py-2 px-3 text-right ${row.n1 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n1)}</td>
                              <td className={`py-2 px-3 text-right ${row.n2 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n2)}</td>
                              <td className={`py-2 px-3 text-right ${row.n3 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n3)}</td>
                              <td className={`py-2 px-3 text-right ${row.n4 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n4)}</td>
                              <td className={`py-2 px-3 text-right ${row.n5 < 0 ? 'text-red-600' : ''}`}>{fmt(row.n5)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Valuation Table */}
                  <h4 className="text-sm font-semibold text-stone-700 mb-3 mt-8 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                    {t('detail.valuation.title')}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b-2 border-stone-300 bg-stone-100">
                          <th className="text-left py-2 px-3 font-semibold text-stone-700">{t('detail.economicSummary.concept')}</th>
                          <th className="text-right py-2 px-3 font-semibold text-stone-700">{t('detail.economicSummary.value')}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {restaurantCentroValuationData.map((row) => {
                          const fmt = (v: number) => row.isRatio ? v.toFixed(2).replace('.', ',') : v.toLocaleString('es-ES');
                          return (
                            <tr key={row.concept} className={row.isHighlight ? 'bg-amber-50/50 font-bold' : 'hover:bg-stone-50'}>
                              <td className={`py-2 px-3 ${row.isHighlight ? 'text-stone-800' : 'text-stone-600'}`}>
                                {t(`detail.valuation.${row.concept}`)}
                              </td>
                              <td className={`py-2 px-3 text-right ${row.isNegative ? 'text-red-600' : ''} ${row.isHighlight ? 'text-stone-800' : ''}`}>
                                {row.isNegative ? `(${fmt(Math.abs(row.value))})` : row.isRatio ? `${fmt(row.value)}x` : fmt(row.value)}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-stone-400 mt-4 italic leading-relaxed">
                    {t('detail.economicSummary.note')}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Key Metrics & Contact */}
          <div className="space-y-6">
            {/* Key Metrics */}
            <Card className="bg-stone-800 text-white">
              <CardHeader>
                <CardTitle className="font-serif text-amber-400">{t('detail.financialSummary')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-stone-700">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-300">{t('detail.revenue')}</span>
                  </div>
                  <span className="font-semibold">{business.revenue}</span>
                </div>
                {business.targetRevenue && (
                  <div className="flex items-center justify-between py-3 border-b border-stone-700">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400">{t('detail.targetRevenue')}</span>
                    </div>
                    <span className="font-semibold text-amber-400">{business.targetRevenue}</span>
                  </div>
                )}
                <div className="flex items-center justify-between py-3 border-b border-stone-700">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-300">{t('detail.ebitda')}</span>
                  </div>
                  <span className="font-semibold">{business.ebitda}</span>
                </div>
                {business.targetEbitda && (
                  <div className="flex items-center justify-between py-3 border-b border-stone-700">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400">{t('detail.targetEbitda')}</span>
                    </div>
                    <span className="font-semibold text-amber-400">{business.targetEbitda}</span>
                  </div>
                )}
                <div className="flex items-center justify-between py-3 border-b border-stone-700">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-300">{t('detail.profitability')}</span>
                  </div>
                  <span className="font-semibold text-amber-400">{business.profitability}</span>
                </div>
                {business.id === 'la-borda' && (
                  <div className="flex items-center justify-between py-3 border-b border-stone-700">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400">{t('detail.targetProfitability')}</span>
                    </div>
                    <span className="font-semibold text-amber-400">{'>66%'}</span>
                  </div>
                )}
                {business.id === 'la-borda' && (
                  <div className="flex items-center justify-between py-3 border-b border-stone-700">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400">{t('detail.targetCompanyValue')}</span>
                    </div>
                    <span className="font-semibold text-amber-400">{'489k €'}</span>
                  </div>
                )}
                {business.percentForSale && (
                  <div className="flex items-center justify-between py-3 border-b border-stone-700">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                      <span className="text-stone-300">{t('detail.percentForSale')}</span>
                    </div>
                    <span className="font-semibold text-amber-300">{business.percentForSale}</span>
                  </div>
                )}
                <div className="flex items-center justify-between py-3 border-b border-stone-700">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-300">{t('detail.employees')}</span>
                  </div>
                  <span className="font-semibold">{business.employees}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-300">{t('detail.yearsOperating')}</span>
                  </div>
                  <span className="font-semibold">{business.yearsOperating}</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">{t('detail.contactForm')}</CardTitle>
                <p className="text-sm text-stone-500">
                  {t('detail.fillForm')}
                </p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-stone-800 mb-2">{t('detail.messageSent')}</h3>
                    <p className="text-stone-600 text-sm">
                      {t('detail.thankYou')}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">{t('detail.name')} *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t('detail.email')} *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">{t('detail.phone')}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">{t('detail.message')}</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t('detail.messagePlaceholder')}
                        rows={4}
                      />
                    </div>
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        checked={formData.privacyAccepted}
                        onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                        className="mt-1 accent-amber-600"
                        required
                      />
                      <Label htmlFor="privacy" className="text-xs text-stone-500 font-normal leading-relaxed cursor-pointer">
                        {t('forms.privacyConsent.text')}{' '}
                        <Link to="/privacidad" className="underline text-amber-600 hover:text-amber-700" target="_blank">
                          {t('forms.privacyConsent.link')}
                        </Link>
                      </Label>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-amber-600 hover:bg-amber-700"
                      disabled={isSubmitting || !formData.privacyAccepted}
                    >
                      {isSubmitting ? t('detail.sending') : t('detail.sendMessage')}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="py-6">
                <h3 className="font-semibold text-stone-800 mb-4">{t('footer.contact')}</h3>
                <div className="space-y-3">
                  <a href="tel:+376337670" className="flex items-center gap-3 text-stone-600 hover:text-amber-600 transition-colors">
                    <Phone className="w-5 h-5" />
                    +376 337 670
                  </a>
                  <a href="mailto:info@buscobusiness.com" className="flex items-center gap-3 text-stone-600 hover:text-amber-600 transition-colors">
                    <Mail className="w-5 h-5" />
                    info@buscobusiness.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-12 mb-8 p-6 bg-stone-100 rounded-xl border border-stone-200">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-amber-100 rounded-full">
              <Info className="w-5 h-5 text-amber-700" />
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-stone-800">{t('detail.disclaimer.title')}</h4>
              <ul className="text-sm text-stone-600 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <span><strong>{t('detail.disclaimer.indicative')}</strong> {t('detail.disclaimer.indicativeDesc')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <span><strong>{t('detail.disclaimer.structured')}</strong> {t('detail.disclaimer.structuredDesc')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <span><strong>{t('detail.disclaimer.dueDiligence')}</strong> {t('detail.disclaimer.dueDiligenceDesc')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <VerificationModal
        open={verificationOpen}
        onOpenChange={setVerificationOpen}
        onVerified={() => setIsUnlocked(true)}
        businessSlug={id || ''}
      />
      <Footer />
    </div>
  );
};

export default NegocioDetalle;
