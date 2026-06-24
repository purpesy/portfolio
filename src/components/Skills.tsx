"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Server, Database, Container } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [
  <MonitorSmartphone key="1" className="w-5 h-5 text-primary" />,
  <Server key="2" className="w-5 h-5 text-accent" />,
  <Database key="3" className="w-5 h-5 text-secondary" />,
  <Container key="4" className="w-5 h-5 text-success" />,
];

const techsList = [
  ["React", "Next.js", "React Native", "Expo", "TypeScript", "Tailwind CSS", "Framer Motion"],
  ["Node.js", "NestJS", "Express", "C# / .NET", "PHP / Laravel", "REST", "JWT", "Clean Arch / DDD"],
  ["PostgreSQL", "MySQL", "SQL Server", "TypeORM", "Prisma", "Migrations"],
  ["Docker", "Nginx", "Linux / VPS", "SSH", "Git", "ESLint", "Cache / Revalidation"],
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 md:py-32 px-6 w-full max-w-6xl mx-auto scroll-mt-24">
      <div className="mb-14 max-w-2xl">
        <span className="eyebrow mb-5">Stack</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">{t.skills.title}</h2>
        <p className="mt-4 text-muted text-sm md:text-base leading-relaxed">{t.skills.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {t.skills.areas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="card group p-6 md:p-8"
          >
            <div className="flex items-center gap-3.5 mb-4">
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-white/[0.04] border border-[color:var(--color-line)] group-hover:scale-105 transition-transform shrink-0">
                {icons[index]}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{area.title}</h3>
            </div>
            <p className="text-muted mb-5 text-[13px] leading-relaxed">{area.description}</p>
            <div className="flex flex-wrap gap-2">
              {techsList[index].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-white/[0.03] text-neutral-300 text-[11px] font-semibold rounded-lg border border-[color:var(--color-line)] hover:border-primary/30 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
