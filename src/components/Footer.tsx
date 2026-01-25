import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
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
              El marketplace donde empresas reales cambian de manos con transparencia y criterio.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/comprar" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Comprar un negocio
                </Link>
              </li>
              <li>
                <Link to="/vender" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Vender mi negocio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/aviso-legal" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm">
              <p className="text-primary-foreground/80">
                <a 
                  href="mailto:info@buscobusiness.com" 
                  className="hover:text-primary-foreground transition-colors"
                >
                  info@buscobusiness.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Disclaimer */}
        <div className="mb-8">
          <p className="text-xs text-primary-foreground/70 leading-relaxed max-w-4xl">
            <strong>Aviso importante:</strong> buscobusiness.com es una plataforma de anuncios (marketplace) que facilita 
            el contacto entre compradores y vendedores de negocios. No actuamos como intermediarios, asesores ni brokers 
            en las transacciones, salvo que se indique expresamente lo contrario en servicios específicos contratados. 
            Cada usuario es responsable de verificar la información publicada y de realizar las comprobaciones legales, 
            fiscales y financieras pertinentes antes de cualquier operación.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <p>© {currentYear} buscobusiness.com. Todos los derechos reservados.</p>
          <p>
            Diseñado para emprendedores y empresarios que buscan oportunidades reales.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
