"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { features } from '../public/features';
import BlurText from "@/components/BlurText";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  // Improved Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smoother parallax for the background atmosphere
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1.2]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.3, 0.3, 0]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 md:py-40 bg-[#05010a] z-20 overflow-hidden" // Higher Z-index to prevent Hero bleed
    >
      {/* 1. Dynamic Background Atmosphere */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, #9d50bb 0%, transparent 70%)",
          scale: backgroundScale,
          opacity: backgroundOpacity,
        }}
      />

      {/* Subtle Grid overlay to maintain consistency with Hero */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* 2. Header with Text Reveal */}
        <div className="text-center mb-20 md:mb-32">
          <BlurText
            text="The Spirit of HackHustle"
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 justify-center"
            animateBy="words"
            direction="bottom"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-2xl font-light leading-relaxed">
              HackHustle presents a dual-track innovation experience: a <span className="text-white font-medium">GenAI Hackathon</span> for intelligence and <span className="text-white font-medium">PCB Design</span> for hardware, converging to revolutionize Healthcare and Mental Health.
            </p>
          </motion.div>
        </div>

        {/* 3. Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
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
              <feature.icon size={28} strokeWidth={1.5} />
            </div>
          </div>
          <span className="text-5xl font-black text-white/[0.03] group-hover:text-purple-500/10 transition-colors uppercase tracking-tighter">
            0{index + 1}
          </span>
        </div>

        {/* Text Content */}
        <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">
          {feature.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-10 flex-grow font-medium">
          {feature.description}
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