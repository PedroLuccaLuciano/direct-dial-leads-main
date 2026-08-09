import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Gallery, type GalleryItem } from "@/components/Gallery";
import { BeforeAfter } from "@/components/BeforeAfter";
import { initAnalytics } from "@/lib/analytics";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { COMPANY, CIDADES } from "@/lib/company";
import podaAltura from "@/assets/poda-altura.jpeg.asset.json";
import equipe from "@/assets/equipe.jpeg.asset.json";
import munck from "@/assets/munck.jpeg.asset.json";
import podaEscalada from "@/assets/poda-escalada.jpg.asset.json";
import rocada from "@/assets/rocada.jpg.asset.json";
import limpeza from "@/assets/limpeza.jpg.asset.json";
import {
  Axe,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Clock,
  Cone,
  HardHat,
  Leaf,
  MapPin,
  Phone,
  Recycle,
  Ruler,
  ShieldCheck,
  Siren,
  Sparkles,
  Timer,
  TreeDeciduous,
  Truck,
  Users,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Poda de Árvores em Joinville | RS Munck e Poda — Roçada e Munck",
      },
      {
        name: "description",
        content:
          "Empresa de poda de árvores em Joinville e Araquari: poda em altura, remoção de árvores, roçada e caminhão munck. Equipe com EPIs e motosserras STIHL. Orçamento gratuito no WhatsApp.",
      },
      {
        property: "og:title",
        content: "Poda de Árvores, Remoção e Roçada em Joinville | RS Munck e Poda",
      },
      {
        property: "og:description",
        content:
          "Poda em altura, remoção de árvores, roçada e serviços com caminhão munck em Joinville, Araquari e região. Orçamento gratuito pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://rspoda.com.br${equipe.url}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `https://rspoda.com.br${equipe.url}` },
    ],
    links: [{ rel: "preload", as: "image", href: equipe.url, fetchPriority: "high" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "RS Munck e Poda",
          description:
            "Poda de árvores, remoção de árvores, roçada, serviços ambientais e caminhão munck em Joinville, Araquari e região norte de Santa Catarina.",
          url: "https://rspoda.com.br",
          image: `https://rspoda.com.br${equipe.url}`,
          telephone: "+5547999439286",
          priceRange: "$$",
          taxID: COMPANY.cnpj,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Joinville",
            addressRegion: "SC",
            addressCountry: "BR",
          },
          areaServed: CIDADES.map((c) => ({ "@type": "City", name: c })),
          openingHours: "Mo-Fr",
          geo: {
            "@type": "GeoCoordinates",
            latitude: -26.3044,
            longitude: -48.8456,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqSchema(),
        }),
      },
    ],
  }),
  component: Index,
});

const servicos = [ 
  { icon: TreeDeciduous, image: podaAltura.url, title: "Poda de árvores em Joinville", text: "Poda técnica em qualquer altura com cesto aéreo e caminhão munck, inclusive próximo à rede elétrica.", }, 
  
  { icon: Leaf, image: "/images/rocada1.png", title: "Roçada de terrenos", text: "Roçada em Joinville e Araquari: lotes, chácaras, condomínios e áreas industriais.", }, 
  { icon: Recycle, image: podaEscalada.url, title: "Limpeza e retirada de resíduos", text: "Recolhimento de galhos, troncos e entulho vegetal, com a área entregue varrida e organizada.", }, 
];
const provaSocial = [
  { icon: BadgeCheck, title: "Empresa registrada", text: `CNPJ ${COMPANY.cnpj}` },
  { icon: Users, title: "Equipe com 5 profissionais", text: "Time próprio, uniformizado e treinado." },
  { icon: Ruler, title: "Atendimento em até 30 metros de altura", text: "Cesto aéreo, escalada e munck." },
  { icon: ClipboardCheck, title: "Visita técnica", text: "Avaliação no local antes da execução." },
  { icon: Wrench, title: "Equipamentos profissionais", text: "Máquinas revisadas e adequadas." },
  { icon: Axe, title: "Motosserras STIHL", text: "Corte limpo, seguro e mais rápido." },
  { icon: Truck, title: "Caminhão munck próprio", text: "Sem depender de terceiros." },
  { icon: Timer, title: "Atendimento rápido", text: "Retorno no WhatsApp e agenda organizada." },
  { icon: Sparkles, title: "Limpeza completa", text: "Área entregue limpa após o serviço." },
  { icon: Recycle, title: "Descarte conforme orçamento", text: "Destinação combinada previamente." },
];

const numeros = [
  { icon: MapPin, value: "Joinville", label: "e região norte de SC" },
  { icon: TreeDeciduous, value: "Poda, remoção e roçada", label: "serviços executados" },
  { icon: Truck, value: "Munck próprio", label: "caminhão da própria equipe" },
];

const diferenciais = [
  {
    icon: ShieldCheck,
    title: "Segurança em primeiro lugar",
    text: "Isolamento da área, sinalização e procedimentos de trabalho em altura.",
  },
  {
    icon: HardHat,
    title: "EPIs completos",
    text: "Capacete, cinto, protetores e uniforme em toda a equipe, sem exceção.",
  },
  {
    icon: BadgeCheck,
    title: "Motosserras STIHL",
    text: "Equipamentos profissionais revisados, com corte limpo e menor risco.",
  },
  {
    icon: Building2,
    title: "Residências e empresas",
    text: "Atendimento para casas, condomínios, comércios e indústrias.",
  },
];

const seguranca = [
  { icon: HardHat, title: "Utilização de EPIs", text: "Capacete, cinto, luvas, protetor auricular e facial." },
  { icon: Wrench, title: "Equipamentos revisados", text: "Manutenção preventiva antes de cada serviço." },
  { icon: Axe, title: "Motosserras profissionais STIHL", text: "Ferramentas de linha profissional." },
  { icon: ClipboardCheck, title: "Planejamento antes da execução", text: "Análise da árvore, do local e dos riscos." },
  { icon: Cone, title: "Isolamento da área", text: "Sinalização e controle de circulação durante o trabalho." },
  { icon: ShieldCheck, title: "Segurança da equipe e do cliente", text: "Proteção do patrimônio e das pessoas no entorno." },
];

const galeria: GalleryItem[] = [
  { src: podaAltura.url, alt: "Poda de árvore em altura com cesto aéreo próximo à rede elétrica em Joinville", category: "Poda" },
  { src: podaEscalada.url, alt: "Podador escalando árvore com cinto de segurança e motosserra", category: "Poda" },
  { src: rocada.url, alt: "Roçada de terreno com equipamento profissional e EPIs", category: "Munck" },

  { src: limpeza.url, alt: "Área limpa e galhos recolhidos após o serviço de poda", category: "Limpeza" },

  { src: "/images/munck1.jpeg", alt: "Caminhão munck da RS Munck e Poda em operação", category: "Munck" },
  { src: "/images/munck2.jpeg", alt: "Caminhão munck da RS Munck e Poda em operação", category: "Munck" },
  { src: "/images/munck3.jpeg", alt: "Caminhão munck da RS Munck e Poda em operação", category: "Munck" },
  { src: "/images/munck4.jpeg", alt: "Caminhão munck da RS Munck e Poda em operação", category: "Munck" },
  { src: "/images/derrubada.jpeg", alt: "Derrubada de árvore realizada pela equipe da RS Munck e Poda", category: "Remoção" },
  { src: "/images/munck5.jpeg", alt: "Caminhão munck da RS Munck e Poda em operação", category: "Munck" },
  { src: "/images/munck6.jpeg", alt: "Caminhão munck da RS Munck e Poda em operação", category: "Munck" },
];

const antesDepois = [
  {
    title: "Árvore sobre a rede elétrica → poda finalizada",
    before: rocada.url,
    after: limpeza.url,
    beforeAlt: "Terreno com vegetação alta antes da roçada",
    afterAlt: "Terreno limpo e organizado depois da roçada",
  },
  {
    title: "Terreno com mato alto → área roçada",
    before: podaAltura.url,
    after: podaEscalada.url,
    beforeAlt: "Árvore alta encostando na rede elétrica antes da poda",
    afterAlt: "Árvore podada com segurança após o serviço",
  },
];

const faq = [
  {
    q: "Fazem poda em qualquer altura?",
    a: "Não. Trabalhamos com caminhão munck, cesto aéreo e técnicas de escalada, o que permite atender árvores de pequeno, médio e grande porte até 30 metros de altura. Árvores muito altas ou com acesso difícil podem exigir avaliação técnica.",
  },
  {
    q: "Trabalham próximos à rede elétrica?",
    a: "Sim. A poda próxima à rede elétrica é feita com planejamento, isolamento da área, EPIs e descida controlada dos galhos.",
  },
  {
    q: "Atendem empresas?",
    a: "Atendemos residências, condomínios, comércios, indústrias e áreas rurais em Joinville, Araquari e região.",
  },
  {
    q: "Fazem visita técnica?",
    a: "Sim. Quando o serviço exige avaliação presencial, agendamos uma visita técnica para medir riscos, acessos e definir o método de trabalho.",
  },
  {
    q: "Fazem limpeza após o serviço?",
    a: "Sim. A limpeza da área faz parte do serviço: recolhemos galhos e resíduos e entregamos o local organizado.",
  },
  {
    q: "O descarte está incluso?",
    a: "O descarte é definido no orçamento, de acordo com o volume de material e a distância do destino.",
  },
  {
    q: "Fazem atendimento emergencial?",
    a: "Sim, realizamos atendimento emergencial quando necessário, como árvores caídas ou com risco iminente de queda.",
  },
  {
    q: "Quanto tempo demora para executar o serviço?",
    a: "Depende do porte da árvore e do acesso ao local. Muitos serviços são concluídos no mesmo dia; o prazo exato é informado no orçamento.",
  },
];

function faqSchema() {
  return faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  }));
}

function Index() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <div id="topo" className="min-h-screen bg-background">
      <Header />
      <FloatingWhatsApp />

      <main>
        {/* HERO */}
        <section className="relative isolate flex min-h-[94svh] items-center overflow-hidden pt-20">
          <img
            src={equipe.url}
            alt="Equipe da RS Munck e Poda com caminhão munck ao lado de árvores em Joinville"
            width={1200}
            height={1600}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 -z-20 size-full scale-105 object-cover object-[center_65%]"
          />
          <div className="absolute inset-0 -z-10 bg-primary/70" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/90 via-primary/55 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background/95 to-transparent" />

          <div className="mx-auto w-full max-w-6xl px-4 py-16">
            <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-xs font-semibold text-primary-foreground backdrop-blur sm:text-sm">
                <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-accent" />
                Atendemos Joinville, Araquari e cidades em um raio de até 40 km. Atendimento
                emergencial quando necessário.
              </p>

              <h1 className="mt-5 text-3xl font-extrabold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
                Poda de Árvores, Remoção de Árvores e Roçada em Joinville e Região
              </h1>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <WhatsAppButton location="hero" size="xl">
                  Solicite um orçamento gratuito
                </WhatsAppButton>
                <WhatsAppButton
                  location="hero_secundario"
                  variant="outlineLight"
                  size="xl"
                  showIcon={false}
                >
                  Fale com um especialista
                </WhatsAppButton>
              </div>

              <dl className="mt-8 grid gap-4 text-sm text-primary-foreground/90 sm:grid-cols-3 text-left">
                <div className="flex items-start gap-2">
                  <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="font-semibold">WhatsApp</dt>
                    <dd>{WHATSAPP_DISPLAY}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="font-semibold">Segunda à sexta</dt>
                    <dd>Agenda organizada</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Siren aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="font-semibold">Emergência</dt>
                    <dd>Atendimento quando necessário</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* PROVA SOCIAL */}
        <section id="por-que" className="mx-auto max-w-6xl px-4 py-20">
          <header className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Confiança</p>
            <h2 className="mt-2 text-3xl font-extrabold text-primary sm:text-4xl">
              Por que escolher a RS Munck e Poda?
            </h2>
          </header>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {provaSocial.map((p) => (
              <li
                key={p.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
              >
                <p.icon aria-hidden="true" className="size-6 shrink-0 text-accent" />
                <div>
                  <h3 className="text-base font-bold text-primary">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* NÚMEROS */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              Compromisso com qualidade e segurança
            </h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-3 max-w-5xl mx-auto">
              {numeros.map((n) => (
                <li
                  key={n.label}
                  className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 text-center backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                >
                  <n.icon aria-hidden="true" className="mx-auto size-8 text-accent" />
                  <p className="mt-4 text-xl font-extrabold text-primary-foreground">{n.value}</p>
                  <p className="mt-1 text-sm text-primary-foreground/80">{n.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="mx-auto max-w-6xl px-4 py-20">
          <header className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Serviços</p>
            <h2 className="mt-2 text-3xl font-extrabold text-primary sm:text-4xl">
              Poda, remoção, roçada e munck em Joinville e Araquari
            </h2>
          </header>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((s) => (
              <li
                key={s.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.image}
                    alt=""
                    aria-hidden="true"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute bottom-3 left-3 grid size-11 place-items-center rounded-xl bg-card shadow-card">
                    <s.icon aria-hidden="true" className="size-6 text-accent" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center">
            <WhatsAppButton location="apos_servicos" size="xl">
              Solicitar orçamento gratuito
            </WhatsAppButton>
          </div>
        </section>

        {/* ANTES E DEPOIS */}
        <section id="antes-depois" className="bg-secondary py-20">
          <div className="mx-auto max-w-6xl px-4">
            <header className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-accent">Resultados</p>
              <h2 className="mt-2 text-3xl font-extrabold text-primary sm:text-4xl">
                Veja o resultado dos nossos serviços
              </h2>
            </header>
            <div className="mt-10">
              <BeforeAfter items={antesDepois} />
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section id="trabalhos" className="mx-auto max-w-6xl px-4 py-20">
          <header className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Galeria</p>
            <h2 className="mt-2 text-3xl font-extrabold text-primary sm:text-4xl">
              Serviços executados pela nossa equipe
            </h2>
          </header>

          <div className="mt-8">
            <Gallery
              items={galeria}
              
            />
          </div>

          <div className="mt-10 flex justify-center">
            <WhatsAppButton location="apos_galeria" size="xl">
              Atendimento rápido pelo WhatsApp
            </WhatsAppButton>
          </div>
        </section>

      



        {/* MUNCK */}
        <section id="munck" className="bg-secondary py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
            <img
              src={munck.url}
              alt="Caminhão munck da RS Munck e Poda com braço articulado em operação"
              width={1000}
              height={750}
              loading="lazy"
              decoding="async"
              className="h-72 w-full rounded-2xl object-cover shadow-card lg:h-[26rem]"
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent">Munck</p>
              <h2 className="mt-2 text-3xl font-extrabold text-primary sm:text-4xl">
                Também realizamos serviços com Caminhão Munck
              </h2>
              <p className="mt-4 text-muted-foreground">
                Além da poda de árvores, a RS Munck e Poda realiza movimentação de cargas,
                instalação de containers, içamento de máquinas, estruturas metálicas e apoio para
                obras.
              </p>
              <div className="mt-8">
                <WhatsAppButton location="munck" size="xl">
                  Conheça nossos serviços de Munck
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>

        {/* ÁREA DE ATENDIMENTO */}
        <section id="area" className="mx-auto max-w-6xl px-4 py-20">
          <header className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              Área de atendimento
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-primary sm:text-4xl">
              Atendemos toda a região Norte de Santa Catarina
            </h2>
            <p className="mt-3 text-muted-foreground">
              Atendimento em cidades em um raio aproximado de 40 km.
            </p>
          </header>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CIDADES.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
              >
                <MapPin aria-hidden="true" className="size-5 shrink-0 text-accent" />
                <span className="font-semibold text-primary">{c}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center">
            <WhatsAppButton location="antes_faq" size="xl">
              Consultar atendimento na minha cidade
            </WhatsAppButton>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-secondary py-20">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">Dúvidas frequentes</h2>
            <Accordion type="single" collapsible className="mt-8">
              {faq.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left text-base font-semibold text-primary">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CHAMADA FINAL */}
        <section className="relative isolate overflow-hidden bg-primary py-24">
          <img
            src={podaEscalada.url}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-10 size-full object-cover opacity-20"
          />
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-5xl">
              Solicite um orçamento gratuito agora mesmo.
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Nossa equipe está pronta para atender você com rapidez, segurança e qualidade.
            </p>
            <div className="mt-9 flex justify-center">
              <WhatsAppButton
                location="chamada_final"
                size="xl"
                className="w-full px-10 py-7 text-lg sm:w-auto"
              >
                Falar no WhatsApp {WHATSAPP_DISPLAY}
              </WhatsAppButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
