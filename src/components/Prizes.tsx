"use client";

import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prizes } from "../public/prizes";
import BlurText from "@/components/BlurText";
import { Zap } from "lucide-react";

export default function Prizes() {
  return (
    <section id="prizes" className="relative py-32 bg-[#05010a] overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header Reveal */}
        <div className="text-center mb-20 space-y-4">
          <BlurText
            text="Victory Rewards"
            className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic justify-center"
            animateBy="words"
            direction="bottom"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs"
          >
            Honoring Innovation and Excellence
          </motion.p>
        </div>

        {/* 3D Prize Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
          {prizes.map((prize, index) => (
            <PrizeTier key={prize.title} prize={prize} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Interactive Prize Tier Component --- */

interface Prize {
  title: string;
  amount: string;
  benefits: string[];
  icon: React.ElementType;
}

function PrizeTier({ prize, index }: { prize: Prize; index: number }) {
  // Metallic styling logic based on index
  const styles = [
    { border: "border-yellow-500/50", glow: "shadow-yellow-500/20", text: "text-yellow-500", label: "Grand Winner", height: "md:h-[500px]" },
    { border: "border-slate-400/50", glow: "shadow-slate-400/20", text: "text-slate-400", label: "Runner Up", height: "md:h-[440px]" },
    { border: "border-amber-700/50", glow: "shadow-amber-700/20", text: "text-amber-700", label: "Second Runner Up", height: "md:h-[400px]" },
  ][index] || { border: "border-white/10", glow: "shadow-white/5", text: "text-white", label: "Winner", height: "h-auto" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      // Re-orders visual podium (Winner in center for desktop)
      className={`relative group ${index === 0 ? "md:order-2" : index === 1 ? "md:order-1" : "md:order-3"}`}
    >
      <div className={`
        relative flex flex-col justify-between p-8 rounded-[2.5rem] 
        bg-white/[0.03] border backdrop-blur-xl transition-all duration-500 
        group-hover:-translate-y-4 group-hover:bg-white/[0.07]
        ${styles.border} ${styles.glow} ${styles.height}
      `}>

        {/* Badge Label */}
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border bg-black z-20 ${styles.border} ${styles.text}`}>
          {styles.label}
        </div>

        <div className="relative z-10">
          <CardHeader className="p-0 mb-6 text-center">
            <div className={`mb-4 mx-auto p-4 rounded-2xl bg-white/5 inline-block ${styles.text} group-hover:scale-110 transition-transform duration-500`}>
              <prize.icon size={48} strokeWidth={1.5} />
            </div>
            <CardTitle className="text-2xl font-black text-white uppercase italic tracking-tight">
              {prize.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 text-center">
            <p className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tighter">
              ₹{prize.amount}
            </p>
            <ul className="space-y-3 text-left">
              {prize.benefits.map((benefit: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                  <Zap size={14} className={styles.text} />
                  {benefit}
                </li>
              ))}
            </ul>
          </CardContent>
        </div>

        {/* Decorative Gloss */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent rounded-[2.5rem] pointer-events-none" />
      </div>
    </motion.div>
  );
}