"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { MessageSquare, Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="relative py-24 md:py-32 px-6 w-full max-w-6xl mx-auto scroll-mt-24">
      <div className="glow top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-primary/10" />

      <div className="relative text-center mb-12">
        <span className="eyebrow mb-5">Contato</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Vamos <span className="text-[color:var(--color-primary)]">construir</span> algo juntos
        </h2>
      </div>

      <div className="relative grid lg:grid-cols-2 gap-4">
        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="card relative p-7 sm:p-9 overflow-hidden"
        >
          <div className="glow top-0 right-0 w-40 h-40 bg-primary/20" />
          <h3 className="relative text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">{t.contact.client_title}</h3>
          <p className="relative text-sm text-muted mb-7 max-w-md leading-relaxed">{t.contact.client_desc}</p>
          <a href="https://wa.me/5511977134857" target="_blank" rel="noreferrer" className="relative inline-block">
            <Button tabIndex={-1} className="h-12 px-7">
              <MessageSquare className="w-5 h-5 mr-2.5" /> {t.contact.btn_whatsapp}
            </Button>
          </a>
        </motion.div>

        {/* Recruiters */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card relative p-7 sm:p-9 overflow-hidden"
        >
          <div className="glow top-0 right-0 w-40 h-40 bg-accent/15" />
          <h3 className="relative text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">{t.contact.recruiter_title}</h3>
          <p className="relative text-sm text-muted mb-7 max-w-md leading-relaxed">{t.contact.recruiter_desc}</p>
          <div className="relative flex flex-col sm:flex-row gap-3">
            <a href="https://www.linkedin.com/in/lucas-dev-gabriel/" target="_blank" rel="noreferrer" className="flex-1">
              <Button variant="secondary" className="w-full h-12">
                <LinkedinIcon className="w-5 h-5 mr-2.5" /> LinkedIn
                <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-60" />
              </Button>
            </a>
            <a href="mailto:lucasgabdsantos@gmail.com" className="flex-1">
              <Button variant="outline" className="w-full h-12">
                <Mail className="w-5 h-5 mr-2.5" /> E-mail
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative mt-20 pt-8 border-t border-[color:var(--color-line)] flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <span className="grid place-items-center w-7 h-7 rounded-lg border border-[color:var(--color-line-strong)] text-[color:var(--color-primary)] text-xs font-black">L</span>
          <p className="text-muted text-sm">© {new Date().getFullYear()} {t.contact.footer_rights}</p>
        </div>
        <div className="flex gap-2 text-muted">
          <a href="https://github.com/lucasgabdsant0s" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid place-items-center w-9 h-9 rounded-full hover:text-white hover:bg-white/[0.06] transition-colors">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/lucas-dev-gabriel/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid place-items-center w-9 h-9 rounded-full hover:text-white hover:bg-white/[0.06] transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
