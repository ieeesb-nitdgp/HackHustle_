"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";
import Antigravity from "@/components/Antigravity";

// Assets
import ieeesb_logo_theme from "@/public/ieeesb_logo_theme.svg";
import ieeeCs from "@/public/ieee-cs-logo.webp";
import { ArrowRight, Terminal, Activity, ShieldCheck, Cpu, ChevronRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const typeref = useRef<HTMLSpanElement>(null);

  // Mouse position tracking for 3D Tilt
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalized values from -0.5 to 0.5
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  useEffect(() => {
    const typed = new Typed(typeref.current, {
      strings: [
        "Healthcare & Mental Health",
        "GenAI Hackathon & PCB Design", //
        "6 March - 8 March",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      cursorChar: "▊",
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen min-h-[800px] w-full flex flex-col justify-between bg-[#020105] overflow-hidden perspective-1000"
    >
      {/* 1. VISUAL ENGINE LAYER */}
      <div className="absolute inset-0 z-0">
        {/* Deep Space Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(157,80,187,0.15),transparent_60%)]" />

        {/* Dynamic Grid with Parallax */}
        <motion.div
          style={{
            rotateX: useTransform(mouseY, [-0.5, 0.5], [5, -5]),
            rotateY: useTransform(mouseX, [-0.5, 0.5], [-5, 5])
          }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px]"
        />

        <Antigravity count={50} magnetRadius={250} color="#9d50bb" autoAnimate particleShape="capsule" />

        {/* Retro Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,118,0.03))] bg-[length:100%_4px,3px_100%] z-[2]" />
      </div>

      <header className="relative z-20 h-24 flex-shrink-0 px-10 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/40 font-mono text-[10px] tracking-widest uppercase">
          <div className="w-1 h-1 bg-purple-500 rounded-full animate-ping" />
          Server_Status: Operational
        </div>
      </header>

      {/* 2. CORE INTERFACE */}
      <div className="relative z-10 flex-grow flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            style={{ y, opacity, rotateX: useTransform(mouseY, [-0.5, 0.5], [10, -10]), rotateY: useTransform(mouseX, [-0.5, 0.5], [-10, 10]) }}
            className="flex flex-col items-center text-center max-w-6xl mx-auto transform-gpu"
          >
            {/* Status Shard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 px-5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center gap-4 group cursor-pointer hover:border-purple-500/50 transition-all shadow-xl shadow-purple-900/10"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-5 h-5 rounded-full border border-black bg-purple-600 flex items-center justify-center text-[8px] font-bold text-white">
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 group-hover:text-purple-400 transition-colors">
                Registration_Phase: 01 // Active
              </span>
              <ChevronRight size={12} className="text-gray-600 group-hover:translate-x-1 transition-transform" />
            </motion.div>

            {/* Title with Chrome Effect - Adjusted for Mobile Visibility */}
            <div className="relative mb-6 w-full overflow-hidden sm:overflow-visible px-4">
              <h1 className="text-[2.5rem] min-[400px]:text-4xl sm:text-7xl md:text-[9rem] lg:text-[11rem] font-black leading-[0.85] tracking-tight text-white uppercase italic break-all sm:break-normal">
                HACK<span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-500 to-blue-600 drop-shadow-[0_0_35px_rgba(168,85,247,0.3)]">HUSTLE</span>
              </h1>
              <div className="absolute -top-6 right-0 sm:-top-10 sm:right-0 pointer-events-none opacity-10 sm:opacity-20 select-none">
                <span className="text-[5rem] sm:text-[12rem] font-black text-white italic tracking-tighter">26</span>
              </div>
            </div>

            {/* Terminal Subtitle */}
            <div className="flex items-center gap-3 mb-14 text-blue-400/80 font-mono text-sm sm:text-xl border-b border-white/5 pb-2 min-w-[300px] justify-center">
              <Terminal size={20} className="text-purple-500 animate-pulse" />
              <span ref={typeref} />
            </div>

            {/* Interactive Partner Block */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-16 
                opacity-90 hover:opacity-100 transition-all duration-300">

              <Image
                src={ieeesb_logo_theme}
                alt="IEEE SB"
                className="h-20 md:h-16 w-auto 
               brightness-110 contrast-125 
               drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]
               hover:scale-105 transition-all duration-500 "
              />

              {/* Divider */}
              <div className="hidden md:block h-12 w-[1px] 
                  bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />

              <Image
                src={ieeeCs}
                alt="IEEE CS"
                className="h-20 md:h-16 w-auto 
               brightness-200 contrast-125 
               drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]
               hover:scale-105 transition-all duration-500 filter invert"
              />
            </div>
            {/* Action Matrix - Full-width on Mobile */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto px-6 sm:px-0">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSf_jv_0xgVFv8pLRCRt2tlZBiZglnIq42hr-_5PMq9YYQ07BQ/viewform?usp=dialog"
                target="_blank"
                className="flex-shrink-0"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(168,85,247,0.4)" }}
                  className="relative h-14 sm:h-16 px-8 sm:px-12 rounded-full bg-white text-black font-black uppercase tracking-tighter italic flex items-center justify-center group overflow-hidden text-sm sm:text-base w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 group-hover:text-white transition-colors">Register in HackHustle</span>
                  <ArrowRight className="relative z-10 ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. DIAGNOSTIC DATA BAR - Responsive wrapping */}
      <footer className="relative z-20 w-full p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center border-t border-white/5 bg-black/80 backdrop-blur-2xl">
        <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-16 mb-8 md:mb-0">
          {[
            { label: "Track_A", val: "Gen-AI // LLM", icon: Activity, color: "text-purple-500" },
            { label: "Track_B", val: "PCB // Hardware", icon: Cpu, color: "text-blue-500" },
            { label: "Auth_Level", val: "Open_Source", icon: ShieldCheck, color: "text-white/40" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col border-l-2 border-white/5 pl-4 sm:pl-6">
              <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.4em] text-gray-700 mb-1">{item.label}</span>
              <span className={`text-[10px] sm:text-[11px] font-mono uppercase ${item.color} flex items-center gap-2`}>
                <item.icon size={12} /> {item.val}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 text-[9px] sm:text-[10px] font-mono text-gray-700 tracking-wider">
          BUILD_ID: <span className="text-white font-bold">HackHustle.DURGAPUR.2026</span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
      </footer>
    </section>
  );
}