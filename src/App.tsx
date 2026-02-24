import { useEffect } from "react";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Terminal,
  Server,
  Download,
  Loader2,
} from "lucide-react";

import type { Experience } from "./types";
import { useGithubData } from "./hooks/useGithubData";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { Reveal } from "./components/Reveal";
import { Preloader } from "./components/Preloader";
import { SectionHeading } from "./components/SectionHeading";
import { ProjectItem } from "./components/ProjectItem";
import { ExperienceItem } from "./components/ExperienceItem";

const EXPERIENCES: Experience[] = [
  {
    year: "2024 — 2025",
    role: "Vice President",
    company: "Japanese Language Club",
    desc: "Assisted the president in coordinating club activities, developed basic Japanese language learning materials, and organized events focused on Japanese pop culture and traditional arts.",
  },
];

const TECH_STACK: string[] = [
  "Golang",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "C++",
  "PostgreSQL",
  "Docker",
  "Linux",
  "Git",
  "Neovim",
];

export default function App() {
  const activeSection = useScrollSpy();
  const { githubProjects, githubStats, loading, error } = useGithubData();

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = "https://github.com/0x440hz.png";
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-zinc-400 font-sans selection:bg-yellow-500/20 selection:text-yellow-200">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');
        .font-mono { font-family: 'JetBrains Mono', monospace !important; }
        html { scroll-behavior: smooth; }
        .gh-chart-dark {
          filter: invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.2);
          opacity: 0.85;
        }
      `,
        }}
      />

      <Preloader />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <Reveal delay={100}>
                <img
                  src="https://github.com/0x440hz.png"
                  alt="0x440hz profile"
                  className="w-20 h-20 rounded-full border border-zinc-800 transition-all duration-500 mb-6 object-cover bg-zinc-900"
                />
                <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl font-mono">
                  0x440hz<span className="animate-pulse text-blue-500">_</span>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-200 sm:text-xl flex items-center gap-2">
                  <Server className="w-5 h-5 text-yellow-500" />
                  Backend Developer
                </h2>
                <p className="mt-4 max-w-xs leading-normal font-mono text-sm text-zinc-500">
                  &gt; System stability, clean logic, and data flow over pixels.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <nav className="nav hidden lg:block mt-16">
                  <ul className="mt-8 w-max">
                    {["about", "skills", "projects", "experience"].map(
                      (item) => (
                        <li key={item}>
                          <a
                            href={`#${item}`}
                            className={`group flex items-center py-3 transition-all ${activeSection === item ? "active" : ""}`}
                          >
                            <span
                              className={`mr-4 h-px transition-all bg-zinc-800 group-hover:w-16 group-hover:bg-zinc-300 ${activeSection === item ? "w-16 bg-zinc-300" : "w-8"}`}
                            ></span>
                            <span
                              className={`text-xs font-bold uppercase tracking-widest group-hover:text-zinc-200 transition-colors font-mono ${activeSection === item ? "text-zinc-200" : "text-zinc-600"}`}
                            >
                              {item}
                            </span>
                          </a>
                        </li>
                      ),
                    )}
                  </ul>
                </nav>
              </Reveal>
            </div>

            <Reveal delay={500}>
              <div className="mt-8 flex flex-col gap-6">
                <ul className="ml-1 flex items-center gap-5">
                  <li>
                    <a
                      href="https://github.com/0x440hz"
                      target="_blank"
                      rel="noreferrer"
                      className="block text-zinc-500 lg:hover:text-zinc-100 active:text-zinc-100 transition-colors"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/agasptama"
                      target="_blank"
                      rel="noreferrer"
                      className="block text-zinc-500 lg:hover:text-blue-400 active:text-blue-400 transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/0x440hz"
                      target="_blank"
                      rel="noreferrer"
                      className="block text-zinc-500 lg:hover:text-pink-400 active:text-pink-400 transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                  </li>
                </ul>

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <a
                    href="/cv-ats-agas.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 border border-zinc-800 rounded bg-zinc-900/50 text-zinc-400 lg:hover:text-zinc-100 lg:hover:border-zinc-600 active:bg-zinc-800 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    CV_ATS.pdf
                  </a>
                  <a
                    href="/cv-creative-agas.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 border border-zinc-800 rounded bg-zinc-900/50 text-zinc-400 lg:hover:text-zinc-100 lg:hover:border-zinc-600 active:bg-zinc-800 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    CV_Creative.pdf
                  </a>
                </div>
              </div>
            </Reveal>
          </header>

          <main className="pt-24 lg:w-1/2 lg:py-24 flex flex-col gap-24">
            <section id="about" className="scroll-mt-24 lg:scroll-mt-24">
              <SectionHeading title="About" />
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <Reveal delay={100}>
                  <p>
                    I'm Agas, a{" "}
                    <span className="text-zinc-200 font-medium">
                      Backend Developer
                    </span>{" "}
                    who loves living in the terminal. I care more about system
                    stability, clean logic, and data flow than how a button
                    looks.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <p>
                    Currently diving deep into{" "}
                    <span className="text-blue-400 font-medium hover:text-blue-300 transition-colors cursor-default">
                      Golang
                    </span>{" "}
                    and{" "}
                    <span className="text-yellow-400 font-medium hover:text-yellow-300 transition-colors cursor-default">
                      JavaScript
                    </span>
                    , while exploring the depths of{" "}
                    <span className="text-zinc-200 font-medium">Linux</span> and{" "}
                    <span className="text-zinc-200 font-medium">C++</span> to
                    understand how computers really work under the hood.
                  </p>
                </Reveal>
                <Reveal delay={300}>
                  <p>
                    Off the keyboard, I dive deep into Japanese pop
                    culture—devouring Light Novels and blasting J-Rock/J-Pop. I
                    also have a thing for audio gear (just a casual IEM
                    enjoyer), so you'll rarely see me without my IEMs plugged in
                    while writing code.
                  </p>
                </Reveal>
              </div>
            </section>

            <section id="skills" className="scroll-mt-24 lg:scroll-mt-24">
              <SectionHeading title="Tech Stack" />
              <Reveal>
                <div className="font-mono text-sm text-zinc-400 bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-3 mb-6 text-zinc-500 border-b border-zinc-800/50 pb-4">
                    <Terminal className="w-4 h-4" />
                    <span>$ cat ~/.skills</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-3">
                    {TECH_STACK.map((tech, i) => (
                      <span
                        key={i}
                        className="text-zinc-300 flex items-center gap-1.5"
                      >
                        <span className="text-blue-500">❯</span> {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            <section id="projects" className="scroll-mt-24 lg:scroll-mt-24">
              <SectionHeading title="Projects & Contributions" />

              <Reveal>
                <div className="grid md:grid-cols-2 gap-4 mb-8 font-mono text-sm text-zinc-400">
                  <div className="bg-zinc-900/30 border border-zinc-800 p-5 rounded-xl hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-2 text-zinc-500 mb-4 border-b border-zinc-800/50 pb-3">
                      <Terminal className="w-4 h-4" />
                      <span>$ gh api user --stats</span>
                    </div>
                    {loading ? (
                      <div className="flex justify-center py-4">
                        <Loader2 className="w-4 h-4 animate-spin text-zinc-500" />
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-500">Public Repos</span>
                          <span className="text-zinc-200">
                            {githubStats.repos}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-500">Followers</span>
                          <span className="text-zinc-200">
                            {githubStats.followers}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-zinc-500">Profile Status</span>
                          <span className="text-green-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>{" "}
                            Active
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="bg-zinc-900/30 border border-zinc-800 p-5 rounded-xl hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-2 text-zinc-500 mb-4 border-b border-zinc-800/50 pb-3">
                      <Terminal className="w-4 h-4" />
                      <span>$ gh api user --top-langs</span>
                    </div>
                    {loading ? (
                      <div className="flex justify-center py-4">
                        <Loader2 className="w-4 h-4 animate-spin text-zinc-500" />
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3">
                        {githubStats.topLangs.map((lang, i) => {
                          const colors: Record<string, string> = {
                            Go: "bg-cyan-400",
                            TypeScript: "bg-blue-400",
                            JavaScript: "bg-yellow-400",
                            "C++": "bg-pink-400",
                            Python: "bg-green-400",
                            Rust: "bg-orange-400",
                            Java: "bg-red-400",
                          };
                          const barColor = colors[lang.name] || "bg-zinc-400";

                          return (
                            <div key={i} className="flex items-center gap-3">
                              <span
                                className="text-zinc-200 w-16 truncate"
                                title={lang.name}
                              >
                                {lang.name}
                              </span>
                              <div className="h-1.5 bg-zinc-800 rounded-full flex-grow overflow-hidden">
                                <div
                                  className={`h-full ${barColor}`}
                                  style={{ width: `${lang.percentage}%` }}
                                ></div>
                              </div>
                              <span className="text-zinc-500 text-xs w-8 text-right">
                                {lang.percentage}%
                              </span>
                            </div>
                          );
                        })}
                        {githubStats.topLangs.length === 0 && (
                          <span className="text-zinc-600 italic">
                            No data available
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="mb-10 font-mono text-sm text-zinc-400 bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors overflow-hidden group">
                  <div className="flex items-center gap-3 mb-6 text-zinc-500 border-b border-zinc-800/50 pb-4">
                    <Terminal className="w-4 h-4" />
                    <span>$ ./fetch_contributions.sh --user=0x440hz</span>
                  </div>

                  <div className="w-full overflow-hidden flex justify-end">
                    <img
                      src="https://ghchart.rshah.org/0x440hz"
                      alt="GitHub Contributions Graph"
                      className="w-[750px] max-w-none md:w-full md:max-w-full transition-opacity gh-chart-dark group-hover:opacity-100"
                    />
                  </div>

                  <div className="mt-5 flex justify-between items-center text-xs text-zinc-600">
                    <span>* Showing recent activity</span>
                    <a
                      href="https://github.com/0x440hz"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-400 transition-colors flex items-center gap-1"
                    >
                      View on GitHub <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </Reveal>

              <div className="group/list flex flex-col gap-8">
                {loading ? (
                  <div className="flex items-center gap-3 text-zinc-500 font-mono py-8">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Fetching repositories from GitHub...</span>
                  </div>
                ) : error ? (
                  <div className="text-red-400 font-mono text-sm py-4">
                    {error}
                  </div>
                ) : (
                  githubProjects.map((project, i) => (
                    <Reveal key={i} delay={i * 100}>
                      <ProjectItem project={project} />
                    </Reveal>
                  ))
                )}
              </div>
            </section>

            <section id="experience" className="scroll-mt-24 lg:scroll-mt-24">
              <SectionHeading title="Experience" />
              <div className="group/list flex flex-col gap-10 lg:gap-12">
                {EXPERIENCES.map((exp, i) => (
                  <Reveal key={i} delay={i * 150}>
                    <ExperienceItem exp={exp} />
                  </Reveal>
                ))}
              </div>
            </section>

            <Reveal>
              <footer className="mt-20 pb-8 flex flex-col items-center justify-center font-mono text-zinc-600 text-xs gap-2">
                <span>0x440hz@server:~$ logout</span>
                <span>[ Connection closed by foreign host ]</span>
              </footer>
            </Reveal>
          </main>
        </div>
      </div>
    </div>
  );
}
