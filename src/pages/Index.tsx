import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Users, FileText, BarChart3, Target, Briefcase } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar variant="dark" />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-stone-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              {t('home.hero.headline')}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-stone-300 mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {t('home.hero.subheadline')}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center font-serif"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              {t('home.problem.title')}
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              <motion.div 
                className="bg-white p-8 rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={fadeInLeft}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{t('home.problem.sellerTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('home.problem.sellerDesc')}
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={fadeInRight}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{t('home.problem.buyerTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('home.problem.buyerDesc')}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Sellers Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInLeft}
                transition={{ duration: 0.6 }}
              >
                <p className="text-amber-600 font-medium mb-3 uppercase tracking-wide text-sm">
                  {t('home.sellers.label')}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-serif">
                  {t('home.sellers.title')}
                </h2>
                <motion.ul 
                  className="space-y-4 mb-8"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.li className="flex items-start gap-3" variants={fadeInUp} transition={{ duration: 0.4 }}>
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('home.sellers.point1')}</span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp} transition={{ duration: 0.4 }}>
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('home.sellers.point2')}</span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp} transition={{ duration: 0.4 }}>
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('home.sellers.point3')}</span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp} transition={{ duration: 0.4 }}>
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('home.sellers.point4')}</span>
                  </motion.li>
                </motion.ul>
                <motion.p 
                  className="text-lg font-medium text-foreground mb-6 italic border-l-4 border-amber-500 pl-4"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  "{t('home.sellers.keyPhrase')}"
                </motion.p>
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link to="/vender">
                    {t('home.sellers.cta')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div 
                className="bg-stone-100 rounded-lg p-8 flex items-center justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInRight}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="grid grid-cols-2 gap-4 w-full max-w-sm"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300"
                    variants={scaleIn}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FileText className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">{t('home.sellers.icon1')}</p>
                  </motion.div>
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300"
                    variants={scaleIn}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BarChart3 className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">{t('home.sellers.icon2')}</p>
                  </motion.div>
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300"
                    variants={scaleIn}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Target className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">{t('home.sellers.icon3')}</p>
                  </motion.div>
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300"
                    variants={scaleIn}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Briefcase className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">{t('home.sellers.icon4')}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* For Buyers Section */}
      <section className="py-16 md:py-24 bg-stone-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="order-2 lg:order-1 bg-stone-800 rounded-lg p-8 flex items-center justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInLeft}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="space-y-4 w-full max-w-sm"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-stone-700 p-4 rounded-lg flex items-center gap-4"
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm text-stone-300">{t('home.buyers.feature1')}</p>
                  </motion.div>
                  <motion.div 
                    className="bg-stone-700 p-4 rounded-lg flex items-center gap-4"
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm text-stone-300">{t('home.buyers.feature2')}</p>
                  </motion.div>
                  <motion.div 
                    className="bg-stone-700 p-4 rounded-lg flex items-center gap-4"
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm text-stone-300">{t('home.buyers.feature3')}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="order-1 lg:order-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInRight}
                transition={{ duration: 0.6 }}
              >
                <p className="text-amber-500 font-medium mb-3 uppercase tracking-wide text-sm">
                  {t('home.buyers.label')}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif">
                  {t('home.buyers.title')}
                </h2>
                <motion.ul 
                  className="space-y-4 mb-8"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.li className="flex items-start gap-3" variants={fadeInUp} transition={{ duration: 0.4 }}>
                    <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-300">{t('home.buyers.point1')}</span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp} transition={{ duration: 0.4 }}>
                    <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-300">{t('home.buyers.point2')}</span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp} transition={{ duration: 0.4 }}>
                    <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-300">{t('home.buyers.point3')}</span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={fadeInUp} transition={{ duration: 0.4 }}>
                    <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-300">{t('home.buyers.point4')}</span>
                  </motion.li>
                </motion.ul>
                <motion.p 
                  className="text-lg font-medium mb-6 italic border-l-4 border-amber-500 pl-4"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  "{t('home.buyers.keyPhrase')}"
                </motion.p>
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link to="/comprar">
                    {t('home.buyers.cta')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-serif"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              {t('home.difference.title')}
            </motion.h2>
            <motion.p 
              className="text-muted-foreground mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t('home.difference.subtitle')}
            </motion.p>
            <motion.div 
              className="grid md:grid-cols-4 gap-6 mb-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div 
                className="p-6"
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Users className="w-7 h-7 text-amber-600" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2">{t('home.difference.pillar1Title')}</h3>
                <p className="text-sm text-muted-foreground">{t('home.difference.pillar1Desc')}</p>
              </motion.div>
              <motion.div 
                className="p-6"
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BarChart3 className="w-7 h-7 text-amber-600" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2">{t('home.difference.pillar2Title')}</h3>
                <p className="text-sm text-muted-foreground">{t('home.difference.pillar2Desc')}</p>
              </motion.div>
              <motion.div 
                className="p-6"
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FileText className="w-7 h-7 text-amber-600" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2">{t('home.difference.pillar3Title')}</h3>
                <p className="text-sm text-muted-foreground">{t('home.difference.pillar3Desc')}</p>
              </motion.div>
              <motion.div 
                className="p-6"
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Shield className="w-7 h-7 text-amber-600" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2">{t('home.difference.pillar4Title')}</h3>
                <p className="text-sm text-muted-foreground">{t('home.difference.pillar4Desc')}</p>
              </motion.div>
            </motion.div>
            <motion.div 
              className="bg-stone-50 rounded-lg p-8 max-w-2xl mx-auto"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                {t('home.difference.statement1')}
                <br />
                <span className="text-amber-600">{t('home.difference.statement2')}</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final Statement Section */}
      <section className="py-20 md:py-28 bg-stone-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-2xl md:text-4xl font-bold mb-6 font-serif leading-tight"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              {t('home.final.statement')}
            </motion.h2>
            <motion.p 
              className="text-stone-400 mb-10 text-lg"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {t('home.final.subtitle')}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
