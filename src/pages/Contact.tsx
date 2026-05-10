import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import AnimatedGradientBg from "@/components/AnimatedGradientBg";
import FloatingGears from "@/components/FloatingGears";
import { toast } from "sonner";
import PageHero from "@/components/PageHero";
import contactsHeader from "@/assets/contactusbg.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) {
    toast.error("Please fill in all required fields.");
    return;
  }

  setSending(true);

  try {
    await emailjs.send(
      "service_l3nj6s1",      // your Service ID
      "template_kr6k6c2",     // paste Template ID
      form,
      "fX4fnrb0-zYYW1he9"       // paste Public Key
    );

    toast.success("Enquiry sent successfully!");
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
  } catch (error) {
    toast.error("Failed to send enquiry.");
    console.error(error);
  }

  setSending(false);
};

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg bg-muted border text-foreground text-sm focus:outline-none transition-all duration-300 ${
      focused === field ? "border-primary ring-2 ring-primary/20 bg-background" : "border-border"
    }`;

  return (
    <div className="overflow-hidden">
      <PageHero
        label="Get in Touch"
        title="Contact"
        highlight="Us"
        desc="Have a project in mind? Our engineering team is ready to help you find the right automation solution."
        image={contactsHeader}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto">

          {/* ── Top: Let's Talk info strip ── */}
          <ScrollReveal className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center gap-6 p-8 rounded-2xl bg-[#1e3a8a] shadow-xl">
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-white mb-2">Let's Talk</h3>
                <p className="text-white/65 text-sm leading-relaxed max-w-md">
                  Have a project in mind? Send us your details and our team will get back to you within 24 hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {[
                  { icon: Mail,    label: "info@viakautomation.com" },
                  { icon: Phone,   label: "+91 74061 41414" },
                  { icon: MapPin,  label: "Pune, Maharashtra, India" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#38bdf8]" />
                    </div>
                    <span className="text-white/80 text-xs font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── Bottom: Map + Form ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* Map */}
            <ScrollReveal direction="left">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-accent font-semibold text-xs tracking-widest uppercase">Find Us</span>
                  <h3 className="font-display text-2xl font-bold text-foreground mt-1">Our Location</h3>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl border border-border"
                  style={{ height: "clamp(240px, 40vw, 400px)" }}
                >
                  {/* Decorative top bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 gradient-bg z-10" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.6625535821913!2d73.78737817335612!3d18.67913266431521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b70e6bb4b969%3A0x80231a39c60bec81!2sViak%20Automation%20Systems%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1776953837011!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Viak Automation Location"
                    className="w-full h-full"
                  />
                </motion.div>

                {/* Address card below map */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-4 p-5 glass-card rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Viak Automation Systems Pvt. Ltd.</p>
                    <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="right">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-accent font-semibold text-xs tracking-widest uppercase">Enquiry</span>
                  <h3 className="font-display text-2xl font-bold text-foreground mt-1">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5 rounded-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="+91 xxxxx xxxxx"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="gradient-bg px-8 py-3.5 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity inline-flex items-center gap-2 disabled:opacity-50 w-full justify-center"
                  >
                    {sending ? "Sending..." : <><Send size={16} /> Send Enquiry</>}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
