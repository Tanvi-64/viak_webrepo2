import { motion } from "framer-motion";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";

const categories = ["All", "Manufacturing", "Robotics", "CNC", "Custom Machines"];

const projects = [
  { title: "Automated Assembly Line", category: "Manufacturing", desc: "High-speed assembly line for automotive components.", img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop" },
  { title: "Robotic Welding Cell", category: "Robotics", desc: "6-axis welding robot cell with vision-guided positioning.", img: "https://images.unsplash.com/photo-1537462715315-ce5e2bd67fc8?w=600&h=400&fit=crop" },
  { title: "CNC Integration System", category: "CNC", desc: "Multi-CNC cell with automated tool changing.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" },
  { title: "Packaging Automation", category: "Manufacturing", desc: "End-of-line packaging with robotic palletizing.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop" },
  { title: "Pick & Place Robot", category: "Robotics", desc: "High-speed delta robot for food industry sorting.", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop" },
  { title: "Custom Press Machine", category: "Custom Machines", desc: "200-ton hydraulic press with servo control.", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop" },
  { title: "Conveyor System", category: "Manufacturing", desc: "Modular conveyor with smart routing and sorting.", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop" },
  { title: "Laser Cutting Cell", category: "CNC", desc: "Fiber laser cutting with automated sheet loading.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop" },
  { title: "SPM Drilling Machine", category: "Custom Machines", desc: "Multi-spindle drilling SPM for mass production.", img: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&h=400&fit=crop" },
];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="overflow-hidden">
      <PageHero
        label="Portfolio"
        title="Our"
        highlight="Projects"
        desc="A showcase of precision-engineered SPMs, press machines, material handling systems and automation solutions delivered across India's leading manufacturers."
        image="/project_viak.jpg"
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {/* Filter */}
          <ScrollReveal className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <motion.button
                key={c}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === c ? "gradient-bg text-primary-foreground shadow-[0_0_20px_hsl(217_91%_50%/0.3)]" : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {c}
              </motion.button>
            ))}
          </ScrollReveal>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="group relative rounded-xl overflow-hidden cursor-pointer glass-card hover:shadow-[0_20px_60px_-15px_hsl(215_25%_12%/0.3)] transition-all duration-500">
                  <div className="overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <motion.span className="text-accent text-xs font-semibold tracking-wider uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {p.category}
                    </motion.span>
                    <h3 className="font-display text-lg font-bold text-primary-foreground mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{p.title}</h3>
                    <p className="text-primary-foreground/70 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{p.desc}</p>
                  </div>
                  <div className="p-5 group-hover:opacity-0 transition-opacity duration-300">
                    <span className="text-accent text-xs font-semibold tracking-wider uppercase">{p.category}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1">{p.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
