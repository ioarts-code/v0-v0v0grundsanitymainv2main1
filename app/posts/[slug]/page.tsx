import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPostBySlug } from "@/lib/actions"
import { akronim } from "@/lib/fonts"

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-primary">
      <div className={"mx-auto max-w-7xl px-6 py-16"}>
        <Link
          href="/posts"
          className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block transition-colors"
        >
          ← Back to All Posts
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="flex flex-col gap-4">
            {post.imageUrl && (
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-card">
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-contain p-8 bg-neutral-300"
                />
              </div>
            )}

            <div className="grid grid-cols-4 gap-4">
              {["SVG", "PNG", "EPS", "WEBP"].map((format) => (
                <div
                  key={format}
                  className="aspect-square bg-none rounded-lg flex items-center justify-center border-2 border-neutral-200"
                >
                  <span className={`text-muted-foreground text-[40px] ${akronim.className}`}>{format}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="flex flex-col gap-8">
            <header>
              <h1 className={`text-5xl lg:text-6xl text-white mb-6 leading-tight ${akronim.className}`}>
                {post.title}
              </h1>
              {post.price !== undefined && (
                <div className="text-4xl font-bold text-white mb-8">${post.price.toFixed(2)}</div>
              )}
            </header>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2.5">Description</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap text-base">{post.content}</p>
            </div>

            <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl py-4 rounded-lg transition-colors cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
