interface LogoMarkProps {
  size?: number;
  className?: string;
  variant?: "full" | "icon";
}

export function LogoMark({ size = 40, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main A triangle - left leg */}
      <path
        d="M50 2L4 108H20L50 38L80 108H96L50 2Z"
        fill="var(--navy, #0B1C2D)"
      />
      {/* Inner white chevron/arrow */}
      <path
        d="M50 52L36 82H44L50 68L56 82H64L50 52Z"
        fill="var(--text-on-accent, #FFFFFF)"
      />
      {/* Gold peak accent */}
      <path
        d="M50 2L55.5 14L50 9L44.5 14L50 2Z"
        fill="var(--accent, #C8963E)"
      />
    </svg>
  );
}

interface LogoProps {
  size?: number;
  className?: string;
  showTagline?: boolean;
}

export function Logo({ size = 36, className, showTagline = false }: LogoProps) {
  return (
    <a href="/" className={`flex items-center gap-2.5 group ${className || ""}`}>
      <LogoMark size={size} />
      <div className="flex flex-col">
        <span
          className="text-lg font-bold tracking-tight leading-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Alpha Apex
        </span>
        {showTagline && (
          <span
            className="text-[0.625rem] font-medium tracking-[0.08em] uppercase leading-tight"
            style={{ color: "var(--text-tertiary)" }}
          >
            Advisory Group
          </span>
        )}
      </div>
    </a>
  );
}
