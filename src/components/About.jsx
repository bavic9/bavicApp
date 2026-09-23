import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayers, FiZap, FiUsers } from "react-icons/fi";

const cards = [
  { icon: FiCode, title: "Frontend development", text: "React, Next.js, JavaScript, TypeScript and modern CSS for maintainable interfaces." },
  { icon: FiLayers, title: "Product-focused UI", text: "Clean component systems, responsive layouts and interfaces designed around real users." },
  { icon: FiZap, title: "Performance", text: "Fast-loading experiences with thoughtful rendering, reusable code and API integration." },
  { icon: FiUsers, title: "Collaboration", text: "Comfortable working with designers, clients and backend engineers to ship products." },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-label">01 / About</div>
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <h2 className="section-title">A developer who cares about the details.</h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-slate-400">
            I&apos;m a frontend developer with 3+ years of experience building responsive web applications and digital products. My core stack is React, Next.js, TypeScript, Tailwind CSS and REST APIs.
          </p>
          <p className="mt-5 leading-7 text-slate-500">
            I enjoy taking a product from a rough idea or Figma design to a polished, usable interface. I value clean architecture, reusable components, accessibility and the small interactions that make a product feel intentional.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[["3+", "Years experience"], ["20+", "Projects"], ["React", "Core stack"], ["100%", "Curiosity"]].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[.03] p-4">
                <div className="text-xl font-bold text-white">{value}</div>
                <div className="mt-1 text-xs text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ icon: Icon, title, text }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * .08 }}
            className="card-hover rounded-2xl border border-white/10 bg-white/[.025] p-6"
          >
            <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-[#43d9ad]/10 text-[#43d9ad]"><Icon /></div>
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
