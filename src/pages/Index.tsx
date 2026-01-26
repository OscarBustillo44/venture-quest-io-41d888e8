import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BusinessCarousel from "@/components/BusinessCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar variant="dark" />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-serif">
              {t('home.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link to="/comprar">
                  {t('home.buyBusiness')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/vender">
                  {t('home.sellBusiness')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Carousel Section */}
      <section className="py-16 bg-gradient-to-br from-stone-800 to-stone-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center font-serif">
            {t('home.featuredBusinesses')}
          </h2>
          <p className="text-stone-400 text-center mb-8">
            {t('home.featuredSubtitle')}
          </p>
          <BusinessCarousel />
          <div className="text-center mt-8">
            <Button asChild variant="secondary" className="bg-amber-500 text-white hover:bg-amber-600">
              <Link to="/comprar">
                {t('home.viewAvailable')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
