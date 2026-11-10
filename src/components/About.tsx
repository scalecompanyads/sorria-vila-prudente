import { doctorPoints, site } from "@/content";
import MediaSlot from "./MediaSlot";
import SectionHeading from "./SectionHeading";
import WhatsAppButton from "./WhatsAppButton";

export default function About() {
  return (
    <section id="doutor" className="bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
        <div className="reveal relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none lg:self-start">
          <MediaSlot
            name="sobre"
            alt="Consultório da Sorria Vila Prudente com cadeira odontológica e corredor de vidro"
            sizes="(min-width: 1024px) 45vw, 90vw"
            hint="960 x 1200 (retrato)"
            className="relative aspect-[4/5] rounded-[2rem]"
          />
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-white p-4 shadow-[0_18px_50px_-18px_oklch(0.2_0.075_266/0.5)] sm:left-auto sm:right-[-1.5rem] sm:max-w-[16rem] lg:bottom-6 lg:right-6">
            <p className="text-lg font-extrabold leading-tight text-ink">{site.doctor}</p>
            <p className="mt-1 text-sm font-bold text-red">{site.cro}</p>
          </div>
        </div>

        <div className="lg:pt-6">
          <SectionHeading
            eyebrow="Quem cuida de você"
            title={<>Tecnologia e cuidado, com explicação em cada etapa</>}
            text={`Com o ${site.doctor}, você entende o que será feito antes de decidir. Sem pressa, sem surpresa e sem aquele medo de dentista.`}
          />

          <ul className="reveal mt-10 divide-y divide-line border-y border-line">
            {doctorPoints.map((p) => (
              <li key={p.title} className="py-5">
                <h3 className="text-xl font-extrabold tracking-tight">{p.title}</h3>
                <p className="mt-1.5 text-[1.02rem] leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ul>

          <WhatsAppButton size="lg" className="reveal mt-10 w-full sm:w-auto" source="sobre">
            Falar com o Dr. Guilherme
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
