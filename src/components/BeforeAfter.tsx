"use client";

import Image from "next/image";
import { useId, useState } from "react";

type Props = {
  before: string | null;
  after: string | null;
  label: string;
  beforeName: string;
  afterName: string;
};

/** Comparador antes/depois. Sem imagens, mostra o placeholder com o nome dos arquivos. */
export default function BeforeAfter({ before, after, label, beforeName, afterName }: Props) {
  const [pos, setPos] = useState(50);
  const id = useId();

  return (
    <figure className="w-full">
      <div className="relative aspect-[4/5] select-none overflow-hidden rounded-3xl bg-night shadow-[0_24px_60px_-24px_oklch(0.15_0.08_266/0.8)]">
        {/* DEPOIS (fundo) */}
        <Layer src={after} alt={`${label}, depois`} name={afterName} side="after" />
        {/* ANTES (recortado) */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Layer src={before} alt={`${label}, antes`} name={beforeName} side="before" />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-night/80 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">Antes</span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-red px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">Depois</span>

        <div className="pointer-events-none absolute inset-y-0 w-[3px] -translate-x-1/2 bg-white shadow-[0_0_0_1px_oklch(0.2_0.07_266/0.2)]" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-blue shadow-lg">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 6-6 6 6 6M15 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        <label htmlFor={id} className="sr-only">
          Arraste para comparar antes e depois, {label}
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 size-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-3 text-sm font-bold text-white/80">{label}</figcaption>
    </figure>
  );
}

function Layer({ src, alt, name, side }: { src: string | null; alt: string; name: string; side: "before" | "after" }) {
  if (src) return <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 30vw, 80vw" className="object-cover" draggable={false} />;
  return (
    <div className={`ph absolute inset-0 ${side === "before" ? "brightness-75" : ""}`} role="img" aria-label={`${alt} (imagem pendente)`}>
      <div className="ph-grid absolute inset-0" />
      <div className={`absolute inset-y-0 flex w-1/2 flex-col items-center justify-center gap-1 px-3 text-center text-white/60 ${side === "before" ? "left-0" : "right-0"}`}>
        <p className="text-xs font-bold uppercase tracking-widest">{side === "before" ? "Foto antes" : "Foto depois"}</p>
        <p className="break-all font-mono text-[0.65rem] text-white/45">images/{name}.jpg</p>
      </div>
    </div>
  );
}
