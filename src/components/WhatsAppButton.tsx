import { whatsappUrl } from "@/content";
import { ArrowIcon, WhatsAppIcon } from "./icons";

type Props = {
  children?: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
  /** Evento enviado ao dataLayer (se existir) quando clicar. */
  source?: string;
};

export default function WhatsAppButton({ children = "Agendar no WhatsApp", size = "md", className = "", source }: Props) {
  const sizing = size === "lg" ? "px-7 py-[1.15rem] text-[1.05rem] md:px-9 md:py-5 md:text-lg" : "px-5 py-3.5 text-[0.95rem]";
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-source={source}
      className={`btn-wa ${sizing} ${className}`}
    >
      <WhatsAppIcon className={`wa-icon ${size === "lg" ? "size-7" : "size-5"} shrink-0`} />
      <span>{children}</span>
      <ArrowIcon className={`wa-arrow ${size === "lg" ? "size-5" : "size-4"} shrink-0`} />
    </a>
  );
}
