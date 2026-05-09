import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    review: "I am extremely pleased with the services provided by Viak Automation. Their products are of high quality, and I appreciate their commitment to on-time delivery. Moreover, their focus on ensuring customer satisfaction has made me a loyal and happy customer. Keep up the excellent work...",
    name: "Sushant Kadam",
    company: "Verified Client",
  },
  {
    review: "I am extremely pleased with the services provided by Viak Automation. Their products are of high quality, and I appreciate their commitment to on-time delivery. Thanks Team Viak for your 24/7 support — none other companies provide like Viak Automation support.",
    name: "Pankaj Dhende",
    company: "Verified Client",
  },
  {
    review: "VIAK AUTOMATION is the best company I ever got to know for its excellency in automation, jigs and fixtures. Thank you VIAK AUTOMATION! 🙏",
    name: "Pralhad Shelke",
    company: "Verified Client",
  },
  {
    review: "Excellent technical support and having wide portfolio into Automation and Material Handling Systems.",
    name: "Aniket Shetye",
    company: "Verified Client",
  },
  {
    review: "Manufacturer of Conveyor, Fixtures and SPM Machine. Good place for work 😊",
    name: "R G",
    company: "Verified Client",
  },
];

function useVisible() {
  const [visible, setVisible] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return visible;
}

const Testimonials = () => {
  const visible = useVisible();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;
  const maxIndex = Math.max(0, total - visible);

  // Reset index when visible count changes so we never go out of bounds
  useEffect(() => {
    setIndex((p) => Math.min(p, maxIndex));
  }, [maxIndex]);

  const next = () => setIndex((p) => (p >= maxIndex ? 0 : p + 1));
  const prev = () => setIndex((p) => (p <= 0 ? maxIndex : p - 1));

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, index, maxIndex]);

  // Card width as a percentage of the track
  const cardWidthPct = 100 / visible;
  // Gap in px between cards
  const gap = 24;
  // Translate: each step moves one card width + proportional gap
  const translateX = `calc(-${index * cardWidthPct}% - ${index * gap}px)`;

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">

        <ScrollReveal className="text-center mb-10 sm:mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Testimonials</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mt-2 text-foreground">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
        </ScrollReveal>

        {/* Slider track */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            className="flex"
            style={{ gap: `${gap}px` }}
            animate={{ x: translateX }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="shrink-0"
                style={{ width: `calc(${cardWidthPct}% - ${gap * (visible - 1) / visible}px)` }}
              >
                <motion.div
                  className="glass-card p-5 sm:p-7 h-full flex flex-col gap-4 relative overflow-hidden group hover-lift"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {/* Quote watermark */}
                  <div className="absolute top-4 right-5 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity">
                    <Quote size={48} className="text-[#1e3a8a]" />
                  </div>

                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bg rounded-t-xl" />

                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={14} className="fill-[#38bdf8] text-[#38bdf8]" />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">
                    "{t.review}"
                  </p>

                  {/* Client */}
                  <div className="flex items-center gap-3 pt-3 border-t border-border">
                    <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center shrink-0">
                      <span className="text-white font-display font-bold text-sm">
                        {t.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                      <p className="text-muted-foreground text-xs">{t.company}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 gradient-bg" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
