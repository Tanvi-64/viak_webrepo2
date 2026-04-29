import { motion } from "framer-motion";

const gears = [
  { size: 60, x: "10%", y: "20%", duration: 20, delay: 0 },
  { size: 40, x: "85%", y: "15%", duration: 15, delay: 2 },
  { size: 80, x: "75%", y: "70%", duration: 25, delay: 1 },
  { size: 30, x: "20%", y: "80%", duration: 18, delay: 3 },
  { size: 50, x: "50%", y: "40%", duration: 22, delay: 0.5 },
];

const GearSVG = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-primary/[0.06]">
    <path
      d="M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FloatingGears = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {gears.map((g, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: g.x, top: g.y }}
        animate={{ rotate: 360, y: [0, -15, 0] }}
        transition={{
          rotate: { duration: g.duration, repeat: Infinity, ease: "linear" },
          y: { duration: g.duration / 3, repeat: Infinity, ease: "easeInOut", delay: g.delay },
        }}
      >
        <GearSVG size={g.size} />
      </motion.div>
    ))}
  </div>
);

export default FloatingGears;
