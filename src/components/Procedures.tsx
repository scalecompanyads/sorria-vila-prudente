import { procedures, whatsappUrl } from "@/content";
import { ArrowIcon } from "./icons";
import MediaSlot from "./MediaSlot";
import SectionHeading from "./SectionHeading";

const layout = [
  // Implante e lentes lado a lado, mesma altura (a grade estica os dois)
  "lg:col-span-6 min-h-[32rem] lg:min-h-[42rem]",
  "lg:col-span-6 min-h-[32rem] lg:min-h-[42rem]",
  // Clareamento: largura total, sozinho embaixo
  "lg:col-span-12 min-h-[26rem] lg:min-h-[30rem]",
];

export default function Procedures() {
  return (
    <section id="procedimentos" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-end gap-6 lg:grid-cols-[1.2fr_1fr]">
          <SectionHeading eyebrow="Procedimentos" title={<>Tratamentos para cada tipo de sorriso</>} />
          <p className="lead reveal text-muted lg:pb-2">
            Do implante ao clareamento, cada tratamento começa com uma avaliação cuidadosa para indicar só o que faz sentido para você.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-12 lg:gap-5">
          {procedures.map((p, i) => (
            <article
              key={p.id}
              className={`reveal group relative isolate flex overflow-hidden rounded-[1.75rem] bg-night text-white ${layout[i]}`}
            >
              <MediaSlot
                name={p.image}
                alt={p.alt}
                sizes={i === 2 ? "100vw" : "(min-width: 1024px) 50vw, 100vw"}
                hint={i === 2 ? "1920 x 900 (horizontal)" : "1000 x 1250"}
                className="absolute inset-0 -z-10 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/55 via-40% to-transparent" aria-hidden="true" />

              <div className="flex w-full flex-col justify-between p-6 sm:p-8">
                <span className="grid size-12 place-items-center rounded-full bg-red text-sm font-extrabold">{p.number}</span>

                <div className="max-w-xl">
                  <h3 className="display text-[clamp(1.9rem,1.2rem+2.4vw,3rem)]">{p.title}</h3>
                  <p className="mt-3 text-[1.02rem] leading-relaxed text-white/85">{p.text}</p>

                  {p.extras.length > 0 ? (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.extras.map((e) => (
                        <li key={e} className="rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-[0.85rem] font-bold">
                          {e}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[0.95rem] font-extrabold text-night transition-all hover:gap-3 hover:bg-wa"
                  >
                    Quero saber mais
                    <ArrowIcon className="size-4" />
                    <span className="sr-only">sobre {p.title}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
