import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { title: "SPM Machine Demo", desc: "100 Ton Hydraulic Press in action", thumb: "/spm/spm_01.jpg", src: "/viak-video.mp4" },
  { title: "Pick & Place Unit", desc: "Gantry pick & place operation", thumb: "/spm/spm_06.jpeg", src: "/viak-video.mp4" },
  { title: "Washing System", desc: "Industrial washing machine cycle", thumb: "/washing/washing_01.jpeg", src: "/viak-video.mp4" },
  { title: "Proofload Testing", desc: "Load testing machine in operation", thumb: "/spm/spm_08.jpg", src: "/viak-video.mp4" },
  { title: "Wheel Stacking", desc: "Automated wheel stacking machine", thumb: "/spm/spm_13.png", src: "/viak-video.mp4" },
  { title: "Wire Guiding", desc: "Wire guiding machine process", thumb: "/spm/spm_14.png", src: "/viak-video.mp4" },
];

const MachineVideos = () => (
  <div className="overflow-hidden">
    <PageHero
      label="Resources"
      title="Machine"
      highlight="Videos"
      desc="Watch our machines in action — SPMs, pick & place units, washing systems and more."
      image="/service_viak.jpg"
    />

    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Watch & Learn</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-foreground">Machine Videos</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.08}>
              <motion.div
                className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer bg-[#0f172a]"
                whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(30,58,138,0.22)" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img src={v.thumb} alt={v.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Play size={22} className="text-white fill-white ml-1" />
                    </motion.div>
                  </div>
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
                </div>
                {/* Info */}
                <div className="px-5 py-4">
                  <p className="font-display font-bold text-white text-base">{v.title}</p>
                  <p className="text-white/50 text-xs mt-1">{v.desc}</p>
                </div>
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default MachineVideos;
