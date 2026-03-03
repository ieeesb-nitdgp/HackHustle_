"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { topics } from "@/public/topics";
import BlurText from "@/components/BlurText";

export default function Topics() {
  const containerRef = useRef<HTMLElement>(null);

  // Synchronized Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Matching the subtle parallax feel from the About section
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1.2]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.3, 0.3, 0]);
  const yShift = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="topics"
      ref={containerRef}
      className="relative py-24 md:py-40 bg-[#05010a] z-20 overflow-hidden"
    >
      {/* 1. Dynamic Background Atmosphere (MATCHES ABOUT.JSX) */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, #9d50bb 0%, transparent 70%)",
          scale: backgroundScale,
          opacity: backgroundOpacity,
        }}
      />

      {/* 2. Subtle Grid overlay (MATCHES ABOUT.JSX) */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container relative z-10 mx-auto px-4">

        {/* 3. Section Header - Centered */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32 gap-6">
          <div className="max-w-4xl">
            <BlurText
              text="Innovation Tracks"
              className="text-4xl min-[400px]:text-5xl sm:text-7vw md:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.9] justify-center"
              animateBy="words"
              direction="top"
            />
            <p className="text-purple-500 mt-6 text-[10px] md:text-sm uppercase tracking-[0.4em] font-bold font-mono">
              // System Ready: Select Deployment Sector
            </p>
          </div>
        </div>

        {/* 4. The Grid with Parallax Shift */}
        <motion.div
          style={{ y: yShift }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {topics.map((topic, index) => (
            <TopicModule key={topic.title} topic={topic} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* --- TopicModule Component --- */

function TopicModule({ topic, index }: { topic: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full cursor-crosshair"
    >
      {/* Animated Border Beam */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-purple-500/50 transition-colors duration-500" />

      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-15 transition duration-700" />

      <div className="relative h-full p-8 rounded-2xl bg-white/[0.02] backdrop-blur-md overflow-hidden flex flex-col">
        {/* Background Decorative "Noise" */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Header Section */}
        <div className="flex justify-between items-start mb-10">
          <div className="relative">
            <div className="absolute -inset-4 bg-purple-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-4 rounded-xl bg-white/5 border border-white/10 text-purple-400 group-hover:scale-110 group-hover:text-white group-hover:bg-purple-600 transition-all duration-500">
              <topic.icon size={28} strokeWidth={1.5} />
            </div>
          </div>
          <span className="text-5xl font-black text-white/[0.03] group-hover:text-purple-500/10 transition-colors uppercase tracking-tighter">
            0{index + 1}
          </span>
        </div>

        {/* Text Content */}
        <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">
          {topic.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-10 flex-grow font-medium">
          {topic.description}
        </p>

        {/* Status Bar Footer */}
        <div className="relative pt-6 border-t border-white/5 mt-auto flex justify-between items-center">

          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="h-full w-full bg-purple-500"
              />
            </div>
            <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
          </div>
        </div>

        {/* Hover Highlight Shard */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}