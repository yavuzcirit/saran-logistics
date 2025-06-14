import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Brands from "@/components/Brands";

export const metadata: Metadata = {
  title: "Saran Lojistik | Evden Eve Nakliyat ve Taşımacılık Hizmetleri",
  description:
    "İstanbul ve tüm Türkiye'de profesyonel evden eve nakliyat, taşımacılık, depolama, kiralık kamyon ve kamyonet hizmetleri. Güvenilir ve ekonomik lojistik çözümler için Saran Lojistik.",
  keywords: [
    "evden eve nakliyat",
    "istanbul taşımacılık",
    "nakliye firması",
    "taşıma şirketi",
    "depolama hizmetleri",
    "kiralık kamyon",
    "kiralık kamyonet",
    "lojistik çözümler",
    "ev taşıma",
    "ofis taşıma",
    "eşya depolama",
    "istanbul nakliyat",
    "profesyonel taşımacılık",
    "güvenli nakliyat",
    "parsiyel taşımacılık",
    "maltepe taşımacılık",
    "maltepe evden eve",

  ],
  alternates: {
    canonical: "https://www.saranlojistik.com",
  },
  openGraph: {
    title: "Saran Lojistik | Evden Eve Nakliyat ve Taşımacılık Hizmetleri",
    description:
      "İstanbul ve tüm Türkiye'de profesyonel evden eve nakliyat, taşımacılık, depolama hizmetleri",
    type: "website",
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "Saran Lojistik",
      description:
        "İstanbul ve tüm Türkiye'de profesyonel evden eve nakliyat ve taşımacılık hizmetleri",
      areaServed: "Türkiye",
      priceRange: "₺₺",
      address: {
        "@type": "PostalAddress",
        addressLocality: "İstanbul",
        addressCountry: "TR",
      },
      services: [
        "Evden Eve Nakliyat",
        "Yük Taşımacılığı",
        "Depolama",
        "Gümrükleme",
        "Lojistik",
      ],
    }),
  },
};

const images = {
  hero: "/bg-hero.webp",
  karayolu: "/blog-1.webp",
  depo: "/blog-2.webp",
  gumruk: "/blog-3.webp",
  yol: "/blog-4.webp",
};

export default function AnaSayfa() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src={images.hero}
          alt="Lojistik Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-8 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Saran Lojistik ile
              <br />Güvenli Teslimat
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Türkiye&apos;nin önde gelen lojistik çözüm ortağı olarak,
              modern filomuz ve uzman kadromuzla hizmetinizdeyiz.
            </p>
            <Link href="/iletisim">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg">
                Teklif Alın
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hizmetler Section */}
      <section id="hizmetler" className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Hizmetlerimiz</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[{
              title: "Evden Eve Taşımacılık",
              image: images.karayolu,
              desc: "Profesyonel ekibimizle güvenli ve hızlı evden eve nakliyat hizmetleri",
            }, {
              title: "Yük Taşımacılığı",
              image: images.yol,
              desc: "Yurt içi ve yurt dışı ticari yük taşımacılık hizmetleri",
            }, {
              title: "Depolama",
              image: images.depo,
              desc: "Modern depolama ve stok yönetimi çözümleri",
            }, {
              title: "Gümrükleme",
              image: images.gumruk,
              desc: "Profesyonel gümrük danışmanlığı ve operasyon hizmetleri",
            }].map((hizmet, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={hizmet.image}
                    alt={hizmet.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{hizmet.title}</h3>
                  <p className="text-gray-600">{hizmet.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İşbirliklerimiz Section */}
      <Brands />
    </main>
  );
}
