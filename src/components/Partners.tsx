"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { partners } from "../public/partners";
import BlurText from "@/components/BlurText";

export default function Partners() {
  // We triple the array to ensure no gaps on massive screens (4K+)
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section id="partners" className="relative py-24 bg-[#05010a] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <BlurText
            text="Trusted by Industry Leaders"
            className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 justify-center"
            animateBy="words"
            direction="bottom"
          />
          <p className="text-gray-500 max-w-2xl mx-auto text-xs md:text-sm uppercase tracking-[0.4em] font-semibold leading-relaxed">
            Powering the next generation of <span className="text-purple-400">digital innovators</span>
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Wrapper */}
      <div className="relative flex flex-col gap-8">
        {/* Improved Gradient Overlays - Mask Image is more performant than extra divs */}
        <div
          className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
        >
          <motion.div
            className="flex whitespace-nowrap gap-6 py-4"
            animate={{ x: ["0%", "-33.33%"] }} // Only move 1/3 of the tripled array
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ width: "fit-content" }}
            whileHover={{ transition: { duration: 60 } }} // Optional: Slow down on hover
          >
            {duplicatedPartners.map((partner, index) => (
              <PartnerCard key={`${partner.name}-${index}`} partner={partner} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Labels */}
      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-wrap justify-center gap-6">
          {["Global Ecosystem", "Technical Support", "Innovation Hub"].map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              transition={{ delay: i * 0.2 }}
              className="text-[10px] font-black uppercase tracking-[0.25em] text-white border border-white/10 px-4 py-1.5 rounded-full hover:border-purple-500/50 hover:text-purple-400 transition-colors cursor-default"
            >
              {label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual logo cards to keep things clean
function PartnerCard({ partner }: { partner: { logo: string | StaticImageData; name: string } }) {
  return (
    <div className="relative group/card flex-shrink-0">
      {/* Card Border Glow Effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-center justify-center w-[160px] md:w-[240px] h-[100px] md:h-[130px] rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md transition-all duration-500 group-hover/card:bg-white/[0.04] group-hover/card:border-white/10">
        <Image
          src={partner.logo}
          alt={partner.name}
          width={140}
          height={50}
          className="w-auto h-8 md:h-12 object-contain opacity-30 grayscale brightness-200 transition-all duration-700 ease-out group-hover/card:opacity-100 group-hover/card:grayscale-0 group-hover/card:scale-110 group-hover/card:brightness-100"
        />
      </div>
    </div>
  );
}