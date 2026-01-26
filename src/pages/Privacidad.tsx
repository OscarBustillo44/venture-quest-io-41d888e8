import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacidad = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const content = {
    es: {
      title: "Política de Privacidad",
      sections: [
        {
          title: "1. Responsable del tratamiento",
          content: "El responsable del tratamiento de sus datos personales es buscobusiness.com. Puede contactar con nosotros en: info@buscobusiness.com"
        },
        {
          title: "2. Datos que recopilamos",
          content: "Recopilamos los siguientes tipos de datos:",
          list: [
            "Datos de identificación: nombre, apellidos, email, teléfono.",
            "Datos de navegación: dirección IP, tipo de navegador, páginas visitadas.",
            "Datos proporcionados voluntariamente: información incluida en formularios de contacto o registro."
          ]
        },
        {
          title: "3. Finalidad del tratamiento",
          content: "Utilizamos sus datos para:",
          list: [
            "Gestionar su cuenta y proporcionar nuestros servicios.",
            "Facilitar el contacto entre compradores y vendedores.",
            "Enviar comunicaciones relacionadas con el servicio.",
            "Mejorar nuestra plataforma mediante análisis de uso.",
            "Cumplir con obligaciones legales."
          ]
        },
        {
          title: "4. Base legal",
          content: "El tratamiento de sus datos se basa en: su consentimiento, la ejecución de un contrato, el cumplimiento de obligaciones legales, y/o nuestro interés legítimo en mejorar nuestros servicios."
        },
        {
          title: "5. Destinatarios de los datos",
          content: "Sus datos pueden ser compartidos con: proveedores de servicios tecnológicos que nos ayudan a operar la plataforma, autoridades competentes cuando sea legalmente requerido, y otros usuarios de la plataforma en el contexto de las transacciones."
        },
        {
          title: "6. Conservación de datos",
          content: "Conservamos sus datos durante el tiempo necesario para cumplir con las finalidades descritas y, posteriormente, durante los plazos legales aplicables."
        },
        {
          title: "7. Sus derechos",
          content: "Usted tiene derecho a:",
          list: [
            "Acceder a sus datos personales.",
            "Rectificar datos inexactos.",
            "Solicitar la supresión de sus datos.",
            "Oponerse al tratamiento.",
            "Solicitar la limitación del tratamiento.",
            "Portabilidad de los datos.",
            "Retirar su consentimiento en cualquier momento."
          ],
          extra: "Para ejercer estos derechos, contacte con nosotros en: info@buscobusiness.com"
        },
        {
          title: "8. Seguridad",
          content: "Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra acceso no autorizado, pérdida o destrucción."
        }
      ]
    },
    ca: {
      title: "Política de Privacitat",
      sections: [
        {
          title: "1. Responsable del tractament",
          content: "El responsable del tractament de les seves dades personals és buscobusiness.com. Pot contactar amb nosaltres a: info@buscobusiness.com"
        },
        {
          title: "2. Dades que recopilem",
          content: "Recopilem els següents tipus de dades:",
          list: [
            "Dades d'identificació: nom, cognoms, email, telèfon.",
            "Dades de navegació: adreça IP, tipus de navegador, pàgines visitades.",
            "Dades proporcionades voluntàriament: informació inclosa en formularis de contacte o registre."
          ]
        },
        {
          title: "3. Finalitat del tractament",
          content: "Utilitzem les seves dades per:",
          list: [
            "Gestionar el seu compte i proporcionar els nostres serveis.",
            "Facilitar el contacte entre compradors i venedors.",
            "Enviar comunicacions relacionades amb el servei.",
            "Millorar la nostra plataforma mitjançant anàlisi d'ús.",
            "Complir amb obligacions legals."
          ]
        },
        {
          title: "4. Base legal",
          content: "El tractament de les seves dades es basa en: el seu consentiment, l'execució d'un contracte, el compliment d'obligacions legals, i/o el nostre interès legítim en millorar els nostres serveis."
        },
        {
          title: "5. Destinataris de les dades",
          content: "Les seves dades poden ser compartides amb: proveïdors de serveis tecnològics que ens ajuden a operar la plataforma, autoritats competents quan sigui legalment requerit, i altres usuaris de la plataforma en el context de les transaccions."
        },
        {
          title: "6. Conservació de dades",
          content: "Conservem les seves dades durant el temps necessari per complir amb les finalitats descrites i, posteriorment, durant els terminis legals aplicables."
        },
        {
          title: "7. Els seus drets",
          content: "Vostè té dret a:",
          list: [
            "Accedir a les seves dades personals.",
            "Rectificar dades inexactes.",
            "Sol·licitar la supressió de les seves dades.",
            "Oposar-se al tractament.",
            "Sol·licitar la limitació del tractament.",
            "Portabilitat de les dades.",
            "Retirar el seu consentiment en qualsevol moment."
          ],
          extra: "Per exercir aquests drets, contacti amb nosaltres a: info@buscobusiness.com"
        },
        {
          title: "8. Seguretat",
          content: "Implementem mesures tècniques i organitzatives apropiades per protegir les seves dades personals contra accés no autoritzat, pèrdua o destrucció."
        }
      ]
    },
    fr: {
      title: "Politique de Confidentialité",
      sections: [
        {
          title: "1. Responsable du traitement",
          content: "Le responsable du traitement de vos données personnelles est buscobusiness.com. Vous pouvez nous contacter à : info@buscobusiness.com"
        },
        {
          title: "2. Données collectées",
          content: "Nous collectons les types de données suivants :",
          list: [
            "Données d'identification : nom, prénom, email, téléphone.",
            "Données de navigation : adresse IP, type de navigateur, pages visitées.",
            "Données fournies volontairement : informations incluses dans les formulaires de contact ou d'inscription."
          ]
        },
        {
          title: "3. Finalité du traitement",
          content: "Nous utilisons vos données pour :",
          list: [
            "Gérer votre compte et fournir nos services.",
            "Faciliter le contact entre acheteurs et vendeurs.",
            "Envoyer des communications liées au service.",
            "Améliorer notre plateforme par l'analyse de l'utilisation.",
            "Respecter les obligations légales."
          ]
        },
        {
          title: "4. Base légale",
          content: "Le traitement de vos données est basé sur : votre consentement, l'exécution d'un contrat, le respect des obligations légales, et/ou notre intérêt légitime à améliorer nos services."
        },
        {
          title: "5. Destinataires des données",
          content: "Vos données peuvent être partagées avec : des prestataires de services technologiques qui nous aident à exploiter la plateforme, les autorités compétentes lorsque la loi l'exige, et d'autres utilisateurs de la plateforme dans le contexte des transactions."
        },
        {
          title: "6. Conservation des données",
          content: "Nous conservons vos données pendant le temps nécessaire pour atteindre les finalités décrites et, par la suite, pendant les délais légaux applicables."
        },
        {
          title: "7. Vos droits",
          content: "Vous avez le droit de :",
          list: [
            "Accéder à vos données personnelles.",
            "Rectifier les données inexactes.",
            "Demander la suppression de vos données.",
            "Vous opposer au traitement.",
            "Demander la limitation du traitement.",
            "La portabilité des données.",
            "Retirer votre consentement à tout moment."
          ],
          extra: "Pour exercer ces droits, contactez-nous à : info@buscobusiness.com"
        },
        {
          title: "8. Sécurité",
          content: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte ou destruction."
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      sections: [
        {
          title: "1. Data controller",
          content: "The data controller for your personal data is buscobusiness.com. You can contact us at: info@buscobusiness.com"
        },
        {
          title: "2. Data we collect",
          content: "We collect the following types of data:",
          list: [
            "Identification data: name, surname, email, phone.",
            "Browsing data: IP address, browser type, pages visited.",
            "Voluntarily provided data: information included in contact or registration forms."
          ]
        },
        {
          title: "3. Purpose of processing",
          content: "We use your data to:",
          list: [
            "Manage your account and provide our services.",
            "Facilitate contact between buyers and sellers.",
            "Send service-related communications.",
            "Improve our platform through usage analysis.",
            "Comply with legal obligations."
          ]
        },
        {
          title: "4. Legal basis",
          content: "The processing of your data is based on: your consent, contract execution, compliance with legal obligations, and/or our legitimate interest in improving our services."
        },
        {
          title: "5. Data recipients",
          content: "Your data may be shared with: technology service providers who help us operate the platform, competent authorities when legally required, and other platform users in the context of transactions."
        },
        {
          title: "6. Data retention",
          content: "We retain your data for the time necessary to fulfill the described purposes and, subsequently, during applicable legal periods."
        },
        {
          title: "7. Your rights",
          content: "You have the right to:",
          list: [
            "Access your personal data.",
            "Rectify inaccurate data.",
            "Request deletion of your data.",
            "Object to processing.",
            "Request processing limitation.",
            "Data portability.",
            "Withdraw your consent at any time."
          ],
          extra: "To exercise these rights, contact us at: info@buscobusiness.com"
        },
        {
          title: "8. Security",
          content: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss or destruction."
        }
      ]
    }
  };

  const currentContent = content[lang as keyof typeof content] || content.es;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar variant="light" />

      {/* Content */}
      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t('nav.backToHome')}
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">{currentContent.title}</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          {currentContent.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xl font-semibold text-foreground mb-3">{section.title}</h2>
              <p>{section.content}</p>
              {section.list && (
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section.extra && <p className="mt-3">{section.extra}</p>}
            </section>
          ))}

          <p className="text-sm italic mt-8">
            {t('legal.lastUpdated')}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacidad;
