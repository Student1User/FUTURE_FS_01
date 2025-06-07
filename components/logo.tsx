interface LogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer hexagon */}
        <path
          d="M20 2L32 9V23L20 30L8 23V9L20 2Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-cyber-green"
        />

        {/* Inner circuit pattern */}
        <path
          d="M20 8L26 11V17L20 20L14 17V11L20 8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="currentColor"
          fillOpacity="0.1"
          className="text-cyber-green"
        />

        {/* Central dot */}
        <circle cx="20" cy="14" r="2" fill="currentColor" className="text-cyber-green" />

        {/* Circuit lines */}
        <line x1="20" y1="16" x2="20" y2="24" stroke="currentColor" strokeWidth="1" className="text-cyber-green" />
        <line x1="16" y1="20" x2="24" y2="20" stroke="currentColor" strokeWidth="1" className="text-cyber-green" />

        {/* Corner dots */}
        <circle cx="12" cy="12" r="1" fill="currentColor" className="text-cyber-green" />
        <circle cx="28" cy="12" r="1" fill="currentColor" className="text-cyber-green" />
        <circle cx="12" cy="20" r="1" fill="currentColor" className="text-cyber-green" />
        <circle cx="28" cy="20" r="1" fill="currentColor" className="text-cyber-green" />

        {/* EMJ text */}
        <text x="20" y="28" textAnchor="middle" className="text-[6px] font-bold fill-current text-cyber-green">
          EMJ
        </text>
      </svg>
    </div>
  )
}
