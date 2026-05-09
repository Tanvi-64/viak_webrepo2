import { Link } from "react-router-dom";
import MagneticButton from "@/components/MagneticButton";
import WaveDivider from "@/components/WaveDivider";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";import {
  ArrowRight, Cog, Cpu, Wrench, Bot, Shield,
  Play, CheckCircle2, Zap, Award, Users, TrendingUp,
  Factory, Car, Plane, Settings, Building2, Layers,
  Activity, Workflow,Gauge,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import Testimonials from "@/components/Testimonials";
import heroBg from "@/assets/hero-bg.jpg";
import mheHero from "@/assets/MHE/mhe1.jpeg";
import washingHero from "@/assets/tyre2.jpg";
// ── DATA ──────────────────────────────────────────────────────────────

const heroSlides = [
  {
    image: heroBg,
    tag: "SPM • Press Machines • Automation",
    title: "Precision Engineering for",
    highlight: "Special Purpose Machines",
    desc: "Custom-built SPMs, hydraulic & servo presses, pick and place units, and robotic cells engineered for your production line.",
  },
  {
    image: mheHero,
    tag: "Material Handling Equipment",
    title: "Engineered Solutions for",
    highlight: "Material Handling",
    desc: "Conveyors, trolleys, roller systems, pallet systems and custom carts designed to streamline workflow across your shop floor.",
  },
  {
    image: washingHero,
    tag: "Tyre Industry Solutions",
    title: "Dedicated Machinery for",
    highlight: "Tyre Industry Processes",
    desc: "Dipping stations, rotation frames, work tanks, sliding doors and gum folding units built for tyre manufacturing operations.",
  },
];

const services = [
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

const stats = [
  { value: 50, suffix: "+", label: "SPM Machines Delivered", icon: TrendingUp },
  { value: 30, suffix: "+", label: "Press Machines Built", icon: Users },
  { value: 20, suffix: "+", label: "Tyre Industry Clients", icon: Award },
  { value: 10, suffix: "+", label: "MHE Systems Installed", icon: CheckCircle2 },
];

const industries = [
  { icon: Factory, title: "Tyre Industry", desc: "Dipping stations, rotation frames, gum folding units and handling trolleys for major tyre manufacturers." },
  { icon: Car, title: "Automotive Industry", desc: "SPMs, robotic cells and press machines for automotive assembly and welding lines." },
  { icon: Plane, title: "Aerospace Components", desc: "High-precision special purpose machines and inspection systems for aerospace-grade components." },
  { icon: Settings, title: "Process Industries", desc: "Custom automation and material handling systems for process and chemical industries." },
  { icon: Building2, title: "Manufacturing Plants", desc: "End-to-end SPM and automation solutions for general manufacturing facilities." },
  { icon: Layers, title: "Heavy Engineering", desc: "Robust press machines and SPMs for heavy fabrication and structural engineering." },
];

const expertise = [
  { icon: Settings, title: "Precision Machine Design", desc: "High accuracy SPM design for welding, drilling, assembly, tapping and multi-station automation with micron level precision." },
  { icon: Cpu, title: "Custom Machine Design", desc: "Design and development of special purpose machines tailored to client production requirements." },
  { icon: Activity, title: "Servo, Pneumatic & Hydraulic Systems", desc: "Integration of servo motors, pneumatic actuators and hydraulic power systems for controlled motion." },
  { icon: Bot, title: "Robotic Integration", desc: "Arc welding, spot welding, gluing and robotic material handling cell integration." },
  { icon: Wrench, title: "Fabrication & Machining", desc: "In-house heavy fabrication, precision machining and structural manufacturing capabilities." },
  { icon: Workflow, title: "Automation Line Development", desc: "Complete conveyor based automation lines with sensors, PLC and safety systems." },
];



const whyUs = [
  {
    title: "Sub-1mm Runout Accuracy",
    desc: "Rotation frame runout improved from 15mm to under 1mm — a benchmark in industrial washing system precision.",
    icon: Cog,
  },
  {
    title: "SS304 / SS316 Material Standards",
    desc: "All washing system components use food-grade and chemical-resistant stainless steel for long service life.",
    icon: Shield,
  },
  {
    title: "Servo + Pneumatic Engineering",
    desc: "Pick & place units combine servo-driven positioning with pneumatic actuation for repeatable, high-speed operation.",
    icon: Zap,
  },
];

const clients = [
  "/client1.png", "/client2.png", "/client3.png", "/client4.png",
  "/client5.png", "/client6.png", "/client7.png", "/client8.png",
  "/client9.png", "/client10.png", "/client11.png", "/client12.png",
];

// ── PARTICLES ─────────────────────────────────────────────────────────

const Particle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-accent/30 pointer-events-none"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1] }}
    transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  delay: (i * 0.4) % 3,
  x: `${(i * 17 + 5) % 95}%`,
  y: `${(i * 23 + 10) % 85}%`,
  size: 4 + (i % 5) * 3,
}));

// ── COMPONENT ─────────────────────────────────────────────────────────

const Index = () => {
  const [slideIdx, setSlideIdx] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setSlideIdx((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[slideIdx];

  return (
    <div className="overflow-hidden">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Sliding background track */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="flex h-full"
            style={{ width: `${heroSlides.length * 100}vw` }}
            animate={{ x: `-${slideIdx * 100}vw` }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >

            {heroSlides.map((s, i) => (
              <div key={i} className="relative shrink-0 h-full" style={{ width: "100vw" }}>
                <img src={s.image} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy-light/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              </div>
            ))}

            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/20 text-accent border border-accent/30 mb-6 backdrop-blur-sm">
              Engineering the Future
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Innovating the Future
            <br />
            <span className="gradient-text">of Automation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10"
          >
            Viak Automation delivers cutting-edge industrial automation, mechanical design, and robotics solutions that drive efficiency and innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton>
              <Link
                to="/services"
                className="gradient-bg px-8 py-4 rounded-xl font-semibold text-primary-foreground hover:shadow-[0_0_30px_hsl(217_91%_50%/0.5)] transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore Services <ArrowRight size={18} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl font-semibold border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300 backdrop-blur-sm"
              >
                Get in Touch
              </Link>
            </MagneticButton>

          </motion.div>
        </div>

        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(hsl(200 95% 48% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(200 95% 48% / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {particles.map((p) => (
          <Particle key={p.id} delay={p.delay} x={p.x} y={p.y} size={p.size} />
        ))}

        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          {[180, 240, 300].map((size, i) => (
            <motion.div
              key={size}
              className="absolute rounded-full border border-accent/20"
              style={{ width: size, height: size, top: -size / 2, right: -size / 2 }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 20 + i * 8, repeat: Infinity, ease: "linear" }}
            />
          ))}
          <motion.div
            className="w-32 h-32 rounded-full gradient-bg opacity-20 blur-2xl"
            animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <motion.div
          className="relative z-10 container mx-auto px-4 pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-20"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIdx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-accent/20 text-accent border border-accent/30 mb-6 tracking-wider uppercase"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {slide.tag}
                </motion.span>

                <motion.h1
                  className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {slide.title}
                  <br />
                  <span className="gradient-text">{slide.highlight}</span>
                </motion.h1>

                <motion.p
                  className="text-sm md:text-base text-white/70 max-w-xl mb-10 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {slide.desc}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to="/contact"
                    className="group gradient-bg px-8 py-4 rounded font-semibold text-white hover:opacity-90 transition-all inline-flex items-center gap-2 shadow-lg shadow-primary/30"
                  >
                    Request a Quote
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/services"
                    className="group px-8 py-4 rounded font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                  >
                    <Play size={14} className="fill-white" />
                    View Products
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-2 mt-10">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIdx(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${i === slideIdx ? "w-8 gradient-bg" : "w-4 bg-white/30"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-navy py-3 overflow-hidden border-y border-white/10">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 2 }).map((_, rep) =>
            ["SPM Machines", "Hydraulic & Servo Presses", "Pick & Place Units", "Robotic Cells", "Material Handling Equipment", "Tyre Industry Solutions"].map((item) => (
              <span key={`${rep}-${item}`} className="text-white/50 text-sm font-medium flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                {item}
              </span>
            ))
          )}
        </motion.div>
      </div>

      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <motion.div className="glass-card p-6 text-center group hover-lift" whileHover={{ scale: 1.03 }}>
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <s.icon size={20} className="text-white" />
                  </div>
                  <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
                    <AnimatedCounter end={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">{s.label}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGINEERING EXPERTISE ── */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">What We're Good At</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-foreground">Our Engineering Expertise</h2>
            <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground mt-3 text-base max-w-xl mx-auto">Core capabilities that power our product manufacturing</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 0.1}>
                <motion.div
                  className="glass-card p-8 hover-lift group cursor-pointer h-full relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-28 h-28 gradient-bg opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300"
                  />
                  {/* Number badge */}
                  <div className="absolute top-4 right-5 text-[11px] font-bold text-accent/40 font-display tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                    <e.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 leading-snug">{e.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
                  {/* Bottom accent line on hover */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full gradient-bg transition-all duration-500 rounded-b-xl" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">What We Make</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-foreground">Our Product Categories</h2>
            <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <Link to={`/products/${s.slug}`} className="block h-full">
                  <motion.div
                    className="glass-card p-8 hover-lift group cursor-pointer h-full relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 gradient-bg opacity-5 rounded-bl-full" />
                    <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                      <s.icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View Products <ArrowRight size={14} />
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <WaveDivider className="-mt-px" />
      </section>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── INDUSTRIES WE SERVE ── */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Reach</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-foreground">Industries We Serve</h2>
            <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.title} delay={i * 0.1}>
                <motion.div
                  className="flex items-start gap-5 p-6 glass-card hover-lift group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-primary/20">
                    <ind.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{ind.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    

      {/* ── CLIENTS ── */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Trusted By</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-[#1e3a8a]">
              Clients &amp; Partners
            </h2>
            <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
          </ScrollReveal>
        </div>

        {/* Infinite marquee — two copies for seamless loop */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #ffffff, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #ffffff, transparent)" }} />

          <motion.div
            className="flex items-center gap-8 sm:gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{ width: "max-content" }}
          >
            {/* Two copies for seamless loop */}
            {[...clients, ...clients].map((logo, i) => (
              <motion.div
                key={i}
                className="shrink-0 flex items-center justify-center"
                whileHover={{ scale: 1.38, filter: "brightness(1.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-xl shadow-md px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center"
                  style={{ minWidth: 160, height: 100 }}>
                  <img
                    src={logo}
                    alt={`Client ${(i % clients.length) + 1}`}
                    className="max-h-20 max-w-[180px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding gradient-bg text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="container mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              Looking for Custom SPM, Press Machines or Material Handling Solutions?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8 text-base sm:text-lg">
              Tell us your requirement and our engineering team will design the right solution for your production line.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded font-semibold bg-white text-primary hover:opacity-90 transition-opacity shadow-xl"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default Index;
