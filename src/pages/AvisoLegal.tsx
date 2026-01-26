import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AvisoLegal = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const content = {
    es: {
      title: "Aviso Legal",
      sections: [
        {
          title: "1. Identificación del titular",
          content: "En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa que el presente sitio web, buscobusiness.com, es titularidad de:",
          list: [
            "Denominación social: [Nombre de la empresa]",
            "NIF/CIF: [Número de identificación fiscal]",
            "Domicilio social: [Dirección completa]",
            "Email de contacto: info@buscobusiness.com"
          ]
        },
        {
          title: "2. Objeto del sitio web",
          content: "buscobusiness.com es un marketplace que facilita el encuentro entre compradores y vendedores de negocios en funcionamiento. Nuestra plataforma permite publicar anuncios de venta de empresas y buscar oportunidades de adquisición."
        },
        {
          title: "3. Naturaleza del servicio",
          content: "buscobusiness.com actúa exclusivamente como plataforma de anuncios (marketplace). No intervenimos como intermediarios, brokers, asesores financieros o jurídicos en las transacciones entre usuarios, salvo que se contrate expresamente un servicio adicional que así lo especifique.",
          extra: "Los usuarios son los únicos responsables de la veracidad de la información que publican, así como de realizar las verificaciones y comprobaciones pertinentes antes de cualquier operación de compra o venta."
        },
        {
          title: "4. Propiedad intelectual e industrial",
          content: "Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, iconos, software y cualquier otro material, están protegidos por derechos de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o modificación sin autorización expresa."
        },
        {
          title: "5. Exclusión de responsabilidad",
          content: "buscobusiness.com no se responsabiliza de:",
          list: [
            "La veracidad, exactitud o actualidad de los anuncios publicados por terceros.",
            "Los daños o perjuicios derivados de las transacciones entre usuarios.",
            "Los contenidos de sitios web externos enlazados desde nuestra plataforma.",
            "Interrupciones del servicio por causas técnicas o de fuerza mayor."
          ]
        },
        {
          title: "6. Legislación aplicable y jurisdicción",
          content: "El presente aviso legal se rige por la legislación española. Para cualquier controversia que pudiera derivarse del acceso o uso de este sitio web, las partes se someten a los Juzgados y Tribunales del domicilio del usuario, siempre que la normativa aplicable así lo permita."
        }
      ]
    },
    ca: {
      title: "Avís Legal",
      sections: [
        {
          title: "1. Identificació del titular",
          content: "En compliment de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic, s'informa que el present lloc web, buscobusiness.com, és titularitat de:",
          list: [
            "Denominació social: [Nom de l'empresa]",
            "NIF/CIF: [Número d'identificació fiscal]",
            "Domicili social: [Adreça completa]",
            "Email de contacte: info@buscobusiness.com"
          ]
        },
        {
          title: "2. Objecte del lloc web",
          content: "buscobusiness.com és un marketplace que facilita la trobada entre compradors i venedors de negocis en funcionament. La nostra plataforma permet publicar anuncis de venda d'empreses i buscar oportunitats d'adquisició."
        },
        {
          title: "3. Naturalesa del servei",
          content: "buscobusiness.com actua exclusivament com a plataforma d'anuncis (marketplace). No intervenim com a intermediaris, brokers, assessors financers o jurídics en les transaccions entre usuaris, llevat que es contracti expressament un servei addicional que així ho especifiqui.",
          extra: "Els usuaris són els únics responsables de la veracitat de la informació que publiquen, així com de realitzar les verificacions i comprovacions pertinents abans de qualsevol operació de compra o venda."
        },
        {
          title: "4. Propietat intel·lectual i industrial",
          content: "Tots els continguts del lloc web, incloent textos, imatges, logotips, icones, software i qualsevol altre material, estan protegits per drets de propietat intel·lectual i industrial. Queda prohibida la seva reproducció, distribució o modificació sense autorització expressa."
        },
        {
          title: "5. Exclusió de responsabilitat",
          content: "buscobusiness.com no es responsabilitza de:",
          list: [
            "La veracitat, exactitud o actualitat dels anuncis publicats per tercers.",
            "Els danys o perjudicis derivats de les transaccions entre usuaris.",
            "Els continguts de llocs web externs enllaçats des de la nostra plataforma.",
            "Interrupcions del servei per causes tècniques o de força major."
          ]
        },
        {
          title: "6. Legislació aplicable i jurisdicció",
          content: "El present avís legal es regeix per la legislació espanyola. Per a qualsevol controvèrsia que pogués derivar-se de l'accés o ús d'aquest lloc web, les parts se sotmeten als Jutjats i Tribunals del domicili de l'usuari, sempre que la normativa aplicable així ho permeti."
        }
      ]
    },
    fr: {
      title: "Mentions Légales",
      sections: [
        {
          title: "1. Identification du titulaire",
          content: "Conformément à la loi 34/2002 du 11 juillet sur les Services de la Société de l'Information et du Commerce Électronique, nous vous informons que le site web buscobusiness.com appartient à :",
          list: [
            "Dénomination sociale : [Nom de l'entreprise]",
            "NIF/CIF : [Numéro d'identification fiscale]",
            "Siège social : [Adresse complète]",
            "Email de contact : info@buscobusiness.com"
          ]
        },
        {
          title: "2. Objet du site web",
          content: "buscobusiness.com est une marketplace qui facilite la rencontre entre acheteurs et vendeurs d'entreprises en activité. Notre plateforme permet de publier des annonces de vente d'entreprises et de rechercher des opportunités d'acquisition."
        },
        {
          title: "3. Nature du service",
          content: "buscobusiness.com agit exclusivement comme plateforme d'annonces (marketplace). Nous n'intervenons pas comme intermédiaires, courtiers, conseillers financiers ou juridiques dans les transactions entre utilisateurs, sauf si un service additionnel le spécifiant expressément est contracté.",
          extra: "Les utilisateurs sont seuls responsables de la véracité des informations qu'ils publient, ainsi que d'effectuer les vérifications pertinentes avant toute opération d'achat ou de vente."
        },
        {
          title: "4. Propriété intellectuelle et industrielle",
          content: "Tous les contenus du site web, y compris textes, images, logos, icônes, logiciels et tout autre matériel, sont protégés par des droits de propriété intellectuelle et industrielle. Leur reproduction, distribution ou modification sans autorisation expresse est interdite."
        },
        {
          title: "5. Exclusion de responsabilité",
          content: "buscobusiness.com n'est pas responsable de :",
          list: [
            "La véracité, exactitude ou actualité des annonces publiées par des tiers.",
            "Les dommages découlant des transactions entre utilisateurs.",
            "Les contenus des sites web externes liés depuis notre plateforme.",
            "Les interruptions de service pour causes techniques ou de force majeure."
          ]
        },
        {
          title: "6. Législation applicable et juridiction",
          content: "Les présentes mentions légales sont régies par la législation espagnole. Pour tout litige pouvant découler de l'accès ou de l'utilisation de ce site web, les parties se soumettent aux tribunaux du domicile de l'utilisateur, dans la mesure où la réglementation applicable le permet."
        }
      ]
    },
    en: {
      title: "Legal Notice",
      sections: [
        {
          title: "1. Owner identification",
          content: "In compliance with Law 34/2002 of July 11 on Information Society Services and Electronic Commerce, we inform you that the website buscobusiness.com is owned by:",
          list: [
            "Company name: [Company name]",
            "Tax ID: [Tax identification number]",
            "Registered address: [Full address]",
            "Contact email: info@buscobusiness.com"
          ]
        },
        {
          title: "2. Website purpose",
          content: "buscobusiness.com is a marketplace that facilitates the connection between buyers and sellers of operating businesses. Our platform allows publishing business sale listings and searching for acquisition opportunities."
        },
        {
          title: "3. Nature of service",
          content: "buscobusiness.com acts exclusively as an advertising platform (marketplace). We do not intervene as intermediaries, brokers, financial or legal advisors in transactions between users, unless an additional service expressly specifying this is contracted.",
          extra: "Users are solely responsible for the accuracy of the information they publish, as well as for conducting pertinent verifications before any purchase or sale operation."
        },
        {
          title: "4. Intellectual and industrial property",
          content: "All website contents, including texts, images, logos, icons, software and any other material, are protected by intellectual and industrial property rights. Their reproduction, distribution or modification without express authorization is prohibited."
        },
        {
          title: "5. Disclaimer",
          content: "buscobusiness.com is not responsible for:",
          list: [
            "The accuracy, exactness or timeliness of listings published by third parties.",
            "Damages arising from transactions between users.",
            "Contents of external websites linked from our platform.",
            "Service interruptions due to technical causes or force majeure."
          ]
        },
        {
          title: "6. Applicable law and jurisdiction",
          content: "This legal notice is governed by Spanish law. For any dispute arising from access or use of this website, the parties submit to the Courts of the user's domicile, provided applicable regulations permit."
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

export default AvisoLegal;
