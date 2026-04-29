import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="gradient-dark-bg text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
    </div>
    <div className="container mx-auto px-4 py-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
              <span className="font-display font-bold text-lg">V</span>
            </div>
            <span className="font-display font-bold text-xl">Viak Automation</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Innovating the future of industrial automation with cutting-edge engineering solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Services", "Projects", "Careers", "Contact"].map((l) => (
              <Link
                key={l}
                to={`/${l.toLowerCase()}`}
                className="text-primary-foreground/70 hover:text-primary-foreground hover:translate-x-1 text-sm transition-all duration-300 inline-block"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <span>Industrial Automation</span>
            <span>Mechanical System Design</span>
            <span>Custom Machine Development</span>
            <span>Robotics Integration</span>
            <span>Maintenance & Support</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            {[
              { icon: Mail, label: "info@viakautomation.com" },
              { icon: Phone, label: "+91 98765 43210" },
              { icon: MapPin, label: "Pune, Maharashtra, India" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 group">
                <Icon size={16} className="text-accent group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-primary-foreground transition-colors">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Viak Automation. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
