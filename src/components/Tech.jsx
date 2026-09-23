import React from "react";
import { technologies } from "../constants";

export default function Tech() {
  return (
    <section className="section-shell">
      <div className="section-label">03 / Toolbox</div>
      <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <h2 className="section-title">Tools I use to turn ideas into products.</h2>
          <p className="mt-4 leading-7 text-slate-500">A practical toolkit for building modern, responsive and maintainable web applications.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div key={tech.name} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.025] p-4 transition hover:-translate-y-1 hover:border-white/20">
              <img src={tech.icon} alt="" className="h-9 w-9 object-contain" />
              <span className="text-sm font-medium text-slate-300 group-hover:text-white">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
