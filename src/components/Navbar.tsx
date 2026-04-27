"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "BIO", href: "/bio" },
  { label: "BLOG", href: "/blog" },
  { label: "TIKTOK", href: "/tiktok" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-[#c6c6cd] bg-[#fcf8fa]/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-[13px] font-semibold tracking-[0.12em] text-[#1b1b1d] uppercase leading-tight"
        >
          YAO MARDOCHÉE{" "}
          <span className="text-[#45464d] font-normal">—</span>{" "}
          LE JURISTE 2.0
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-[12px] font-medium tracking-[0.08em] text-[#45464d] uppercase hover:text-[#1b1b1d] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase bg-[#1b1b1d] text-white px-5 py-2.5 rounded-[4px] hover:bg-[#000000] transition-colors duration-200"
          >
            CONSULTATION
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-[#1b1b1d] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-[#1b1b1d] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[#1b1b1d] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#c6c6cd] bg-[#fcf8fa] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-[12px] font-medium tracking-[0.08em] text-[#45464d] uppercase hover:text-[#1b1b1d] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase bg-[#1b1b1d] text-white px-5 py-2.5 rounded-[4px] text-center hover:bg-[#000000] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            CONSULTATION
          </Link>
        </div>
      )}
    </header>
  );
}
