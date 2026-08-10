import logo from "@/assets/logo-rs.png.asset.json";
import { WhatsAppButton } from "./WhatsAppButton";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { COMPANY, CIDADES } from "@/lib/company";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const social: { icon: typeof Instagram; label: string; href: string }[] = [
    { icon: Instagram, label: "Instagram", href: String(COMPANY.instagram) },
    { icon: Facebook, label: "Facebook", href: String(COMPANY.facebook) },
    {
      icon: Mail,
      label: String(COMPANY.email),
      href: COMPANY.email ? `mailto:${COMPANY.email}` : "",
    },
  ].filter((s) => s.href !== "");

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={"/images/icone3.png"}
            alt="Logotipo RS Poda"
            width={80}
            height={80}
            loading="lazy"
            className="h-16 w-auto rounded-md bg-background p-1.5"
          />
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/80">
            Poda de árvores, remoção, roçada e serviços com caminhão munck em Joinville e região,
            com equipe treinada e EPIs completos.
          </p>
          <p className="mt-4 text-xs text-primary-foreground/70">
            {COMPANY.name}
            <br />
            CNPJ {COMPANY.cnpj}
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold">Contato</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li>
              <a
                className="flex items-center gap-2 transition-colors hover:text-accent"
                href={`tel:+55${WHATSAPP_DISPLAY.replace(/\D/g, "")}`}
              >
                <Phone aria-hidden="true" className="size-4 text-accent" />
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              {COMPANY.hours}
            </li>
            <li className="flex items-start gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              {COMPANY.areaShort}
            </li>
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <s.icon aria-hidden="true" className="size-4 text-accent" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold">Área de atendimento</h2>
          <ul className="mt-4 grid gap-2 text-sm text-primary-foreground/85">
            {CIDADES.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold">Peça seu orçamento</h2>
          <p className="mt-4 text-sm text-primary-foreground/85">
            Resposta rápida pelo WhatsApp, sem compromisso.
          </p>
          <WhatsAppButton location="rodape" size="lg" className="mt-4 w-full sm:w-auto">
            Falar com um especialista
          </WhatsAppButton>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
