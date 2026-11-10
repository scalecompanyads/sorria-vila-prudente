import Image from "next/image";
import { resolveImage } from "@/lib/media";
import { ImageIcon } from "./icons";

type Props = {
  /** Caminho dentro de public/images, sem extensão. Ex.: "procedimentos/implante" */
  name: string;
  alt: string;
  sizes?: string;
  /** Texto do placeholder, ex.: "1000 x 1250" */
  hint?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

/**
 * O className de quem chama precisa definir o posicionamento (relative ou absolute) e o tamanho.
 * Mostra a imagem se o arquivo existir em public/images, senão um placeholder
 * que diz exatamente qual arquivo colocar. Sem alterar código para trocar.
 */
export default function MediaSlot({ name, alt, sizes = "100vw", hint, className = "", imgClassName = "", priority }: Props) {
  const src = resolveImage(name);

  if (src) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${imgClassName}`} />
      </div>
    );
  }

  return (
    <div className={`ph overflow-hidden ${className}`} role="img" aria-label={`${alt} (imagem pendente)`}>
      <div className="ph-grid absolute inset-0" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-white/70">
        <ImageIcon className="size-8 opacity-80" />
        <p className="text-xs font-bold uppercase tracking-widest">Adicionar foto</p>
        <p className="max-w-full break-all font-mono text-[0.7rem] text-white/50">public/images/{name}.jpg</p>
        {hint ? <p className="text-[0.7rem] text-white/50">{hint}</p> : null}
      </div>
    </div>
  );
}
