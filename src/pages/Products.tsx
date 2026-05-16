import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench,Gauge, Truck, Cpu, Layers, CircleDot, Cog, Bot, Shield, Zap, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import projectViak from "@/assets/project_viak.jpg";

// ── Services data ─────────────────────────────────────────────────────
const services = [
  {
    icon: Wrench, color: "#1e3a8a",
    title: "Material Handling Equipments",
    desc: "We provide complete fabrication solutions along with efficient material handling systems for industrial applications.",
    tags: ["Pipe & Plate Fabrication", "Wheel Steering Systems", "Conveyor Turntables", "Custom Carts"],
  },
 
  {
    icon: Cpu, color: "#1e3a8a",
    title: "Special Purpose Machines",
    desc: "We develop tailor-made special purpose machines based on specific industrial requirements.",
    tags: ["Custom Machine Design", "Automation Systems", "Production Optimization"],
  },
  {
    icon: Layers, color: "#1a357e",
    title: "Press Machines",
    desc: "High-performance press machines designed for precision and durability in industrial operations.",
    tags: ["Hydraulic Press Machines", "Servo Press Machines", "Pneumatic Press Machines"],
  },
  {
    icon: CircleDot, color: "#1e3a8a",
    title: "Tyre Industries Solutions",
    desc: "Specialized solutions and machinery designed for tyre industry processes and related applications.",
    tags: ["Tyre Handling Systems", "Automation in Tyre Production"],
  },
];

// ── Products data ─────────────────────────────────────────────────────
const products = [

 {
    icon: Gauge,
    title: "Hydraulics, Pneumatics & Servo Presses",
    slug: "hydraulics",
    desc: "Design and manufacturing of hydraulic, pneumatic, and servo presses for precision forming, pressing, clamping, and automated industrial operations."
  },
  {
    icon: Cpu,
    title: "Special Purpose Machines (SPM)",
    slug: "spm",
    desc: "Custom-built special purpose machines tailored for specific production needs such as welding, drilling, assembly, tapping, and multi-station automation."
  },

  {
    icon: Shield,
    title: "Tyre Industries",
    slug: "tyre",
    desc: "Dedicated machinery and fabricated equipment for tyre manufacturing processes including dipping stations, rotation frames, work tanks, sliding doors, and pallets."
  },
  {
    icon: Wrench,
    title: "Material Handling Equipment",
    slug: "material-handling",
    desc: "Engineered material handling solutions such as conveyors, rollers, guide plates, gum folding units, and press rolls for smooth workflow across industrial setups."
  }
  
];

const Products = () => (
  <div className="overflow-hidden">
    <PageHero
      label="What We Offer"
      title="Our"
      highlight="Products & Services"
      desc="Explore our complete range of precision-engineered products and industrial services tailored for automotive, Tyre and process industries."
      image={projectViak}
    />

    {/* ── SERVICES WE PROVIDE ── */}
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">What We Do</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-foreground">Services We Provide</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
        </ScrollReveal>

        <div className="flex flex-col gap-5">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <motion.div
                className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row items-start overflow-hidden group relative"
                whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(30,58,138,0.13)" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {/* Icon block */}
                <div className="flex items-center justify-center shrink-0 md:w-24 w-full h-20 md:h-auto md:self-stretch"
                  style={{ background: s.color }}>
                  <motion.div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center"
                    whileHover={{ scale: 1.12, rotate: 6 }} transition={{ type: "spring", stiffness: 300 }}>
                    <s.icon size={26} className="text-white" />
                  </motion.div>
                </div>
                {/* Content */}
                <div className="flex-1 px-7 py-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display text-xl font-bold text-[#1e3a8a] group-hover:text-[#2fa0d1] transition-colors duration-200">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#e8f0fe] text-[#1e3a8a] border border-[#1e3a8a]/10 group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Bottom sweep */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                  style={{ background: `linear-gradient(to right, ${s.color}, #2fa0d1)` }} />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── OUR PRODUCTS ── */}
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Product Range</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-foreground">Our Products</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-3 text-sm max-w-xl mx-auto">
            Click any product to explore detailed specifications, images and enquiry options.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 0.08}>
              <Link to={`/products/${p.slug}`} className="block h-full">
                <motion.div
                  className="glass-card p-8 hover-lift group cursor-pointer h-full relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 gradient-bg opacity-5 rounded-bl-full" />
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                    <p.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  <div className="mt-5 flex items-center gap-1 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] gradient-bg scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-b-xl" />
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="section-padding gradient-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="container mx-auto text-center relative z-10">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Looking for a Custom Solution?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            Tell us your requirement and our engineering team will design the right solution for your production line.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded font-semibold bg-white text-primary hover:opacity-90 transition-opacity shadow-xl">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default Products;
