import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[#F7EDE2]/95 backdrop-blur border-b border-[#D4A5A5]/30">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo wordmark */}
        <Link
          href="/"
          className="font-light tracking-[0.15em] uppercase text-[#3D3530] hover:text-[#C8856A] transition-colors text-base"
          style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          The Original Mission
        </Link>

        {/* Desktop nav */}
        <ul className="flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium tracking-wide text-[#3D3530]/80 hover:text-[#C8856A] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
