export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      {/* Header */}
      <div className="mb-14 text-center md:text-left">
        <p className="text-xs tracking-[0.2em] uppercase text-[#C8856A] mb-3">Get in touch</p>
        <h1
          className="text-4xl md:text-5xl font-light text-[#3D3530]"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Say hello.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <form className="space-y-5">
            <div>
              <label className="block text-xs tracking-widest uppercase text-[#3D3530]/50 mb-2">
                Your name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white border border-[#D4A5A5]/50 text-sm text-[#3D3530] focus:outline-none focus:border-[#C8856A]"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-[#3D3530]/50 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white border border-[#D4A5A5]/50 text-sm text-[#3D3530] focus:outline-none focus:border-[#C8856A]"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-[#3D3530]/50 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-white border border-[#D4A5A5]/50 text-sm text-[#3D3530] focus:outline-none focus:border-[#C8856A] resize-none"
                placeholder="Your message…"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#C8856A] text-[#F7EDE2] text-sm font-medium tracking-wide hover:bg-[#b8755a] transition-colors"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Contact info */}
        <div className="space-y-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-[#3D3530]/40 mb-2">Instagram</p>
            <a
              href="https://instagram.com/theoriginalmission"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#C8856A] hover:text-[#b8755a] transition-colors"
            >
              @theoriginalmission
            </a>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-[#3D3530]/40 mb-2">Based in</p>
            <p className="text-sm text-[#3D3530]/70">Berlin, Germany</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-[#3D3530]/40 mb-2">Ships to</p>
            <p className="text-sm text-[#3D3530]/70">Worldwide</p>
          </div>
          <div className="pt-4 border-t border-[#D4A5A5]/25">
            <p className="text-xs text-[#3D3530]/40 leading-relaxed">
              We read every message personally. Response time is usually within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
