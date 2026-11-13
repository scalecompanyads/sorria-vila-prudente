import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sorria-vila-prudente.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sorria Vila Prudente | Implantes, Lentes de Contato e Clareamento em SP",
  description:
    "Clínica odontológica na Vila Prudente, São Paulo. Implantes dentários, lentes de contato dental e clareamento com o Dr. Guilherme Bogado. Agende sua avaliação pelo WhatsApp.",
  keywords: [
    "implante dentário Vila Prudente",
    "lentes de contato dental São Paulo",
    "clareamento dental Vila Prudente",
    "dentista Vila Prudente",
    "Sorria Vila Prudente",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Sorria Vila Prudente",
    title: "Sorria Vila Prudente | Transformando sorrisos todos os dias",
    description: "Implantes, lentes de contato dental e clareamento em Vila Prudente, São Paulo.",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#2755CC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-TFDKFL79"
          strategy="beforeInteractive"
        />
        <Script id="gtm-datalayer" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
