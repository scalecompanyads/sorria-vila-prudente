import WhatsAppButton from "./WhatsAppButton";

export default function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-night py-20 text-white md:py-28">
      <div className="pointer-events-none absolute -left-24 top-0 -z-10 size-[30rem] rounded-full bg-blue/40 blur-3xl" aria-hidden="true" />
      <svg viewBox="0 0 400 200" className="pointer-events-none absolute -bottom-10 -right-20 -z-10 w-[34rem] text-red/40 md:w-[48rem]" fill="none" aria-hidden="true">
        <path d="M20 40c60 130 300 130 360 0" stroke="currentColor" strokeWidth="46" strokeLinecap="round" />
      </svg>

      <div className="reveal mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <h2 className="display h2 max-w-3xl">Chega de adiar o sorriso que você merece.</h2>
        <p className="lead mt-5 text-white/85">
          Chame a equipe no WhatsApp, conte o que você deseja e agende sua avaliação com o Dr. Guilherme Bogado.
        </p>
        <WhatsAppButton size="lg" className="mt-9 w-full sm:w-auto" source="cta-final">
          Agendar minha avaliação
        </WhatsAppButton>
      </div>
    </section>
  );
}
