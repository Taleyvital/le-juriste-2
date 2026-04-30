import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#e4e2e4] bg-[#fcf8fa]">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <span className="font-serif text-[12px] font-semibold tracking-[0.1em] uppercase text-[#1b1b1d]">
          YAO MARDOCHÉE
        </span>

        {/* Copyright */}
        <p className="font-sans text-[11px] text-[#76777d] text-center">
          © 2024 Yao Mardochée. All rights reserved. Professional Legal Consultancy.
        </p>

        {/* Links */}
        <nav className="flex items-center gap-5">
          {[
            { label: "Terms of Service", href: "/terms" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Legal Notice", href: "/legal" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-[11px] text-[#76777d] hover:text-[#1b1b1d] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Developer credit */}
        <a
          href="https://webey-agency-elevate.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-200"
        >
          <span className="font-sans text-[11px] text-[#76777d]">Développé par</span>
          <Image
            src="/webey-cover-black.jpeg"
            alt="Webey Agency"
            width={60}
            height={20}
            className="object-contain"
          />
        </a>
      </div>
    </footer>
  );
}
