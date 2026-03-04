"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import LogoIcon from "@/public/ieeesb_logo_theme.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  const { scrollY } = useScroll();

  // 1. Smart Hide Logic: Hides on scroll down, reveals on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setVisible(false);
      setIsOpen(false);
    } else {
      setVisible(true);
    }
    setScrolled(latest > 50);
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: visible ? 0 : -120,
          opacity: visible ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className={`
          pointer-events-auto
          flex items-center justify-between 
          w-full max-w-6xl h-16 md:h-20 px-4 md:px-6
          rounded-full border transition-all duration-500
          ${scrolled
            ? "bg-black/40 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-[0.98]"
            : "bg-white/5 backdrop-blur-md border-white/5"
          }
        `}
      >
        {/* Branding Section */}
        <Link href="/" className="flex items-center gap-3 group px-2">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="bg-gradient-to-br from-white/20 to-white/5 p-2 rounded-xl border border-white/10 shadow-inner"
          >
            <Image src={LogoIcon} alt="Logo" width={28} height={28} className="w-7 h-7" />
          </motion.div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-black tracking-tighter text-white uppercase italic">
              Hack<span className="text-blue-500">Hustle</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (Center Pill) */}
        <div className="hidden md:flex items-center bg-white/[0.03] rounded-full px-1.5 py-1.5 border border-white/5 backdrop-blur-sm">
          <NavLinks />
        </div>

        {/* CTA Section */}
        <div className="flex items-center gap-3">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScRVKpLp18DsDzfPH9_EAKHkFdeRHUi1075pfq-VAu9ja7_jw/viewform?usp=publish-editor"
            target="_blank"
            className="hidden md:flex group relative bg-white text-black hover:bg-white rounded-full font-bold px-8 py-3 overflow-hidden transition-all duration-300 active:scale-95 items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2 uppercase">
              Register <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <button
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white active:scale-90 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Modern Full-Screen Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[-1] md:hidden bg-black/60 flex flex-col items-center justify-center p-8 pointer-events-auto"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-8 w-full"
            >
              <NavLinks mobile setIsOpen={setIsOpen} />
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScRVKpLp18DsDzfPH9_EAKHkFdeRHUi1075pfq-VAu9ja7_jw/viewform?usp=publish-editor"
                target="_blank"
                className="w-full max-w-xs bg-blue-600 hover:bg-blue-500 text-white rounded-full py-5 text-xl font-black shadow-[0_10px_30px_rgba(59,130,246,0.5)] text-center transition-all active:scale-95"
              >
                JOIN THE HUSTLE
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLinks({ mobile, setIsOpen }: { mobile?: boolean; setIsOpen?: (isOpen: boolean) => void }) {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#timeline", label: "Timeline" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className={`flex ${mobile ? "flex-col items-center gap-10" : "flex-row gap-1"}`}
      onMouseLeave={() => !mobile && setHoveredPath(null)}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onMouseEnter={() => !mobile && setHoveredPath(link.href)}
          onClick={() => mobile && setIsOpen && setIsOpen(false)}
          className={`
            relative px-5 py-2 text-sm font-bold transition-all rounded-full outline-none
            ${mobile ? "text-4xl font-black uppercase tracking-tighter text-white" : "text-white/60 hover:text-white"}
          `}
        >
          <span className="relative z-10">{link.label}</span>

          {/* Animated Hover Background (Pill) */}
          <AnimatePresence>
            {hoveredPath === link.href && !mobile && (
              <motion.div
                layoutId="nav-hover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 bg-white/10 rounded-full -z-0 border border-white/5"
              />
            )}
          </AnimatePresence>

          {/* Persistent Active Underline for Home */}
          {link.label === "Home" && !mobile && !hoveredPath && (
            <motion.div
              layoutId="nav-active"
              className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
            />
          )}
        </Link>
      ))}
    </div>
  );
}