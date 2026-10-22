interface WaveDividerProps {
  backWaveColor?: string;
  frontWaveColor?: string;
  className?: string;
}

export default function WaveDivider({
  backWaveColor = "fill-berry/15",
  frontWaveColor = "fill-background-alt",
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-10 translate-y-px ${className}`}
    >
      <svg
        viewBox="0 0 2400 120"
        preserveAspectRatio="none"
        className="relative block w-[200%] h-24 sm:h-32 lg:h-40"
      >
        {/* Onda Posterior */}
        <path
          d="M0,20 C300,90 600,10 900,60 C1200,110 1500,10 1800,60 C2100,110 2250,30 2400,20 L2400,120 L0,120 Z"
          className={`${backWaveColor} animate-wave-slow`}
        />

        {/* Onda Frontal Principal */}
        <path
          d="M0,45 C350,110 650,20 950,75 C1250,130 1550,20 1850,75 C2100,110 2250,40 2400,45 L2400,120 L0,120 Z"
          className={`${frontWaveColor} animate-wave-fast origin-bottom`}
        />
      </svg>
    </div>
  );
}
