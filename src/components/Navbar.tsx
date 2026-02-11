import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu } from 'lucide-react';
import bbLogo from '@/assets/generic/buscobusiness-logo.png';
import LanguageSelector from './LanguageSelector';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

interface NavbarProps {
  variant?: 'dark' | 'light';
}

const Navbar = ({ variant = 'dark' }: NavbarProps) => {
  const { t } = useTranslation();

  const isDark = variant === 'dark';
  const bgClass = isDark ? 'bg-stone-800' : 'bg-white border-b border-border';
  const textClass = isDark ? 'text-white' : 'text-foreground';
  const linkHoverClass = isDark ? 'hover:text-amber-400' : 'hover:text-amber-600';

  return (
    <header className={`${bgClass} ${textClass} py-4`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-2xl font-serif font-bold">
          <img src={bbLogo} alt="buscobusiness" className="h-10" />
          <span>busco<span className="text-amber-500">business</span>.com</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/comprar" className={`${linkHoverClass} transition-colors`}>
            {t('nav.buy')}
          </Link>
          <Link to="/vender" className={`${linkHoverClass} transition-colors`}>
            {t('nav.sell')}
          </Link>
          <Link to="/nosotros" className={`${linkHoverClass} transition-colors`}>
            {t('nav.about')}
          </Link>
          <LanguageSelector />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSelector />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={textClass}>
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/comprar" className="text-lg font-medium hover:text-amber-600 transition-colors">
                  {t('nav.buy')}
                </Link>
                <Link to="/vender" className="text-lg font-medium hover:text-amber-600 transition-colors">
                  {t('nav.sell')}
                </Link>
                <Link to="/nosotros" className="text-lg font-medium hover:text-amber-600 transition-colors">
                  {t('nav.about')}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
