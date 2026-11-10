import { faq } from "@/content";
import SectionHeading from "./SectionHeading";
import WhatsAppButton from "./WhatsAppButton";

export default function Faq() {
  return (
    <section id="duvidas" className="bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16 lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title="O que todo paciente quer saber antes de começar"
            text="Não encontrou sua pergunta? Chame no WhatsApp e respondemos com calma."
          />
          <WhatsAppButton className="reveal mt-8" source="faq">
            Tirar uma dúvida
          </WhatsAppButton>
        </div>

        <div className="faq reveal space-y-3">
          {faq.map((item, i) => (
            <details key={item.q} name="faq" open={i === 0} className="group rounded-2xl border border-line bg-mist transition-colors">
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl p-5 text-left text-[1.05rem] font-extrabold tracking-tight sm:p-6 sm:text-lg">
                {item.q}
                <span className="faq-plus grid size-9 shrink-0 place-items-center rounded-full bg-blue text-white transition-transform duration-300">
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-6 pr-16 text-[1.02rem] leading-relaxed text-muted sm:px-6">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
