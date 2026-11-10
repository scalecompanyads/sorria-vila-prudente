import { offer } from "@/content";
import WhatsAppButton from "./WhatsAppButton";

export default function OfferBanner() {
  return (
    <section aria-labelledby="oferta-titulo" className="relative z-10 -mt-12 px-5 pb-14 sm:px-8 md:-mt-16 md:pb-20 lg:px-10">
      <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-red text-white shadow-[0_36px_80px_-28px_oklch(0.4_0.2_25/0.75)]">
        {/* Sorriso gigante decorativo */}
        <svg viewBox="0 0 400 200" className="pointer-events-none absolute -bottom-16 -right-16 w-[26rem] text-white/[0.09] md:w-[34rem]" fill="none" aria-hidden="true">
          <path d="M20 40c60 130 300 130 360 0" stroke="currentColor" strokeWidth="46" strokeLinecap="round" />
        </svg>

        <div className="relative grid items-center gap-8 p-6 sm:p-10 xl:grid-cols-[1fr_auto] xl:gap-14 xl:p-12">
          <div className="text-center md:text-left">
            <p className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-1.5 text-[0.8rem] font-extrabold uppercase tracking-[0.12em] text-red">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-red opacity-70" />
                <span className="relative inline-flex size-2.5 rounded-full bg-red" />
              </span>
              {offer.badge}
            </p>
            <h2 id="oferta-titulo" className="display mt-5 text-[clamp(2rem,1.2rem+3.4vw,3.6rem)]">
              {offer.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1.05rem] md:mx-0 leading-relaxed text-white/90 md:text-lg">{offer.text}</p>
          </div>

          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-5 xl:flex-col xl:items-stretch">
            <p className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl border-2 border-white/80 px-5 py-3 text-xl font-extrabold tracking-tight md:text-2xl">
              {offer.spots}
            </p>
            {/* Texto sempre em uma linha: versão curta só em telas bem estreitas */}
            <WhatsAppButton size="lg" className="w-full whitespace-nowrap !px-4 sm:!px-9" source="oferta">
              <span className="sm:hidden">{offer.ctaShort}</span>
              <span className="hidden sm:inline">{offer.cta}</span>
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
