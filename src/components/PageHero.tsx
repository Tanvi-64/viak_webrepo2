import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  highlight: string;
  desc: string;
  image: string;
  descClassName?: string;
}

const PageHero = ({ label, title, highlight, desc, image, descClassName }: PageHeroProps) => (
  <section className="relative overflow-hidden" style={{ height: 420 }}>
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover object-center"
    />
    {/* bottom fade only */}
    <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent" />

    <div className="relative z-10 h-full flex items-end">
      <div className="container mx-auto px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-block bg-[#1e3a8a]/82 backdrop-blur-md px-8 py-6 rounded-r-2xl border-l-4 border-[#38bdf8] max-w-xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#38bdf8] font-semibold text-[10px] tracking-[0.28em] uppercase mb-2"
          >
            {label}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-3xl md:text-5xl font-extrabold text-white leading-tight"
          >
            {title} <span className="text-[#38bdf8]">{highlight}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 }}
            className={descClassName ?? "text-white/70 mt-2 text-sm leading-relaxed"}
          >
            {desc}
          </motion.p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PageHero;
