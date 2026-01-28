import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Users, FileText, BarChart3, Target, Briefcase } from "lucide-react";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar variant="dark" />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-stone-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight">
              {t('home.hero.headline')}
            </h1>
            <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t('home.hero.subheadline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-base">
                <Link to="/vender">
                  {t('home.hero.ctaSell')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-stone-500 text-white hover:bg-stone-800 px-8 py-6 text-base">
                <Link to="/comprar">
                  {t('home.hero.ctaBuy')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center font-serif">
              {t('home.problem.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg border border-stone-200 shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{t('home.problem.sellerTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('home.problem.sellerDesc')}
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-stone-200 shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{t('home.problem.buyerTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('home.problem.buyerDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Sellers Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-amber-600 font-medium mb-3 uppercase tracking-wide text-sm">
                  {t('home.sellers.label')}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-serif">
                  {t('home.sellers.title')}
                </h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('home.sellers.point1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('home.sellers.point2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('home.sellers.point3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('home.sellers.point4')}</span>
                  </li>
                </ul>
                <p className="text-lg font-medium text-foreground mb-6 italic border-l-4 border-amber-500 pl-4">
                  "{t('home.sellers.keyPhrase')}"
                </p>
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link to="/vender">
                    {t('home.sellers.cta')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-stone-100 rounded-lg p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <FileText className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">{t('home.sellers.icon1')}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <BarChart3 className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">{t('home.sellers.icon2')}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <Target className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">{t('home.sellers.icon3')}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <Briefcase className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">{t('home.sellers.icon4')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Buyers Section */}
      <section className="py-16 md:py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-stone-800 rounded-lg p-8 flex items-center justify-center">
                <div className="space-y-4 w-full max-w-sm">
                  <div className="bg-stone-700 p-4 rounded-lg flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm text-stone-300">{t('home.buyers.feature1')}</p>
                  </div>
                  <div className="bg-stone-700 p-4 rounded-lg flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm text-stone-300">{t('home.buyers.feature2')}</p>
                  </div>
                  <div className="bg-stone-700 p-4 rounded-lg flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm text-stone-300">{t('home.buyers.feature3')}</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-amber-500 font-medium mb-3 uppercase tracking-wide text-sm">
                  {t('home.buyers.label')}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif">
                  {t('home.buyers.title')}
                </h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-300">{t('home.buyers.point1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-300">{t('home.buyers.point2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-300">{t('home.buyers.point3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-300">{t('home.buyers.point4')}</span>
                  </li>
                </ul>
                <p className="text-lg font-medium mb-6 italic border-l-4 border-amber-500 pl-4">
                  "{t('home.buyers.keyPhrase')}"
                </p>
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link to="/comprar">
                    {t('home.buyers.cta')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-serif">
              {t('home.difference.title')}
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t('home.difference.subtitle')}
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('home.difference.pillar1Title')}</h3>
                <p className="text-sm text-muted-foreground">{t('home.difference.pillar1Desc')}</p>
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('home.difference.pillar2Title')}</h3>
                <p className="text-sm text-muted-foreground">{t('home.difference.pillar2Desc')}</p>
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('home.difference.pillar3Title')}</h3>
                <p className="text-sm text-muted-foreground">{t('home.difference.pillar3Desc')}</p>
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('home.difference.pillar4Title')}</h3>
                <p className="text-sm text-muted-foreground">{t('home.difference.pillar4Desc')}</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                {t('home.difference.statement1')}
                <br />
                <span className="text-amber-600">{t('home.difference.statement2')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Statement Section */}
      <section className="py-20 md:py-28 bg-stone-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-serif leading-tight">
              {t('home.final.statement')}
            </h2>
            <p className="text-stone-400 mb-10 text-lg">
              {t('home.final.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 px-8 py-6 text-base">
                <Link to="/vender">
                  {t('home.hero.ctaSell')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-stone-500 text-white hover:bg-stone-800 px-8 py-6 text-base">
                <Link to="/comprar">
                  {t('home.hero.ctaBuy')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
