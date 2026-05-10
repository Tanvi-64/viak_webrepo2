import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/viak_automation/",
    hoverClass: "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/viak-automation/",
    hoverClass: "hover:bg-[#0077b5]",
  },
];

const SocialFloat = () => (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
    className="fixed right-4 top-1/2 -translate-y-1/2 z-50"
  >
    {/* continuous float animation wrapper */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* card */}
      <div className="flex flex-col items-center gap-3 bg-white/90 backdrop-blur-md border border-primary/15 rounded-2xl shadow-xl px-2.5 py-3">
        {socials.map(({ icon: Icon, label, href, hoverClass }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 350, damping: 18 }}
            className={`group w-8 h-8 rounded-xl bg-slate-50 border border-primary/10 flex items-center justify-center transition-all duration-200 ${hoverClass}`}
          >
            <Icon size={15} className="text-primary group-hover:text-white transition-colors duration-200" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

export default SocialFloat;
