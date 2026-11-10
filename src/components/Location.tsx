import { mapsDirectionsUrl, mapsEmbedUrl, site, whatsappUrl } from "@/content";
import { ArrowIcon, InstagramIcon, PinIcon, WhatsAppIcon } from "./icons";
import SectionHeading from "./SectionHeading";
import WhatsAppButton from "./WhatsAppButton";

export default function Location() {
  const a = site.address;
  return (
    <section id="localizacao" className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Localização" title="Fácil de chegar em Vila Prudente" className="max-w-3xl" />

        <div className="reveal mt-12 grid overflow-hidden rounded-[2rem] bg-night text-white lg:mt-16 lg:grid-cols-[0.8fr_1.4fr]">
          <div className="flex flex-col justify-between gap-8 p-7 sm:p-10">
            <div className="space-y-6">
              <div className="flex gap-4">
                <PinIcon className="mt-1 size-6 shrink-0 text-red-bright" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-white/60">Endereço</p>
                  <address className="mt-1 text-lg font-bold not-italic leading-snug">
                    {a.street}
                    <br />
                    {a.district}, {a.city} {a.state}
                    <br />
                    CEP {a.zip}
                  </address>
                  <a
                    href={mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-white underline decoration-red-bright decoration-2 underline-offset-4 hover:text-red-bright"
                  >
                    Como chegar
                    <ArrowIcon className="size-4" />
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <WhatsAppIcon className="mt-1 size-6 shrink-0 text-wa" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-white/60">WhatsApp</p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-lg font-bold hover:text-wa">
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <InstagramIcon className="mt-1 size-6 shrink-0 text-red-bright" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-white/60">Instagram</p>
                  <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-lg font-bold hover:text-red-bright">
                    {site.instagramHandle}
                  </a>
                </div>
              </div>

              {site.hours ? (
                <p className="text-[0.98rem] text-white/80">
                  <span className="font-bold text-white">Horário:</span> {site.hours}
                </p>
              ) : null}
            </div>

            <WhatsAppButton size="lg" className="w-full" source="localizacao">
              Falar com a clínica
            </WhatsAppButton>
          </div>

          <div className="min-h-[22rem] lg:min-h-[34rem]">
            <iframe
              title="Mapa com a localização da Sorria Vila Prudente"
              src={mapsEmbedUrl}
              className="size-full min-h-[22rem] border-0 lg:min-h-[34rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
