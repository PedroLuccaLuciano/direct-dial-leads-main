import { cn } from "@/lib/utils";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { Button, type ButtonProps } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

type Props = Omit<ButtonProps, "asChild"> & {
  /** Identificador da posição do botão, usado no evento de conversão. */
  location: string;
  children: React.ReactNode;
  showIcon?: boolean;
  /** Mensagem específica do serviço; sem ela usa a mensagem geral. */
  message?: string;
};

export function WhatsAppButton({
  location,
  children,
  className,
  variant = "whatsapp",
  size = "lg",
  showIcon = true,
  message,
  ...rest
}: Props) {
  return (
    <Button asChild variant={variant} size={size} className={cn(className)} {...rest}>
      <a
        href={message ? whatsappUrl(message) : WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick(location)}
        data-whatsapp-location={location}
      >
        {showIcon && <MessageCircle aria-hidden="true" className="size-5" />}
        {children}
      </a>
    </Button>
  );
}
