import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-1 font-mono text-base sm:text-lg hover:opacity-80 transition-opacity"
    >
      <span className="text-primary/40 group-hover:text-primary/60 transition-colors">&lt;</span>
      <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-semibold">
        Vu Nguyen Khanh
      </span>
      <span className="text-primary/40 group-hover:text-primary/60 transition-colors">/&gt;</span>
    </Link>
  );
}
