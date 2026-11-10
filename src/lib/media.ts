import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif", "JPG", "JPEG", "PNG"];

/**
 * Procura public/images/<name>.<ext> em tempo de build.
 * Retorna o caminho público se existir, ou null para o componente mostrar o placeholder.
 * Para trocar uma imagem basta colocar o arquivo na pasta com o mesmo nome (qualquer extensão).
 */
export function resolveImage(name: string): string | null {
  for (const ext of EXTENSIONS) {
    const file = path.join(process.cwd(), "public", "images", `${name}.${ext}`);
    if (fs.existsSync(file)) return `/images/${name}.${ext}`;
  }
  return null;
}
