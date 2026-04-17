import Link from "next/link";

const shopLinks = ["New Arrivals", "All Products", "Tops", "Bottoms", "Dresses & Skirts", "Accessories"];
const infoLinks = ["About", "Brand Story", "Contact", "Shipping & Returns"];

export default function Footer() {
  return (
    <footer style={{ background: "#3D3530", color: "#F7EDE2" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <p
            className="text-xl font-light tracking-[0.08em] mb-4"
            style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#F7EDE2" }}
          >
            The Original Mission
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(247,237,226,0.6)" }}>
            Handmade in Berlin.<br />
            Rooted in Mexico.<br />
            Ships everywhere.
          </p>
        </div>

        {/* Shop links */}
        <div>
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#A8BAA2" }}>Shop</p>
          <ul className="space-y-2">
            {shopLinks.map((l) => (
              <li key={l}>
                <Link
                  href="/shop"
                  className="text-sm transition-colors"
                  style={{ color: "rgba(247,237,226,0.6)" }}
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info links */}
        <div>
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#A8BAA2" }}>Info</p>
          <ul className="space-y-2">
            {infoLinks.map((l) => (
              <li key={l}>
                <Link
                  href={l === "Contact" ? "/contact" : l === "About" || l === "Brand Story" ? "/about" : "#"}
                  className="text-sm transition-colors"
                  style={{ color: "rgba(247,237,226,0.6)" }}
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#A8BAA2" }}>Follow</p>
            <a
              href="https://instagram.com/theoriginalmission"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors"
              style={{ color: "rgba(247,237,226,0.6)" }}
            >
              @theoriginalmission
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between text-xs gap-2"
        style={{ borderTop: "1px solid rgba(247,237,226,0.12)", color: "rgba(247,237,226,0.4)" }}
      >
        <span>© {new Date().getFullYear()} The Original Mission. All rights reserved.</span>
        <span>@theoriginalmission</span>
      </div>
    </footer>
  );
}
