import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AvisoLegal = () => {
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
        <h1 className="text-3xl font-bold text-foreground mb-8">Aviso Legal</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Identificación del titular</h2>
            <p>
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información 
              y de Comercio Electrónico, se informa que el presente sitio web, buscobusiness.com, es titularidad de:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Denominación social: [Nombre de la empresa]</li>
              <li>NIF/CIF: [Número de identificación fiscal]</li>
              <li>Domicilio social: [Dirección completa]</li>
              <li>Email de contacto: info@buscobusiness.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Objeto del sitio web</h2>
            <p>
              buscobusiness.com es un marketplace que facilita el encuentro entre compradores y vendedores de 
              negocios en funcionamiento. Nuestra plataforma permite publicar anuncios de venta de empresas y 
              buscar oportunidades de adquisición.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Naturaleza del servicio</h2>
            <p>
              buscobusiness.com actúa exclusivamente como plataforma de anuncios (marketplace). No intervenimos 
              como intermediarios, brokers, asesores financieros o jurídicos en las transacciones entre usuarios, 
              salvo que se contrate expresamente un servicio adicional que así lo especifique.
            </p>
            <p className="mt-3">
              Los usuarios son los únicos responsables de la veracidad de la información que publican, así como 
              de realizar las verificaciones y comprobaciones pertinentes antes de cualquier operación de compra 
              o venta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, iconos, software y 
              cualquier otro material, están protegidos por derechos de propiedad intelectual e industrial. 
              Queda prohibida su reproducción, distribución o modificación sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Exclusión de responsabilidad</h2>
            <p>
              buscobusiness.com no se responsabiliza de:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>La veracidad, exactitud o actualidad de los anuncios publicados por terceros.</li>
              <li>Los daños o perjuicios derivados de las transacciones entre usuarios.</li>
              <li>Los contenidos de sitios web externos enlazados desde nuestra plataforma.</li>
              <li>Interrupciones del servicio por causas técnicas o de fuerza mayor.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Legislación aplicable y jurisdicción</h2>
            <p>
              El presente aviso legal se rige por la legislación española. Para cualquier controversia que 
              pudiera derivarse del acceso o uso de este sitio web, las partes se someten a los Juzgados y 
              Tribunales del domicilio del usuario, siempre que la normativa aplicable así lo permita.
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

export default AvisoLegal;
