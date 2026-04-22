export const CONTACT_EMAIL = 'info@buscobusiness.com';
export const CONTACT_SUBJECT = 'Contacto desde BuscoBusiness';
export const CONTACT_BODY = 'Hola, me gustaría más información';
export const VALUATION_SUBJECT = 'Solicitud de valoración de negocio';
export const VALUATION_BODY = 'Hola, quiero solicitar una valoración profesional de mi negocio';
export const FIND_BUSINESS_SUBJECT = 'Ayuda para encontrar negocio';
export const FIND_BUSINESS_BODY = 'Hola, no he encontrado lo que busco y me gustaría que me ayudarais';

const buildMailtoHref = (subject: string, bodyText: string, extraLines: string[] = []) => {
  const details = extraLines.map((line) => line.trim()).filter(Boolean);
  const body = [bodyText, ...details].join('\n\n');

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const buildContactMailtoHref = (extraLines: string[] = []) =>
  buildMailtoHref(CONTACT_SUBJECT, CONTACT_BODY, extraLines);

export const buildValuationMailtoHref = (extraLines: string[] = []) =>
  buildMailtoHref(VALUATION_SUBJECT, VALUATION_BODY, extraLines);

export const buildFindBusinessMailtoHref = (extraLines: string[] = []) =>
  buildMailtoHref(FIND_BUSINESS_SUBJECT, FIND_BUSINESS_BODY, extraLines);

export const openContactMailto = (extraLines: string[] = []) => {
  window.location.href = buildContactMailtoHref(extraLines);
};

export const openValuationMailto = (extraLines: string[] = []) => {
  window.location.href = buildValuationMailtoHref(extraLines);
};
