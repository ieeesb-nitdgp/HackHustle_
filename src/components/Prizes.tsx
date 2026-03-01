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
      className={`relative group cursor-crosshair ${index === 0 ? "md:order-2" : index === 1 ? "md:order-1" : "md:order-3"}`}
    >
      {/* Animated Border Beam */}
      <div className={`absolute inset-0 rounded-[2.5rem] border ${styles.border} group-hover:border-white/40 transition-colors duration-500`} />

      {/* Glow Effect */}
      <div className={`absolute -inset-1 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-20 transition duration-700 bg-gradient-to-r ${index === 0 ? "from-yellow-400 to-yellow-600" : index === 1 ? "from-slate-300 to-slate-500" : "from-amber-600 to-amber-800"}`} />

      <div className={`
        relative h-full flex flex-col justify-between p-8 rounded-[2.5rem] 
        bg-white/[0.02] backdrop-blur-3xl overflow-hidden transition-all duration-500 
        ${styles.height}
      `}>
        {/* Background Decorative "Noise" */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Badge Label */}
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border bg-black z-20 ${styles.border} ${styles.text}`}>
          {styles.label}
        </div>

        <div className="relative z-10 pt-4">
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
                <li key={i} className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                  <Zap size={14} className={styles.text} />
                  {benefit}
                </li>
              ))}
            </ul>
          </CardContent>
        </div>

        {/* Status Bar Footer */}
        <div className="relative pt-6 border-t border-white/5 mt-8 flex justify-between items-center z-10">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500">Asset Value</span>
            <span className={`text-[11px] font-black uppercase ${styles.text}`}>Secured</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className={`h-full w-full ${index === 0 ? "bg-yellow-500" : index === 1 ? "bg-slate-400" : "bg-amber-700"}`}
              />
            </div>
          </div>
        </div>

        {/* Hover Highlight Shard */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}