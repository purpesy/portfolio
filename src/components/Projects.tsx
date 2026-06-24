"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { GithubIcon } from "./icons";
import { useLanguage } from "@/context/LanguageContext";

export function Projects() {
  const { t } = useLanguage();

  const projectKeys = Object.keys(t.projects).filter(key => 
    key !== 'title' && key !== 'description'
  ) as Array<keyof typeof t.projects>;

  return (
    <section id="projetos" className="py-24 md:py-32 px-6 w-full max-w-6xl mx-auto overflow-hidden scroll-mt-24">
      <div className="mb-14 max-w-2xl">
        <span className="eyebrow mb-5">Portfólio</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          {t.projects.title}
        </h2>
        <p className="mt-4 text-muted text-sm md:text-base max-w-2xl leading-relaxed">
          {t.projects.description}
        </p>
      </div>

      <div className="flex flex-col gap-8 md:gap-12">
        {projectKeys.map((key, index) => {
          const project = t.projects[key] as any;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card relative overflow-hidden flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } group !rounded-2xl md:!rounded-3xl`}
            >
              {/* Subtle Glow inside the card */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none transition-opacity opacity-0 group-hover:opacity-100" />
              
              <div className="p-5 sm:p-8 lg:p-12 flex-1 relative z-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-[10px] sm:text-sm font-semibold w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-primary"></span>
                  </span>
                  {project.badge}
                </div>
                
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4 tracking-tight">
                  {project.name}
                </h3>
                <p className="text-sm sm:text-lg text-neutral-300 font-medium mb-6 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-1">
                      {project.challenge_title}
                    </span>
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                      {project.challenge_desc}
                    </p>
                  </div>
                  <div>
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider block mb-1">
                      {project.solution_title}
                    </span>
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                      {project.solution_desc}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techs.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 bg-neutral-800 text-neutral-300 text-[10px] sm:text-xs font-semibold rounded-md border border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <a href={project.github_url} target="_blank" rel="noreferrer">
                    <Button tabIndex={-1} className="h-12 px-6">
                      <GithubIcon className="w-4 h-4 mr-2" /> {project.btn_github}
                    </Button>
                  </a>
                </div>
              </div>

              <div className="lg:w-[45%] bg-neutral-950 border-t lg:border-t-0 lg:border-l border-neutral-800 relative min-h-[250px] sm:min-h-[300px] lg:min-h-full p-6 sm:p-8 flex items-center justify-center">
                 {/* Mockup Placeholder with Dynamic Content based on project type */}
                 <div className="w-full h-full max-h-[350px] rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col">
                    <div className="w-full h-10 border-b border-neutral-800 bg-neutral-950 flex items-center px-4 gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/50" />
                       <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                       <div className="w-3 h-3 rounded-full bg-green-500/50" />
                       <div className="ml-2 w-32 h-4 bg-neutral-800 rounded-full" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col gap-4">
                      {key === 'orbitra' && (
                        <>
                          <div className="w-full h-8 bg-primary/20 rounded-md" />
                          <div className="flex gap-3 h-24">
                            <div className="flex-1 bg-neutral-800/50 rounded-lg flex flex-col p-2 gap-2">
                               <div className="w-full h-2 bg-neutral-700 rounded" />
                               <div className="w-2/3 h-2 bg-neutral-700 rounded" />
                            </div>
                            <div className="flex-1 bg-neutral-800/50 rounded-lg flex flex-col p-2 gap-2">
                               <div className="w-full h-2 bg-neutral-700 rounded" />
                               <div className="w-2/3 h-2 bg-neutral-700 rounded" />
                            </div>
                            <div className="flex-1 bg-primary/10 border border-primary/20 rounded-lg" />
                          </div>
                          <div className="w-full h-12 bg-neutral-800/30 rounded-md mt-auto" />
                        </>
                      )}
                      {key === 'perf' && (
                        <div className="font-mono text-[10px] sm:text-[11px] p-2 overflow-hidden flex flex-col gap-1.5">
                           <div className="text-neutral-500">$ perf scan ./api</div>
                           <div className="flex items-center justify-between">
                              <span className="text-neutral-400">GET /users</span>
                              <span className="text-red-400">904ms</span>
                           </div>
                           <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                              <div className="h-full w-[90%] bg-red-500/60 rounded-full" />
                           </div>
                           <div className="flex items-center justify-between mt-2">
                              <span className="text-neutral-400">GET /users <span className="text-neutral-600">(otimizado)</span></span>
                              <span className="text-green-400">94ms</span>
                           </div>
                           <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                              <div className="h-full w-[10%] bg-green-500/70 rounded-full" />
                           </div>
                           <div className="mt-2 text-blue-400/80">▲ -90% response time</div>
                        </div>
                      )}
                      {key === 'scratch' && (
                        <div className="flex flex-col gap-2.5 h-full justify-center">
                           <div className="h-7 rounded-md bg-accent/20 border border-accent/30 flex items-center px-3">
                              <div className="w-16 h-2 bg-accent/40 rounded-full" />
                           </div>
                           <div className="h-7 rounded-md bg-primary/15 border border-primary/25 ml-4 flex items-center px-3">
                              <div className="w-20 h-2 bg-primary/40 rounded-full" />
                           </div>
                           <div className="h-7 rounded-md bg-green-500/15 border border-green-500/25 ml-8 flex items-center px-3">
                              <div className="w-12 h-2 bg-green-500/40 rounded-full" />
                           </div>
                           <div className="h-7 rounded-md bg-neutral-800/60 border border-neutral-700 ml-4 flex items-center px-3">
                              <div className="w-24 h-2 bg-neutral-600 rounded-full" />
                           </div>
                        </div>
                      )}
                    </div>
                 </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

