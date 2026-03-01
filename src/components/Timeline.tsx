"use client";

import { motion } from "framer-motion";
import { timeline } from "@/public/timeline";
import BlurText from "@/components/BlurText";
import Image from "next/image";
import Link from "next/link";
import Antigravity from "@/components/Antigravity";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-24 md:py-40 bg-[#05010a] flex flex-col items-center overflow-hidden font-sans"
    >
      {/* 1. Background Layer (Consistent with Hero) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <Antigravity count={30} magnetRadius={1000} color="#9d50bb" autoAnimate particleShape="circle" />
        <div className="absolute bottom-0 h-64 w-full bg-gradient-to-t from-[#05010a] to-transparent z-[1]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-[1300px]">

        {/* Section Header */}
        <div className="text-center mb-24 relative">
          <BlurText
            text="Event Roadmap"
            className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic justify-center pb-4"
            animateBy="words"
            direction="bottom"
          />
          {/* Decorative Divider */}
          <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-40 h-[2px] bg-purple-500/20" />
          <div className="absolute left-1/2 -bottom-[25px] -translate-x-1/2 w-8 h-8 rounded-full border border-purple-500/30 bg-[#05010a] flex items-center justify-center text-[10px] text-purple-400 rotate-90 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            &gt;
          </div>
        </div>

        {/* Timeline Wrapper */}
        <div className="flex flex-col space-y-0 relative">
          {/* Central Line - Desktop Only (Enhanced precision) */}
          <div className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-purple-500/50 -translate-x-1/2 hidden md:block z-0" />

          {timeline.map((event, index) => {
            const isEven = index % 2 !== 0;

            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center w-full relative mb-12 md:mb-0
                  ${isEven ? "md:flex-row-reverse" : ""}
                  border-l-2 md:border-l-0 border-white/5 ml-4 md:ml-0`}
              >
                {/* Date Column */}
                <div className={`flex-1 p-5 md:p-12 relative flex flex-col justify-center
                  ${isEven ? "md:text-left md:items-start" : "md:text-right md:items-end text-left items-start"}
                `}>
                  <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md text-white text-sm font-bold shadow-[0_0_20px_rgba(168,85,247,0.15)] z-10 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    {event.date}
                  </div>

                  {/* The Connector Dot (Precisely centered on line) */}
                  <div className={`absolute w-4 h-4 rounded-full bg-[#05010a] border-2 border-purple-500 top-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-20 hidden md:block
                    ${isEven ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"}`}
                  />
                  {/* Mobile Dot */}
                  <div className="absolute w-3 h-3 rounded-full bg-purple-500 top-16 -left-[40.5px] md:hidden shadow-[0_0_10px_rgba(168,85,247,0.5)] z-20" />
                </div>

                {/* Content Column */}
                <div className={`flex-1 p-5 md:p-12 ${isEven ? "md:text-right" : "md:text-left"}`}>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase italic tracking-tight group">
                    {event.title}
                    <span className="text-purple-400 text-xs tracking-[0.2em] ml-3 uppercase font-bold not-italic">
                      // {event.location || "Online"}
                    </span>
                  </h2>

                  <div className="group relative h-full cursor-crosshair">
                    {/* Animated Border Beam */}
                    <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-purple-500/50 transition-colors duration-500" />

                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />

                    <div className="relative h-full p-8 rounded-2xl bg-[#1b0620]/80 border border-white/10 backdrop-blur-xl overflow-hidden flex flex-col text-left shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      {/* Background Decorative "Noise" */}
                      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                      <p className="text-gray-400 text-base md:text-lg leading-relaxed relative z-10 mb-8">{event.description}</p>

                      {/* Status Bar Footer */}
                      <div className="relative pt-6 border-t border-white/5 mt-auto flex justify-between items-center">
                        <div className="flex flex-col">
                          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500">Node Status</span>
                          <span className="text-[11px] font-black uppercase text-blue-400">Deployed</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Link
                            href="#about"
                            className="px-4 py-1.5 rounded-xl border border-white/10 text-white hover:bg-purple-600 transition-all duration-300 text-xs font-bold bg-white/5 inline-block"
                          >
                            Details &gt;
                          </Link>
                        </div>
                      </div>

                      {/* Background Decorative Asset */}
                      <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none p-2 scale-[2.0] origin-bottom-right rotate-[-15deg]">
                        <Image src="/ieee.png" alt="icon" width={120} height={60} className="filter invert" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
