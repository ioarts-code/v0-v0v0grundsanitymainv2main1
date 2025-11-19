import Link from 'next/link';

export function Header() {
  return (
    <header className="border-gray-200 bg-primary border-b-0">
      <div className="container mx-auto px-4 py-4 text-white">
        <nav className="flex items-center justify-start">
          <Link href="/" className="text-3xl font-bold text-white leading-none">
            IOARTS
          </Link>
          <Link 
            href="/posts" 
            className="text-xl font-bold text-white hover:text-gray-300 transition-colors leading-none ml-2 mt-1"
          >
            All Products
          </Link>
        </nav>
      </div>
    </header>
  );
}
