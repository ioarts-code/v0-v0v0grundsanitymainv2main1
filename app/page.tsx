import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { getPosts } from '@/lib/actions';

export default async function HomePage() {
  const posts = await getPosts();
  
  const featuredPost = posts.find(post => post.title.toLowerCase().includes('legend of zelda pro 2'));
  const secondPost = posts.find(post => post.title.toLowerCase().includes('poddtoppen'));
  const thirdPost = posts.find(post => post.title.toLowerCase().includes('stray'));
  
  const displayPosts = [featuredPost, secondPost, thirdPost].filter(Boolean);

  return (
    <main className="min-h-screen bg-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-5 auto-rows-[400px]">
          {displayPosts.map((post, index) => {
            const isFirstPost = index === 0;
            const imageWidth = isFirstPost ? 700 : 350;
            const imageHeight = isFirstPost ? 350 : 300;
            
            return (
              <Link 
                key={post._id} 
                href={`/posts/${post.slug.current}`}
                className={`group relative flex items-center justify-center rounded-lg bg-gallery border border-border transition-transform hover:scale-[1.02] ${
                  isFirstPost ? 'col-span-2' : ''
                }`}
              >
                <div className="relative" style={{ width: imageWidth, height: imageHeight }}>
                  {post.imageUrl && (
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      width={imageWidth}
                      height={imageHeight}
                      className="object-cover rounded transition-transform group-hover:scale-105"
                    />
                  )}
                </div>
                
                
                <div className="absolute bottom-4 left-4 flex flex-col gap-2 z-10">
                  <h3 className="text-sm font-medium backdrop-blur-sm px-3 py-1.5 rounded-md bg-zinc-700 text-white">
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
