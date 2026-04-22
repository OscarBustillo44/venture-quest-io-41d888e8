export const CONTACT_EMAIL = 'info@buscobusiness.com';
export const CONTACT_SUBJECT = 'Contacto BuscoBusiness';
export const CONTACT_BODY = 'Hola, me gustaría información';

export const buildContactMailtoHref = (extraLines: string[] = []) => {
  const details = extraLines.map((line) => line.trim()).filter(Boolean);
  const body = [CONTACT_BODY, ...details].join('\n\n');

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}&body=${encodeURIComponent(body)}`;
};

export const openContactMailto = (extraLines: string[] = []) => {
  window.location.href = buildContactMailtoHref(extraLines);
};
