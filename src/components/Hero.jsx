import React from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { ComputersCanvas } from "./canvas";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-20">
      <div className="absolute -left-32 top-24 -z-10 h-80 w-80 rounded-full bg-[#43d9ad]/10 blur-3xl" />
      <div className="absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-[#5565e8]/10 blur-3xl" />
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#43d9ad]/20 bg-[#43d9ad]/5 px-3 py-1.5 text-xs font-medium text-[#43d9ad]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#43d9ad]" />
            Available for freelance &amp; frontend opportunities
          </div>

          <p className="mb-3 font-mono text-sm text-slate-400">&lt;hello world /&gt;</p>
          <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            I build <span className="text-gradient">digital products</span> that feel as good as they work.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
            I&apos;m <strong className="font-semibold text-slate-200">Adeyeye Adebayo</strong>, a frontend developer focused on React, Next.js and TypeScript. I turn ideas and designs into responsive, accessible and production-ready web experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => scrollTo("projects")} className="inline-flex items-center gap-2 rounded-xl bg-[#43d9ad] px-5 py-3.5 text-sm font-bold text-[#07111f] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#43d9ad]/15">
              Explore my work <FiArrowUpRight />
            </button>
            <a href="https://drive.google.com/file/d/1dJTfvhjh2bRKK6WN-i7L4DrDNaDL7zCr/view?usp=drive_link" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10">
              View resume <FiArrowUpRight />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-5 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><FiMapPin className="text-[#43d9ad]" /> Lagos, Nigeria</span>
            <a className="inline-flex items-center gap-2 hover:text-white" href="https://github.com/bavic9" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
            <a className="inline-flex items-center gap-2 hover:text-white" href="https://www.linkedin.com/in/adeyeye-adebayo-63583b267/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }} className="relative hidden h-[520px] lg:block">
          <div className="absolute inset-8 rounded-[2rem] border border-white/10 bg-white/[.02]" />
          <div className="relative h-full w-full"><ComputersCanvas /></div>
        </motion.div>

        <button onClick={() => scrollTo("about")} className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-slate-500 transition hover:text-white lg:flex">
          Scroll to explore <FiArrowDown className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
