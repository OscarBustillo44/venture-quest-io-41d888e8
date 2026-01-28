import { useTranslation } from 'react-i18next';
import { Target, Shield, TrendingUp, Users, Building2, Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Nosotros = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Shield,
      title: t('about.values.trust.title'),
      description: t('about.values.trust.description'),
    },
    {
      icon: Target,
      title: t('about.values.clarity.title'),
      description: t('about.values.clarity.description'),
    },
    {
      icon: TrendingUp,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
    },
  ];

  const team = [
    {
      icon: Building2,
      title: t('about.team.financial.title'),
      description: t('about.team.financial.description'),
    },
    {
      icon: Briefcase,
      title: t('about.team.legal.title'),
      description: t('about.team.legal.description'),
    },
    {
      icon: Users,
      title: t('about.team.advisory.title'),
      description: t('about.team.advisory.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="light" />
      
      {/* Hero Section */}
      <section className="bg-stone-900 text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            {t('about.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 leading-relaxed">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              {t('about.mission.title')}
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
              {t('about.mission.description')}
            </p>
          </div>
          
          <div className="bg-stone-50 border-l-4 border-amber-500 p-8 rounded-r-lg">
            <p className="text-xl md:text-2xl font-serif text-stone-800 italic leading-relaxed">
              "{t('about.mission.quote')}"
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-stone-200"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Expertise Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center p-8"
              >
                <div className="w-20 h-20 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <member.icon className="w-10 h-10 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  {member.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 md:py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
            {t('about.whyUs.title')}
          </h2>
          
          <div className="space-y-6 text-lg text-stone-300 leading-relaxed mb-12">
            <p>{t('about.whyUs.reason1')}</p>
            <p>{t('about.whyUs.reason2')}</p>
            <p>{t('about.whyUs.reason3')}</p>
          </div>
          
          <div className="border-t border-stone-700 pt-12">
            <p className="text-2xl md:text-3xl font-serif text-amber-400 italic">
              "{t('about.whyUs.closing')}"
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
