import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiArrowUpRight, FiCheckCircle, FiMail } from "react-icons/fi";

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const service = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const template = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const key = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!service || !template || !key) {
      setStatus("config");
      return;
    }

    try {
      await emailjs.send(service, template, { from_name: form.name, from_email: form.email, message: form.message }, key);
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-shell pb-28">
      <div className="section-label">04 / Contact</div>
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0d1b2a] to-[#091522]">
        <div className="grid lg:grid-cols-[.85fr_1.15fr]">
          <div className="p-7 sm:p-10 lg:p-12">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#43d9ad]/10 text-[#43d9ad]"><FiMail /></div>
            <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">Have a project in mind?</h2>
            <p className="mt-4 max-w-md leading-7 text-slate-500">Tell me what you&apos;re building, what you need help with, and where you&apos;d like to take it. I&apos;ll get back to you as soon as I can.</p>
            <p className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#43d9ad]"><FiArrowUpRight /> The contact form is connected through EmailJS.</p>
          </div>

          <form ref={formRef} onSubmit={submit} className="border-t border-white/10 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm text-slate-400">Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" /></label>
              <label className="text-sm text-slate-400">Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field" /></label>
            </div>
            <label className="mt-5 block text-sm text-slate-400">Message<textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-field resize-none" /></label>
            <button disabled={status === "sending"} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#43d9ad] px-5 py-3.5 text-sm font-bold text-[#07111f] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60">
              {status === "sending" ? "Sending..." : "Send message"} <FiArrowUpRight />
            </button>
            {status === "sent" && <p className="mt-4 flex items-center gap-2 text-sm text-[#43d9ad]"><FiCheckCircle /> Message sent successfully.</p>}
            {status === "config" && <p className="mt-4 text-sm text-amber-400">Add your EmailJS environment variables to enable the form.</p>}
            {status === "error" && <p className="mt-4 text-sm text-red-400">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
