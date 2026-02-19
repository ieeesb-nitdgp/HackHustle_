"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { judges } from "../public/judges";
import BlurText from "@/components/BlurText";

export default function Judges() {
  return (
    <section id="judges" className="relative py-32 bg-[#05010a] overflow-hidden">
      {/* 1. Ambient Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* 2. Precision Header */}
        <div className="text-center mb-24 space-y-4">
          <BlurText
            text="The Evaluation Panel"
            className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic justify-center"
            animateBy="words"
            direction="bottom"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs"
          >
            Mentors & Judges from Top Tech Giants
          </motion.p>
        </div>

        {/* 3. The Grid of Experts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {judges.map((judge, index) => (
            <JudgeCard key={judge.name} judge={judge} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Interactive Judge Card Component --- */

interface Judge {
  name: string;
  image: string | StaticImageData;
  role: string;
  linkedin: string;
  github: string;
}

function JudgeCard({ judge, index }: { judge: Judge; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* 4. The Profile "Capsule" */}
      <div className="relative mx-auto w-[240px] aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-purple-500/50 group-hover:scale-[1.02] group-hover:-translate-y-2">

        {/* Neon Ring Hover Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-purple-600/40 to-transparent" />
        </div>

        <Image
          src={judge.image || "/placeholder.svg"}
          alt={judge.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100"
        />

        {/* Floating Social Quick-Access */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-30 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
          <a href={judge.linkedin} className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-purple-600 transition-colors">
            <FiLinkedin size={16} />
          </a>
          <a href={judge.github} className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-purple-600 transition-colors">
            <FiGithub size={16} />
          </a>
        </div>
      </div>

      {/* 5. Typography & Details */}
      <div className="mt-8 text-center space-y-2">
        <h3 className="text-2xl font-black text-white uppercase tracking-tight italic group-hover:text-purple-400 transition-colors">
          {judge.name}
        </h3>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 bg-blue-500/10 inline-block px-3 py-1 rounded-full border border-blue-500/20">
          {judge.role}
        </p>

        {/* Subtle decorative dots */}
        <div className="flex justify-center gap-1.5 pt-4">
          <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-purple-500 transition-colors" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-purple-500 transition-colors delay-75" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-purple-500 transition-colors delay-150" />
        </div>
      </div>
    </motion.div>
  );
}