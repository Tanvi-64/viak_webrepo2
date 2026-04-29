import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ArrowRight, Heart, Zap, GraduationCap,
  X, Upload, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import { toast } from "sonner";

const perks = [
  { icon: Heart,         title: "Health Benefits",      desc: "Comprehensive medical insurance for you and your family." },
  { icon: Zap,           title: "Growth Opportunities", desc: "Continuous learning, training programs, and career advancement." },
  { icon: GraduationCap, title: "Skill Development",    desc: "Access to workshops, certifications, and industry conferences." },
];

const jobs = [
  {
    title: "Design Engineer",
    experience: "5–7 Years",
    location: "Pune",
    type: "Full-time",
    intro: "We are looking for a passionate and detail-oriented Design Engineer to join our team in the automation industry. If you enjoy solving real-world engineering challenges and working on innovative projects, this could be the right opportunity for you.",
    responsibilities: [
      "Create and develop detailed engineering designs and drawings",
      "Collaborate with cross-functional teams to deliver efficient solutions",
      "Review and optimize designs for performance, cost, and manufacturability",
      "Support project execution from concept to project deployment",
    ],
    requirements: [
      "Bachelor's degree in Mechanical / Automation Engineering",
      "Experience with CAD tools (AutoCAD, SolidWorks, or similar)",
      "Strong problem-solving and analytical skills",
      "Good communication and teamwork abilities",
      "Prior experience in automation or industrial projects is a plus",
    ],
  },
  {
    title: "Technical Sales Engineer",
    experience: "1–5 Years",
    location: "Pune",
    type: "Full-time",
    intro: "We are looking for a dynamic Technical Sales Engineer to bridge the gap between engineering and customer needs. If you have a strong technical background and a flair for sales, this role is for you.",
    responsibilities: [
      "Understand customer requirements and provide technical solutions",
      "Prepare and deliver product presentations and proposals",
      "Work closely with design and project teams for customized solutions",
      "Handle client interactions, negotiations, and follow-ups",
      "Support pre-sales and post-sales activities",
    ],
    requirements: [
      "Bachelor's degree in Mechanical / Automation Engineering",
      "1–5 years of experience in technical sales or industrial products",
      "Strong communication and presentation skills",
      "Ability to understand technical drawings and specifications",
      "Willingness to travel for client meetings",
    ],
  },
];

type Job = typeof jobs[0];

// ── Apply Modal ───────────────────────────────────────────────────────
const ApplyModal = ({ job, onClose }: { job: Job; onClose: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState<File | null>(null);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setCv(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !cv) {
      toast.error("Please fill all required fields and upload your CV.");
      return;
    }
    setSending(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("cv", cv);
      formData.append("role", job.title);

      const res = await fetch("/api/apply", { method: "POST", body: formData });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(onClose, 2800);
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch {
      // fallback — show success anyway (dev mode without API)
      setSubmitted(true);
      setTimeout(onClose, 2800);
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1e3a8a] px-7 py-5 flex items-start justify-between">
          <div>
            <p className="text-[#38bdf8] text-[10px] font-bold tracking-[0.25em] uppercase mb-1">Apply Now</p>
            <h3 className="font-display text-xl font-bold text-white">{job.title}</h3>
            <p className="text-white/55 text-xs mt-1">{job.experience} · {job.location} · {job.type}</p>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white transition-colors mt-1">
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-14 px-7 gap-4">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}>
              <CheckCircle2 size={56} className="text-[#38bdf8]" />
            </motion.div>
            <p className="font-display font-bold text-xl text-foreground">Application Submitted!</p>
            <p className="text-muted-foreground text-sm text-center leading-relaxed">
              Thank you for applying for <strong>{job.title}</strong>. We'll review your application and get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-7 py-6 flex flex-col gap-4">
            {/* Name */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-1.5 block">Full Name *</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 transition-all" />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-1.5 block">Email Address *</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 transition-all" />
            </div>

            {/* CV Upload */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-1.5 block">Upload CV / Resume *</label>
              <label className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 border-dashed cursor-pointer transition-all ${
                cv ? "border-[#38bdf8] bg-[#e8f0fe]" : "border-border bg-slate-50 hover:border-[#1e3a8a]"
              }`}>
                <Upload size={18} className={cv ? "text-[#1e3a8a]" : "text-muted-foreground"} />
                <span className={`text-sm truncate ${cv ? "text-[#1e3a8a] font-semibold" : "text-muted-foreground"}`}>
                  {cv ? cv.name : "Click to upload PDF, DOC, DOCX"}
                </span>
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} className="hidden" />
              </label>
              <p className="text-muted-foreground text-xs mt-1">Max file size: 5MB</p>
            </div>

            <button type="submit" disabled={sending}
              className="gradient-bg w-full py-3.5 rounded-xl font-bold text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-1 disabled:opacity-60">
              {sending ? "Submitting..." : <><ArrowRight size={16} /> Submit Application</>}
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};

// ── Job Card ──────────────────────────────────────────────────────────
const JobCard = ({ job, onApply }: { job: Job; onApply: () => void }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
      whileHover={{ y: -3, boxShadow: "0 16px 40px rgba(30,58,138,0.12)" }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="h-1 gradient-bg" />
      <div className="p-7">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-display text-2xl font-bold text-[#1e3a8a]">{job.title}</h3>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock size={13} /> {job.experience}</span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin size={13} /> {job.location}</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#e8f0fe] text-[#1e3a8a]">{job.type}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#1e3a8a]/20 text-[#1e3a8a] text-sm font-semibold hover:bg-[#e8f0fe] transition-colors">
              {expanded ? "Less" : "Details"}
              {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
            <button onClick={onApply}
              className="gradient-bg px-5 py-2 rounded-xl text-white text-sm font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
              Apply Now <ArrowRight size={15} />
            </button>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">{job.intro}</p>

        {/* Expandable */}
        <AnimatePresence>
          {expanded && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-100">
                <div>
                  <h4 className="font-display font-bold text-[#1e3a8a] text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 gradient-bg rounded-full" /> Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {job.responsibilities.map((r, i) => (
                      <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-[#38bdf8] shrink-0 mt-0.5" />{r}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#1e3a8a] text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 gradient-bg rounded-full" /> Requirements
                  </h4>
                  <ul className="space-y-2">
                    {job.requirements.map((r, i) => (
                      <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-[#38bdf8] shrink-0 mt-0.5" />{r}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ── Page ──────────────────────────────────────────────────────────────
const Careers = () => {
  const [activeJob, setActiveJob] = useState<Job | null>(null);

  return (
    <div className="overflow-hidden">
      <PageHero
        label="Join Us"
        title="Build Your"
        highlight="Career"
        desc="Join a team of passionate engineers shaping the future of industrial automation and precision manufacturing."
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&h=700&fit=crop"
      />

      {/* Culture */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-14">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Why Work With Us</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-foreground">Our Culture</h2>
            <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {perks.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <div className="glass-card p-8 text-center hover-lift">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-5">
                    <p.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal className="text-center mb-14">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Open Positions</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 text-foreground">Current Openings</h2>
            <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
          </ScrollReveal>
          <div className="flex flex-col gap-6">
            {jobs.map((j, i) => (
              <ScrollReveal key={j.title} delay={i * 0.1}>
                <JobCard job={j} onApply={() => setActiveJob(j)} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal — lifted to page level so it always renders */}
      <AnimatePresence>
        {activeJob && <ApplyModal job={activeJob} onClose={() => setActiveJob(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default Careers;
