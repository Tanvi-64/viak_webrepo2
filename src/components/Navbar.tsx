import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Phone, Mail, ArrowRight, Search, ChevronDown,
  Cog, Cpu, Bot, Shield, Wrench, Zap, Truck, Layers, CircleDot,
  Video, Images } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────

const serviceItems = [
  { icon: Wrench,     label: "Fabrication & Material Handling",  desc: "Pipe & plate fab, conveyors, custom carts" },
  { icon: Truck,      label: "Fabrication of MHE",               desc: "Trolleys, pallet systems, handling equipment" },
  { icon: Cpu,        label: "Special Purpose Machines",          desc: "Custom machine design & automation systems" },
  { icon: Layers,     label: "Press Machines",                    desc: "Hydraulic, servo & pneumatic press machines" },
  { icon: CircleDot,  label: "Tire Industries Solutions",         desc: "Tire handling & automation in tire production" },
];

const productItems = [
  { icon: Cog,    label: "Jigs & Fixtures",                     slug: "jigs-fixtures" },
  { icon: Cpu,    label: "Special Purpose Machines",            slug: "spm" },
  { icon: Bot,    label: "Pick and Place Unit",                 slug: "pick-place" },
  { icon: Wrench, label: "Tire Industries",                     slug: "tire-industry" },
  { icon: Shield, label: "Industrial Washing Machine Parts",    slug: "washing-machine-parts" },
  { icon: Zap,    label: "Conveying Systems",                   slug: "robotics-automation" },
];

// ── Nav links ─────────────────────────────────────────────────────────
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const VIAKLogo = ({ height = 72 }: { height?: number }) => (
  <img src="/viak_logo.png" alt="Viak Automation VASPL"
    style={{ height, width: "auto", objectFit: "contain" }} />
);

// ── Resources dropdown ────────────────────────────────────────────────
const resourceItems = [
  {
    to: "/resources/videos",
    icon: Video,
    label: "Machine Videos",
    desc: "Watch our machines in action",
    color: "#1e3a8a",
  },
  {
    to: "/resources/gallery",
    icon: Images,
    label: "Photo Gallery",
    desc: "Browse our product image gallery",
    color: "#1e5aa8",
  },
];

const ResourcesDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isActive = location.pathname.startsWith("/resources");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <div ref={ref} className="relative h-full flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={`relative h-full flex items-center gap-1 px-5 text-sm font-semibold tracking-wide transition-colors duration-200 ${
        isActive ? "text-white" : "text-white/70 hover:text-white"
      }`}>
        Resources
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={13} />
        </motion.span>
        {isActive && <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#38bdf8] rounded-t-sm" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full right-0 z-50 w-64 bg-white shadow-2xl border border-gray-100 rounded-b-2xl overflow-hidden"
          >
            {/* Header strip */}
            <div className="px-4 py-2.5 bg-[#1e3a8a]">
              <p className="text-white font-display font-bold text-xs tracking-widest uppercase">Resources</p>
            </div>

            {resourceItems.map((item, i) => (
              <motion.div key={item.to}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link to={item.to} onClick={() => setOpen(false)}
                  className="group flex items-center gap-4 px-5 py-4 border-b border-gray-50 last:border-0 hover:bg-[#f0f5ff] transition-colors duration-200 relative overflow-hidden"
                >
                  {/* Left accent */}
                  <motion.span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#1e3a8a]"
                    initial={{ scaleY: 0 }} whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.15 }} style={{ originY: 0.5 }} />

                  {/* Icon */}
                  <motion.div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200"
                    style={{ background: "#e8f0fe" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon size={18} className="text-[#1e3a8a] group-hover:text-[#38bdf8] transition-colors duration-200" />
                  </motion.div>

                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-gray-800 group-hover:text-[#1e3a8a] text-sm font-semibold transition-colors duration-200">{item.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{item.desc}</p>
                  </div>

                  <ArrowRight size={13} className="text-[#38bdf8] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ── Main Navbar ───────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <>
      <style>{`
        .navbar-angled { position: relative; }
        .navbar-angled::before {
          content: "";
          position: absolute;
          left: 0; top: 0;
          width: 320px; height: 100%;
          background: white;
          clip-path: polygon(0 0, 100% 0, 68% 100%, 0 100%);
          z-index: 1;
          pointer-events: none;
        }
      `}</style>

      <motion.header
        initial={{ y: -160 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          filter: scrolled ? "drop-shadow(0 8px 32px rgba(15,23,42,0.4))" : "drop-shadow(0 2px 12px rgba(15,23,42,0.18))",
          transition: "filter 0.3s",
        }}
      >
        {/* ── DESKTOP ── */}
        <div className="hidden md:block">
          {/* Top white header */}
          <div className="bg-white flex items-center justify-between px-8" style={{ height: 60, marginBottom: 0 }}>
            <Link to="/" className="flex mt-8 items-center shrink-0 z-10">
              <VIAKLogo height={100} />
            </Link>
            <div className="flex items-center gap-7">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border-2 border-[#e8f0fe] flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-[#1e3a8a]" />
                </div>
                <div>
                  <p className="text-[9px] font-semibold tracking-widest text-gray-400 uppercase">Location</p>
                  <p className="text-sm font-semibold text-gray-800">Pune, Maharashtra</p>
                </div>
              </div>
              <div className="w-px h-9 bg-gray-200" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border-2 border-[#e8f0fe] flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-[#1e3a8a]" />
                </div>
                <div>
                  <p className="text-[9px] font-semibold tracking-widest text-gray-400 uppercase">Call For Help</p>
                  <p className="text-sm font-semibold text-gray-800">+91 7406 141414</p>
                </div>
              </div>
              <div className="w-px h-9 bg-gray-200" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border-2 border-[#e8f0fe] flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-[#1e3a8a]" />
                </div>
                <div>
                  <p className="text-[9px] font-semibold tracking-widest text-gray-400 uppercase">Email Us</p>
                  <p className="text-sm font-semibold text-gray-800">sales@viakautomation.com</p>
                </div>
              </div>
            </div>
            <Link to="/contact" className="flex items-stretch shrink-0"
              style={{ clipPath: "polygon(8px 0, 100% 0, 100% 100%, 0 100%)" }}>
              <span className="flex items-center px-6 py-3 bg-blue-500 text-white text-sm font-bold tracking-wide whitespace-nowrap">
                Request a Quote
              </span>
              <span className="flex items-center px-3 py-3 bg-[#1e3a8a]">
                <ArrowRight size={15} className="text-white" />
              </span>
            </Link>
          </div>

          {/* Dark nav bar */}
          <div className="navbar-angled" style={{ height: 50, background: "#0f172a", marginTop: 0 }}>
            <div className="relative z-10 h-full flex items-center justify-end pr-4" style={{ paddingLeft: 340 }}>
              <nav className="flex items-center h-full">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.to ||
                    (link.to === "/products" && location.pathname.startsWith("/products"));
                  return (
                    <Link key={link.to} to={link.to}
                      className={`relative h-full flex items-center px-5 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                        isActive ? "text-white" : "text-white/70 hover:text-white"
                      }`}>
                      {isActive && <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#38bdf8] rounded-t-sm" />}
                      {link.label}
                    </Link>
                  );
                })}
                <ResourcesDropdown />
              </nav>
              <button className="ml-3 text-white/50 hover:text-white transition-colors p-2 shrink-0">
                <Search size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* ── MOBILE ── */}
        <div className="md:hidden bg-white flex items-center justify-between px-4 shadow-md" style={{ height: 64 }}>
          <Link to="/" className="flex items-center"><VIAKLogo height={40} /></Link>
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-[#1e3a8a] hover:bg-[#e8f0fe] transition-colors" aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-1">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to}
                    className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                      location.pathname === link.to || (link.to === "/products" && location.pathname.startsWith("/products"))
                        ? "bg-[#1e3a8a] text-white"
                        : "text-gray-700 hover:bg-[#e8f0fe] hover:text-[#1e3a8a]"
                    }`}>
                    {link.label}
                  </Link>
                ))}
                {/* Resources mobile links */}
                <Link to="/resources/videos" className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-[#e8f0fe] hover:text-[#1e3a8a] transition-all">
                  <Video size={14} className="text-[#1e3a8a]" /> Machine Videos
                </Link>
                <Link to="/resources/gallery" className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-[#e8f0fe] hover:text-[#1e3a8a] transition-all">
                  <Images size={14} className="text-[#1e3a8a]" /> Photo Gallery
                </Link>
                <Link to="/contact" className="mt-3 flex items-center justify-center gap-2 px-4 py-3 bg-[#1e3a8a] text-white text-sm font-bold rounded-lg">
                  Request a Quote <ArrowRight size={14} />
                </Link>
                <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2 text-xs text-gray-500">
                  <span className="flex items-center gap-2"><Phone size={11} className="text-[#1e3a8a]" /> +91 7406 141414</span>
                  <span className="flex items-center gap-2"><Mail size={11} className="text-[#1e3a8a]" /> sales@viakautomation.com</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;
