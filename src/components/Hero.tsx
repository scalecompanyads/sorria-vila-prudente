import { getImageProps } from "next/image";
import { site } from "@/content";
import { resolveImage } from "@/lib/media";
import { StarIcon } from "./icons";
import WhatsAppButton from "./WhatsAppButton";

// GIF transparente de 1px: fallback do <img> quando só existe imagem para um dos tamanhos,
// assim o outro tamanho não baixa nada.
const BLANK = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

/**
 * Fundo do hero com uma imagem para desktop e outra para mobile.
 * Onde falta a imagem de um tamanho, aparece o placeholder só naquele tamanho.
 */
function HeroBackground() {
  const desktop = resolveImage("hero-desktop");
  const mobile = resolveImage("hero-mobile");

  const common = { alt: "", fill: true, sizes: "100vw", priority: true, quality: 78 };
  const desktopProps = desktop ? getImageProps({ ...common, src: desktop }).props : null;
  const mobileProps = mobile ? getImageProps({ ...common, src: mobile }).props : null;

  // Em quais larguras o placeholder deve aparecer
  const placeholder = desktop && mobile ? null : !desktop && !mobile ? "" : desktop ? "md:hidden" : "hidden md:block";
  const missing = [!desktop && "hero-desktop.jpg (1920 x 1080)", !mobile && "hero-mobile.jpg (900 x 1600)"].filter(Boolean);

  return (
    <>
      {placeholder !== null ? (
        <div className={`ph absolute inset-0 ${placeholder}`} aria-hidden="true">
          <div className="ph-grid absolute inset-0" />
          {/* Sorriso gigante da marca, só enquanto não há foto */}
          <svg viewBox="0 0 400 200" className="absolute -bottom-[6%] -right-[12%] w-[130%] max-w-none text-red/50 md:-right-[6%] md:bottom-[-12%] md:w-[62%]" fill="none">
            <path d="M20 40c60 130 300 130 360 0" stroke="currentColor" strokeWidth="46" strokeLinecap="round" />
          </svg>
          <p className="absolute bottom-3 right-28 hidden max-w-xs text-right font-mono text-[0.7rem] leading-relaxed text-white/45 md:block">
            Adicionar imagem de fundo:
            {missing.map((m) => (
              <span key={String(m)} className="block">
                public/images/{m}
              </span>
            ))}
          </p>
        </div>
      ) : null}

      {desktopProps || mobileProps ? (
        <picture>
          {desktopProps ? <source media="(min-width: 768px)" srcSet={desktopProps.srcSet} /> : null}
          {mobileProps ? <source media="(max-width: 767px)" srcSet={mobileProps.srcSet} /> : null}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            {...(mobileProps ?? desktopProps)!}
            src={desktopProps && mobileProps ? mobileProps.src : BLANK}
            srcSet={desktopProps && mobileProps ? mobileProps.srcSet : undefined}
            alt=""
            className="hero-zoom absolute inset-0 size-full object-cover"
          />
        </picture>
      ) : null}
    </>
  );
}

export default function Hero() {
  const trust = [
    { k: "stars", label: `${String(site.google.rating).replace(".", ",")} no Google`, sub: `${site.google.total} avaliações` },
    { k: "doc", label: site.doctor, sub: site.cro },
    { k: "loc", label: "Vila Prudente", sub: "São Paulo, SP" },
  ];

  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-night text-white md:items-center">
      <HeroBackground />
      {/* Legibilidade: gradiente à esquerda no desktop, embaixo no mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/80 via-45% to-night/10 md:bg-gradient-to-r md:from-night md:via-night/80 md:via-40% md:to-night/5" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-28 sm:px-8 md:pb-28 md:pt-36 lg:px-10">
        <div className="max-w-[44rem] text-center md:text-left">
          <p className="rise eyebrow justify-center text-white/90 md:justify-start" style={{ "--i": 0 } as React.CSSProperties}>
            <span className="hidden h-[3px] w-8 rounded-full bg-red-bright md:inline-block" />
            Implantes &bull; Lentes &bull; Clareamento
          </p>

          <h1 className="rise display h1 mt-5" style={{ "--i": 1 } as React.CSSProperties}>
            Transformamos{" "}
            <span className="relative inline-block">
              sorrisos
              <svg className="smile-line text-red-bright" viewBox="0 0 100 14" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 4C30 18 70 18 98 4" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" vectorEffect="non-scaling-stroke" />
              </svg>
            </span>{" "}
            todos os dias.
          </h1>

          <p className="rise lead mx-auto mt-6 text-white/85 md:mx-0" style={{ "--i": 2 } as React.CSSProperties}>
            Implantes, lentes de contato dental e clareamento com o {site.doctor}, em Vila Prudente. Atendimento humanizado, do primeiro contato ao sorriso novo.
          </p>

          <div className="rise mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4" style={{ "--i": 3 } as React.CSSProperties}>
            <WhatsAppButton size="lg" source="hero">
              Agendar minha avaliação
            </WhatsAppButton>
            <a
              href="#procedimentos"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-7 py-[1.05rem] text-[1.02rem] font-bold text-white transition-colors hover:border-white hover:bg-white/10 md:py-[1.15rem]"
            >
              Ver procedimentos
            </a>
          </div>

          <ul className="rise mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 border-t border-white/15 pt-6 md:justify-start" style={{ "--i": 4 } as React.CSSProperties}>
            {trust.map((t) => (
              <li key={t.k} className="flex flex-col items-center gap-0.5 md:items-start">
                <span className="flex items-center gap-1.5 text-[0.95rem] font-extrabold">
                  {t.k === "stars" ? <StarIcon className="size-4 text-[oklch(0.82_0.16_85)]" /> : null}
                  {t.label}
                </span>
                <span className="text-[0.82rem] text-white/65">{t.sub}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
