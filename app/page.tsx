import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { getPosts } from '@/lib/actions';

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-5 auto-rows-[400px]">
          {posts.map((post, index) => {
            const isFeatured = index % 3 === 0;
            return (
              <Link 
                key={post._id} 
                href={`/posts/${post.slug.current}`}
                className={`group relative block overflow-hidden rounded-lg bg-card border border-border transition-transform hover:scale-[1.02] ${
                  isFeatured ? "row-span-2" : ""
                }`}
              >
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-gallery">
                  {post.imageUrl && (
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover object-center transition-transform group-hover:scale-105"
                    />
                  )}
                </div>
                
                <div className="absolute bottom-4 left-4 flex flex-col gap-2 z-10">
                  <h3 className="text-sm font-medium text-foreground bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-md">
                    {post.title}
                  </h3>
                  {post.price !== undefined && (
                    <Badge className="w-fit bg-accent text-accent-foreground hover:bg-accent">
                      ${post.price.toFixed(2)} USD
                    </Badge>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
