import PageHero from "@/components/PageHero";
import photoGalleryHeader from "@/assets/teambgimg.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, ArrowLeft, ArrowRight } from "lucide-react";

const photos: { src: string; name: string }[] = [];

const PhotoGallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="overflow-hidden">
      <PageHero
        label="Resources"
        title="Photo"
        highlight="Gallery"
        desc="Browse our complete gallery of precision-engineered machines, components and systems."
        image={photoGalleryHeader}
        descClassName="text-white/75 font-medium mt-2 text-xs sm:text-sm leading-relaxed hidden sm:block"
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-14">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Work</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-foreground">Photo Gallery</h2>
            <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground text-sm mt-3">Click any image to view full size</p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <motion.div
                  className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md"
                  whileHover={{ scale: 1.04, y: -4, boxShadow: "0 20px 40px rgba(30,58,138,0.18)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  onClick={() => setLightbox(i)}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img src={p.src} alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/80 via-[#1e3a8a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <div className="flex items-center justify-between w-full">
                      <p className="text-white text-xs font-semibold">{p.name}</p>
                      <ZoomIn size={14} className="text-white shrink-0" />
                    </div>
                  </div>
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bg scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/92 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}>
            <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img src={photos[lightbox].src} alt={photos[lightbox].name}
                className="w-full max-h-[78vh] object-contain rounded-2xl shadow-2xl" />
              <div className="mt-3 text-center">
                <p className="text-white font-display font-bold text-lg">{photos[lightbox].name}</p>
                <p className="text-white/40 text-sm mt-1">{lightbox + 1} / {photos.length}</p>
              </div>
              <button onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white/15 hover:bg-red-500 transition-colors flex items-center justify-center text-white">
                <X size={18} />
              </button>
              {lightbox > 0 && (
                <button onClick={() => setLightbox(lightbox - 1)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors">
                  <ArrowLeft size={18} />
                </button>
              )}
              {lightbox < photos.length - 1 && (
                <button onClick={() => setLightbox(lightbox + 1)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors">
                  <ArrowRight size={18} />
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;
