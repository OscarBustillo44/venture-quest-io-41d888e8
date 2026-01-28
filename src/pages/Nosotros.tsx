import { useTranslation } from 'react-i18next';
import { Target, Shield, TrendingUp, Users, Building2, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

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
      <section className="bg-stone-900 text-white py-20 md:py-28 overflow-hidden">
        <motion.div 
          className="max-w-4xl mx-auto px-4 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            {t('about.hero.title')}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-stone-300 leading-relaxed"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('about.hero.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              {t('about.mission.title')}
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
              {t('about.mission.description')}
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-stone-50 border-l-4 border-amber-500 p-8 rounded-r-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scaleIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl font-serif text-stone-800 italic leading-relaxed">
              "{t('about.mission.quote')}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow duration-300"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team/Expertise Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="text-center p-8"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <member.icon className="w-10 h-10 text-amber-500" />
                </motion.div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  {member.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 md:py-24 bg-stone-900 text-white overflow-hidden">
        <motion.div 
          className="max-w-4xl mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold mb-8"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            {t('about.whyUs.title')}
          </motion.h2>
          
          <motion.div 
            className="space-y-6 text-lg text-stone-300 leading-relaxed mb-12"
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp} transition={{ duration: 0.5 }}>
              {t('about.whyUs.reason1')}
            </motion.p>
            <motion.p variants={fadeInUp} transition={{ duration: 0.5 }}>
              {t('about.whyUs.reason2')}
            </motion.p>
            <motion.p variants={fadeInUp} transition={{ duration: 0.5 }}>
              {t('about.whyUs.reason3')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="border-t border-stone-700 pt-12"
            variants={scaleIn}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-2xl md:text-3xl font-serif text-amber-400 italic">
              "{t('about.whyUs.closing')}"
            </p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
