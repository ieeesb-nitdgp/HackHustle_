"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  ArrowUp
} from "lucide-react";
import BlurText from "@/components/BlurText";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: <Facebook size={18} />, href: "https://www.facebook.com/nitdgpieeesociety", color: "hover:bg-[#1877f2]", brand: "bg-[#1877f2]" },
    { name: "Instagram", icon: <Instagram size={18} />, href: "https://www.instagram.com/ieeesb_nitdgp/", color: "hover:bg-[#e4405f]", brand: "bg-[#e4405f]" },
    { name: "Linkedin", icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/ieeesbnitdgp/", color: "hover:bg-[#0077b5]", brand: "bg-[#0077b5]" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 border-t border-white/5 bg-[#05010a] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* 1. About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tighter italic uppercase">
              HACK<span className="text-purple-500">HUSTLE</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of innovators at NIT Durgapur. Join us for a 24-hour sprint of creation and collaboration.
            </p>
          </motion.div>

          {/* 2. Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <BlurText
              text="Navigation"
              className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-blue-400 font-mono"
              animateBy="letters"
              direction="bottom"
              delay={50}
            />
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {["About", "Topics", "Timeline", "Prizes", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-white transition-all text-sm hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. Social Media (With your requested Pop-up CSS) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <BlurText
              text="Social Pulse"
              className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400"
              animateBy="letters"
              direction="bottom"
              delay={50}
            />
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <div key={social.name} className="relative group">
                  {/* Tooltip implementation */}
                  <div className={`
                    absolute -top-10 left-1/2 -translate-x-1/2 
                    px-3 py-1.5 rounded-lg text-white text-[10px] font-bold 
                    opacity-0 transition-all duration-300 pointer-events-none 
                    group-hover:opacity-100 group-hover:-top-12 shadow-xl
                    ${social.brand}
                  `}>
                    {social.name}
                    {/* Tooltip Arrow */}
                    <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${social.brand}`} />
                  </div>

                  {/* Icon Wrapper */}
                  <a
                    href={social.href}
                    className={`
                      flex items-center justify-center w-12 h-12 
                      bg-white/5 rounded-2xl text-gray-400 border border-white/10 
                      transition-all duration-300 group-hover:text-white 
                      group-hover:scale-110 group-hover:rotate-6 ${social.color}
                    `}
                  >
                    {social.icon}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4. Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <BlurText
              text="Venue"
              className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400"
              animateBy="letters"
              direction="bottom"
              delay={50}
            />
            <div className="space-y-5 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-purple-500">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-400 text-sm leading-tight">Mahatma Gandhi Avenue, Durgapur, West Bengal, India</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-purple-500">
                  <Mail size={18} />
                </div>
                <a href="mailto:ieeesb.nitdgp@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors underline decoration-purple-500/30 underline-offset-4">ieeesb.nitdgp@gmail.com</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest text-center md:text-left">
            © 2026 HackHustle. Crafted with <span className="text-red-500 animate-pulse">❤️</span> by IEEE SB NITD
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-[0.2em] hover:text-purple-400 transition-colors"
          >
            Back to top
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}