import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, Lightbulb, Award, Play, Pause, Volume2, VolumeX, Maximize2, X } from "lucide-react";
import { useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import about3 from "@/assets/about3.jpg";
import about4 from "@/assets/about4.jpg";

const timeline = [
  { year: "2016", title: "Company Founded", desc: "Viak Automation Studio was established in Pune with a vision to deliver precision-engineered automation solutions for manufacturing industries." },
  { year: "2017", title: "First Hydraulic & SPM Projects Delivered", desc: "Successfully designed and commissioned initial hydraulic presses and special purpose machines for local manufacturing clients." },
  { year: "2018", title: "Entry into Tyre Industry Solutions", desc: "Started developing dedicated equipment such as dipping stations, gum folding units, and handling trolleys for tyre industry processes." },
  { year: "2019", title: "Expansion into Material Handling Systems", desc: "Introduced conveyors, roller systems, lifts, and custom trolleys to provide complete material handling solutions across shop floors." },
  { year: "2020", title: "Advanced Pneumatic & Servo Systems", desc: "Integrated pneumatic controls and servo-driven mechanisms into machines for improved precision, speed, and automation control." },
  { year: "2022", title: "Trusted Vendor for Multiple Industries", desc: "Became a preferred automation partner for clients in tyre, automotive, and general engineering sectors with repeat project deliveries." },
  { year: "2024", title: "Complete In-House Design & Fabrication Capability", desc: "Strengthened in-house design, fabrication, and assembly capabilities to deliver end-to-end automation systems under one roof." },
];

const staff = [
  { photo: about3 },
  { photo: about4 },
];

const coreValues = [
  { title: "Innovation First", desc: "We continuously develop smarter, faster, and more efficient automation solutions." },
  { title: "Customer-Centric Approach", desc: "Every machine is designed around the customer's process and ROI." },
  { title: "Quality & Precision", desc: "We deliver machines that ensure accuracy, durability, and zero-defect output." },
  { title: "Integrity & Transparency", desc: "We build trust through honest communication and ethical practices." },
  { title: "Teamwork & Collaboration", desc: "Strong internal and client collaboration drives better solutions." },
  { title: "Ownership & Accountability", desc: "We take complete responsibility—from concept to commissioning." },
];

const COMPANY_VIDEO = "https://res.cloudinary.com/dwmb3fuvg/video/upload/q_auto/f_auto/v1778399880/ph4vwrpfadxgumyglxw8.mp4";

const COMPANY_DESC = `VIAK AUTOMATION SYSTEMS PVT LTD IS A PUNE BASED MANUFACTURING COMPANY FOCUSED ON SPECIAL PURPOSE MACHINE WORKS AND ALL TYPES OF JIGS & FIXTURES, MATERIAL HANDLING EQUIPMENT'S FOR AUTOMOBILE INDUSTRY, FOOD AND PHARMACY INDUSTRY, INFRASTRUCTURE INDUSTRY, AND ALL OTHER MECHANICAL ELEMENTS. WE ARE PROUD TO HAVE DELIVERED CHALLENGING SOLUTIONS SUCCESSFULLY TO WHO'S WHO IN THE INDUSTRY WITH OUR STRONG MANAGEMENT TEAM OF DESIGN, QUALITY, COMMERCIAL AND PRODUCTION, HAVING EXPERIENCE OF MORE THAN 10 YEARS. WE ARE KNOWN TO SUPPLY SATISFYING PRODUCTS TO OUR CUSTOMERS, ALONG WITH PROVIDING SOLUTIONS FOR SOLVING THEIR PROBLEMS OF INTEGRAL NATURE. THIS IS THE PRINCIPLE THAT WE HAVE ALWAYS BEEN ADHERING TO. AT VASPL, WE BELIEVE IN THE IDEOLOGY OF MAKING TECHNOLOGY AS OUR FOUNDATION, HENCE ORIENTING OURSELVES ACCORDING TO THE MARKET'S NEEDS AND HOLDING IT AS OUR GOAL TO MAKE CUSTOMER SATISFIED. MOREOVER, WE TRY OUR BEST IN CREATING SUCH AN ORGANIZATIONAL ENVIRONMENT THAT IS HUMAN ORIENTED, INNOVATIVE AND TECHNOLOGY DRIVEN DELIVERING THE QUALITY SERVICES TO OUR CUSTOMERS.`;

function CompanyVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [lightbox, setLightbox] = useState(false);
  const lbRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };
  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };
  const openLightbox = () => {
    videoRef.current?.pause();
    setPlaying(false);
    setLightbox(true);
  };
  const closeLightbox = () => {
    lbRef.current?.pause();
    setLightbox(false);
  };

  return (
    <section className="section-padding bg-slate-50 overflow-hidden relative">
      <div className="container mx-auto relative z-10">
        <ScrollReveal className="text-center mb-10 sm:mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Who We Are</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mt-2 text-foreground">
            About <span className="gradient-text">Viak</span>
          </h2>
          <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Modern Video Frame */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* outer decorative ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 blur-xl" />
              {/* frame border */}
              <motion.div
                className="relative rounded-2xl p-[3px] bg-gradient-to-br from-primary via-accent to-primary/60 shadow-2xl"
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
              >
                {/* inner frame header bar */}
                <div className="bg-[#1e3a8a] rounded-t-[14px] px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2fa0d1] animate-pulse" />
                      <span className="text-white/80 text-[10px] font-semibold tracking-widest uppercase">Viak Automation Systems</span>
                    </div>
                  </div>
                </div>

                {/* video area */}
                <div className="relative bg-black rounded-b-[14px] overflow-hidden group">
                  <video
                    ref={videoRef}
                    src={COMPANY_VIDEO}
                    className="w-full aspect-video object-cover"
                    muted
                    playsInline
                    loop
                    autoPlay
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                  />

                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* center play/pause on click */}
                  <AnimatePresence>
                    {!playing && (
                      <motion.button
                        key="center-play"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        transition={{ duration: 0.2 }}
                        onClick={togglePlay}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/70 flex items-center justify-center hover:bg-white/35 transition-colors shadow-xl">
                          <Play size={30} className="text-white ml-1" fill="white" />
                        </div>
                      </motion.button>
                    )}
                  </AnimatePresence>

                  {/* always-visible bottom control bar */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={togglePlay}
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-[#2fa0d1]/60 transition-colors"
                    >
                      {playing
                        ? <Pause size={14} className="text-white" fill="white" />
                        : <Play size={14} className="text-white ml-0.5" fill="white" />}
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleMute}
                        className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-[#2fa0d1]/60 transition-colors"
                      >
                        {muted ? <VolumeX size={14} className="text-white" /> : <Volume2 size={14} className="text-white" />}
                      </button>
                      <button
                        onClick={openLightbox}
                        className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-[#2fa0d1]/60 transition-colors"
                      >
                        <Maximize2 size={14} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* floating corner accent */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-20"
                animate={{ rotate: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary opacity-15"
                animate={{ rotate: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <div className="w-1 h-full min-h-[60px] bg-gradient-to-b from-primary to-accent rounded-full shrink-0" />
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed tracking-wide">
                  {COMPANY_DESC}
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: "10+", label: "Years Experience" },
                  { value: "50+", label: "Clients Served" },
                  { value: "100+", label: "Projects Delivered" },
                  { value: "25K", label: "Sq.Ft Facility" },
                ].map((s) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(30,58,138,0.15)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-white border border-primary/10 rounded-xl px-4 py-4 text-center shadow-sm cursor-default"
                  >
                    <p className="gradient-text font-display font-extrabold text-2xl sm:text-3xl">{s.value}</p>
                    <p className="text-muted-foreground text-xs mt-1 tracking-wide uppercase">{s.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center p-0 sm:p-4 sm:bg-black/90 sm:backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="relative w-full h-full sm:h-auto sm:max-w-5xl sm:rounded-2xl overflow-hidden shadow-2xl border-0 sm:border sm:border-white/10 flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={lbRef}
                src={COMPANY_VIDEO}
                className="w-full aspect-video object-cover"
                controls
                autoPlay
                playsInline
              />
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 border border-white/30 flex items-center justify-center hover:bg-black/80 transition-colors z-10"
              >
                <X size={18} className="text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CoreValuesSlider() {
  const doubled = [...coreValues, ...coreValues];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4 sm:gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((v, i) => (
          <div
            key={i}
            className="w-56 sm:w-64 shrink-0 bg-white rounded-2xl shadow-md px-5 sm:px-7 py-6 sm:py-8 border border-[#2fa0d1]/20"
          >
            <div className="w-10 h-1 bg-[#2fa0d1] rounded-full mb-4" />
            <p className="font-display font-bold text-[#1e3a8a] text-base sm:text-lg mb-2">{v.title}</p>
            <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const About = () => (
  <div>
    <PageHero
      label="Who We Are"
      title="About"
      highlight="Viak"
      desc="Precision engineering, trusted by industry leaders across India."
      image="/about_viak.jpg"
    />

    <CompanyVideoSection />

    {/* Mission & Vision */}
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto flex flex-col gap-12 md:gap-20">

        {/* MISSION */}
        <ScrollReveal>
          {/* Mobile: stacked. Desktop: overlapping side-by-side */}
          <div className="flex flex-col md:flex-row md:items-stretch md:min-h-[340px] gap-6 md:gap-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full md:w-[48%] shrink-0 relative z-0 rounded-2xl overflow-hidden shadow-xl"
              style={{ minHeight: 220 }}
            >
              <img src="/mission_viak.jpg" alt="Our Mission" className="w-full h-full object-cover" style={{ minHeight: 220 }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative z-10 rounded-2xl shadow-2xl px-6 sm:px-10 py-8 sm:py-10 flex flex-col justify-center md:flex-1 md:-ml-20"
              style={{ background: "linear-gradient(90deg, #2fa0d1ff 0%, #1a357eff 100%)" }}
            >
              <div>
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 rounded-bl-full bg-[#2fa0d1]/10 pointer-events-none"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 h-14 bg-[#2fa0d1] rounded-full shrink-0 mt-1" />
                  <div>
                    <p className="text-[#2fa0d1] text-[10px] font-bold tracking-[0.28em] uppercase mb-1">
                      Precision Engineering Through Excellence
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-wide uppercase leading-tight">
                      Our Mission
                    </h3>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 sm:mb-8 max-w-md">
                  To design and deliver high-performance automation systems and special purpose machines
                  that reduce manual effort, enhance productivity, and maximize ROI for our clients.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {[
                    { icon: Target, title: "Precision Delivery", desc: "Sub-1mm accuracy across all manufactured components and systems." },
                    { icon: Award,  title: "50+ Clients Served", desc: "Trusted by leading automotive and Tyre manufacturers across India." },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg border border-[#2fa0d1]/40 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon size={17} className="text-[#2fa0d1]" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{item.title}</p>
                        <p className="text-white/50 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* VISION */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row-reverse md:items-stretch md:min-h-[340px] gap-6 md:gap-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full md:w-[48%] shrink-0 relative z-0 rounded-2xl overflow-hidden shadow-xl"
              style={{ minHeight: 220 }}
            >
              <img src="/vision_viak.jpg" alt="Our Vision" className="w-full h-full object-cover" style={{ minHeight: 220 }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative z-10 rounded-2xl shadow-2xl px-6 sm:px-10 py-8 sm:py-10 flex flex-col justify-center md:flex-1 md:-mr-20"
              style={{ background: "linear-gradient(90deg, #2fa0d1ff 0%, #1a357eff 100%)" }}
            >
              <div>
                <motion.div
                  className="absolute top-0 left-0 w-40 h-40 rounded-br-full bg-[#2fa0d1]/10 pointer-events-none"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-1 h-14 bg-[#2fa0d1] rounded-full shrink-0 mt-1" />
                  <div>
                    <p className="text-[#2fa0d1] text-[10px] font-bold tracking-[0.28em] uppercase mb-1">
                      Innovation Driven by Purpose
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-wide uppercase leading-tight">
                      Our Vision
                    </h3>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 sm:mb-8 max-w-md">
                  To become a leading force in smart industrial automation, delivering innovative, reliable, and
                  scalable solutions that redefine manufacturing efficiency across industries.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {[
                    { icon: Eye,       title: "Global Standards", desc: "Engineering solutions benchmarked against international quality norms." },
                    { icon: Lightbulb, title: "Innovation First",  desc: "Continuously adopting new technologies to stay ahead of industry needs." },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg border border-[#2fa0d1]/40 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon size={17} className="text-[#2fa0d1]" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{item.title}</p>
                        <p className="text-white/50 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Journey</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mt-2 text-foreground">Company Timeline</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
        </ScrollReveal>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 md:-translate-x-px" />
          {timeline.map((t, i) => (
            <ScrollReveal key={t.year} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className={`relative flex items-start mb-10 sm:mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-10 md:pl-0`}>
                  <span className="gradient-text font-display font-bold text-xl sm:text-2xl">{t.year}</span>
                  <h4 className="font-display text-base sm:text-lg font-semibold text-foreground mt-1">{t.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{t.desc}</p>
                </div>
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full gradient-bg -translate-x-1/2 mt-2 ring-4 ring-background"
                />
                <div className="hidden md:block flex-1" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our People</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mt-2 text-foreground">Meet the Team</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
          {staff.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer w-full sm:w-80 md:w-96 lg:w-[420px]"
                style={{ aspectRatio: "420/340" }}
                whileHover={{ y: -5, scale: 1.03, boxShadow: "0 24px 48px rgba(30,58,138,0.22)" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <img src={m.photo} alt={`Team member ${i + 1}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Infrastructure */}
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-10 sm:mb-12">
          <span className="text-accent font-semibold text-sm tracking-[0.25em] uppercase">To Facilitate Our Quality</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mt-2 text-foreground">Infrastructure</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mt-5 leading-relaxed">
            To facilitate our quality delivery we have invested in best-in-class infrastructure and will continue to improve it regularly.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <ScrollReveal direction="left">
            <motion.div className="relative rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
              <img src="/viak_infra.jpeg" alt="Viak Automation Infrastructure"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                style={{ minHeight: 260, maxHeight: 420 }} />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1e3a8a]/60 to-transparent" />
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-[#2fa0d1] animate-pulse" />
                <span className="text-[#1e3a8a] font-bold text-xs tracking-wide uppercase">Viak Automation — Pune</span>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <h3 className="font-display text-xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-2">
                <span className="w-1 h-8 gradient-bg rounded-full" />
                Facilities
              </h3>
              <ul className="space-y-3">
                {[
                  "25000 Square Feet of well Developed Area",
                  "Design Team With Well-Equipped Work Station",
                  "Simulations Stations",
                  "Dedicated Manufacturing Vendor Base",
                  "Strong Supplier Base",
                  "Project Management Team",
                  "Quality Room",
                  "Well Equipped Tool Room",
                  "10,000 Square Feet area available for further Expansion",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-3 h-3 rounded-full gradient-bg shrink-0 mt-1.5 group-hover:scale-125 transition-transform" />
                    <span className="text-foreground text-sm font-medium leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-14 sm:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-10 sm:mb-12">
        <ScrollReveal className="text-center">
          <span className="text-[#2fa0d1] font-semibold text-sm tracking-[0.25em] uppercase">What Drives Us</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold mt-2 text-[#1e3a8a] uppercase tracking-wide">
            Our Core Values
          </h2>
          <div className="w-16 h-1 bg-[#2fa0d1] mx-auto mt-4 rounded-full" />
        </ScrollReveal>
      </div>
      <CoreValuesSlider />
    </section>
  </div>
);

export default About;
