"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BlurText from "@/components/BlurText";
import { ArrowRight } from "lucide-react";

export default function SubmitSection() {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1.2]);
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.3, 0.3, 0]);

    return (
        <section
            id="submit"
            ref={containerRef}
            className="relative py-24 md:py-40 bg-[#05010a] z-20 overflow-hidden"
        >
            {/* 1. Dynamic Background Atmosphere (Same as About) */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 50% 50%, #9d50bb 0%, transparent 70%)",
                    scale: backgroundScale,
                    opacity: backgroundOpacity,
                }}
            />

            {/* Subtle Grid overlay (Same as About) */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="container relative z-10 mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Header with Text Reveal */}
                    <BlurText
                        text="Ready to Showcase Your Innovation?"
                        className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter mb-8 justify-center uppercase italic"
                        animateBy="words"
                        direction="bottom"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <BlurText
                            text="SUBMIT YOUR PROJECT"
                            className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter mb-12 justify-center italic uppercase"
                            animateBy="words"
                            direction="bottom"
                        />

                        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light mb-16 leading-relaxed">
                            The window is open. Push your boundaries, finalize your logic, and let the world witness your hustle.
                        </p>

                        {/* Premium Call to Action Button */}
                        <div className="flex flex-col items-center">
                            <a
                                href="https://hackhustle-3.devfolio.co/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block group relative"
                            >
                                {/* Outer Glow */}
                                <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-2xl opacity-40 group-hover:opacity-100 transition duration-700" />

                                {/* Button Body */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative flex items-center gap-4 px-10 py-6 bg-[#0a0510] border border-white/10 rounded-2xl overflow-hidden"
                                >
                                    {/* Internal Hover Fill */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <span className="relative z-10 text-white font-black text-xl md:text-2xl uppercase italic tracking-tighter">
                                        Submit Now on Devfolio
                                    </span>
                                    <ArrowRight className="relative z-10 text-white group-hover:translate-x-2 transition-transform duration-500" size={28} />
                                </motion.button>
                            </a>

                            {/* Status Bar Micro-animation below button */}
                            <div className="mt-12 flex justify-center items-center gap-6">
                                <div className="h-[1px] w-20 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        whileInView={{ x: "100%" }}
                                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                        className="h-full w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                                    />
                                </div>
                                <div className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.3em] animate-pulse flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                    System_Status: Awaiting_Submission
                                </div>
                                <div className="h-[1px] w-20 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ x: "100%" }}
                                        whileInView={{ x: "-100%" }}
                                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                        className="h-full w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
