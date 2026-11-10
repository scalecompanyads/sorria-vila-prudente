import { steps } from "@/content";
import SectionHeading from "./SectionHeading";
import WhatsAppButton from "./WhatsAppButton";

export default function FirstConsult() {
  return (
    <section id="primeira-consulta" className="relative isolate overflow-hidden bg-night py-20 text-white md:py-28">
      <div className="pointer-events-none absolute -right-32 top-0 -z-10 size-[28rem] rounded-full bg-blue/30 blur-3xl" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          center
          tone="dark"
          eyebrow="Primeira consulta"
          title="Como é a primeira consulta"
          text="Do primeiro contato até o plano de tratamento, você sabe o que vai acontecer em cada etapa."
          className="max-w-3xl"
        />

        <ol className="reveal mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex flex-col rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-7 sm:p-8">
              <span className="display text-[4.5rem] leading-none text-red-bright">0{i + 1}</span>
              <h3 className="mt-6 text-2xl font-extrabold leading-tight tracking-tight">{s.title}</h3>
              <p className="mt-3 text-[1.02rem] leading-relaxed text-white/80">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-10 flex justify-center md:mt-14">
          <WhatsAppButton size="lg" className="w-full sm:w-auto" source="primeira-consulta">
            Quero agendar minha avaliação
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
