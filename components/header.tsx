import Link from 'next/link';

export function Header() {
  return (
    <header className="border-gray-200 bg-primary border-b-0">
      <div className="container mx-auto px-4 py-4 text-white my-0 mt-0 pt-10">
        <nav className="flex items-center justify-start">
          <Link href="/" className="text-3xl font-bold text-white leading-none">
            IOARTS
          </Link>
          <Link 
            href="/posts" 
            className="text-xl font-bold text-white hover:text-gray-300 transition-colors leading-none mt-1 ml-3"
          >
            All Products
          </Link>
        </nav>
      </div>
    </header>
  );
}
