import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import about3 from "@/assets/about3.jpg";
import about4 from "@/assets/about4.jpg";

const timeline = [
  {
    year: "2016",
    title: "Company Founded",
    desc: "Viak Automation Studio was established in Pune with a vision to deliver precision-engineered automation solutions for manufacturing industries."
  },
  {
    year: "2017",
    title: "First Hydraulic & SPM Projects Delivered",
    desc: "Successfully designed and commissioned initial hydraulic presses and special purpose machines for local manufacturing clients."
  },
  {
    year: "2018",
    title: "Entry into Tyre Industry Solutions",
    desc: "Started developing dedicated equipment such as dipping stations, gum folding units, and handling trolleys for tyre industry processes."
  },
  {
    year: "2019",
    title: "Expansion into Material Handling Systems",
    desc: "Introduced conveyors, roller systems, lifts, and custom trolleys to provide complete material handling solutions across shop floors."
  },
  {
    year: "2020",
    title: "Advanced Pneumatic & Servo Systems",
    desc: "Integrated pneumatic controls and servo-driven mechanisms into machines for improved precision, speed, and automation control."
  },
  {
    year: "2022",
    title: "Trusted Vendor for Multiple Industries",
    desc: "Became a preferred automation partner for clients in tyre, automotive, and general engineering sectors with repeat project deliveries."
  },
  {
    year: "2024",
    title: "Complete In-House Design & Fabrication Capability",
    desc: "Strengthened in-house design, fabrication, and assembly capabilities to deliver end-to-end automation systems under one roof."
  }
];

const staff = [
  { photo: about3 },
  { photo: about4 },
];

const coreValues = [
  { title: "Innovation First", desc: "We continuously develop smarter, faster, and more efficient automation solutions." },
  { title: "Customer-Centric Approach", desc: "Every machine is designed around the customer’s process and ROI." },
  { title: "Quality & Precision", desc: "We deliver machines that ensure accuracy, durability, and zero-defect output." },
  { title: "Integrity & Transparency", desc: "We build trust through honest communication and ethical practices." },
  { title: "Teamwork & Collaboration", desc: "Strong internal and client collaboration drives better solutions." },
  { title: "Ownership & Accountability", desc: "We take complete responsibility—from concept to commissioning." },
];

function CoreValuesSlider() {
  const doubled = [...coreValues, ...coreValues];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((v, i) => (
          <div
            key={i}
            className="w-64 shrink-0 bg-white rounded-2xl shadow-md px-7 py-8 border border-[#38bdf8]/20"
          >
            <div className="w-10 h-1 bg-[#38bdf8] rounded-full mb-4" />
            <p className="font-display font-bold text-[#1e3a8a] text-lg mb-2">{v.title}</p>
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

    {/* Mission & Vision */}
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto flex flex-col gap-20">

        {/* MISSION — image left, dark card overlaps from right */}
        <ScrollReveal>
          <div className="relative flex items-stretch min-h-[340px]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-[48%] shrink-0 relative z-0 rounded-2xl overflow-hidden shadow-xl"
            >
              <img src="/mission_viak.jpg" alt="Our Mission" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex-1 relative z-10 bg-[#1e3a8a] rounded-2xl shadow-2xl px-10 py-10 flex flex-col justify-center"
              style={{ marginLeft: "-80px" }}
            >
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 rounded-bl-full bg-[#38bdf8]/10 pointer-events-none"
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="flex items-start gap-3 mb-5">
                <div className="w-1 h-14 bg-[#38bdf8] rounded-full shrink-0 mt-1" />
                <div>
                  <p className="text-[#38bdf8] text-[10px] font-bold tracking-[0.28em] uppercase mb-1">
                    Precision Engineering Through Excellence
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-wide uppercase leading-tight">
                    Our Mission
                  </h3>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-md">
             To design and deliver high-performance automation systems and special purpose machines
that reduce manual effort, enhance productivity, and maximize ROI for our clients.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: Target, title: "Precision Delivery", desc: "Sub-1mm accuracy across all manufactured components and systems." },
                  { icon: Award,  title: "50+ Clients Served", desc: "Trusted by leading automotive and tire manufacturers across India." },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg border border-[#38bdf8]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon size={17} className="text-[#38bdf8]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{item.title}</p>
                      <p className="text-white/50 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* VISION — dark card left, image right overlapped */}
        <ScrollReveal>
          <div className="relative flex items-stretch min-h-[340px]">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex-1 relative z-10 bg-[#1e3a8a] rounded-2xl shadow-2xl px-10 py-10 flex flex-col justify-center"
              style={{ marginRight: "-80px" }}
            >
              <motion.div
                className="absolute top-0 left-0 w-40 h-40 rounded-br-full bg-[#38bdf8]/10 pointer-events-none"
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
              <div className="flex items-start gap-3 mb-5">
                <div className="w-1 h-14 bg-[#38bdf8] rounded-full shrink-0 mt-1" />
                <div>
                  <p className="text-[#38bdf8] text-[10px] font-bold tracking-[0.28em] uppercase mb-1">
                    Innovation Driven by Purpose
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-wide uppercase leading-tight">
                    Our Vision
                  </h3>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-md">
               To become a leading force in smart industrial automation, delivering innovative, reliable, and
scalable solutions that redefine manufacturing efficiency across industries.
              </p>
              <div className="grid grid-cols-2 gap-5">
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
                    <div className="w-10 h-10 rounded-lg border border-[#38bdf8]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon size={17} className="text-[#38bdf8]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{item.title}</p>
                      <p className="text-white/50 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-[48%] shrink-0 relative z-0 rounded-2xl overflow-hidden shadow-xl"
            >
              <img src="/vision_viak.jpg" alt="Our Vision" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </ScrollReveal>

      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Journey</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-foreground">Company Timeline</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
        </ScrollReveal>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 md:-translate-x-px" />
          {timeline.map((t, i) => (
            <ScrollReveal key={t.year} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
                  <span className="gradient-text font-display font-bold text-2xl">{t.year}</span>
                  <h4 className="font-display text-lg font-semibold text-foreground mt-1">{t.title}</h4>
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
        <ScrollReveal className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our People</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-foreground">Meet the Team</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
        </ScrollReveal>

    

        {/* Staff photos */}
        <div className="flex justify-center gap-8">
          {staff.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                style={{ width: 420, height: 340 }}
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
        <ScrollReveal className="text-center mb-12">
          <span className="text-accent font-semibold text-sm tracking-[0.25em] uppercase">To Facilitate Our Quality</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-foreground">Infrastructure</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mt-5 leading-relaxed">
            To facilitate our quality delivery we have invested in best-in-class infrastructure and will continue to improve it regularly.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> 
          <ScrollReveal direction="left">
            <motion.div className="relative rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
              <img src="/viak_infra.jpeg" alt="Viak Automation Infrastructure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                style={{ minHeight: 320 }} />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1e3a8a]/60 to-transparent" />
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
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
                    <div className="w-6 h-6 rounded-md gradient-bg flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xs">{String(i + 1).padStart(2, "0")}</span>
                    </div>
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
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <ScrollReveal className="text-center">
          <span className="text-[#38bdf8] font-semibold text-sm tracking-[0.25em] uppercase">What Drives Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-2 text-[#1e3a8a] uppercase tracking-wide">
            Our Core Values
          </h2>
          <div className="w-16 h-1 bg-[#38bdf8] mx-auto mt-4 rounded-full" />
        </ScrollReveal>
      </div>
      <CoreValuesSlider />
    </section>
  </div>
);

export default About;
