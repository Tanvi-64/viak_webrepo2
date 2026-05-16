import { motion } from "framer-motion";
import { Wrench, Truck, Cpu, Layers, CircleDot, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";

const services = [
  {
    icon: Wrench,
    color: "#1e3a8a",
    title: "Fabrication & Material Handling",
    desc: "We provide complete fabrication solutions along with efficient material handling systems for industrial applications.",
    tags: ["Pipe & Plate Fabrication", "Wheel Steering Systems", "Conveyor Turntables", "Custom Carts"],
  },
  {
    icon: Truck,
    color: "#1a357e",
    title: "Fabrication of MHE",
    desc: "Design and manufacturing of customized MHE solutions to optimize workflow and reduce manual effort.",
    tags: ["Trolleys", "Pallet Systems", "Industrial Handling Equipment"],
  },
  {
    icon: Cpu,
    color: "#1e3a8a",
    title: "Special Purpose Machines",
    desc: "We develop tailor-made special purpose machines based on specific industrial requirements.",
    tags: ["Custom Machine Design", "Automation Systems", "Production Optimization"],
  },
  {
    icon: Layers,
    color: "#1a357e",
    title: "Press Machines",
    desc: "High-performance press machines designed for precision and durability in industrial operations.",
    tags: ["Hydraulic Press Machines", "Servo Press Machines", "Pneumatic Press Machines"],
  },
  {
    icon: CircleDot,
    color: "#1e3a8a",
    title: "Tyre Industries Solutions",
    desc: "Specialized solutions and machinery designed for tyre industry processes and related applications.",
    tags: ["Tyre Handling Systems", "Automation in Tyre Production"],
  },
];

const Services = () => (
  <div className="overflow-hidden">
    <PageHero
      label="What We Offer"
      title="Our"
      highlight="Services"
      desc="End-to-end automation and engineering solutions — SPMs, press machines, material handling equipment, robotics and tyre industry systems tailored for modern industry."
      image="/service_viak.jpg"
    />

    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">

        <ScrollReveal className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">What We Offer</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-foreground">Our Services</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
        </ScrollReveal>

        <div className="flex flex-col gap-5">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <motion.div
                className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row items-start gap-0 overflow-hidden group relative"
                whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(30,58,138,0.13)" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {/* Left icon block */}
                <div
                  className="flex items-center justify-center shrink-0 md:w-24 w-full h-20 md:h-auto md:self-stretch"
                  style={{ background: s.color }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center"
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <s.icon size={26} className="text-white" />
                  </motion.div>
                </div>

                {/* Right content */}
                <div className="flex-1 px-7 py-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display text-xl font-bold text-[#1e3a8a] group-hover:text-[#2fa0d1] transition-colors duration-200">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-[#e8f0fe] text-[#1e3a8a] border border-[#1e3a8a]/10 group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                  style={{ background: `linear-gradient(to right, ${s.color}, #2fa0d1)` }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding gradient-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="container mx-auto text-center relative z-10">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            Tell us about your requirements and we'll engineer the perfect solution.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded font-semibold bg-white text-primary hover:opacity-90 transition-opacity shadow-xl">
            Get a Quote <ArrowRight size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default Services;
