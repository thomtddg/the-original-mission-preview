const collections = [
  { name: "Suave", description: "Soft, flowy pieces for everyday warmth." },
  { name: "Bordado", description: "Hand-embroidered statements." },
  { name: "Tierra", description: "Earthy tones, grounded silhouettes." },
];

const products = [
  { name: "Rosa de Noche Dress", price: "€189", collection: "Suave", color: "#D4A5A5" },
  { name: "Tierra Blouse", price: "€129", collection: "Bordado", color: "#C8856A" },
  { name: "Dulce Top", price: "€89", collection: "Suave", color: "#A8BAA2" },
  { name: "Noche Midi Skirt", price: "€149", collection: "Tierra", color: "#D4A5A5" },
  { name: "Flor Wrap Dress", price: "€199", collection: "Bordado", color: "#C8856A" },
  { name: "Cactus Crop Top", price: "€79", collection: "Tierra", color: "#A8BAA2" },
];

export default function ShopPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-[#C8856A] mb-3">Handmade, limited</p>
        <h1
          className="text-4xl md:text-5xl font-light text-[#3D3530]"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          The Collection
        </h1>
      </div>

      {/* Collections filter */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        <button className="px-5 py-2 bg-[#3D3530] text-[#F7EDE2] text-xs tracking-widest uppercase">
          All
        </button>
        {collections.map((c) => (
          <button
            key={c.name}
            className="px-5 py-2 border border-[#3D3530]/30 text-[#3D3530] text-xs tracking-widest uppercase hover:border-[#C8856A] hover:text-[#C8856A] transition-colors"
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <article key={p.name} className="group cursor-pointer">
            <div
              className="aspect-[3/4] mb-4 flex items-end p-5 transition-transform group-hover:scale-[1.01]"
              style={{ backgroundColor: p.color + "33", border: `1px solid ${p.color}40` }}
            >
              <span className="text-xs tracking-widest uppercase text-[#3D3530]/60 bg-[#F7EDE2]/60 px-2 py-1">
                {p.collection}
              </span>
            </div>
            <h3
              className="text-lg font-light text-[#3D3530] mb-1"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {p.name}
            </h3>
            <p className="text-sm font-medium text-[#3D3530]">{p.price}</p>
          </article>
        ))}
      </div>

      {/* Coming soon note */}
      <div className="mt-16 py-10 border-t border-[#D4A5A5]/25 text-center">
        <p className="text-sm text-[#3D3530]/50">
          More pieces coming soon. Pieces are made in small batches — once they are gone, they are gone.
        </p>
      </div>
    </div>
  );
}
