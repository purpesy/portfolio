"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { GithubIcon, LinkedinIcon } from "./icons";

const LINKS = [
  { id: "sobre",      pt: "Sobre",      en: "About"      },
  { id: "skills",     pt: "Stack",      en: "Stack"      },
  { id: "experiencia",pt: "Experiência",en: "Experience" },
  { id: "projetos",   pt: "Projetos",   en: "Projects"   },
];

export function Nav() {
  const { language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <nav
        className={`flex items-center gap-1 sm:gap-2 w-full max-w-4xl rounded-full pl-5 pr-2 py-2 transition-all duration-300 ${
          scrolled
            ? "bg-[color:var(--color-surface)]/85 backdrop-blur-xl border border-[color:var(--color-line)] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.9)]"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo — typography only */}
        <a href="#top" className="mr-auto group">
          <span className="text-sm font-bold tracking-tight text-[color:var(--color-foreground)] group-hover:opacity-70 transition-opacity">
            Lucas Gabriel
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="px-3 py-1.5 text-[13px] font-medium text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] rounded-full hover:bg-white/[0.05] transition-colors"
            >
              {language === "pt" ? l.pt : l.en}
            </a>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-1.5 ml-1">
          {/* Social icons */}
          <div className="hidden sm:flex items-center gap-1 text-[color:var(--color-muted)]">
            <a
              href="https://github.com/lucasgabdsant0s"
              target="_blank" rel="noreferrer"
              aria-label="GitHub"
              className="grid place-items-center w-8 h-8 rounded-full hover:text-[color:var(--color-foreground)] hover:bg-white/[0.06] transition-colors"
            >
              <GithubIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-dev-gabriel/"
              target="_blank" rel="noreferrer"
              aria-label="LinkedIn"
              className="grid place-items-center w-8 h-8 rounded-full hover:text-[color:var(--color-foreground)] hover:bg-white/[0.06] transition-colors"
            >
              <LinkedinIcon className="w-[18px] h-[18px]" />
            </a>
          </div>

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center rounded-full bg-white/[0.04] border border-[color:var(--color-line)] p-0.5 text-[11px] font-bold"
            aria-label="Toggle language"
          >
            <span
              className={`px-2 py-1 rounded-full transition-colors ${
                language === "pt"
                  ? "bg-[color:var(--color-primary)] text-[color:var(--color-on-primary)]"
                  : "text-[color:var(--color-muted)]"
              }`}
            >
              PT
            </span>
            <span
              className={`px-2 py-1 rounded-full transition-colors ${
                language === "en"
                  ? "bg-[color:var(--color-primary)] text-[color:var(--color-on-primary)]"
                  : "text-[color:var(--color-muted)]"
              }`}
            >
              EN
            </span>
          </button>

          {/* CTA */}
          <a
            href="#contato"
            className="hidden sm:inline-flex items-center h-9 px-4 rounded-full text-[13px] font-semibold text-[color:var(--color-foreground)] bg-black/40 backdrop-blur-sm border border-[color:var(--color-primary)]/45 shadow-[inset_0_1px_0_rgba(255,253,242,0.08),0_0_24px_-6px_var(--color-glow)] hover:border-[color:var(--color-primary)]/70 hover:shadow-[inset_0_1px_0_rgba(255,253,242,0.12),0_0_32px_-4px_var(--color-glow)] hover:bg-black/55 transition-all"
          >
            {language === "pt" ? "Contato" : "Contact"}
          </a>
        </div>
      </nav>
    </header>
  );
}
