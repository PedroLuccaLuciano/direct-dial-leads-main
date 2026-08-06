import { useEffect, useState } from "react";
import logo from "@/assets/logo-rs.png.asset.json";
import { WhatsAppButton } from "./WhatsAppButton";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#trabalhos", label: "Galeria" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#area", label: "Onde atendemos" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-shadow ${
        scrolled ? "bg-background/95 shadow-card backdrop-blur" : "bg-background/85 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-20">
        <a href="#topo" className="flex items-center gap-3" aria-label="RS Munck e Poda — início">
          <img
            src={logo.url}
            alt="Logotipo RS Munck e Poda"
            width={48}
            height={48}
            className="h-10 w-auto sm:h-12"
          />
          <span className="hidden text-sm font-bold leading-tight text-primary sm:block">
            RS Munck
            <span className="block text-accent">e Poda</span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <WhatsAppButton location="header" size="lg" className="shrink-0">
          <span className="hidden sm:inline">Solicitar Orçamento</span>
          <span className="sm:hidden">Orçamento</span>
        </WhatsAppButton>
      </div>
    </header>
  );
}
