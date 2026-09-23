import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../constants";

export default function Works() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "React", "Next.js", "JavaScript"];

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="section-shell">
      <div className="section-label">02 / Selected work</div>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <h2 className="section-title">Projects I&apos;ve shipped.</h2>
          <p className="mt-4 leading-7 text-slate-500">A selection of interfaces and applications built across e-commerce, finance, content and everyday productivity.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={`rounded-full border px-3.5 py-2 text-xs font-medium transition ${filter === item ? "border-[#43d9ad]/40 bg-[#43d9ad]/10 text-[#43d9ad]" : "border-white/10 text-slate-400 hover:text-white"}`}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-4">
        {filtered.map((project, index) => (
          <motion.article
            layout
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * .05 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.025]"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-[#0d1b2a]">
              <img src={project.image} alt={`${project.name} project`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent opacity-80" />
              <div className="absolute right-4 top-4 flex gap-2">
                {project.source_code_link && (
                  <a href={project.source_code_link} target="_blank" rel="noreferrer" aria-label={`View ${project.name} source code`} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-[#07111f]/80 text-white backdrop-blur transition hover:bg-[#43d9ad] hover:text-[#07111f]"><FiGithub /></a>
                )}
                <a href={project.live_link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-[#07111f]/80 text-white backdrop-blur transition hover:bg-[#43d9ad] hover:text-[#07111f]"><FiExternalLink /></a>
              </div>
              <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-[#07111f]/80 px-3 py-1 text-[11px] text-slate-300 backdrop-blur">{project.category}</span>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{project.description}</p>
                </div>
                <FiArrowUpRight className="mt-1 shrink-0 text-slate-600 transition group-hover:text-[#43d9ad]" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-400">{tag}</span>)}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
