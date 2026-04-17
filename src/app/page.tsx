import Link from "next/link";

const products = [
  {
    name: "Rosa de Noche Dress",
    price: "€189",
    tag: "New",
    description: "Soft enough to sleep in. Made to be seen.",
    color: "#D4A5A5",
  },
  {
    name: "Tierra Blouse",
    price: "€129",
    tag: "Bestseller",
    description: "Embroidered cotton, open shoulders, earthy warmth.",
    color: "#C8856A",
  },
  {
    name: "Dulce Top",
    price: "€89",
    tag: "Limited",
    description: "Handstitched details, dreamy silhouette.",
    color: "#A8BAA2",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-xl">
            <p className="text-xs tracking-[0.2em] uppercase text-[#C8856A] mb-4">
              Handmade in Berlin · Rooted in Mexico
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-[#3D3530] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Wear the<br />
              <em className="not-italic font-semibold">story</em>.
            </h1>
            <p className="text-base text-[#3D3530]/70 leading-relaxed mb-8 max-w-sm">
              Alternative feminine clothing rooted in Mexican craft. Each piece is made by hand in Berlin — soft textures, warm colors, quiet artistry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-block px-7 py-3 bg-[#C8856A] text-[#F7EDE2] text-sm font-medium tracking-wide hover:bg-[#b8755a] transition-colors"
              >
                Shop the Collection
              </Link>
              <Link
                href="/about"
                className="inline-block px-7 py-3 border border-[#3D3530]/30 text-[#3D3530] text-sm font-medium tracking-wide hover:border-[#3D3530] transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="flex-1 w-full md:max-w-sm">
            <div
              className="aspect-[3/4] w-full rounded-sm flex items-end p-8"
              style={{ background: "linear-gradient(135deg, #D4A5A5 0%, #C8856A 60%, #A8BAA2 100%)" }}
            >
              <p
                className="text-white/80 text-2xl font-light italic"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Photography coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Subtle divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#D4A5A5]/20" />
      </section>

      {/* Brand tagline banner */}
      <section className="bg-[#3D3530] text-[#F7EDE2] py-8 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-none">
          <p
            className="text-center w-full tracking-[0.3em] uppercase text-sm text-[#F7EDE2]/60"
          >
            Handmade &nbsp;·&nbsp; Alternative &nbsp;·&nbsp; Berlin-based &nbsp;·&nbsp; Ships worldwide &nbsp;·&nbsp; Mexican craft &nbsp;·&nbsp; Limited pieces
          </p>
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-baseline justify-between mb-10">
          <h2
            className="text-3xl md:text-4xl font-light text-[#3D3530]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Featured Pieces
          </h2>
          <Link href="/shop" className="text-sm text-[#C8856A] hover:text-[#b8755a] tracking-wide transition-colors">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.name} className="group cursor-pointer">
              {/* Product image placeholder */}
              <div
                className="aspect-[3/4] mb-4 flex items-end p-5 transition-transform group-hover:scale-[1.01]"
                style={{ backgroundColor: p.color + "33", border: `1px solid ${p.color}40` }}
              >
                <span className="text-xs tracking-widest uppercase text-[#3D3530]/60 bg-[#F7EDE2]/60 px-2 py-1">
                  {p.tag}
                </span>
              </div>
              <h3
                className="text-lg font-light text-[#3D3530] mb-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {p.name}
              </h3>
              <p className="text-xs text-[#3D3530]/60 mb-2">{p.description}</p>
              <p className="text-sm font-medium text-[#3D3530]">{p.price}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Brand story strip */}
      <section className="bg-[#D4A5A5]/15 border-y border-[#D4A5A5]/25">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-xs tracking-[0.2em] uppercase text-[#C8856A] mb-4">Our Story</p>
            <h2
              className="text-3xl md:text-4xl font-light text-[#3D3530] mb-5 leading-snug"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              The Berlin–Mexico<br />
              <em className="not-italic font-semibold">tension</em>.
            </h2>
            <p className="text-sm text-[#3D3530]/70 leading-relaxed max-w-md mb-6">
              Raw European edge meets warm Mexican craft. Every seam tells a story of two worlds — the quiet Berlin atelier and the vibrant textile traditions of Mexico.
            </p>
            <Link
              href="/about"
              className="inline-block text-sm font-medium text-[#C8856A] border-b border-[#C8856A] pb-0.5 hover:text-[#b8755a] hover:border-[#b8755a] transition-colors"
            >
              Read our story
            </Link>
          </div>

          <div className="flex-1 w-full md:max-w-xs">
            <div
              className="aspect-square rounded-sm"
              style={{ background: "linear-gradient(160deg, #A8BAA2 0%, #C8856A 100%)" }}
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-[#C8856A] mb-3">Stay close</p>
        <h2
          className="text-3xl md:text-4xl font-light text-[#3D3530] mb-4"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          First drop access
        </h2>
        <p className="text-sm text-[#3D3530]/60 mb-8">
          New pieces are made in small batches. Join the list to get access before they sell out.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 bg-white border border-[#D4A5A5]/50 text-sm text-[#3D3530] placeholder:text-[#3D3530]/40 focus:outline-none focus:border-[#C8856A]"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#C8856A] text-[#F7EDE2] text-sm font-medium tracking-wide hover:bg-[#b8755a] transition-colors whitespace-nowrap"
          >
            Join the list
          </button>
        </form>
      </section>
    </>
  );
}
