const WaveDivider = ({ flip = false, className = "" }: { flip?: boolean; className?: string }) => (
  <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}>
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-20">
      <path
        d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
        className="fill-background"
      />
    </svg>
  </div>
);

export default WaveDivider;
