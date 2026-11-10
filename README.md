# Sorria Vila Prudente (landing page)

Next.js (App Router) + Tailwind v4 + Manrope. Pronta para a Vercel, sem configuração extra.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Onde editar

| O quê | Onde |
| --- | --- |
| Textos, telefone, endereço, avaliações, FAQ, procedimentos | `src/content.ts` |
| Mensagem padrão do WhatsApp | `whatsappMessage` em `src/content.ts` |
| Cores e animações | `src/app/globals.css` |
| URL do site (SEO) | variável `NEXT_PUBLIC_SITE_URL` na Vercel |

Itens marcados com `[A CONFIRMAR]` em `src/content.ts` vieram da LP antiga e precisam de validação do cliente.

## Imagens (só soltar o arquivo, sem mexer em código)

Cada espaço mostra um placeholder com o nome do arquivo esperado. Coloque o arquivo em `public/images/` com o mesmo nome (aceita jpg, jpeg, png, webp, avif).

| Arquivo | Uso | Tamanho sugerido |
| --- | --- | --- |
| `hero-desktop` | Fundo do hero no desktop (texto fica à esquerda, deixe o lado esquerdo mais limpo) | 1920 x 1080 |
| `hero-mobile` | Fundo do hero no mobile (texto fica embaixo, deixe a parte de baixo mais limpa) | 900 x 1600 |
| `procedimentos/implante` | Card do implante (metade esquerda) | 1000 x 1250 |
| `procedimentos/lentes` | Card de lentes (metade direita) | 1000 x 1250 |
| `procedimentos/clareamento` | Card de clareamento (largura total) | 1920 x 900 |
| `lentes/caso-1-antes`, `caso-1-depois` (idem 2 e 3) | Comparador antes/depois | 800 x 1000 |
| `sobre` | Foto da seção "Quem cuida de você" (hoje: consultório da clínica) | 960 x 1200 |

Se existir só um dos arquivos do hero, ele é usado nos dois tamanhos.

## Avaliações do Google

Hoje são dados estáticos em `reviews` (`src/content.ts`). Para puxar em tempo real, buscar na Google Places API (Place Details, campo `reviews`) em um Server Component ou rota com `revalidate`, devolvendo o mesmo formato (`name`, `when`, `rating`, `text`). Precisa da chave da API e do Place ID da clínica.

## Rastreamento

Todos os botões de WhatsApp têm `data-source` (hero, header, lentes, sobre, faq, localizacao, cta-final, flutuante, menu-mobile) para ligar GTM/Pixel depois.
"# sorria-vila-prudente" 
