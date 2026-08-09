export const WHATSAPP_NUMBER = "5547999439286";
export const WHATSAPP_DISPLAY = "(47) 99943-9286";

export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da RS Poda e gostaria de solicitar um orçamento para poda de árvores ou roçada.";

/**
 * api.whatsapp.com/send funciona tanto no app mobile quanto no WhatsApp Web,
 * sem depender do redirecionamento do encurtador wa.me.
 */
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
