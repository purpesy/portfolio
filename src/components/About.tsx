"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Quote } from "lucide-react";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="relative py-24 md:py-32 px-4 w-full max-w-6xl mx-auto scroll-mt-24">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow mb-6">{t.about.badge}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
            {t.about.title_1}<br className="hidden sm:block" /> <span className="text-[color:var(--color-primary)]">{t.about.title_2}</span>
          </h2>

          <p className="mt-7 text-[color:var(--color-muted)] text-sm md:text-[15px] leading-relaxed">
            {t.about.desc_1}
          </p>
          <p className="mt-4 text-[color:var(--color-muted)] text-sm md:text-[15px] leading-relaxed">
            {t.about.desc_2}
            <span className="text-neutral-100 font-semibold">{t.about.desc_highlight}</span>
            {t.about.desc_3}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {[
              { v: t.about.stat_1_val, l: t.about.stat_1_text },
              { v: t.about.stat_2_val, l: t.about.stat_2_text },
            ].map((s, i) => (
              <div key={i} className="card p-5">
                <div className="text-3xl sm:text-4xl font-black text-[color:var(--color-primary)] tabular-nums">{s.v}</div>
                <div className="mt-1.5 text-[11px] sm:text-xs text-muted font-medium leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/15" />
          <div className="relative card p-8 md:p-10 overflow-hidden">
            <div className="absolute -top-6 -left-2 text-primary/10">
              <Quote className="w-28 h-28" />
            </div>
            <div className="relative flex items-center gap-4 mb-7">
              <div className="ring-spin relative grid place-items-center w-14 h-14 rounded-2xl bg-[color:var(--color-surface-2)] text-xl font-black text-[color:var(--color-primary)]">
                LG
              </div>
              <div>
                <div className="text-sm font-bold text-white">Lucas Gabriel</div>
                <div className="text-xs text-muted">Full Stack Developer · Pleno</div>
              </div>
            </div>
            <blockquote className="relative text-lg md:text-xl font-medium text-neutral-100 leading-relaxed">
              {t.about.quote}
            </blockquote>
            <div className="relative mt-7 flex flex-wrap gap-2">
              {["Produção", "Performance", "Escala", "Clean Code"].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-semibold text-muted bg-white/[0.04] border border-[color:var(--color-line)]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
