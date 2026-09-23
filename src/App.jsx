import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07111f] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Tech />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-[#0d1b2a]/90 text-white shadow-xl backdrop-blur-md transition hover:-translate-y-1 hover:border-[#43d9ad]/50 hover:text-[#43d9ad]"
            aria-label="Back to top"
          >
            <FiArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
