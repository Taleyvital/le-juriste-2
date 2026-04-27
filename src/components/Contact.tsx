"use client";

import { useState } from "react";

const subjects = [
  "Droit des Affaires",
  "Droit du Travail",
  "Droit Civil",
  "Droit de la Famille",
  "Droit Pénal",
  "Autre",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left — Impact text */}
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-[28px] md:text-[34px] font-semibold text-[#1b1b1d] leading-tight">
            Impact Social &amp; Engagement
          </h2>
          <p className="font-sans text-[15px] leading-[1.7] text-[#45464d]">
            Au-delà de la pratique du droit, mon engagement à travers mon ONG
            vise à démocratiser l&rsquo;accès à l&rsquo;information juridique.
            Nous croyons qu&rsquo;un citoyen informé est un acteur du
            développement.
          </p>

          <div className="flex flex-col gap-3 mt-2">
            <a
              href="mailto:contact@yaomardochee.ci"
              className="flex items-center gap-3 font-sans text-[14px] text-[#45464d] hover:text-[#1b1b1d] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" className="w-4 h-4 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              contact@yaomardochee.ci
            </a>
            <span className="flex items-center gap-3 font-sans text-[14px] text-[#45464d]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" className="w-4 h-4 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Abidjan, Côte d&rsquo;Ivoire
            </span>
          </div>
        </div>

        {/* Right — Contact form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-[#76777d]">
              NOM COMPLET
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full font-sans text-[14px] text-[#1b1b1d] bg-white border border-[#c6c6cd] rounded-[4px] px-4 py-3 outline-none focus:border-[#1b1b1d] focus:ring-1 focus:ring-[#1b1b1d] transition-all placeholder:text-[#c6c6cd]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-[#76777d]">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full font-sans text-[14px] text-[#1b1b1d] bg-white border border-[#c6c6cd] rounded-[4px] px-4 py-3 outline-none focus:border-[#1b1b1d] focus:ring-1 focus:ring-[#1b1b1d] transition-all placeholder:text-[#c6c6cd]"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-[#76777d]">
              SUJET DE CONSULTATION
            </label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full font-sans text-[14px] text-[#1b1b1d] bg-white border border-[#c6c6cd] rounded-[4px] px-4 py-3 outline-none focus:border-[#1b1b1d] focus:ring-1 focus:ring-[#1b1b1d] transition-all appearance-none cursor-pointer"
            >
              {subjects.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-[#76777d]">
              MESSAGE
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full font-sans text-[14px] text-[#1b1b1d] bg-white border border-[#c6c6cd] rounded-[4px] px-4 py-3 outline-none focus:border-[#1b1b1d] focus:ring-1 focus:ring-[#1b1b1d] transition-all resize-none placeholder:text-[#c6c6cd]"
            />
          </div>

          <button
            type="submit"
            className="w-full font-sans text-[12px] font-semibold tracking-[0.1em] uppercase bg-[#1b1b1d] text-white py-4 rounded-[4px] hover:bg-[#000000] transition-colors duration-200 mt-1"
          >
            ENVOYER LA DEMANDE
          </button>
        </form>
      </div>
    </section>
  );
}
