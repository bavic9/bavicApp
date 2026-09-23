import React from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="font-semibold text-slate-300">Adeyeye Adebayo</p>
          <p className="mt-1">Frontend developer · Lagos, Nigeria</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/bavic9" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-white"><FaGithub size={18} /></a>
          <a href="https://www.linkedin.com/in/adeyeye-adebayo-63583b267/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-white"><FaLinkedinIn size={18} /></a>
          <a href="https://x.com/bavic_" target="_blank" rel="noreferrer" aria-label="X" className="transition hover:text-white"><FaXTwitter size={18} /></a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="ml-2 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs hover:text-white">Back to top <FiArrowUp /></button>
        </div>
      </div>
    </footer>
  );
}
