import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { BlogPost, blogPosts } from '../data'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts.find(post => post.id === parseInt(params.id))
  
  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı',
      description: 'İstenen blog yazısı şu anda mevcut değil.'
    }
  }

  return {
    title: post.baslik,
    description: post.meta_description,
    keywords: post.anahtar_kelimeler,
    openGraph: {
      title: post.baslik,
      description: post.meta_description,
      images: [{ url: post.resim }],
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: post.baslik,
      description: post.meta_description,
      images: [post.resim]
    }
  }
}

export default function BlogDetail({ params }: { params: { id: string } }) {
  const post: BlogPost | undefined = blogPosts.find(post => post.id === parseInt(params.id))
  
  if (!post) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50">
        <div className="container mx-auto p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-700">Blog yazısı bulunamadı</h1>
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-700 mt-4 inline-block"
          >
            Blog sayfasına dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-[400px]">
            <Image
              src={post.resim}
              alt={post.baslik}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 750px"
            />
          </div>
          <div className="p-8">
            <div className="mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {post.kategori}
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-4">{post.baslik}</h1>
            <time dateTime={post.tarih} className="text-gray-500 mb-6 block">
              {post.tarih}
            </time>
            <div 
              className="prose max-w-none"
              itemScope 
              itemType="http://schema.org/BlogPosting"
            >
              <meta itemProp="headline" content={post.baslik} />
              <meta itemProp="datePublished" content={post.tarih} />
              <div 
                dangerouslySetInnerHTML={{ __html: post.icerik }}
                itemProp="articleBody"
              />
            </div>
            <div className="mt-8 pt-4 border-t">
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-700 flex items-center"
              >
                ← Blog sayfasına dön
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}