"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { menu, site, whatsappUrl } from "@/content";
import { InstagramIcon, PinIcon, WhatsAppIcon } from "./icons";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 px-3 pt-3 transition-transform duration-500 sm:px-5 ${open ? "pointer-events-none opacity-0" : ""}`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl bg-white py-2 pl-4 pr-2 transition-shadow duration-300 sm:pl-5 ${
            scrolled ? "shadow-[0_14px_40px_-16px_oklch(0.2_0.075_266/0.45)]" : "shadow-[0_8px_30px_-14px_oklch(0.2_0.075_266/0.35)]"
          }`}
        >
          <a href="#inicio" className="shrink-0" aria-label="Sorria Vila Prudente, ir para o início">
            <Image src="/logo.png" alt="Sorria Vila Prudente Odontologia" width={394} height={184} priority className="h-12 w-auto sm:h-14" />
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
            {menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-[0.92rem] font-bold text-ink/80 transition-colors hover:bg-blue-soft hover:text-blue"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <WhatsAppButton className="hidden sm:inline-flex" source="header">
              Agendar
            </WhatsAppButton>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="grid size-12 place-items-center rounded-xl bg-blue text-white transition-colors hover:bg-blue-deep lg:hidden"
            >
              <span className="flex w-6 flex-col gap-[5px]">
                <span className="h-[2.5px] rounded-full bg-white" />
                <span className="h-[2.5px] w-4/5 self-end rounded-full bg-white" />
                <span className="h-[2.5px] rounded-full bg-white" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu lateral em tela cheia (mobile e tablet) */}
      <div
        id="menu-mobile"
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className="menu-panel fixed inset-0 z-50 flex flex-col overflow-y-auto bg-night text-white lg:hidden"
      >
        <div className="pointer-events-none absolute -right-24 top-1/3 size-[28rem] rounded-full bg-blue/30 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-20 bottom-0 size-80 rounded-full bg-red/20 blur-3xl" aria-hidden="true" />

        <div className="relative flex items-center justify-between px-5 pt-5">
          <div className="rounded-2xl bg-white px-4 py-2">
            <Image src="/logo.png" alt="Sorria Vila Prudente Odontologia" width={394} height={184} className="h-11 w-auto" />
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Fechar menu"
            className="grid size-12 place-items-center rounded-xl bg-white/10 transition-colors hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <nav aria-label="Menu mobile" className="relative mt-8 flex flex-1 flex-col justify-center px-6">
          <ul className="flex flex-col">
            {menu.map((item, i) => (
              <li key={item.href} className="menu-item border-b border-white/10" style={{ "--i": i } as React.CSSProperties}>
                <a
                  href={item.href}
                  onClick={close}
                  className="flex items-baseline gap-4 py-4 text-[clamp(1.9rem,8vw,2.8rem)] font-extrabold leading-none tracking-tight transition-colors hover:text-red-bright"
                >
                  <span className="w-7 text-sm font-bold tracking-normal text-red-bright">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="menu-item relative mt-6 space-y-5 px-6 pb-8" style={{ "--i": menu.length } as React.CSSProperties}>
          <WhatsAppButton size="lg" className="w-full" source="menu-mobile">
            Falar no WhatsApp
          </WhatsAppButton>
          <div className="grid gap-3 text-[0.95rem] text-white/80">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-semibold text-white">
              <WhatsAppIcon className="size-5 text-wa" />
              {site.phoneDisplay}
            </a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-semibold text-white">
              <InstagramIcon className="size-5 text-red-bright" />
              {site.instagramHandle}
            </a>
            <p className="flex items-start gap-3">
              <PinIcon className="mt-0.5 size-5 shrink-0 text-red-bright" />
              <span>
                {site.address.street}, {site.address.district}
                <br />
                {site.address.city} {site.address.state}, {site.address.zip}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
