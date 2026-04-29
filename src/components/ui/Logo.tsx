import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      {/* Optional: Add a simple geometric icon if desired, or just text. The reference uses just clean text */}
      <div className="flex items-center text-xl tracking-tight">
        <span className="font-serif font-medium text-white">Alpha</span>
        <span className="font-serif font-medium text-[var(--accent)]">Apex</span>
      </div>
    </Link>
  );
}
