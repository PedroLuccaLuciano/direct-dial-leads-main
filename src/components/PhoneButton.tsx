import { cn } from "@/lib/utils";
import { PHONE_URL } from "@/lib/whatsapp";
import { trackPhoneClick } from "@/lib/analytics";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Phone } from "lucide-react";

type Props = Omit<ButtonProps, "asChild"> & {
  /** Identificador da posição do botão, usado no evento de conversão. */
  location: string;
  children: React.ReactNode;
};

export function PhoneButton({
  location,
  children,
  className,
  variant = "outlineLight",
  size = "lg",
  ...rest
}: Props) {
  return (
    <Button asChild variant={variant} size={size} className={cn(className)} {...rest}>
      <a href={PHONE_URL} onClick={() => trackPhoneClick(location)} data-phone-location={location}>
        <Phone aria-hidden="true" className="size-5" />
        {children}
      </a>
    </Button>
  );
}
