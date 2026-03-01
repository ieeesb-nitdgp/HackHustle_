"use client";
import Speaker from "@/public/Rishab_Pan.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import BlurText from "@/components/BlurText";
import { Linkedin, Youtube } from "lucide-react";
import Link from "next/link"; // Use Next.js Link for better performance

export default function Speakers() {
    return (
        <section id="speakers" className="py-24 md:py-40 bg-[#05010a] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <BlurText
                        text="Distinguished Speaker"
                        className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic justify-center"
                        animateBy="words"
                        direction="bottom"
                    />
                    <p className="text-purple-400 mt-4 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
                        Insights from the forefront of technology
                    </p>
                </div>

                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32">

                    {/* Rishab Pan - Speaker Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="group relative w-full max-w-[320px] h-[480px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_40px_130px_rgba(168,85,247,0.2)]"
                    >
                        {/* 1. Background Image */}
                        <div className="absolute inset-0 z-0 bg-gradient-to-b from-purple-900/20 to-black">
                            <div className="absolute inset-0 opacity-30 group-hover:opacity-10 transition-opacity duration-700 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        </div>

                        {/* 2. Fixed Social Links */}
                        <div className="absolute top-4 right-4 z-20 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                            <Link
                                href="https://www.linkedin.com/in/careerwithrishab/"
                                target="_blank"
                                className="p-2 rounded-lg bg-white/10 hover:bg-purple-600 text-white transition-colors"
                            >
                                <Linkedin size={18} />
                            </Link>
                            <Link
                                href="https://www.youtube.com/@careerwithrishab"
                                target="_blank"
                                className="p-2 rounded-lg bg-white/10 hover:bg-red-600 text-white transition-colors"
                            >
                                <Youtube size={18} />
                            </Link>
                        </div>

                        {/* 3. Profile Picture */}
                        <div className="relative z-10 w-full h-48 flex items-center justify-center">
                            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-purple-500 transition-all duration-700 shadow-2xl">
                                <Image
                                    src={Speaker}
                                    alt="Rishab Pan"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-all duration-700"
                                    priority // Recommended for "Distinguished Speaker" images
                                />
                            </div>
                        </div>

                        {/* 4. Card Body */}
                        <div className="relative z-10 px-6 text-center text-white">
                            <h3 className="text-2xl font-black tracking-tight uppercase italic group-hover:text-purple-400 transition-colors duration-500">
                                Rishab Pan
                            </h3>
                            <div className="flex flex-col gap-1 mt-2">
                                <p className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">
                                    Co-Founder @ ClayHire
                                </p>
                                <p className="text-[9px] font-medium tracking-[0.1em] text-gray-500 uppercase">
                                    Ex-Google | Ex-Flipkart
                                </p>
                            </div>
                            <p className="mt-6 text-xs font-medium leading-relaxed text-gray-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 px-2">
                                Expert in Fraud Prevention ML models & Scaling Tech Startups. Helping the next generation break into top-tier tech.
                            </p>
                        </div>

                        {/* 5. Card Footer */}
                        <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                                    Live Mentoring
                                </span>
                            </div>
                            <span className="text-[9px] font-black text-purple-500 uppercase tracking-widest border border-purple-500/30 px-2 py-1 rounded">
                                Tech Lead
                            </span>
                        </div>
                    </motion.div>

                    {/* Speaker Details Text */}
                    <div className="flex-grow max-w-xl text-center lg:text-left">
                        {/* ... (rest of your component remains the same) */}
                        <div className="group relative">
                            <div className="absolute inset-0 rounded-[32px] border border-white/10 group-hover:border-purple-500/50 transition-colors duration-500" />
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-10 transition duration-700" />

                            <div className="relative p-8 md:p-12 rounded-[32px] bg-white/[0.02] backdrop-blur-3xl overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                                <h3 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase italic tracking-tighter">
                                    Engineering <span className="text-purple-500">Career Growth</span>
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium">
                                    Drawing from his journey at <span className="text-white">Google Maps</span> and <span className="text-white">Flipkart</span>, Rishab shares the blueprint for mastering complex systems and navigating the evolution from Engineer to Founder.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="px-6 py-4 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-300">
                                        <p className="text-[10px] uppercase font-bold tracking-widest mb-1 text-purple-500">Specialization</p>
                                        <p className="text-sm font-bold">ML Fraud Prevention</p>
                                    </div>
                                    <div className="px-6 py-4 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-300">
                                        <p className="text-[10px] uppercase font-bold tracking-widest mb-1 text-blue-500">Track Record</p>
                                        <p className="text-sm font-bold">34k+ Tech Followers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}