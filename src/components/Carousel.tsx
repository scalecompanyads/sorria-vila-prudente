"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** Classes da trilha de itens (rolagem horizontal) */
  className?: string;
  label: string;
};

/**
 * Trilha com rolagem horizontal + botões anterior/próximo e indicadores.
 * Os controles só aparecem quando os itens não cabem na tela (no desktop, com tudo visível, somem).
 */
export default function Carousel({ children, className = "", label }: Props) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [overflowing, setOverflowing] = useState(false);
  const count = Children.count(children);

  const padLeft = () => (track.current ? parseFloat(getComputedStyle(track.current).paddingLeft) || 0 : 0);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setOverflowing(el.scrollWidth > el.clientWidth + 4);
    const items = Array.from(el.children) as HTMLElement[];
    const left = el.scrollLeft;
    let best = 0;
    let bestDist = Infinity;
    items.forEach((item, i) => {
      const d = Math.abs(item.offsetLeft - padLeft() - left);
      if (d < bestDist) {
        best = i;
        bestDist = d;
      }
    });
    // No fim da rolagem, o último item conta como ativo mesmo que não alcance o início
    if (Math.ceil(left + el.clientWidth) >= el.scrollWidth - 2) best = items.length - 1;
    setActive(best);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    el.addEventListener("scroll", measure, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", measure);
    };
  }, [measure]);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const item = el.children[Math.max(0, Math.min(count - 1, i))] as HTMLElement | undefined;
    if (!item) return;
    el.scrollTo({ left: item.offsetLeft - padLeft(), behavior: "smooth" });
  };

  return (
    <div role="group" aria-roledescription="carrossel" aria-label={label}>
      <div ref={track} className={`relative ${className}`}>
        {children}
      </div>

      {overflowing ? (
        <div className="mt-6 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => go(active - 1)}
            disabled={active === 0}
            aria-label="Caso anterior"
            className="grid size-12 place-items-center rounded-full bg-white text-blue transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Escolher caso">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Ir para o caso ${i + 1}`}
                onClick={() => go(i)}
                className="grid h-6 place-items-center px-0.5"
              >
                <span className={`block h-2.5 rounded-full transition-colors ${i === active ? "w-7 bg-white" : "w-2.5 bg-white/40"}`} />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(active + 1)}
            disabled={active >= count - 1}
            aria-label="Próximo caso"
            className="grid size-12 place-items-center rounded-full bg-white text-blue transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
}
