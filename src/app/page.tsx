"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Header from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Prizes from "@/components/Prizes";
import Speakers from "@/components/Speakers";
import Timeline from "@/components/Timeline";
import Topics from "@/components/Topics";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="min-h-screen">
      <Loader />
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.91 }}
        >
          <Navbar />
          <Header />
          <About />
          <Topics />
          <Timeline />
          <Speakers />
          <Prizes />
          <Faqs />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </main>
  );
}
