import { WHATSAPP_URL } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("botao_flutuante")}
      aria-label="Falar agora no WhatsApp com a RS Poda"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-4 text-whatsapp-foreground shadow-float transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40 sm:px-5"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/40" />
      <MessageCircle aria-hidden="true" className="size-6" />
      <span className="hidden text-sm font-semibold sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
