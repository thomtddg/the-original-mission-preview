export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#3D3530] text-[#F7EDE2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-xl">
            <p className="text-xs tracking-[0.2em] uppercase text-[#D4A5A5] mb-4">Brand Story</p>
            <h1
              className="text-4xl md:text-5xl font-light text-[#F7EDE2] leading-snug mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Where Berlin<br />
              meets Mexico.
            </h1>
            <p className="text-sm text-[#F7EDE2]/70 leading-relaxed">
              The Original Mission was born from a tension — the raw, unpolished energy of Berlin and the warm, handcrafted soul of Mexican textiles.
            </p>
          </div>
          <div className="flex-1 w-full md:max-w-sm">
            <div
              className="aspect-[3/4] rounded-sm"
              style={{ background: "linear-gradient(135deg, #C8856A 0%, #D4A5A5 100%)" }}
            />
          </div>
        </div>
      </section>

      {/* Story body */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <div className="prose prose-sm max-w-none text-[#3D3530]/80 space-y-6">
          <h2
            className="text-3xl font-light text-[#3D3530]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            The making
          </h2>
          <p className="leading-relaxed">
            Every piece starts as an idea — a texture remembered from a trip, a silhouette from a dream, an embroidery pattern passed down through generations. We work slowly and intentionally, because that is what the material demands.
          </p>
          <p className="leading-relaxed">
            We are based in Berlin, but our roots reach deep into Mexico. That duality shows up in everything — the clean cuts that come from working in a structured European city, and the warmth, color, and intricate handwork that come from Mexican craft traditions.
          </p>

          <h2
            className="text-3xl font-light text-[#3D3530] pt-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Small batches, intentionally
          </h2>
          <p className="leading-relaxed">
            We do not do mass production. Each piece is made in a small batch — sometimes only five or ten. When they are gone, they are gone. This is not a limitation. It is a feature.
          </p>
          <p className="leading-relaxed">
            Wearing The Original Mission means wearing something that most people will never own. That matters to us.
          </p>

          <h2
            className="text-3xl font-light text-[#3D3530] pt-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Ships worldwide
          </h2>
          <p className="leading-relaxed">
            We started selling on Vinted, and we still love the intimacy of that. Now we are building something more — a home for the brand where the full story can be told.
          </p>
        </div>
      </section>

      {/* Values strip */}
      <section className="bg-[#D4A5A5]/15 border-y border-[#D4A5A5]/25">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[
            { label: "Handmade", body: "Every stitch placed by hand. No shortcuts, no factories." },
            { label: "Limited", body: "Small batches only. Each piece is rare by design." },
            { label: "Rooted", body: "Mexican craft traditions, Berlin sensibility." },
          ].map((v) => (
            <div key={v.label}>
              <h3
                className="text-xl font-light text-[#3D3530] mb-2"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {v.label}
              </h3>
              <p className="text-sm text-[#3D3530]/60 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
