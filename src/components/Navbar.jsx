import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[#07111f]/85 shadow-lg backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <button onClick={() => go("home")} className="group flex items-center gap-3" aria-label="Go home">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#43d9ad]/30 bg-[#0d1b2a] font-bold text-[#43d9ad] shadow-lg shadow-[#43d9ad]/5">
            A
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-bold tracking-wide text-white">Adeyeye Adebayo</span>
            <span className="block text-xs text-slate-400">Frontend Developer</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => go("contact")}
          className="hidden items-center gap-2 rounded-xl border border-[#43d9ad]/30 bg-[#43d9ad]/10 px-4 py-2.5 text-sm font-semibold text-[#43d9ad] transition hover:bg-[#43d9ad]/15 sm:flex"
        >
          Let&apos;s talk <FiArrowUpRight />
        </button>

        <button className="rounded-lg p-2 text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#07111f]/98 px-5 py-5 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="rounded-xl px-4 py-3 text-left text-slate-200 hover:bg-white/5 hover:text-[#43d9ad]"
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => go("contact")} className="mt-2 rounded-xl bg-[#43d9ad] px-4 py-3 font-semibold text-[#07111f]">
              Let&apos;s talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
