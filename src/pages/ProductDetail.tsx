import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { productData } from "@/data/productData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-40">
        <p className="text-2xl font-display font-bold text-foreground">Product not found.</p>
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  const gallery = product.gallery ?? [];
  const hasGallery = gallery.length > 0;

  return (
    <div className="min-h-screen bg-white pb-24">

      {/* ── PAGE HEADER ── */}
      <div className="bg-slate-50 pt-24 sm:pt-32 md:pt-36 pb-10 sm:pb-14 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Back */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="mb-10">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Link>
          </motion.div>

          {/* Title block */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
                bg-accent/10 text-accent border border-accent/20 tracking-widest uppercase mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Product Category
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#1e3a8a] leading-tight mb-4"
            >
              {product.title.includes("(") ? (
                <>
                  {product.title.split("(")[0].trim()}
                  <br />
                  <span className="gradient-text text-3xl md:text-4xl">
                    ({product.title.split("(")[1]}
                  </span>
                </>
              ) : (
                <>
                  {product.title.split(" ").slice(0, -1).join(" ")}
                  <br />
                  <span className="gradient-text">{product.title.split(" ").slice(-1)}</span>
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-base max-w-2xl leading-relaxed"
            >
              {product.desc}
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-20 h-1 gradient-bg mt-6 rounded-full"
            />
          </motion.div>
        </div>
      </div>

      {/* ── MACHINE LIST (alternating layout) ── */}
      {hasGallery && (
        <div className="container mx-auto px-4 max-w-6xl mt-16">
          <div className="flex flex-col">
            {gallery.map((img, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  {/* Divider (not on first) */}
                  {i > 0 && <div className="w-full h-px bg-slate-100 my-2" />}

                  <div className={`flex flex-col md:flex-row items-center gap-10 py-10 ${!isEven ? "md:flex-row-reverse" : ""}`}>

                    {/* Image */}
                    <motion.div
                      className="w-full md:w-[42%] shrink-0 cursor-pointer group"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      onClick={() => setLightbox(i)}
                    >
                      <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-400">
                        <img
                          src={img.src}
                          alt={img.name}
                          className="w-full aspect-[4/3] object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a8a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {/* zoom hint */}
                        <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-lg px-2.5 py-1 text-[10px] font-semibold text-[#1e3a8a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                          <X size={10} className="rotate-45" /> Click to enlarge
                        </div>
                      </div>
                    </motion.div>

                    {/* Text */}
                    <div className="flex-1">
                      {/* Number */}
                      <p className="font-display text-4xl font-black text-slate-100 leading-none mb-1 select-none">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4 -mt-3 leading-snug">
                        {img.name}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                        {img.desc ?? "Custom-engineered special purpose machine designed for precision industrial operations."}
                      </p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all group"
                      >
                        Enquire about this machine
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── OVERVIEW + ITEMS (for non-gallery pages) ── */}
      {!hasGallery && (
        <div className="container mx-auto px-4 max-w-6xl pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">{product.desc}</p>
              <Link to="/contact" className="group gradient-bg inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-white hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Request a Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <div>
              <motion.h2 initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="font-display text-2xl font-bold text-foreground mb-6">
                Products in this Category
              </motion.h2>
              <ul className="flex flex-col gap-3">
                {product.items.map((item, i) => (
                  <motion.li key={item} custom={i} variants={fadeUp} initial="hidden" animate="show"
                    className="flex items-start gap-3 glass-card p-4 rounded-xl group hover-lift">
                    <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <span className="text-foreground font-medium text-sm leading-relaxed pt-1">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ── CTA + OTHER CATEGORIES ── */}
      <div className="container mx-auto px-4 max-w-6xl mt-8">
        {hasGallery && (
          <div className="gradient-bg rounded-2xl p-8 md:p-12 text-white text-center mb-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 relative z-10">Need a Custom SPM?</h3>
            <p className="text-white/80 mb-6 max-w-lg mx-auto relative z-10">Tell us your production requirement and our engineering team will design the right machine for you.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-white text-primary font-bold rounded hover:opacity-90 transition-opacity shadow-lg relative z-10">
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        )}

        <div className="pt-8 border-t border-border">
          <h3 className="font-display text-xl font-bold text-foreground mb-5">Explore Other Categories</h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(productData).filter(([s]) => s !== slug).map(([s, p]) => (
              <Link key={s} to={`/products/${s}`}
                className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-all hover:bg-primary/5">
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <>
            {/* Backdrop — blur only, no dark tint */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[99] backdrop-blur-md bg-white/10"
              onClick={() => setLightbox(null)}
            />

            {/* Content */}
            <motion.div
              key="lightbox"
              initial={{ opacity: 0, scale: 0.75, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.75, y: 40 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 pointer-events-none"
            >
              <div className="relative max-w-4xl w-full pointer-events-auto">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={gallery[lightbox].src}
                    alt={gallery[lightbox].name}
                    className="w-full max-h-[75vh] object-contain"
                  />
                </div>

                {/* Caption */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 text-center"
                >
                  <p className="text-foreground font-display font-bold text-lg">{gallery[lightbox].name}</p>
                  <p className="text-muted-foreground text-xs mt-1 tracking-widest">{lightbox + 1} / {gallery.length}</p>
                </motion.div>

                {/* Close button */}
                <motion.button
                  onClick={() => setLightbox(null)}
                  className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gray-600 hover:bg-red-500 border border-gray-400 flex items-center justify-center text-white transition-colors duration-200 shadow-lg"
                  whileHover={{ scale: 1.15, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <X size={17} />
                </motion.button>

                {/* Prev */}
                {lightbox > 0 && (
                  <motion.button
                    onClick={() => setLightbox(lightbox - 1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gray-600 hover:bg-gray-500 border border-gray-400 flex items-center justify-center text-white transition-colors duration-200 shadow-md"
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowLeft size={20} />
                  </motion.button>
                )}

                {/* Next */}
                {lightbox < gallery.length - 1 && (
                  <motion.button
                    onClick={() => setLightbox(lightbox + 1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gray-600 hover:bg-gray-500 border border-gray-400 flex items-center justify-center text-white transition-colors duration-200 shadow-md"
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowRight size={20} />
                  </motion.button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetail;
