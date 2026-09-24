export const WHATSAPP_NUMBER = "5547999439286";
export const WHATSAPP_DISPLAY = "(47) 99943-9286";

/**
 * api.whatsapp.com/send funciona tanto no app mobile quanto no WhatsApp Web,
 * sem depender do redirecionamento do encurtador wa.me.
 */
export function whatsappUrl(message: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

const ABERTURA = "Olá! Vim pelo site da RS Poda e gostaria de um orçamento";

/** Uma mensagem por serviço, sempre pedindo uma foto para agilizar o orçamento. */
export const MENSAGENS = {
  geral: `${ABERTURA}. Posso enviar uma foto do local?`,
  poda: `${ABERTURA} de poda de árvore. Vou enviar uma foto da árvore.`,
  remocao: `${ABERTURA} de remoção de árvore. Vou enviar uma foto da árvore.`,
  rocada: `${ABERTURA} de roçada de terreno. Vou enviar uma foto do terreno.`,
  limpeza: `${ABERTURA} de limpeza e retirada de resíduos vegetais. Vou enviar uma foto do local.`,
  munck: `${ABERTURA} de serviço com caminhão munck. Vou enviar os detalhes e uma foto do local.`,
} as const;

export const WHATSAPP_MESSAGE = MENSAGENS.geral;
export const WHATSAPP_URL = whatsappUrl(WHATSAPP_MESSAGE);
export const PHONE_URL = `tel:+${WHATSAPP_NUMBER}`;
