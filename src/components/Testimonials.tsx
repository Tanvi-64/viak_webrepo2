import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const VISIBLE = 3; // cards visible on desktop

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;
  const maxIndex = total - VISIBLE; // 0..2 on desktop

  const next = () => setIndex((p) => (p >= maxIndex ? 0 : p + 1));
  const prev = () => setIndex((p) => (p <= 0 ? maxIndex : p - 1));

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, index]);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">

        {/* Heading */}
        <ScrollReveal className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-foreground">What Our Clients Say</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
        </ScrollReveal>

        {/* Slider */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            className="flex gap-6"
            animate={{ x: `calc(-${index * (100 / VISIBLE)}% - ${index * 24 / VISIBLE}px)` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ width: `${(total / VISIBLE) * 100}%` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="shrink-0"
                style={{ width: `${100 / total}%` }}
              >
                <motion.div
                  className="glass-card p-7 h-full flex flex-col gap-4 relative overflow-hidden group hover-lift"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {/* Quote icon watermark */}
                  <div className="absolute top-4 right-5 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity">
                    <Quote size={52} className="text-[#1e3a8a]" />
                  </div>

                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bg rounded-t-xl" />

                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={15} className="fill-[#38bdf8] text-[#38bdf8]" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">
                    "{t.review}"
                  </p>

                  {/* Client info */}
                  <div className="flex items-center gap-3 pt-3 border-t border-border">
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shrink-0">
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
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 gradient-bg" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
