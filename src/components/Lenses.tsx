import { lensCases, lensPoints } from "@/content";
import { resolveImage } from "@/lib/media";
import BeforeAfter from "./BeforeAfter";
import Carousel from "./Carousel";
import { SmileMark } from "./icons";
import SectionHeading from "./SectionHeading";
import WhatsAppButton from "./WhatsAppButton";

export default function Lenses() {
  return (
    <section id="lentes" className="relative overflow-hidden bg-blue py-20 text-white md:py-28">
      <SmileMark className="pointer-events-none absolute -right-24 -top-10 hidden w-[34rem] text-white/[0.06] md:block" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end">
          <SectionHeading
            tone="dark"
            eyebrow="Lentes de contato dental"
            title="Veja de perto a diferença de um sorriso bem planejado"
            text="Arraste o controle sobre cada foto e compare o antes e o depois de casos reais da clínica."
          />
          <div className="reveal">
            <ul className="space-y-3">
              {lensPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[1.02rem] font-semibold leading-snug">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-white text-blue">
                    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <WhatsAppButton size="lg" className="mt-8 w-full sm:w-auto" source="lentes">
              Quero minhas lentes
            </WhatsAppButton>
          </div>
        </div>

        <div className="reveal -mx-5 mt-12 px-5 sm:-mx-8 sm:px-8 md:mt-16 lg:mx-0 lg:px-0">
          <Carousel label="Casos de lentes de contato, antes e depois" className="snap-row lg:grid lg:grid-cols-3 lg:gap-6">
            {lensCases.map((c) => (
              <div key={c.id} className="w-[78%] sm:w-[46%] lg:w-auto">
                <BeforeAfter
                  label={c.label}
                  before={resolveImage(c.before)}
                  after={resolveImage(c.after)}
                  beforeName={c.before}
                  afterName={c.after}
                />
              </div>
            ))}
          </Carousel>
        </div>

        <p className="mt-8 text-sm text-white/70">Os resultados variam de paciente para paciente. A indicação é feita após avaliação profissional.</p>
      </div>
    </section>
  );
}
