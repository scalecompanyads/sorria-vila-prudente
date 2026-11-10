import { whatsappUrl } from "@/content";
import { WhatsAppIcon } from "./icons";

export default function FloatingWhatsApp() {
  return (
    <div className="pointer-events-none fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex items-center gap-3 sm:bottom-6 sm:right-6">
      <span className="fab-tip pointer-events-none hidden rounded-full bg-white px-4 py-2.5 text-sm font-extrabold text-ink shadow-[0_12px_30px_-12px_oklch(0.2_0.075_266/0.5)] md:block">
        Fale com a gente
      </span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a clínica no WhatsApp"
        data-source="flutuante"
        className="fab-wa pointer-events-auto"
      >
        <WhatsAppIcon className="size-8" />
      </a>
    </div>
  );
}
