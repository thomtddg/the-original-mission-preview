import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-xs tracking-[0.2em] uppercase text-[#C8856A] mb-4">404</p>
      <h1
        className="text-4xl md:text-5xl font-light text-[#3D3530] mb-4"
        style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
      >
        Page not found.
      </h1>
      <p className="text-sm text-[#3D3530]/60 mb-8">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-block px-7 py-3 bg-[#C8856A] text-[#F7EDE2] text-sm font-medium tracking-wide hover:bg-[#b8755a] transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
