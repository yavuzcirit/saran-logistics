import Image from 'next/image'
import Link from 'next/link'

interface BlogPost {
  id: number;
  baslik: string;
  ozet: string;
  resim: string;
  tarih: string;
  kategori: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    baslik: "Lojistik Sektöründe Dijital Dönüşüm",
    ozet: "Modern lojistik süreçlerinde teknolojinin rolü ve dijital dönüşümün önemi...",
    resim: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6",
    tarih: "20 Mart 2024",
    kategori: "Teknoloji"
  },
  {
    id: 2,
    baslik: "Sürdürülebilir Lojistik Çözümleri",
    ozet: "Çevre dostu taşımacılık ve yeşil lojistik uygulamaları hakkında bilmeniz gerekenler...",
    resim: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51",
    tarih: "18 Mart 2024",
    kategori: "Sürdürülebilirlik"
  },
  {
    id: 3,
    baslik: "E-ticaret Lojistiğinde Son Trendler",
    ozet: "E-ticaret sektörünün lojistik süreçlere etkileri ve yeni nesil çözümler...",
    resim: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088",
    tarih: "15 Mart 2024",
    kategori: "E-ticaret"
  }
]

export default function Blog() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Lojistik Blog</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <article className="bg-white border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-56">
                  <Image
                    src={post.resim}
                    alt={post.baslik}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {post.kategori}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3">{post.baslik}</h2>
                  <p className="text-gray-600 mb-4">{post.ozet}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.tarih}</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Devamını Oku →
                    </button>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 