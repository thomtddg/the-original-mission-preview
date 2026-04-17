const filters = ["All", "Tops", "Bottoms", "Dresses & Skirts", "Accessories", "New Arrivals"];

const products = [
  { name: "Rosa de Noche Dress", price: "€89", category: "Dresses & Skirts", tag: "New", color: "#D4A5A5" },
  { name: "Tierra Blouse", price: "€65", category: "Tops", tag: "Bestseller", color: "#C8856A" },
  { name: "Dulce Skirt", price: "€72", category: "Bottoms", tag: "Limited", color: "#A8BAA2" },
  { name: "Pampas Hair Clip", price: "€24", category: "Accessories", tag: "New", color: "#D4A5A5" },
  { name: "Flor Wrap Dress", price: "€99", category: "Dresses & Skirts", tag: "", color: "#C8856A" },
  { name: "Cactus Crop Top", price: "€58", category: "Tops", tag: "Limited", color: "#A8BAA2" },
  { name: "Noche Midi Skirt", price: "€79", category: "Bottoms", tag: "", color: "#D4A5A5" },
  { name: "Rebozo Wrap", price: "€88", category: "Accessories", tag: "New", color: "#C8856A" },
  { name: "Bordado Blouse", price: "€75", category: "Tops", tag: "Bestseller", color: "#A8BAA2" },
];

export default function ShopPage() {
  return (
    <>
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "#A8BAA2" }}>New Arrivals</p>
        <h1
          className="text-4xl md:text-5xl font-light mb-2"
          style={{ fontFamily: "var(--font-serif), Georgia, serif", color: "#3D3530" }}
        >
          This Week&apos;s Drop
        </h1>
        <p className="text-sm" style={{ color: "rgba(61,53,48,0.6)" }}>
          Fresh handmade pieces, just arrived from Berlin.
        </p>
      </div>

      {/* Filter bar (sticky) */}
      <div className="sticky top-16 z-40 border-b" style={{ background: "#fff", borderColor: "rgba(61,53,48,0.08)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-2 flex-nowrap">
            {filters.map((f, i) => (
              <button
                key={f}
                className="whitespace-nowrap text-xs font-medium tracking-[0.05em] uppercase px-4 py-2 transition-colors"
                style={{
                  border: "1px solid",
                  borderColor: i === 0 ? "#3D3530" : "rgba(61,53,48,0.3)",
                  borderRadius: "4px",
                  background: i === 0 ? "#3D3530" : "transparent",
                  color: i === 0 ? "#F7EDE2" : "#3D3530",
                }}
              >
                {f}
              </button>
            ))}
          </div>
          <span className="text-xs whitespace-nowrap" style={{ color: "#A8BAA2" }}>{products.length} items</span>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {products.map((p) => (
            <article key={p.name} className="group cursor-pointer">
              <div
                className="aspect-[3/4] mb-3 overflow-hidden"
                style={{
                  background: p.color + "35",
                  borderRadius: "6px",
                  border: `1px solid ${p.color}45`,
                  boxShadow: "0 2px 12px rgba(61,53,48,0.07)",
                  position: "relative",
                }}
              >
                <div className="w-full h-full transition-transform duration-300 group-hover:scale-[1.03] flex items-end p-4">
                  {p.tag && (
                    <span
                      className="text-[10px] tracking-[0.08em] uppercase px-2 py-1"
                      style={{
                        background: "#C8856A",
                        color: "#F7EDE2",
                        borderRadius: "4px",
                      }}
                    >
                      {p.tag}
                    </span>
                  )}
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

        <div className="mt-14 pt-8 text-center border-t" style={{ borderColor: "rgba(212,165,165,0.25)" }}>
          <p className="text-sm" style={{ color: "rgba(61,53,48,0.45)" }}>
            All pieces made in small batches. Once they&apos;re gone, they&apos;re gone.
          </p>
        </div>
      </div>
    </>
  );
}
