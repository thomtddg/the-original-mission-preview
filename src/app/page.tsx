import Link from "next/link";

const featuredProducts = [
  { name: "Rosa de Noche Dress", price: "€89", tag: "New", color: "#D4A5A5" },
  { name: "Tierra Blouse", price: "€65", tag: "Bestseller", color: "#C8856A" },
  { name: "Dulce Skirt", price: "€72", tag: "Limited", color: "#A8BAA2" },
  { name: "Pampas Hair Clip", price: "€24", tag: "New", color: "#D4A5A5" },
];

const categories = [
  { name: "Tops", color: "#D4A5A5" },
  { name: "Bottoms", color: "#C8856A" },
  { name: "Dresses & Skirts", color: "#A8BAA2" },
  { name: "Accessories", color: "#D4A5A5" },
];

export default function Home() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #D4A5A5 0%, #C8856A 50%, #A8BAA2 100%)" }}
      >
        {/* Background image placeholder */}
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #F7EDE2 0%, transparent 60%)" }}
        />

        {/* Text panel */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div
            className="max-w-lg px-8 py-10 sm:px-10 sm:py-12"
            style={{ background: "rgba(247,237,226,0.88)", backdropFilter: "blur(8px)" }}
          >
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#A8BAA2" }}>
              Handmade · Berlin · México
            </p>
            <h1
              className="text-5xl sm:text-6xl font-light leading-tight mb-5"
              style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#3D3530" }}
            >
              Wear your<br />
              roots.<br />
              <em style={{ fontWeight: 600, fontStyle: "normal" }}>Dress your world.</em>
            </h1>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(61,53,48,0.7)" }}>
              Alternative feminine clothing rooted in Mexican craft. Each piece handmade in Berlin — soft textures, warm colors, quiet artistry.
            </p>
            <Link
              href="/shop"
              className="inline-block text-sm font-medium tracking-[0.08em] uppercase transition-colors"
              style={{
                background: "#3D3530",
                color: "#F7EDE2",
                padding: "14px 32px",
                borderRadius: "6px",
              }}
            >
              Shop New Arrivals
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — FEATURED DROP */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "#A8BAA2" }}>New Arrivals</p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#3D3530" }}
            >
              This Week&apos;s Drop
            </h2>
          </div>
          <Link href="/shop" className="text-sm font-medium transition-colors" style={{ color: "#C8856A" }}>
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((p) => (
            <article key={p.name} className="group cursor-pointer">
              <div
                className="aspect-[3/4] mb-3 overflow-hidden transition-shadow"
                style={{
                  background: p.color + "40",
                  borderRadius: "6px",
                  border: `1px solid ${p.color}50`,
                  boxShadow: "0 2px 12px rgba(61,53,48,0.07)",
                }}
              >
                <div
                  className="w-full h-full transition-transform duration-300 group-hover:scale-[1.03] flex items-end p-4"
                >
                  <span
                    className="text-xs tracking-[0.08em] uppercase px-2 py-1"
                    style={{
                      background: "rgba(247,237,226,0.75)",
                      color: "#C8856A",
                      borderRadius: "4px",
                      fontSize: "10px",
                    }}
                  >
                    {p.tag}
                  </span>
                </div>
              </div>
              <h3
                className="text-base font-light mb-1"
                style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#3D3530" }}
              >
                {p.name}
              </h3>
              <p className="text-sm font-medium" style={{ color: "#3D3530" }}>{p.price}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 3 — BRAND STATEMENT */}
      <section className="py-24" style={{ background: "#C8856A" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-light italic leading-snug mb-6"
            style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#F7EDE2", fontStyle: "italic" }}
          >
            Soft enough to sleep in.<br />
            Made to be seen.
          </h2>
          <p className="text-base leading-[1.7] mb-8" style={{ color: "rgba(247,237,226,0.85)" }}>
            Each piece handmade by the founder, rooted in Mexican craft,<br />
            sent from Berlin to your door.
          </p>
          <Link
            href="/about"
            className="inline-block text-sm font-medium tracking-[0.08em] uppercase border transition-colors"
            style={{ color: "#F7EDE2", borderColor: "rgba(247,237,226,0.6)", padding: "14px 32px", borderRadius: "6px" }}
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* SECTION 4 — SHOP BY CATEGORY */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <h2
          className="text-3xl font-light mb-10"
          style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#3D3530" }}
        >
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c) => (
            <Link key={c.name} href="/shop" className="group block">
              <div
                className="aspect-[3/4] mb-3 flex items-end p-4 transition-all duration-200 overflow-hidden"
                style={{
                  background: c.color + "30",
                  borderRadius: "6px",
                  border: `1px solid ${c.color}40`,
                }}
              >
                <div
                  className="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded"
                  style={{ background: "rgba(61,53,48,0.06)" }}
                />
              </div>
              <p
                className="text-lg font-light text-center"
                style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#3D3530" }}
              >
                {c.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 5 — INSTAGRAM STRIP (placeholder) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-4">
        <div className="mb-6">
          <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "#A8BAA2" }}>@theoriginalmission</p>
          <h2
            className="text-2xl font-light"
            style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#3D3530" }}
          >
            Follow along on Instagram
          </h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="aspect-square"
              style={{
                background: `hsl(${15 + i * 15}, 35%, ${75 - i * 3}%)`,
              }}
            />
          ))}
        </div>
      </section>

      {/* SECTION 6 — NEWSLETTER STRIP */}
      <section className="mt-16 py-14" style={{ background: "#C8856A" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-light mb-3"
            style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#F7EDE2" }}
          >
            Join the mission.
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(247,237,226,0.8)" }}>
            Get early drop access and behind-the-scenes from the atelier.
          </p>
          <form className="flex flex-col sm:flex-row gap-0 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 text-sm"
              style={{
                background: "#F7EDE2",
                color: "#3D3530",
                border: "none",
                outline: "none",
                borderRadius: "6px 0 0 6px",
              }}
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm font-medium tracking-[0.08em] uppercase"
              style={{
                background: "#3D3530",
                color: "#F7EDE2",
                border: "none",
                borderRadius: "0 6px 6px 0",
                whiteSpace: "nowrap",
              }}
            >
              JOIN
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
