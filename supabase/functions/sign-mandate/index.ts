import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ALLOWED_ORIGINS = [
  "https://buscobusiness.com",
  "https://www.buscobusiness.com",
  "http://localhost:5173",
  "http://localhost:8080",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin") || "";
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  };
}

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildContractHtml(data: Record<string, unknown>, lang: string): string {
  const t = translations[lang] || translations["ca"];
  const signedAt = data.signed_at as string;
  const date = new Date(signedAt).toLocaleString("es-ES", {
    timeZone: "Europe/Andorra",
    dateStyle: "full",
    timeStyle: "medium",
  });

  return `<!DOCTYPE html>
<html lang="${lang}">
<head><meta charset="UTF-8"><style>
  body { font-family: 'Georgia', serif; max-width: 700px; margin: 0 auto; padding: 40px 20px; color: #1c1917; line-height: 1.6; font-size: 13px; }
  h1 { font-size: 16px; text-align: center; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #d97706; padding-bottom: 12px; }
  h2 { font-size: 13px; color: #78716c; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 24px; }
  h3 { font-size: 13px; margin: 16px 0 4px; }
  .field { margin: 4px 0; }
  .field .label { color: #78716c; }
  .field .value { font-weight: bold; }
  .clause { margin: 12px 0; }
  ul { margin: 4px 0; padding-left: 20px; }
  .checks { background: #fef3c7; padding: 16px; border-radius: 8px; margin: 20px 0; }
  .check { margin: 6px 0; }
  .check::before { content: "☑ "; color: #d97706; font-weight: bold; }
  .meta { border-top: 2px solid #d97706; padding-top: 16px; margin-top: 24px; color: #78716c; font-size: 11px; }
  .logo { text-align: center; margin-bottom: 20px; font-size: 20px; font-weight: bold; color: #d97706; }
</style></head>
<body>
  <div class="logo">BUSCOBUSINESS.COM</div>
  <h1>${escapeHtml(t.title)}</h1>

  <h2>${escapeHtml(t.buyerData)}</h2>
  <div class="field"><span class="label">${escapeHtml(t.fields.fullName)}:</span> <span class="value">${escapeHtml(data.full_name as string)}</span></div>
  <div class="field"><span class="label">${escapeHtml(t.fields.birthDate)}:</span> <span class="value">${escapeHtml(data.birth_date as string)}</span></div>
  <div class="field"><span class="label">${escapeHtml(t.fields.nationality)}:</span> <span class="value">${escapeHtml(data.nationality as string)}</span></div>
  <div class="field"><span class="label">${escapeHtml(t.fields.docType)}:</span> <span class="value">${escapeHtml(data.doc_type as string)}</span></div>
  <div class="field"><span class="label">${escapeHtml(t.fields.docNumber)}:</span> <span class="value">${escapeHtml(data.doc_number as string)}</span></div>
  <div class="field"><span class="label">${escapeHtml(t.fields.address)}:</span> <span class="value">${escapeHtml(data.address as string)}</span></div>
  <div class="field"><span class="label">${escapeHtml(t.fields.email)}:</span> <span class="value">${escapeHtml(data.email as string)}</span></div>
  <div class="field"><span class="label">${escapeHtml(t.fields.phone)}:</span> <span class="value">${escapeHtml(data.phone as string)}</span></div>
  ${data.company ? `<div class="field"><span class="label">${escapeHtml(t.fields.company)}:</span> <span class="value">${escapeHtml(data.company as string)}</span></div>` : ""}
  ${data.position ? `<div class="field"><span class="label">${escapeHtml(t.fields.position)}:</span> <span class="value">${escapeHtml(data.position as string)}</span></div>` : ""}
  ${data.company_reg_number ? `<div class="field"><span class="label">${escapeHtml(t.fields.regNumber)}:</span> <span class="value">${escapeHtml(data.company_reg_number as string)}</span></div>` : ""}
  <div class="field"><span class="label">${escapeHtml(t.fields.investmentCapacity)}:</span> <span class="value">${escapeHtml(data.investment_capacity as string)}</span></div>

  ${t.clauses.map((c: { title: string; body: string; items?: string[] }, i: number) => `
    <div class="clause">
      <h3>${i + 1}. ${escapeHtml(c.title)}</h3>
      <p>${escapeHtml(c.body).replace(/\n/g, "<br>")}</p>
      ${c.items ? `<ul>${c.items.map((item: string) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
    </div>
  `).join("")}

  <div class="checks">
    <h3>${escapeHtml(t.electronicSignature)}</h3>
    <div class="check">${escapeHtml(t.checks.readFully)}</div>
    <div class="check">${escapeHtml(t.checks.acceptClauses)}</div>
    <div class="check">${escapeHtml(t.checks.acknowledgeHonoraires)}</div>
    <div class="check">${escapeHtml(t.checks.acceptElectronicSignature)}</div>
  </div>

  <div class="meta">
    <div>${escapeHtml(t.meta.date)}: ${date}</div>
    <div>${escapeHtml(t.meta.ip)}: ${escapeHtml(data.ip_address as string)}</div>
    <div>${escapeHtml(t.meta.id)}: ${escapeHtml(data.id as string)}</div>
    <div>${escapeHtml(t.meta.version)}: ${escapeHtml(data.contract_version as string)}</div>
  </div>
</body>
</html>`;
}

const translations: Record<string, {
  title: string;
  buyerData: string;
  fields: Record<string, string>;
  clauses: Array<{ title: string; body: string; items?: string[] }>;
  electronicSignature: string;
  checks: Record<string, string>;
  meta: Record<string, string>;
  emailSubject: string;
  emailBody: string;
}> = {
  ca: {
    title: "Acord de confidencialitat, no elusió i mandat d'intermediació",
    buyerData: "Dades del comprador",
    fields: {
      fullName: "Nom i cognoms", birthDate: "Data de naixement", nationality: "Nacionalitat",
      docType: "Document identificatiu", docNumber: "Número de document", address: "Adreça completa",
      email: "Correu electrònic", phone: "Telèfon mòbil", company: "Empresa",
      position: "Càrrec", regNumber: "Núm. registre societat", investmentCapacity: "Capacitat d'inversió",
    },
    clauses: [
      { title: "OBJECTE", body: "Mitjançant el present acord, BUSCOBUSINESS facilita al COMPRADOR informació confidencial relativa a empreses, negocis, participacions societàries, actius immobiliaris, operacions corporatives, inversions o oportunitats empresarials publicades a la plataforma.\nEl COMPRADOR manifesta el seu interès real en analitzar una possible adquisició o inversió." },
      { title: "INFORMACIÓ CONFIDENCIAL", body: "Tindrà la consideració d'informació confidencial tota la documentació facilitada per BUSCOBUSINESS, incloent, entre d'altres:", items: ["Identitat del venedor", "Comptes anuals", "Comptes d'explotació", "Balanços", "Facturació", "EBITDA", "Informació fiscal", "Informació financera", "Informació comercial", "Dossiers d'inversió", "Data Rooms", "Informació verbal"] },
      { title: "OBLIGACIÓ DE CONFIDENCIALITAT", body: "El COMPRADOR es compromet a:\na) Mantenir absoluta confidencialitat.\nb) No divulgar informació a tercers.\nc) Utilitzar-la exclusivament per analitzar l'operació.\nd) Custodiar adequadament la documentació rebuda.\nAquesta obligació tindrà una durada mínima de cinc (5) anys." },
      { title: "CLÀUSULA DE NO ELUSIÓ", body: "El COMPRADOR reconeix expressament que la informació i l'oportunitat de negoci han estat posades al seu coneixement per BUSCOBUSINESS.\nEn conseqüència, es compromet a no evitar, eludir, substituir o esquivar la intervenció de BUSCOBUSINESS." },
      { title: "PROHIBICIÓ DE CONTACTE DIRECTE", body: "El COMPRADOR es compromet a no contactar directament ni indirectament amb:", items: ["Propietaris", "Accionistes", "Administradors", "Directius", "Treballadors", "Clients", "Proveïdors", "Assessors"] },
      { title: "RECONEIXEMENT D'INTERMEDIACIÓ", body: "El COMPRADOR reconeix que qualsevol operació futura derivada de la informació facilitada serà conseqüència directa de la intervenció de BUSCOBUSINESS." },
      { title: "MANDAT D'INTERMEDIACIÓ I ADQUISICIÓ", body: "El COMPRADOR nomena BUSCOBUSINESS com a intermediari exclusiu respecte de l'oportunitat concreta visualitzada.\nLa vigència d'aquest mandat serà de vint-i-quatre (24) mesos." },
      { title: "HONORARIS D'ÈXIT", body: "En cas que el COMPRADOR, directament o indirectament, realitzi qualsevol de les operacions següents:", items: ["Adquireixi l'empresa", "Adquireixi participacions socials", "Adquireixi accions", "Adquireixi actius", "Formalitzi una ampliació de capital", "Concedeixi finançament convertible", "Inverteixi en qualsevol forma"] },
      { title: "OPERACIONS INDIRECTES", body: "L'obligació de pagament subsistirà encara que l'operació es formalitzi mitjançant:", items: ["Societats vinculades", "Holding", "Vehicles d'inversió", "Family Office", "Fons d'inversió", "Cònjuge", "Familiars", "Socis", "Tercers interposats"] },
      { title: "CLÀUSULA PENAL", body: "En cas d'incompliment:\na) Honoraris íntegres del 5%.\nb) Penalització addicional equivalent al 100% dels honoraris.\nc) Interessos legals.\nd) Costes judicials i advocats." },
      { title: "PROTECCIÓ DE DADES", body: "El COMPRADOR autoritza expressament BUSCOBUSINESS a tractar les seves dades personals per a la gestió de les oportunitats d'inversió i adquisició." },
      { title: "LEGISLACIÓ I JURISDICCIÓ", body: "Aquest acord es regirà íntegrament per la legislació vigent al Principat d'Andorra.\nLes parts se sotmeten expressament als Batlles i Tribunals del Principat d'Andorra." },
      { title: "SIGNATURA ELECTRÒNICA", body: "El COMPRADOR reconeix la validesa legal de la signatura electrònica realitzada a través de la plataforma BUSCOBUSINESS." },
    ],
    electronicSignature: "Signatura electrònica",
    checks: {
      readFully: "He llegit íntegrament el document.",
      acceptClauses: "Accepto totes les clàusules del present acord.",
      acknowledgeHonoraires: "Reconec els honoraris d'èxit del 5% sobre el valor total de la transacció, amb un mínim de 5.000 €.",
      acceptElectronicSignature: "Accepto la validesa de la signatura electrònica.",
    },
    meta: { date: "Data de signatura", ip: "IP de connexió", id: "Identificador del contracte", version: "Versió del contracte" },
    emailSubject: "BuscoBusiness — Còpia del contracte signat",
    emailBody: "Adjuntem la còpia del contracte de confidencialitat, no elusió i mandat d'intermediació que acabeu de signar a BuscoBusiness.com.",
  },
  es: {
    title: "Acuerdo de confidencialidad, no elusión y mandato de intermediación",
    buyerData: "Datos del comprador",
    fields: {
      fullName: "Nombre y apellidos", birthDate: "Fecha de nacimiento", nationality: "Nacionalidad",
      docType: "Documento identificativo", docNumber: "Número de documento", address: "Dirección completa",
      email: "Correo electrónico", phone: "Teléfono móvil", company: "Empresa",
      position: "Cargo", regNumber: "Núm. registro sociedad", investmentCapacity: "Capacidad de inversión",
    },
    clauses: [
      { title: "OBJETO", body: "Mediante el presente acuerdo, BUSCOBUSINESS facilita al COMPRADOR información confidencial relativa a empresas, negocios, participaciones societarias, activos inmobiliarios, operaciones corporativas, inversiones u oportunidades empresariales publicadas en la plataforma.\nEl COMPRADOR manifiesta su interés real en analizar una posible adquisición o inversión." },
      { title: "INFORMACIÓN CONFIDENCIAL", body: "Tendrá la consideración de información confidencial toda la documentación facilitada por BUSCOBUSINESS, incluyendo, entre otras:", items: ["Identidad del vendedor", "Cuentas anuales", "Cuentas de explotación", "Balances", "Facturación", "EBITDA", "Información fiscal", "Información financiera", "Información comercial", "Dossiers de inversión", "Data Rooms", "Información verbal"] },
      { title: "OBLIGACIÓN DE CONFIDENCIALIDAD", body: "El COMPRADOR se compromete a:\na) Mantener absoluta confidencialidad.\nb) No divulgar información a terceros.\nc) Utilizarla exclusivamente para analizar la operación.\nd) Custodiar adecuadamente la documentación recibida.\nEsta obligación tendrá una duración mínima de cinco (5) años." },
      { title: "CLÁUSULA DE NO ELUSIÓN", body: "El COMPRADOR reconoce expresamente que la información y la oportunidad de negocio han sido puestas en su conocimiento por BUSCOBUSINESS.\nEn consecuencia, se compromete a no evitar, eludir, sustituir o esquivar la intervención de BUSCOBUSINESS." },
      { title: "PROHIBICIÓN DE CONTACTO DIRECTO", body: "El COMPRADOR se compromete a no contactar directa ni indirectamente con:", items: ["Propietarios", "Accionistas", "Administradores", "Directivos", "Trabajadores", "Clientes", "Proveedores", "Asesores"] },
      { title: "RECONOCIMIENTO DE INTERMEDIACIÓN", body: "El COMPRADOR reconoce que cualquier operación futura derivada de la información facilitada será consecuencia directa de la intervención de BUSCOBUSINESS." },
      { title: "MANDATO DE INTERMEDIACIÓN Y ADQUISICIÓN", body: "El COMPRADOR nombra a BUSCOBUSINESS como intermediario exclusivo respecto de la oportunidad concreta visualizada.\nLa vigencia de este mandato será de veinticuatro (24) meses." },
      { title: "HONORARIOS DE ÉXITO", body: "En caso de que el COMPRADOR, directa o indirectamente, realice cualquiera de las operaciones siguientes:", items: ["Adquiera la empresa", "Adquiera participaciones sociales", "Adquiera acciones", "Adquiera activos", "Formalice una ampliación de capital", "Conceda financiamiento convertible", "Invierta en cualquier forma"] },
      { title: "OPERACIONES INDIRECTAS", body: "La obligación de pago subsistirá aunque la operación se formalice mediante:", items: ["Sociedades vinculadas", "Holding", "Vehículos de inversión", "Family Office", "Fondos de inversión", "Cónyuge", "Familiares", "Socios", "Terceros interpuestos"] },
      { title: "CLÁUSULA PENAL", body: "En caso de incumplimiento:\na) Honorarios íntegros del 5%.\nb) Penalización adicional equivalente al 100% de los honorarios.\nc) Intereses legales.\nd) Costas judiciales y abogados." },
      { title: "PROTECCIÓN DE DATOS", body: "El COMPRADOR autoriza expresamente a BUSCOBUSINESS a tratar sus datos personales para la gestión de las oportunidades de inversión y adquisición." },
      { title: "LEGISLACIÓN Y JURISDICCIÓN", body: "Este acuerdo se regirá íntegramente por la legislación vigente en el Principado de Andorra.\nLas partes se someten expresamente a los Batlles y Tribunales del Principado de Andorra." },
      { title: "FIRMA ELECTRÓNICA", body: "El COMPRADOR reconoce la validez legal de la firma electrónica realizada a través de la plataforma BUSCOBUSINESS." },
    ],
    electronicSignature: "Firma electrónica",
    checks: {
      readFully: "He leído íntegramente el documento.",
      acceptClauses: "Acepto todas las cláusulas del presente acuerdo.",
      acknowledgeHonoraires: "Reconozco los honorarios de éxito del 5% sobre el valor total de la transacción, con un mínimo de 5.000 €.",
      acceptElectronicSignature: "Acepto la validez de la firma electrónica.",
    },
    meta: { date: "Fecha de firma", ip: "IP de conexión", id: "Identificador del contrato", version: "Versión del contrato" },
    emailSubject: "BuscoBusiness — Copia del contrato firmado",
    emailBody: "Adjuntamos la copia del contrato de confidencialidad, no elusión y mandato de intermediación que acaba de firmar en BuscoBusiness.com.",
  },
  en: {
    title: "Confidentiality, non-circumvention and intermediation mandate agreement",
    buyerData: "Buyer information",
    fields: {
      fullName: "Full name", birthDate: "Date of birth", nationality: "Nationality",
      docType: "Identification document", docNumber: "Document number", address: "Full address",
      email: "Email address", phone: "Mobile phone", company: "Company",
      position: "Position", regNumber: "Company reg. number", investmentCapacity: "Investment capacity",
    },
    clauses: [
      { title: "PURPOSE", body: "Through this agreement, BUSCOBUSINESS provides the BUYER with confidential information relating to companies, businesses, corporate holdings, real estate assets, corporate transactions, investments or business opportunities published on the platform.\nThe BUYER declares a genuine interest in analysing a potential acquisition or investment." },
      { title: "CONFIDENTIAL INFORMATION", body: "All documentation provided by BUSCOBUSINESS shall be considered confidential information, including but not limited to:", items: ["Identity of the seller", "Annual accounts", "Operating accounts", "Balance sheets", "Revenue", "EBITDA", "Tax information", "Financial information", "Commercial information", "Investment dossiers", "Data Rooms", "Verbal information"] },
      { title: "CONFIDENTIALITY OBLIGATION", body: "The BUYER undertakes to:\na) Maintain absolute confidentiality.\nb) Not disclose information to third parties.\nc) Use it exclusively to analyse the transaction.\nd) Properly safeguard all documentation received.\nThis obligation shall have a minimum duration of five (5) years." },
      { title: "NON-CIRCUMVENTION CLAUSE", body: "The BUYER expressly acknowledges that the information and business opportunity have been brought to their attention by BUSCOBUSINESS.\nConsequently, they undertake not to avoid, circumvent, replace or bypass the intervention of BUSCOBUSINESS." },
      { title: "PROHIBITION OF DIRECT CONTACT", body: "The BUYER undertakes not to contact directly or indirectly:", items: ["Owners", "Shareholders", "Directors", "Executives", "Employees", "Clients", "Suppliers", "Advisors"] },
      { title: "ACKNOWLEDGEMENT OF INTERMEDIATION", body: "The BUYER acknowledges that any future transaction arising from the information provided shall be a direct consequence of the intervention of BUSCOBUSINESS." },
      { title: "INTERMEDIATION AND ACQUISITION MANDATE", body: "The BUYER appoints BUSCOBUSINESS as exclusive intermediary with respect to the specific opportunity viewed.\nThe term of this mandate shall be twenty-four (24) months." },
      { title: "SUCCESS FEES", body: "In the event that the BUYER, directly or indirectly, carries out any of the following transactions:", items: ["Acquires the company", "Acquires corporate holdings", "Acquires shares", "Acquires assets", "Executes a capital increase", "Grants convertible financing", "Invests in any form"] },
      { title: "INDIRECT TRANSACTIONS", body: "The payment obligation shall survive even if the transaction is completed through:", items: ["Affiliated companies", "Holding companies", "Investment vehicles", "Family Office", "Investment funds", "Spouse", "Family members", "Partners", "Interposed third parties"] },
      { title: "PENALTY CLAUSE", body: "In the event of non-compliance:\na) Full 5% fees.\nb) Additional penalty equivalent to 100% of the fees.\nc) Legal interest.\nd) Court costs and legal fees." },
      { title: "DATA PROTECTION", body: "The BUYER expressly authorises BUSCOBUSINESS to process their personal data for the management of investment and acquisition opportunities." },
      { title: "GOVERNING LAW AND JURISDICTION", body: "This agreement shall be governed entirely by the laws in force in the Principality of Andorra.\nThe parties expressly submit to the Courts and Tribunals of the Principality of Andorra." },
      { title: "ELECTRONIC SIGNATURE", body: "The BUYER acknowledges the legal validity of the electronic signature made through the BUSCOBUSINESS platform." },
    ],
    electronicSignature: "Electronic signature",
    checks: {
      readFully: "I have read the document in its entirety.",
      acceptClauses: "I accept all clauses of this agreement.",
      acknowledgeHonoraires: "I acknowledge the 5% success fee on the total transaction value, with a minimum of €5,000.",
      acceptElectronicSignature: "I accept the validity of the electronic signature.",
    },
    meta: { date: "Signature date", ip: "Connection IP", id: "Contract ID", version: "Contract version" },
    emailSubject: "BuscoBusiness — Signed contract copy",
    emailBody: "Please find attached the copy of the confidentiality, non-circumvention and intermediation mandate agreement you have just signed on BuscoBusiness.com.",
  },
  fr: {
    title: "Accord de confidentialité, de non-contournement et mandat d'intermédiation",
    buyerData: "Données de l'acheteur",
    fields: {
      fullName: "Nom et prénoms", birthDate: "Date de naissance", nationality: "Nationalité",
      docType: "Document d'identité", docNumber: "Numéro de document", address: "Adresse complète",
      email: "Adresse e-mail", phone: "Téléphone portable", company: "Entreprise",
      position: "Poste", regNumber: "Numéro d'enregistrement", investmentCapacity: "Capacité d'investissement",
    },
    clauses: [
      { title: "OBJET", body: "Par le présent accord, BUSCOBUSINESS fournit à l'ACHETEUR des informations confidentielles relatives à des entreprises, commerces, participations sociétaires, actifs immobiliers, opérations corporatives, investissements ou opportunités d'affaires publiées sur la plateforme.\nL'ACHETEUR manifeste son intérêt réel à analyser une éventuelle acquisition ou investissement." },
      { title: "INFORMATIONS CONFIDENTIELLES", body: "Toute la documentation fournie par BUSCOBUSINESS sera considérée comme information confidentielle, y compris, entre autres :", items: ["Identité du vendeur", "Comptes annuels", "Comptes d'exploitation", "Bilans", "Chiffre d'affaires", "EBITDA", "Informations fiscales", "Informations financières", "Informations commerciales", "Dossiers d'investissement", "Data Rooms", "Informations verbales"] },
      { title: "OBLIGATION DE CONFIDENTIALITÉ", body: "L'ACHETEUR s'engage à :\na) Maintenir une confidentialité absolue.\nb) Ne pas divulguer d'informations à des tiers.\nc) Les utiliser exclusivement pour analyser l'opération.\nd) Conserver convenablement la documentation reçue.\nCette obligation aura une durée minimale de cinq (5) ans." },
      { title: "CLAUSE DE NON-CONTOURNEMENT", body: "L'ACHETEUR reconnaît expressément que l'information et l'opportunité d'affaires ont été portées à sa connaissance par BUSCOBUSINESS.\nEn conséquence, il s'engage à ne pas éviter, contourner, remplacer ou esquiver l'intervention de BUSCOBUSINESS." },
      { title: "INTERDICTION DE CONTACT DIRECT", body: "L'ACHETEUR s'engage à ne pas contacter directement ni indirectement :", items: ["Propriétaires", "Actionnaires", "Administrateurs", "Dirigeants", "Employés", "Clients", "Fournisseurs", "Conseillers"] },
      { title: "RECONNAISSANCE D'INTERMÉDIATION", body: "L'ACHETEUR reconnaît que toute opération future découlant de l'information fournie sera une conséquence directe de l'intervention de BUSCOBUSINESS." },
      { title: "MANDAT D'INTERMÉDIATION ET D'ACQUISITION", body: "L'ACHETEUR nomme BUSCOBUSINESS comme intermédiaire exclusif pour l'opportunité concrète consultée.\nLa durée de ce mandat sera de vingt-quatre (24) mois." },
      { title: "HONORAIRES DE SUCCÈS", body: "Dans le cas où l'ACHETEUR, directement ou indirectement, réaliserait l'une des opérations suivantes :", items: ["Acquisition de l'entreprise", "Acquisition de participations sociales", "Acquisition d'actions", "Acquisition d'actifs", "Réalisation d'une augmentation de capital", "Octroi d'un financement convertible", "Investissement sous quelque forme que ce soit"] },
      { title: "OPÉRATIONS INDIRECTES", body: "L'obligation de paiement subsistera même si l'opération est formalisée par l'intermédiaire de :", items: ["Sociétés liées", "Holding", "Véhicules d'investissement", "Family Office", "Fonds d'investissement", "Conjoint", "Membres de la famille", "Associés", "Tiers interposés"] },
      { title: "CLAUSE PÉNALE", body: "En cas de manquement :\na) Honoraires intégraux de 5 %.\nb) Pénalité supplémentaire équivalente à 100 % des honoraires.\nc) Intérêts légaux.\nd) Frais de justice et d'avocat." },
      { title: "PROTECTION DES DONNÉES", body: "L'ACHETEUR autorise expressément BUSCOBUSINESS à traiter ses données personnelles pour la gestion des opportunités d'investissement et d'acquisition." },
      { title: "LOI APPLICABLE ET JURIDICTION", body: "Cet accord sera régi intégralement par la législation en vigueur dans la Principauté d'Andorre.\nLes parties se soumettent expressément aux Batlles et Tribunaux de la Principauté d'Andorre." },
      { title: "SIGNATURE ÉLECTRONIQUE", body: "L'ACHETEUR reconnaît la validité juridique de la signature électronique réalisée via la plateforme BUSCOBUSINESS." },
    ],
    electronicSignature: "Signature électronique",
    checks: {
      readFully: "J'ai lu le document dans son intégralité.",
      acceptClauses: "J'accepte toutes les clauses du présent accord.",
      acknowledgeHonoraires: "Je reconnais les honoraires de succès de 5 % sur la valeur totale de la transaction, avec un minimum de 5 000 €.",
      acceptElectronicSignature: "J'accepte la validité de la signature électronique.",
    },
    meta: { date: "Date de signature", ip: "IP de connexion", id: "Identifiant du contrat", version: "Version du contrat" },
    emailSubject: "BuscoBusiness — Copie du contrat signé",
    emailBody: "Veuillez trouver ci-joint la copie de l'accord de confidentialité, de non-contournement et de mandat d'intermédiation que vous venez de signer sur BuscoBusiness.com.",
  },
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: getCorsHeaders(req) });
  }

  try {
    const body = await req.json();
    const {
      businessSlug, fullName, birthDate, nationality, docType, docNumber,
      address, email, phone, company, position, companyRegNumber,
      investmentCapacity, language,
      checkReadFully, checkAcceptClauses, checkAcknowledgeHonoraires, checkAcceptElectronicSignature,
    } = body;

    // Validate all 4 consent checkboxes
    if (!checkReadFully || !checkAcceptClauses || !checkAcknowledgeHonoraires || !checkAcceptElectronicSignature) {
      return new Response(JSON.stringify({ error: "All consent checkboxes must be accepted" }), {
        status: 400,
        headers: { ...getCorsHeaders(req), "Content-Type": "application/json" },
      });
    }

    // Validate required fields
    const required = { businessSlug, fullName, birthDate, nationality, docType, docNumber, address, email, phone, investmentCapacity };
    for (const [key, val] of Object.entries(required)) {
      if (!val || (typeof val === "string" && !val.trim())) {
        return new Response(JSON.stringify({ error: `Missing required field: ${key}` }), {
          status: 400,
          headers: { ...getCorsHeaders(req), "Content-Type": "application/json" },
        });
      }
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { ...getCorsHeaders(req), "Content-Type": "application/json" },
      });
    }

    // Capture IP
    const ipAddress =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";
    const lang = ["ca", "es", "en", "fr"].includes(language) ? language : "ca";

    const serviceClient = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Insert mandate signature
    const { data, error } = await serviceClient
      .from("mandate_signatures")
      .insert({
        business_slug: businessSlug.trim(),
        full_name: fullName.trim(),
        birth_date: birthDate,
        nationality: nationality.trim(),
        doc_type: docType,
        doc_number: docNumber.trim(),
        address: address.trim(),
        email: email.trim(),
        phone: phone.trim(),
        company: company?.trim() || null,
        position: position?.trim() || null,
        company_reg_number: companyRegNumber?.trim() || null,
        investment_capacity: investmentCapacity,
        check_read_fully: checkReadFully === true,
        check_accept_clauses: checkAcceptClauses === true,
        check_acknowledge_honoraires: checkAcknowledgeHonoraires === true,
        check_accept_electronic_signature: checkAcceptElectronicSignature === true,
        ip_address: ipAddress,
        user_agent: userAgent,
        contract_version: "1.0",
        contract_language: lang,
      })
      .select()
      .single();

    if (error) {
      console.error("Insert error:", error);
      return new Response(JSON.stringify({ error: "Failed to save signature" }), {
        status: 500,
        headers: { ...getCorsHeaders(req), "Content-Type": "application/json" },
      });
    }

    // Generate contract HTML
    const contractHtml = buildContractHtml(data, lang);

    // Store HTML as the contract proof in storage
    const htmlFileName = `${data.id}.html`;
    const { error: uploadError } = await serviceClient.storage
      .from("mandate-pdfs")
      .upload(htmlFileName, new TextEncoder().encode(contractHtml), {
        contentType: "text/html",
        upsert: false,
      });

    if (uploadError) {
      console.error("Upload error:", uploadError);
    } else {
      await serviceClient
        .from("mandate_signatures")
        .update({ pdf_storage_path: `mandate-pdfs/${htmlFileName}` })
        .eq("id", data.id);
    }

    // Send confirmation email via Resend
    const t = translations[lang] || translations["ca"];
    if (RESEND_API_KEY) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "BuscoBusiness <noreply@buscobusiness.com>",
            to: [email.trim()],
            bcc: ["info@buscobusiness.com"],
            subject: t.emailSubject,
            html: `<div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:20px;">
              <h2 style="color:#d97706;">BuscoBusiness.com</h2>
              <p>${escapeHtml(t.emailBody)}</p>
              <hr style="border-color:#d97706;margin:20px 0;">
              ${contractHtml}
              <hr style="border-color:#d97706;margin:20px 0;">
              <p style="font-size:11px;color:#78716c;">
                ID: ${data.id}<br>
                IP: ${ipAddress}<br>
                ${new Date(data.signed_at).toISOString()}
              </p>
            </div>`,
          }),
        });

        if (emailRes.ok) {
          await serviceClient
            .from("mandate_signatures")
            .update({
              confirmation_email_sent: true,
              confirmation_email_sent_at: new Date().toISOString(),
            })
            .eq("id", data.id);
        } else {
          console.error("Email send failed:", await emailRes.text());
        }
      } catch (emailErr) {
        console.error("Email error:", emailErr);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        signatureId: data.id,
        signedAt: data.signed_at,
      }),
      { status: 200, headers: { ...getCorsHeaders(req), "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...getCorsHeaders(req), "Content-Type": "application/json" },
    });
  }
});
