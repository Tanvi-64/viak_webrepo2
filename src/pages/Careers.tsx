import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ArrowRight, Heart, Zap, GraduationCap,
  X, Upload, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import careersImg from "@/assets/careers.jpg";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { supabase } from "@/lib/supabase";

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

const uploadResume = async (file: File) => {
  const fileName = `${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from("resumes")
    .upload(fileName, file);

  if (error) throw error;

  const { data: publicUrl } = supabase.storage
    .from("resumes")
    .getPublicUrl(fileName);

  return publicUrl.publicUrl;
};

// ── Apply Modal ───────────────────────────────────────────────────────
const ApplyModal = ({ job, onClose }: { job: Job; onClose: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState<File | null>(null);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    toast.error("File must be under 5MB");
    return;
  }

  const allowed = ["application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ];

  if (!allowed.includes(file.type)) {
    toast.error("Only PDF, DOC, DOCX allowed");
    return;
  }

  setCv(file);
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !cv) {
      toast.error("Please fill all required fields and upload your CV.");
      return;
    }

    setSending(true);

    try {
      // 1) Upload resume to Cloudinary
      const resumeUrl = await uploadResume(cv);

      // 2) Send email with resume link
      const result = await emailjs.send(
        "service_qe1248a",
        "template_wdgsob4",
        {
          name: name,
          email: email,
          role: job.title,
          resume_link: resumeUrl,
        },
        "fX4fnrb0-zYYW1he9"
      );

      if (result.status === 200) {
        setSubmitted(true);
        setTimeout(onClose, 2800);
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (err) {
      toast.error("Error sending application.");
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
        <div className="bg-[#1e3a8a] px-7 py-5 flex items-start justify-between">
          <div>
            <p className="text-[#2fa0d1] text-[10px] font-bold tracking-[0.25em] uppercase mb-1">Apply Now</p>
            <h3 className="font-display text-xl font-bold text-white">{job.title}</h3>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-14 px-7 gap-4">
            <CheckCircle2 size={56} className="text-[#2fa0d1]" />
            <p className="font-display font-bold text-xl">Application Submitted!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-7 py-6 flex flex-col gap-4">
            <div>
              <label>Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-3 rounded-lg"
              />
            </div>

            <div>
              <label>Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-3 rounded-lg"
              />
            </div>

            <div>
              <label>Upload Resume *</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFile}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="bg-blue-700 text-white py-3 rounded-lg"
            >
              {sending ? "Submitting..." : "Submit Application"}
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
                        <CheckCircle2 size={14} className="text-[#2fa0d1] shrink-0 mt-0.5" />{r}
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
                        <CheckCircle2 size={14} className="text-[#2fa0d1] shrink-0 mt-0.5" />{r}
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
        image={careersImg}
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
