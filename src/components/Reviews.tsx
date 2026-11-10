import { googleReviewsUrl, reviews, site } from "@/content";
import { ArrowIcon, StarIcon } from "./icons";
import SectionHeading from "./SectionHeading";

function Stars({ value, className = "size-5" }: { value: number; className?: string }) {
  return (
    <span className="flex gap-0.5" role="img" aria-label={`Nota ${value} de 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon key={n} className={`${className} ${n <= Math.round(value) ? "text-[oklch(0.8_0.17_85)]" : "text-line"}`} />
      ))}
    </span>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="size-5" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5Z" />
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.6 5.9c4.4-4.1 7-10.1 7-17.6Z" />
      <path fill="#FBBC05" d="M10.5 28.7a14.5 14.5 0 0 1 0-9.4l-7.9-6.1a24 24 0 0 0 0 21.6l7.9-6.1Z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.9 2.3-8.3 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48Z" />
    </svg>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function Reviews() {
  const rating = String(site.google.rating).replace(".", ",");

  return (
    <section id="avaliacoes" className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading center eyebrow="Avaliações no Google" title="Quem já sorriu aqui conta como foi" className="max-w-3xl" />

        <div className="reveal mx-auto mt-10 flex max-w-2xl flex-col items-center gap-6 rounded-3xl bg-white p-6 shadow-[0_20px_50px_-26px_oklch(0.2_0.075_266/0.35)] sm:flex-row sm:justify-between sm:gap-8 sm:p-7">
          <div className="flex items-center gap-4">
            <span className="display text-[4.5rem] leading-[0.85] text-ink">{rating}</span>
            <div>
              <Stars value={site.google.rating} />
              <p className="mt-1 flex items-center gap-1.5 text-sm font-bold text-muted">
                <GoogleG /> {site.google.total} avaliações no Google
              </p>
            </div>
          </div>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue px-6 py-3.5 font-extrabold text-white transition-colors hover:bg-blue-deep sm:w-auto"
          >
            Ver todas no Google
            <ArrowIcon className="size-4" />
          </a>
        </div>

        <div className="reveal mt-8 min-w-0 md:mt-10">
          <div className="snap-row -mx-5 px-5 pb-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 lg:gap-6">
            {reviews.map((r) => (
              <article key={r.name} className="flex w-[84%] flex-col rounded-3xl bg-white p-6 shadow-[0_20px_50px_-26px_oklch(0.2_0.075_266/0.35)] sm:w-[26rem] sm:p-7 lg:w-auto">
                <header className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-full bg-blue text-base font-extrabold text-white">{initials(r.name)}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-extrabold">{r.name}</p>
                    <p className="text-sm text-muted">{r.when}</p>
                  </div>
                  <GoogleG />
                </header>
                <div className="mt-4">
                  <Stars value={r.rating} className="size-4" />
                </div>
                <p className="mt-3 line-clamp-[9] text-[1rem] leading-relaxed text-ink/85">{r.text}</p>
              </article>
            ))}
            {/* TODO: puxar da Google Places API mantendo o formato de `reviews` em content.ts */}
          </div>
        </div>
      </div>
    </section>
  );
}
