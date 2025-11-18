import Link from 'next/link';

export function Header() {
  return (
    <header className="border-gray-200 bg-secondary-foreground border-b-0">
      <div className="mx-auto max-w-5xl px-6 py-4 text-white">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-black">
            Blog
          </Link>
          <Link 
            href="/posts" 
            className="text-sm hover:text-gray-900 transition-colors text-black"
          >
            View All Posts
          </Link>
        </nav>
      </div>
    </header>
  );
}
