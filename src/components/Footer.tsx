import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Separator } from "@/components/ui/separator";
import bbLogoInverted from "@/assets/generic/buscobusiness-logo-inverted.png";
import { buildContactMailtoHref } from "@/lib/contact";


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
            <div className="flex items-center gap-3 mb-4">
              <img src={bbLogoInverted} alt="buscobusiness" className="h-10" />
              <h3 className="text-xl font-bold">buscobusiness.com</h3>
            </div>
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
                  href={buildContactMailtoHref()} 
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


        {/* Partner Cross-Link */}
        <div className="flex items-center justify-center gap-2 mb-8 py-4">
          <span className="text-sm text-primary-foreground/70">{t('footer.partnerLabel')}</span>
          <a
            href="https://icfobusiness.com?utm_source=buscobusiness&utm_medium=footer&utm_campaign=cross-link"
            className="text-sm font-semibold text-primary-foreground hover:text-primary-foreground/90 transition-colors underline underline-offset-2"
          >
            iCFObusiness
          </a>
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
