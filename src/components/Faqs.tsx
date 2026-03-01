"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/public/faq";
import BlurText from "@/components/BlurText";

export default function Faqs() {
  return (
    <section id="faq" className="relative py-32 bg-[#05010a] overflow-hidden">
      {/* 1. Subtle Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* 2. Header with Text Reveal */}
        <div className="text-center mb-20 space-y-4">
          <BlurText
            text="Common Queries"
            className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic justify-center"
            animateBy="words"
            direction="bottom"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs"
          >
            Everything you need to know about HackHustle
          </motion.p>
        </div>

        {/* 3. High-End Glassmorphic Accordion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group relative bg-white/[0.02] border border-white/10 rounded-3xl px-8 py-2 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.05] overflow-hidden mb-6 cursor-crosshair"
              >
                {/* Animated Border Beam */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-purple-500/30 transition-colors duration-500" />

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />

                {/* Background Decorative "Noise" */}
                <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                <AccordionTrigger className="relative z-10 text-left text-lg md:text-xl font-black text-white py-6 hover:no-underline transition-all group-data-[state=open]:text-purple-400 uppercase italic tracking-tight">
                  <span className="flex items-center gap-4">
                    <span className="text-[10px] font-black text-blue-500 opacity-50 tracking-widest">// 0{index + 1}</span>
                    {faq.question}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="relative z-10 text-gray-400 text-base md:text-lg leading-relaxed pb-8 pl-10 border-t border-white/5 pt-6 font-medium">
                  {faq.answer}
                </AccordionContent>

                {/* Hover Highlight Shard */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}