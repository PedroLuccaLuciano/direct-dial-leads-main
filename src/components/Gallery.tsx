import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
};

type Props = {
  items: GalleryItem[];
};

export function Gallery({ items }: Props) {
  const [open, setOpen] = useState<GalleryItem | null>(null);

  return (
    <div>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((g) => (
          <li key={g.src + g.category}>
            <button
              type="button"
              onClick={() => setOpen(g)}
              className="group relative block w-full overflow-hidden rounded-xl shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label={`Ampliar foto: ${g.alt}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                width={900}
                height={1200}
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
              />
              <span className="absolute inset-x-0 bottom-0 bg-primary/80 px-3 py-2 text-left text-xs font-semibold text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {g.category}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-3xl overflow-hidden p-0">
          <DialogTitle className="sr-only">{open?.alt ?? "Foto"}</DialogTitle>
          {open ? (
            <img
              src={open.src}
              alt={open.alt}
              className="max-h-[80svh] w-full object-contain bg-primary"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}