import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacidad = () => {
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
        <h1 className="text-3xl font-bold text-foreground mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Responsable del tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos personales recogidos a través de buscobusiness.com es:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Denominación social: [Nombre de la empresa]</li>
              <li>NIF/CIF: [Número de identificación fiscal]</li>
              <li>Dirección: [Dirección completa]</li>
              <li>Email de contacto: info@buscobusiness.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Datos personales que recogemos</h2>
            <p>
              Podemos recoger y tratar los siguientes tipos de datos personales:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Datos de identificación: nombre, apellidos, email, teléfono.</li>
              <li>Datos profesionales: empresa, cargo, sector de actividad.</li>
              <li>Datos de navegación: dirección IP, tipo de navegador, páginas visitadas.</li>
              <li>Datos proporcionados voluntariamente a través de formularios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Finalidad del tratamiento</h2>
            <p>
              Sus datos personales serán tratados con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Gestionar su registro como usuario de la plataforma.</li>
              <li>Facilitar el contacto entre compradores y vendedores.</li>
              <li>Enviar comunicaciones relacionadas con el servicio.</li>
              <li>Mejorar nuestros servicios y la experiencia de usuario.</li>
              <li>Cumplir con obligaciones legales aplicables.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Base legal del tratamiento</h2>
            <p>
              El tratamiento de sus datos se basa en:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Su consentimiento expreso para las finalidades indicadas.</li>
              <li>La ejecución de la relación contractual o precontractual.</li>
              <li>El cumplimiento de obligaciones legales.</li>
              <li>Nuestro interés legítimo en mejorar los servicios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Conservación de los datos</h2>
            <p>
              Conservaremos sus datos personales durante el tiempo necesario para cumplir con la finalidad 
              para la que fueron recogidos y para determinar las posibles responsabilidades que pudieran 
              derivarse de dicha finalidad y del tratamiento de los datos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Derechos del usuario</h2>
            <p>
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Acceder a sus datos personales.</li>
              <li>Solicitar la rectificación de datos inexactos.</li>
              <li>Solicitar la supresión de sus datos.</li>
              <li>Oponerse al tratamiento de sus datos.</li>
              <li>Solicitar la limitación del tratamiento.</li>
              <li>Solicitar la portabilidad de sus datos.</li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, puede contactar con nosotros en: info@buscobusiness.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Seguridad de los datos</h2>
            <p>
              Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad 
              de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
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

export default Privacidad;
