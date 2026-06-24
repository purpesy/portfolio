"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function monogram(company: string) {
  const clean = company.split("·")[0].trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase() || "•";
}

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="py-24 md:py-32 px-4 w-full max-w-5xl mx-auto scroll-mt-24">
      <div className="mb-14 max-w-2xl">
        <span className="eyebrow mb-5">Trajetória</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">{t.experience.title}</h2>
        <p className="mt-4 text-muted text-sm md:text-base leading-relaxed">{t.experience.description}</p>
      </div>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-[18px] sm:left-6 top-2 bottom-2 w-px bg-[color:var(--color-line-strong)]" />

        <div className="flex flex-col gap-6">
          {t.experience.items.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="relative pl-12 sm:pl-16"
            >
              {/* node monogram */}
              <div className="absolute left-0 top-1 grid place-items-center w-9 h-9 sm:w-[52px] sm:h-[52px] rounded-xl bg-[color:var(--color-surface-2)] border border-[color:var(--color-line-strong)] text-[11px] sm:text-sm font-black text-primary z-10 ring-4 ring-background">
                {monogram(exp.company)}
              </div>

              <div className="card p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                  <span className="shrink-0 w-fit text-[11px] sm:text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <div className="text-muted font-semibold text-sm mb-4">{exp.company}</div>
                <p className="text-[color:var(--color-muted)] text-sm leading-relaxed mb-5">{exp.description}</p>

                <div className="relative rounded-xl bg-white/[0.02] border border-[color:var(--color-line)] p-4 overflow-hidden">
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-[color:var(--color-primary)]" />
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-success" />
                    <span className="text-[10px] font-bold text-success uppercase tracking-[0.12em]">{t.experience.impact_label}</span>
                  </div>
                  <p className="text-neutral-200 text-[13px] leading-relaxed font-medium">{exp.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
