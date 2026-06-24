"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight, Zap, Server, Layers } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { useLanguage } from "@/context/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLanguage();

  const metrics = [
    { icon: <Zap className="w-4 h-4 text-success" />, text: t.hero.metric_1 },
    { icon: <Server className="w-4 h-4 text-primary" />, text: t.hero.metric_2 },
    { icon: <Layers className="w-4 h-4 text-accent" />, text: t.hero.metric_3 },
  ];

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-center items-center text-center px-4 pt-28 pb-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="glow top-[-10%] left-[20%] w-[520px] h-[520px] bg-primary/20" />
      <div className="glow bottom-[-15%] right-[10%] w-[460px] h-[460px] bg-accent/15" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-4xl">
        {/* Availability badge */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="eyebrow mb-7"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success/70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
          </span>
          {t.hero.badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
          className="text-[2.1rem] sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-balance text-white"
        >
          {t.hero.headline_1}
          <span className="text-[color:var(--color-primary)]">{t.hero.headline_highlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.12 }}
          className="mt-6 text-sm sm:text-lg text-[color:var(--color-muted)] max-w-2xl leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        {/* Metric chips */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mt-9 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2.5 w-full max-w-xl sm:max-w-none"
        >
          {metrics.map((m, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 text-[12px] sm:text-[13px] text-neutral-200 bg-white/[0.03] border border-[color:var(--color-line)] px-3.5 py-2.5 rounded-xl backdrop-blur-sm"
            >
              <span className="grid place-items-center w-6 h-6 rounded-md bg-white/[0.04] shrink-0">{m.icon}</span>
              <span className="font-medium text-left">{m.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.28 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-4 sm:px-0"
        >
          <a href="#projetos" className="w-full sm:w-auto">
            <Button className="group h-12 px-8 text-base w-full sm:w-auto py-3.5">
              {t.hero.btn_portfolio}
              <ArrowRight className="ml-2.5 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </a>
          <div className="flex gap-2.5 w-full sm:w-auto">
            <a href="https://wa.me/5511977134857?text=Olá%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!" target="_blank" rel="noreferrer" className="flex-1 sm:flex-initial">
              <Button variant="outline" className="h-12 px-5 py-3.5 w-full">
                <ArrowRight className="w-4 h-4 rotate-[-45deg] mr-2" />
                {t.hero.btn_whatsapp}
              </Button>
            </a>
            <a href="https://github.com/lucasgabdsant0s" target="_blank" rel="noreferrer">
              <Button variant="outline" className="h-12 w-12 px-0 py-3.5" aria-label="GitHub"><GithubIcon className="w-5 h-5" /></Button>
            </a>
            <a href="https://www.linkedin.com/in/lucas-dev-gabriel/" target="_blank" rel="noreferrer">
              <Button variant="outline" className="h-12 w-12 px-0 py-3.5" aria-label="LinkedIn"><LinkedinIcon className="w-5 h-5" /></Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="w-5 h-8 rounded-full border border-[color:var(--color-line-strong)] flex justify-center pt-1.5">
          <span className="w-1 h-1.5 rounded-full bg-primary animate-bounce" />
        </span>
      </motion.div>
    </section>
  );
}
