import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-8">Política de Cookies</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita 
              un sitio web. Permiten que el sitio recuerde sus acciones y preferencias durante un período 
              de tiempo, para que no tenga que volver a introducirlas cada vez que visite el sitio o 
              navegue de una página a otra.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Tipos de cookies que utilizamos</h2>
            
            <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Cookies técnicas (necesarias)</h3>
            <p>
              Son esenciales para el funcionamiento del sitio web. Permiten la navegación y el uso de las 
              funciones básicas de la plataforma.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Cookies de análisis</h3>
            <p>
              Nos permiten analizar el uso que hacen los usuarios del sitio web para mejorar nuestros 
              servicios. Recogen información de forma anónima.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Cookies de preferencias</h3>
            <p>
              Permiten recordar sus preferencias de navegación, como el idioma o la región.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Gestión de cookies</h2>
            <p>
              Puede gestionar las cookies a través de la configuración de su navegador. A continuación, 
              le indicamos cómo hacerlo en los navegadores más comunes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Chrome: Configuración → Privacidad y seguridad → Cookies</li>
              <li>Firefox: Opciones → Privacidad y seguridad → Cookies</li>
              <li>Safari: Preferencias → Privacidad → Cookies</li>
              <li>Edge: Configuración → Cookies y permisos del sitio</li>
            </ul>
            <p className="mt-3">
              Tenga en cuenta que deshabilitar las cookies puede afectar al funcionamiento de algunas 
              funcionalidades del sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Cookies de terceros</h2>
            <p>
              En algunos casos, utilizamos servicios de terceros que pueden instalar sus propias cookies. 
              Estos servicios están sujetos a sus propias políticas de privacidad y cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Actualización de esta política</h2>
            <p>
              Esta política de cookies puede ser actualizada periódicamente. Le recomendamos revisarla 
              de forma regular para estar informado sobre cómo utilizamos las cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre nuestra política de cookies, puede contactar con nosotros en: 
              info@buscobusiness.com
            </p>
          </section>

          <p className="text-sm italic mt-8">
            Última actualización: Enero 2026
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;
