import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">buscobusiness.com</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link to="/comprar" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('footer.buyBusiness')}
                </Link>
              </li>
              <li>
                <Link to="/vender" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('footer.sellBusiness')}
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('footer.aboutUs')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/aviso-legal" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('footer.legalNotice')}
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t('footer.cookiesPolicy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-2 text-sm">
              <p className="text-primary-foreground/80">
                <a 
                  href="mailto:info@buscobusiness.com" 
                  className="hover:text-primary-foreground transition-colors"
                >
                  info@buscobusiness.com
                </a>
              </p>
              <p className="text-primary-foreground/80">
                <a 
                  href="tel:+376337670" 
                  className="hover:text-primary-foreground transition-colors"
                >
                  +376 337 670
                </a>
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Disclaimer */}
        <div className="mb-8">
          <p className="text-xs text-primary-foreground/70 leading-relaxed max-w-4xl">
            <strong>{t('footer.disclaimer')}</strong> {t('footer.disclaimerText')}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <p>© {currentYear} buscobusiness.com. {t('footer.allRightsReserved')}</p>
          <p>
            {t('footer.designedFor')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
