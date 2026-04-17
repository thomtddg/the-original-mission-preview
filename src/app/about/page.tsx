import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1 — Editorial hero (no text overlay — image breathes) */}
      <section
        className="w-full"
        style={{ aspectRatio: "16/7", background: "linear-gradient(135deg, #C8856A 0%, #D4A5A5 60%, #A8BAA2 100%)" }}
      />

      {/* SECTION 2 — Origin story, 2-col */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Left: founder photo placeholder */}
          <div className="md:col-span-2">
            <div
              className="aspect-[2/3] w-full"
              style={{
                background: "linear-gradient(160deg, #D4A5A5 0%, #C8856A 100%)",
                borderRadius: "6px",
              }}
            />
          </div>

          {/* Right: text */}
          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#A8BAA2" }}>Our Story</p>
            <h1
              className="text-4xl md:text-5xl font-light leading-tight mb-8"
              style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#3D3530" }}
            >
              The Original<br />Mission
            </h1>

            <div className="space-y-5 text-base leading-[1.7]" style={{ color: "rgba(61,53,48,0.75)" }}>
              <p>
                The Original Mission started in a small Berlin atelier with a simple question: what happens when Mexican craft traditions meet European minimalism? The answer is something that feels completely new and entirely rooted at once.
              </p>
              <p>
                Every piece is made by hand — no machines, no assembly lines. The fabrics come from small suppliers who share the same obsession with texture and weight. The embroidery follows patterns passed down through generations.
              </p>
              <p>
                We ship worldwide because handmade shouldn&apos;t be local. Someone in Tokyo or São Paulo deserves to find something made with this much care.
              </p>
            </div>

            <blockquote
              className="my-8 pl-5 text-xl font-light italic leading-relaxed border-l-2"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                color: "#C8856A",
                borderColor: "#C8856A",
                fontStyle: "italic",
              }}
            >
              &ldquo;I make what I want to wear — and I make it the way it deserves to be made.&rdquo;
            </blockquote>

            <Link
              href="/shop"
              className="inline-block text-sm font-medium tracking-[0.08em] uppercase border transition-colors"
              style={{ color: "#3D3530", borderColor: "rgba(61,53,48,0.4)", padding: "14px 32px", borderRadius: "6px" }}
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Values, 3 pillars */}
      <section className="py-20" style={{ background: "#F7EDE2" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: "✿",
                title: "Handcrafted",
                body: "Each piece sewn by hand in Berlin. No shortcuts, no factories — just slow, intentional making.",
              },
              {
                icon: "✦",
                title: "Soft & Intentional",
                body: "Nothing rushed or mass-produced. Every fabric chosen for how it moves, not how it costs.",
              },
              {
                icon: "♡",
                title: "Made to Last",
                body: "We make fewer pieces, made to be worn for years. Fast fashion is not our world.",
              },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <p className="text-3xl mb-4" style={{ color: "#A8BAA2" }}>{v.icon}</p>
                <h3
                  className="text-xl font-light mb-3"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#3D3530" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(61,53,48,0.65)" }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Newsletter strip */}
      <section className="py-14" style={{ background: "#C8856A" }}>
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
              style={{ background: "#F7EDE2", color: "#3D3530", border: "none", outline: "none", borderRadius: "6px 0 0 6px" }}
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm font-medium tracking-[0.08em] uppercase"
              style={{ background: "#3D3530", color: "#F7EDE2", border: "none", borderRadius: "0 6px 6px 0", whiteSpace: "nowrap" }}
            >
              JOIN
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
