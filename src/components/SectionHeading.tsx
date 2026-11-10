import { SmileMark } from "./icons";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  tone?: "light" | "dark";
  /** Centraliza eyebrow, título e texto */
  center?: boolean;
  className?: string;
};

export default function SectionHeading({ eyebrow, title, text, tone = "light", center = false, className = "" }: Props) {
  const dark = tone === "dark";
  return (
    <div className={`reveal ${center ? "mx-auto text-center" : ""} ${className}`}>
      <p className={`eyebrow ${dark ? "text-white/90" : "text-blue"}`}>
        <SmileMark className={`h-3 w-6 ${dark ? "text-red-bright" : "text-red"}`} />
        {eyebrow}
      </p>
      <h2 className="display h2 mt-4">{title}</h2>
      {text ? <p className={`lead mt-5 ${center ? "mx-auto" : ""} ${dark ? "text-white/85" : "text-muted"}`}>{text}</p> : null}
    </div>
  );
}
