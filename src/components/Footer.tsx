import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3D3530] text-[#F7EDE2] mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <p
            className="text-lg tracking-[0.15em] uppercase mb-3"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            The Original Mission
          </p>
          <p className="text-sm text-[#F7EDE2]/70 leading-relaxed">
            Handmade in Berlin.<br />
            Rooted in Mexico.<br />
            Ships worldwide.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-xs tracking-widest uppercase text-[#D4A5A5] mb-4">Navigate</p>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/shop", label: "Shop" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-[#F7EDE2]/70 hover:text-[#D4A5A5] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className="text-xs tracking-widest uppercase text-[#D4A5A5] mb-4">Follow</p>
          <a
            href="https://instagram.com/theoriginalmission"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#F7EDE2]/70 hover:text-[#D4A5A5] transition-colors"
          >
            @theoriginalmission
          </a>
          <p className="text-xs text-[#F7EDE2]/40 mt-8">
            © {new Date().getFullYear()} The Original Mission. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
