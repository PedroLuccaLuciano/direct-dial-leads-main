import { WhatsAppButton } from "./WhatsAppButton";

export type BeforeAfterItem = {
  title: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

export function BeforeAfter({ items }: { items: BeforeAfterItem[] }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
          <h3 className="text-lg font-bold text-primary">{item.title}</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {(
              [
                { label: "Antes", src: item.before, alt: item.beforeAlt },
                { label: "Depois", src: item.after, alt: item.afterAlt },
              ] as const
            ).map((side) => (
              <figure key={side.label} className="relative overflow-hidden rounded-xl">
                <img
                  src={side.src}
                  alt={side.alt}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-64"
                />
                <figcaption className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                  {side.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </article>
      ))}

      <div className="lg:col-span-2 flex justify-center">
        <WhatsAppButton location="antes_depois" size="xl">
          Quero um resultado assim no meu terreno
        </WhatsAppButton>
      </div>
    </div>
  );
}
