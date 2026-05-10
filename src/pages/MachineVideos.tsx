import { useRef, useState } from "react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Maximize2, Volume2 } from "lucide-react";



const videos = [
  { title: "Auto Proof Load Machine With Oil Spraying", tag: "SPM", src:"https://res.cloudinary.com/dwmb3fuvg/video/upload/q_auto/f_auto/v1778399053/qvsjsqa32dmqfxlqsduq.mp4" },
  { title: "100 Ton Press Machine",                    tag: "Press", src: "https://res.cloudinary.com/dwmb3fuvg/video/upload/q_auto/f_auto/v1778399079/wpw4ojgt87gnjh08kdjx.mp4"},
  { title: "Wheel ST MC",                              tag: "Wheel", src: "https://res.cloudinary.com/dwmb3fuvg/video/upload/q_auto/f_auto/v1778398918/xuzdnccdtk7bl1nty78n.mp4"},
  { title: "Z101",                                     tag: "Custom", src: "https://res.cloudinary.com/dwmb3fuvg/video/upload/q_auto/f_auto/v1778398804/zrew4empqmqwm7egwq0o.mp4"},
  { title: "S201 Top Mount Assembly",                  tag: "Assembly", src: "https://res.cloudinary.com/dwmb3fuvg/video/upload/q_auto/f_auto/v1778399055/uwapvceom6tlfdvdybhd.mp4" },
];

type Video = typeof videos[0];

/* ── Video Card ── */
function VideoCard({ v, index, onOpen }: { v: Video; index: number; onOpen: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
   
  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#0a1628]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8, boxShadow: "0 32px 64px rgba(30,58,138,0.35)" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
    >
      {/* Animated top accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#38bdf8] to-[#1e3a8a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

      {/* Video area */}
      <div className="relative aspect-video overflow-hidden bg-[#0a1628]">
        {/* Static gradient placeholder shown before hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/60 to-[#0a1628]"
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.35 }}
        />

        {/* Animated play icon (idle state) */}
        <AnimatePresence>
          {!hovered && (
            <motion.div
              key="play-idle"
              className="absolute inset-0 flex items-center justify-center z-10"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Play size={24} className="text-white fill-white ml-1" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Inline video */}
        <video
          key={v.src}
          ref={videoRef}
          src={v.src}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.4s ease" }}
        />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />

        {/* Expand hint on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="expand"
              className="absolute top-3 right-3 z-20"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
                <Maximize2 size={12} className="text-white" />
                <span className="text-white text-[10px] font-semibold tracking-wide">FULL SCREEN</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Info bar */}
      <div className="px-5 py-4 flex items-start justify-between gap-3">
        <div>
          <p className="font-display font-bold text-white text-sm leading-snug">{v.title}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-full px-2.5 py-0.5">
              {v.tag}
            </span>
          </div>
        </div>
        <motion.div
          className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#38bdf8]/20 group-hover:border-[#38bdf8]/40 transition-colors duration-300"
          whileHover={{ scale: 1.15 }}
        >
          <Volume2 size={13} className="text-white/50 group-hover:text-[#38bdf8] transition-colors duration-300" />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Fullscreen Modal ── */
function VideoModal({ v, onClose }: { v: Video; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/90 backdrop-blur-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1e3a8a]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Modal container */}
      <motion.div
        className="relative z-10 w-full max-w-5xl"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glowing border ring */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#38bdf8]/50 via-[#1e3a8a]/30 to-[#38bdf8]/20 pointer-events-none" />

        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0a1628]">
          <video
            src={v.src}
            autoPlay
            controls
            className="w-full aspect-video bg-black"
          />

          {/* Title bar */}
          <div className="px-6 py-4 flex items-center justify-between bg-[#0a1628] border-t border-white/5">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-full px-2.5 py-0.5">
                {v.tag}
              </span>
              <p className="font-display font-bold text-white text-sm">{v.title}</p>
            </div>
            <motion.button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-500/80 flex items-center justify-center transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={16} className="text-white" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Page ── */
const MachineVideos = () => {
  const [active, setActive] = useState<Video | null>(null);

  return (
    <div className="overflow-hidden">
      <PageHero
        label="Resources"
        title="Machine"
        highlight="Videos"
        desc="Watch our machines in action — SPMs, pick & place units, washing systems and more."
        image="/service_viak.jpg"
      />

      <section className="section-padding bg-slate-50">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-14">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Watch & Learn</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-foreground">Machine Videos</h2>
            <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground text-sm mt-4 max-w-xl mx-auto">
              Hover to preview, click to watch in full screen.
            </p>
          </ScrollReveal>

          {/* First row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {videos.slice(0, 3).map((v, i) => (
              <VideoCard key={v.title} v={v} index={i} onOpen={() => setActive(v)} />
            ))}
          </div>

          {/* Second row — 2 cards centred */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {videos.slice(3).map((v, i) => (
              <VideoCard key={v.title} v={v} index={i + 3} onOpen={() => setActive(v)} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && <VideoModal v={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default MachineVideos;
