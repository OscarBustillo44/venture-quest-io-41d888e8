import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Cookies = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const content = {
    es: {
      title: "Política de Cookies",
      sections: [
        {
          title: "1. ¿Qué son las cookies?",
          content: "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten que el sitio recuerde sus acciones y preferencias durante un período de tiempo, para que no tenga que volver a introducirlas cada vez que visite el sitio o navegue de una página a otra."
        },
        {
          title: "2. Tipos de cookies que utilizamos",
          subsections: [
            {
              title: "Cookies técnicas (necesarias)",
              content: "Son esenciales para el funcionamiento del sitio web. Permiten la navegación y el uso de las funciones básicas de la plataforma."
            },
            {
              title: "Cookies de análisis",
              content: "Nos permiten analizar el uso que hacen los usuarios del sitio web para mejorar nuestros servicios. Recogen información de forma anónima."
            },
            {
              title: "Cookies de preferencias",
              content: "Permiten recordar sus preferencias de navegación, como el idioma o la región."
            }
          ]
        },
        {
          title: "3. Gestión de cookies",
          content: "Puede gestionar las cookies a través de la configuración de su navegador. A continuación, le indicamos cómo hacerlo en los navegadores más comunes:",
          list: [
            "Chrome: Configuración → Privacidad y seguridad → Cookies",
            "Firefox: Opciones → Privacidad y seguridad → Cookies",
            "Safari: Preferencias → Privacidad → Cookies",
            "Edge: Configuración → Cookies y permisos del sitio"
          ],
          extra: "Tenga en cuenta que deshabilitar las cookies puede afectar al funcionamiento de algunas funcionalidades del sitio web."
        },
        {
          title: "4. Cookies de terceros",
          content: "En algunos casos, utilizamos servicios de terceros que pueden instalar sus propias cookies. Estos servicios están sujetos a sus propias políticas de privacidad y cookies."
        },
        {
          title: "5. Actualización de esta política",
          content: "Esta política de cookies puede ser actualizada periódicamente. Le recomendamos revisarla de forma regular para estar informado sobre cómo utilizamos las cookies."
        },
        {
          title: "6. Contacto",
          content: "Si tiene alguna pregunta sobre nuestra política de cookies, puede contactar con nosotros en: info@buscobusiness.com"
        }
      ]
    },
    ca: {
      title: "Política de Cookies",
      sections: [
        {
          title: "1. Què són les cookies?",
          content: "Les cookies són petits arxius de text que s'emmagatzemen al seu dispositiu quan visita un lloc web. Permeten que el lloc recordi les seves accions i preferències durant un període de temps, perquè no hagi de tornar a introduir-les cada vegada que visiti el lloc o navegui d'una pàgina a una altra."
        },
        {
          title: "2. Tipus de cookies que utilitzem",
          subsections: [
            {
              title: "Cookies tècniques (necessàries)",
              content: "Són essencials per al funcionament del lloc web. Permeten la navegació i l'ús de les funcions bàsiques de la plataforma."
            },
            {
              title: "Cookies d'anàlisi",
              content: "Ens permeten analitzar l'ús que fan els usuaris del lloc web per millorar els nostres serveis. Recullen informació de forma anònima."
            },
            {
              title: "Cookies de preferències",
              content: "Permeten recordar les seves preferències de navegació, com l'idioma o la regió."
            }
          ]
        },
        {
          title: "3. Gestió de cookies",
          content: "Pot gestionar les cookies a través de la configuració del seu navegador. A continuació, li indiquem com fer-ho en els navegadors més comuns:",
          list: [
            "Chrome: Configuració → Privacitat i seguretat → Cookies",
            "Firefox: Opcions → Privacitat i seguretat → Cookies",
            "Safari: Preferències → Privacitat → Cookies",
            "Edge: Configuració → Cookies i permisos del lloc"
          ],
          extra: "Tingui en compte que deshabilitar les cookies pot afectar el funcionament d'algunes funcionalitats del lloc web."
        },
        {
          title: "4. Cookies de tercers",
          content: "En alguns casos, utilitzem serveis de tercers que poden instal·lar les seves pròpies cookies. Aquests serveis estan subjectes a les seves pròpies polítiques de privacitat i cookies."
        },
        {
          title: "5. Actualització d'aquesta política",
          content: "Aquesta política de cookies pot ser actualitzada periòdicament. Li recomanem revisar-la de forma regular per estar informat sobre com utilitzem les cookies."
        },
        {
          title: "6. Contacte",
          content: "Si té alguna pregunta sobre la nostra política de cookies, pot contactar amb nosaltres a: info@buscobusiness.com"
        }
      ]
    },
    fr: {
      title: "Politique de Cookies",
      sections: [
        {
          title: "1. Que sont les cookies ?",
          content: "Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site web. Ils permettent au site de mémoriser vos actions et préférences pendant une période donnée, afin que vous n'ayez pas à les saisir à nouveau à chaque visite ou navigation de page en page."
        },
        {
          title: "2. Types de cookies que nous utilisons",
          subsections: [
            {
              title: "Cookies techniques (nécessaires)",
              content: "Ils sont essentiels au fonctionnement du site web. Ils permettent la navigation et l'utilisation des fonctions de base de la plateforme."
            },
            {
              title: "Cookies d'analyse",
              content: "Ils nous permettent d'analyser l'utilisation du site par les utilisateurs pour améliorer nos services. Ils collectent des informations de manière anonyme."
            },
            {
              title: "Cookies de préférences",
              content: "Ils permettent de mémoriser vos préférences de navigation, comme la langue ou la région."
            }
          ]
        },
        {
          title: "3. Gestion des cookies",
          content: "Vous pouvez gérer les cookies via les paramètres de votre navigateur. Voici comment le faire dans les navigateurs les plus courants :",
          list: [
            "Chrome : Paramètres → Confidentialité et sécurité → Cookies",
            "Firefox : Options → Confidentialité et sécurité → Cookies",
            "Safari : Préférences → Confidentialité → Cookies",
            "Edge : Paramètres → Cookies et autorisations du site"
          ],
          extra: "Notez que désactiver les cookies peut affecter le fonctionnement de certaines fonctionnalités du site web."
        },
        {
          title: "4. Cookies tiers",
          content: "Dans certains cas, nous utilisons des services tiers qui peuvent installer leurs propres cookies. Ces services sont soumis à leurs propres politiques de confidentialité et de cookies."
        },
        {
          title: "5. Mise à jour de cette politique",
          content: "Cette politique de cookies peut être mise à jour périodiquement. Nous vous recommandons de la consulter régulièrement pour être informé de notre utilisation des cookies."
        },
        {
          title: "6. Contact",
          content: "Si vous avez des questions sur notre politique de cookies, vous pouvez nous contacter à : info@buscobusiness.com"
        }
      ]
    },
    en: {
      title: "Cookies Policy",
      sections: [
        {
          title: "1. What are cookies?",
          content: "Cookies are small text files stored on your device when you visit a website. They allow the site to remember your actions and preferences over a period of time, so you don't have to re-enter them each time you visit the site or navigate from page to page."
        },
        {
          title: "2. Types of cookies we use",
          subsections: [
            {
              title: "Technical cookies (necessary)",
              content: "They are essential for the website to function. They enable navigation and use of the platform's basic features."
            },
            {
              title: "Analytics cookies",
              content: "They allow us to analyze how users use the website to improve our services. They collect information anonymously."
            },
            {
              title: "Preference cookies",
              content: "They allow us to remember your browsing preferences, such as language or region."
            }
          ]
        },
        {
          title: "3. Cookie management",
          content: "You can manage cookies through your browser settings. Here's how to do it in the most common browsers:",
          list: [
            "Chrome: Settings → Privacy and security → Cookies",
            "Firefox: Options → Privacy and security → Cookies",
            "Safari: Preferences → Privacy → Cookies",
            "Edge: Settings → Cookies and site permissions"
          ],
          extra: "Please note that disabling cookies may affect the functionality of some website features."
        },
        {
          title: "4. Third-party cookies",
          content: "In some cases, we use third-party services that may install their own cookies. These services are subject to their own privacy and cookies policies."
        },
        {
          title: "5. Updates to this policy",
          content: "This cookies policy may be updated periodically. We recommend reviewing it regularly to stay informed about how we use cookies."
        },
        {
          title: "6. Contact",
          content: "If you have any questions about our cookies policy, you can contact us at: info@buscobusiness.com"
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
              {section.content && <p>{section.content}</p>}
              {section.subsections && section.subsections.map((sub, i) => (
                <div key={i} className="mt-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">{sub.title}</h3>
                  <p>{sub.content}</p>
                </div>
              ))}
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

export default Cookies;
