import About from "@/components/About";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import FirstConsult from "@/components/FirstConsult";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Lenses from "@/components/Lenses";
import Location from "@/components/Location";
import Marquee from "@/components/Marquee";
import OfferBanner from "@/components/OfferBanner";
import Procedures from "@/components/Procedures";
import Reviews from "@/components/Reviews";
import { site } from "@/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sorria-vila-prudente.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  url: siteUrl,
  telephone: "+55 11 94307-1333",
  image: `${siteUrl}/logo.png`,
  sameAs: [site.instagramUrl],
  medicalSpecialty: "Dentistry",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.google.rating,
    reviewCount: site.google.total,
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OfferBanner />
        <Marquee />
        <Procedures />
        <Lenses />
        <About />
        <FirstConsult />
        <Reviews />
        <Faq />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
