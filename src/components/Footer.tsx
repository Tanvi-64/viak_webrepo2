import { Link } from "react-router-dom";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

// ── animation variants ────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show:   { opacity: 1, x: 0 },
};

// ── data ─────────────────────────────────────────────────────────────
const navColumns = [
  {
    heading: "Company",
    links: [
      { label: "Home",     to: "/" },
      { label: "About",    to: "/about" },
      { label: "Careers",  to: "/careers" },
      { label: "Contact",  to: "/contact" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "Hydraulics & Servo Presses", to: "/products/hydraulics" },
      { label: "Special Purpose Machines",   to: "/products/spm" },
      { label: "Tyre Industries",            to: "/products/tyre" },
      { label: "Material Handling",          to: "/products/material-handling" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Services",       to: "/services" },
      { label: "Machine Videos", to: "/resources/videos" },
      { label: "Photo Gallery",  to: "/resources/gallery" },
    ],
  },
];

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/viakautomationsystems?igsh=MXh6aW11cWJyZWh4Nw==",
    hoverColor: "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/viakautomation",
    hoverColor: "hover:bg-[#1877f2]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/viak-automation-systems-pvt-ltd/",
    hoverColor: "hover:bg-[#0a66c2]",
  },
];

// ── component ─────────────────────────────────────────────────────────
const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer ref={ref} className="bg-[#0a1628] text-white relative overflow-hidden">

      {/* subtle background glow orbs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-[#1e3a8a]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-[#38bdf8]/10 blur-3xl pointer-events-none" />

      {/* top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#1e3a8a] via-[#38bdf8] to-[#1e3a8a]" />

      <motion.div
        className="container mx-auto px-4 sm:px-6 pt-14 pb-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 lg:gap-8 pb-12 border-b border-white/10">

          {/* Brand column */}
          <motion.div variants={fadeLeft} transition={{ duration: 0.55, ease: "easeOut" }} className="flex flex-col gap-5">
            {/* Logo */}
            <Link to="/" className="inline-block w-fit">
              <motion.img
                src="/viak_logo2.png"
                alt="Viak Automation"
                className="h-14 w-auto object-contain brightness-0 invert"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>

            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Precision-engineered automation systems — SPMs, hydraulic presses, material handling
              equipment and tyre industry solutions built for India's leading manufacturers.
            </p>

            {/* Contact mini-list */}
            <ul className="flex flex-col gap-2 text-xs text-white/50">
              {[
                { icon: Mail,   text: "sales@viakautomation.com" },
                { icon: Phone,  text: "+91 7406 141414" },
                { icon: MapPin, text: "Pune, Maharashtra, India" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 group">
                  <Icon size={12} className="text-[#38bdf8] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-white/80 transition-colors">{text}</span>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {socials.map(({ icon: Icon, label, href, hoverColor }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 ${hoverColor} hover:border-transparent hover:shadow-lg`}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <motion.div key={col.heading} variants={fadeUp} transition={{ duration: 0.55, ease: "easeOut" }}>
              <h4 className="text-white font-display font-semibold text-sm tracking-widest uppercase mb-5">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="group inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      <motion.span
                        className="inline-block w-0 h-px bg-[#38bdf8] group-hover:w-3 transition-all duration-300"
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-white/35"
        >
          <span>© {new Date().getFullYear()} Viak Automation Systems Pvt. Ltd. All rights reserved.</span>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white/70 transition-colors duration-200 underline-offset-4 hover:underline"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
