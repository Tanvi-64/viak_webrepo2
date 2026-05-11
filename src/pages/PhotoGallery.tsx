import PageHero from "@/components/PageHero";
import photoGalleryHeader from "@/assets/teambgimg.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

// Import team photos
import photo1 from "@/assets/photogallery/photo1.jpeg";
import photo2 from "@/assets/photogallery/photo2.jpeg";
import photo3 from "@/assets/photogallery/photo3.jpeg";
import photo4 from "@/assets/photogallery/photo4.jpeg";
import photo5 from "@/assets/photogallery/photo5.jpeg";
import photo6 from "@/assets/photogallery/photo6.jpeg";
import photo7 from "@/assets/photogallery/photo7.jpeg";
import photo8 from "@/assets/photogallery/photo8.jpeg";

const photos: { src: string; name: string; category: string }[] = [
  { src: photo1, name: "Celebrating Success", category: "Celebration" },
  { src: photo2, name: "Workshop Celebration", category: "Celebration" },
  { src: photo3, name: "Team Gathering",     category: "Event"  },
  { src: photo4, name: "Joyful Moments",    category: "Celebration" },
  { src: photo5, name: "Team Spirit", category: "Culture" },
  { src: photo6, name: "Engineering Minds", category: "Engineering" },
  { src: photo7, name: "Office Vibes", category: "Environment" },
  { src: photo8, name: "Together We Build", category: "Unity" },
];

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

      {/* Inspirational Quote Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#38bdf8]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <Sparkles className="text-yellow-300" size={40} />
              </motion.div>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                "Together We Create, Innovate & Celebrate"
              </h2>
              <p className="text-white/90 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                Behind every machine, every innovation, and every success story is a team that believes in excellence, 
                collaboration, and the power of shared dreams. These moments capture our journey, our culture, and our spirit.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-1 w-20 bg-white/30 rounded-full" />
                <div className="h-1 w-12 bg-white/50 rounded-full" />
                <div className="h-1 w-8 bg-white/70 rounded-full" />
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent" />
              Our Moments
              <span className="w-8 h-[2px] bg-accent" />
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
              Life at <span className="text-accent">Viak</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto mt-5 rounded-full" />
            <p className="text-muted-foreground text-base mt-4 max-w-2xl mx-auto">
              Explore the vibrant culture and dynamic environment that makes Viak Automation Studio a great place to work and grow
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {photos.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <motion.div
                  className="group relative cursor-pointer"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={() => setLightbox(i)}
                >
                  {/* Decorative frame border */}
                  <div className="absolute -inset-[3px] bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] rounded-2xl opacity-0 group-hover:opacity-100 blur-[3px] transition-opacity duration-500" />
                  
                  {/* Main card */}
                  <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-white group-hover:border-[#38bdf8]/30 transition-all duration-500">
                    {/* Category badge */}
                    <div className="absolute top-3 left-3 z-20">
                      <motion.span 
                        className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm text-[#1e3a8a] text-xs font-bold rounded-full shadow-lg"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.05 + 0.2 }}
                      >
                        {p.category}
                      </motion.span>
                    </div>

                    {/* Image container with aspect ratio */}
                    <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
                      <img 
                        src={p.src} 
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out" 
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/90 via-[#1e3a8a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Hover content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 260, damping: 20 }}
                          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border-2 border-white/40"
                        >
                          <ZoomIn size={28} className="text-white" />
                        </motion.div>
                        <p className="text-white font-bold text-sm text-center">Click to view</p>
                      </div>

                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#38bdf8]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#38bdf8]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Title section */}
                    <div className="p-4 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/5 to-[#38bdf8]/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      <h3 className="font-display font-bold text-[#1e3a8a] text-base relative z-10 group-hover:text-[#38bdf8] transition-colors duration-300">
                        {p.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-[2px] flex-1 bg-gradient-to-r from-[#1e3a8a] to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 rounded-full bg-[#38bdf8] opacity-0 group-hover:opacity-100"
                        />
                      </div>
                    </div>

                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent animate-shimmer" />
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent animate-shimmer" style={{ animationDelay: '0.5s' }} />
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}>
            <motion.div initial={{ scale: 0.85, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#1e3a8a]/30 via-[#2563eb]/20 to-[#38bdf8]/30 rounded-3xl blur-2xl" />
              
              {/* Image frame */}
              <div className="relative bg-gradient-to-br from-[#1e3a8a] to-[#38bdf8] p-1 rounded-2xl shadow-2xl">
                <div className="bg-black rounded-xl overflow-hidden">
                  <img src={photos[lightbox].src} alt={photos[lightbox].name}
                    className="w-full max-h-[72vh] object-contain" />
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <span className="inline-block px-4 py-1 bg-[#38bdf8]/20 text-[#38bdf8] text-xs font-bold rounded-full mb-2">
                  {photos[lightbox].category}
                </span>
                <p className="text-white font-display font-bold text-xl">{photos[lightbox].name}</p>
                <p className="text-white/40 text-sm mt-1">{lightbox + 1} / {photos.length}</p>
              </div>

              {/* Close button */}
              <button onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/50 hover:bg-red-500 transition-all duration-200 flex items-center justify-center text-white border border-white/20 hover:border-red-500 hover:scale-110 z-10">
                <X size={18} />
              </button>

              {/* Prev button */}
              {lightbox > 0 && (
                <button onClick={() => setLightbox(lightbox - 1)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#1e3a8a] flex items-center justify-center text-white transition-all duration-200 border border-white/20 hover:border-[#38bdf8] hover:scale-110">
                  <ArrowLeft size={20} />
                </button>
              )}

              {/* Next button */}
              {lightbox < photos.length - 1 && (
                <button onClick={() => setLightbox(lightbox + 1)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#1e3a8a] flex items-center justify-center text-white transition-all duration-200 border border-white/20 hover:border-[#38bdf8] hover:scale-110">
                  <ArrowRight size={20} />
                </button>
              )}

              {/* Thumbnail strip */}
              <div className="mt-4 flex gap-2 justify-center overflow-x-auto pb-1">
                {photos.map((ph, idx) => (
                  <button key={idx} onClick={() => setLightbox(idx)}
                    className={`shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 ${idx === lightbox ? 'border-[#38bdf8] scale-110' : 'border-white/20 opacity-50 hover:opacity-100'}`}>
                    <img src={ph.src} alt={ph.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;
