import {
  mobile, backend, creator, web, javascript, typescript, html, css,
  reactjs, redux, tailwind, nodejs, mongodb, git, figma, threejs
} from "../assets";

import task from "../assets/task.png";
import zarrin from "../assets/zarrin.JPG";
import simple from "../assets/simple.jpg";
import stake from "../assets/stake.png";
import pxc from "../assets/pxc.png";
import homzy from "../assets/estate.png";
import clone from "../assets/clone.png";
import shopease from "../assets/shopease.png"

export const services = [
  { title: "Web Development", icon: web },
  { title: "Frontend Development", icon: mobile },
  { title: "Content & Creative", icon: creator },
];

export const technologies = [
  { name: "React", icon: reactjs },
  { name: "Next.js", icon: reactjs },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Redux Toolkit", icon: redux },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "REST APIs", icon: web },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Three.js", icon: threejs },
];

export const projects = [
  {
    name: "ShopEase",
    category: "React",
    description: "An ECommerce App with Admin Panel offering products, seamless shopping, secure payments, and reliable delivery.",
    tags: ["React", "MERN Stack", "MongoDB", "Redux Toolkit", "Tailwind"],
    image: shopease,
    source_code_link: "https://github.com/bavic9/ecommerce",
    live_link: "https://bavic-shopease.vercel.app/",
  },
  {
    name: "Prime X Capital",
    category: "React",
    description: "A trading community platform designed to help users evaluate their journey and connect with other traders.",
    tags: ["React", "Firebase", "Tailwind"],
    image: pxc,
    source_code_link: "https://github.com/bavic9/primexcapital",
    live_link: "https://primexcapital.vercel.app/",
  },
  {
    name: "Zarrin",
    category: "Next.js",
    description: "A modern blog experience for publishing insights and stories with straightforward discovery and navigation.",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    image: zarrin,
    source_code_link: "https://github.com/bavic9/zarrin-app",
    live_link: "https://zarrin-app.vercel.app",
  },
  {
    name: "Stake Net",
    category: "React",
    description: "A crypto dashboard experience built around market data, clean information hierarchy and responsive layouts.",
    tags: ["React", "Coinbase API", "Tailwind"],
    image: stake,
    source_code_link: "https://github.com/bavic9/stakenet",
    live_link: "https://cryptoapp-olive.vercel.app/",
  },
    {
    name: "Task Manager",
    category: "React",
    description: "A focused productivity app for organizing, tracking and managing tasks through a clean responsive interface.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: task,
    source_code_link: "https://github.com/bavic9/tasks",
    live_link: "https://tasks-theta-nine.vercel.app/",
  },
   {
    name: "Homzy",
    category: "React",
    description: "A real-estate interface that makes discovering and browsing properties simple and approachable.",
    tags: ["React", "Tailwind"],
    image: homzy,
    source_code_link: "https://github.com/bavic9/homy",
    live_link: "https://real-estate-app-d1f.pages.dev/",
  },
  {
    name: "Simply Recipe",
    category: "JavaScript",
    description: "A lightweight recipe website for exploring meals and following simple cooking instructions.",
    tags: ["HTML", "JavaScript", "CSS"],
    image: simple,
    source_code_link: "https://github.com/bavic9/Simply-Recipes",
    live_link: "https://simply-recipes-mu.vercel.app/",
  },
  {
    name: "Starbucks Clone",
    category: "JavaScript",
    description: "A responsive recreation of a familiar coffee brand experience using semantic frontend fundamentals.",
    tags: ["HTML", "JavaScript", "CSS"],
    image: clone,
    source_code_link: "",
    live_link: "https://starbucks-clone-ashy.vercel.app/",
  },
];
