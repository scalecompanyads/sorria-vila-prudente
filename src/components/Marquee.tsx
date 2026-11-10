import { marquee } from "@/content";
import { SmileMark } from "./icons";

export default function Marquee() {
  // 3 repetições por lista para cobrir telas largas; a trilha tem 2 listas e anda 50%.
  const items = [...marquee, ...marquee, ...marquee];
  return (
    <div className="marquee overflow-hidden bg-blue py-4 text-white" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <ul key={dup} className="flex shrink-0 items-center">
            {items.map((word, i) => (
              <li key={`${dup}-${i}`} className="flex items-center">
                <span className="whitespace-nowrap px-6 text-lg font-extrabold tracking-tight sm:text-xl">{word}</span>
                <SmileMark className="h-3 w-6 text-white/60" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
