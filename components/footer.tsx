import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary border-border border-t-0">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between text-sm">
          {/* Links Section */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Sale
            </Link>
            <Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
              Fraktvillkor
            </Link>
          </div>

          {/* Address Section */}
          <div className="text-muted-foreground">
            <span className="font-medium text-muted-foreground">Address: </span>
            Loviselundsvägen 27, 16559 Hässelby, Sweden
          </div>

          {/* External Links */}
          <div className="flex gap-4 md:gap-6">
            <Link 
              href="https://tradera.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              tradera
            </Link>
            <Link 
              href="https://etsy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Etsy
            </Link>
            <Link 
              href="https://deviantart.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Deviant
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 text-center text-sm text-muted-foreground border-t border-muted-foreground">
          Crafted by <span className="font-medium text-muted-foreground">IoDEV</span> © 2026
        </div>
      </div>
    </footer>
  );
}
