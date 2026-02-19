"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { topics } from "@/public/topics";
import BlurText from "@/components/BlurText";

export default function Topics() {
  const containerRef = useRef<HTMLElement>(null);

  // Create a subtle parallax shift for the entire grid as you scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yShift = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      id="topics"
      ref={containerRef}
      className="relative py-32 bg-[#05010a] overflow-hidden"
    >
      {/* 1. Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '50px 50px' }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* 2. Header with Precision */}
        <div className="text-center mb-20">
          <BlurText
            text="Innovation Tracks"
            className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic justify-center"
            animateBy="words"
            direction="top"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-1 bg-purple-600 mx-auto mt-4 mb-6"
          />
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base uppercase tracking-[0.3em] font-bold">
            Select your domain. Build the future.
          </p>
        </div>

        {/* 3. The 3D Module Grid */}
        <motion.div
          style={{ y: yShift }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {topics.map((topic, index) => (
            <TopicModule key={topic.title} topic={topic} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* --- Interactive Topic Module --- */

interface Topic {
  title: string;
  description: string;
  icon: React.ElementType;
}

function TopicModule({ topic, index }: { topic: Topic; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      {/* Glow Backplate */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />

      <div className="relative p-8 rounded-2xl bg-[#0a0a0c] border border-white/5 flex flex-col h-full transition-all duration-300 group-hover:border-white/20">

        {/* Index Number */}
        <div className="absolute top-6 right-8 text-4xl font-black text-white/5 group-hover:text-purple-500/10 transition-colors">
          0{index + 1}
        </div>

        {/* Icon & Track Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-white/5 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
            <topic.icon size={24} />
          </div>
          <h3 className="text-xl font-bold text-white uppercase tracking-tight">
            {topic.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
          {topic.description}
        </p>

        {/* Tactical Footer */}
        <div className="pt-6 border-t border-white/5 flex justify-between items-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">
            Track Active
          </span>
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse" />
            <div className="w-1 h-1 rounded-full bg-purple-500 opacity-50" />
            <div className="w-1 h-1 rounded-full bg-purple-500 opacity-20" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}