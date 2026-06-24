"use client";

import { motion } from "framer-motion";
import { Gauge, Network, ServerCog, Container } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [
  <Gauge key="1" className="w-6 h-6" />,
  <Network key="2" className="w-6 h-6" />,
  <ServerCog key="3" className="w-6 h-6" />,
  <Container key="4" className="w-6 h-6" />,
];

const accents = ["text-success", "text-accent", "text-primary", "text-secondary"];

export function Differentials() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden border-y border-[color:var(--color-line)] bg-[color:var(--color-surface)]/40">
      <div className="glow top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="eyebrow mb-5">Diferenciais</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {t.differentials.title}<span className="text-[color:var(--color-primary)]">{t.differentials.title_highlight}</span>
          </h2>
          <p className="mt-4 text-muted text-sm md:text-base max-w-2xl mx-auto">
            {t.differentials.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.differentials.cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card group relative p-6 overflow-hidden"
            >
              <div className="absolute -top-px left-6 right-6 h-px bg-[color:var(--color-primary)] opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="flex items-center justify-between mb-6">
                <span className={`grid place-items-center w-12 h-12 rounded-xl bg-white/[0.04] border border-[color:var(--color-line)] ${accents[index]} group-hover:scale-105 transition-transform`}>
                  {icons[index]}
                </span>
                <span className="text-[44px] leading-none font-black text-white/[0.05] group-hover:text-white/[0.08] transition-colors">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-muted leading-relaxed text-[13px]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
