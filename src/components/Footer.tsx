import Image from "next/image";
import { menu, site, whatsappUrl } from "@/content";

export default function Footer() {
  const a = site.address;
  return (
    <footer className="bg-ink pb-24 pt-14 text-white/80 sm:pb-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr] lg:px-10">
        <div>
          <div className="inline-block rounded-2xl bg-white px-4 py-2">
            <Image src="/logo.png" alt="Sorria Vila Prudente Odontologia" width={394} height={184} className="h-12 w-auto" />
          </div>
          <p className="mt-5 max-w-sm leading-relaxed">{site.tagline}. Implantes, lentes de contato dental e clareamento em Vila Prudente.</p>
        </div>

        <nav aria-label="Rodapé">
          <p className="text-sm font-extrabold uppercase tracking-widest text-white">Navegação</p>
          <ul className="mt-4 grid gap-2.5">
            {menu.map((m) => (
              <li key={m.href}>
                <a href={m.href} className="transition-colors hover:text-white">
                  {m.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-extrabold uppercase tracking-widest text-white">Contato</p>
          <ul className="mt-4 grid gap-2.5">
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram {site.instagramHandle}
              </a>
            </li>
            <li>
              {a.street}, {a.district}
              <br />
              {a.city} {a.state}, {a.zip}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-6 text-sm text-white/60 sm:px-8 lg:px-10">
        <p>
          Resp. Técnico: {site.doctor}, {site.cro} | {site.croClinic}
        </p>
        <p className="mt-1">© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
