import { ArrowUpRight, Terminal } from "lucide-react";
import type { Project } from "../types";

export const ProjectItem = ({ project }: { project: Project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noreferrer"
    className="group relative flex flex-col lg:flex-row gap-4 lg:gap-6 transition-all p-4 -mx-4 rounded-xl active:bg-zinc-900/40 lg:p-0 lg:mx-0 lg:active:bg-transparent lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
  >
    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-900/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] lg:group-hover:drop-shadow-lg"></div>

    <div className="z-10 mt-1 lg:w-1/4">
      <div className="flex items-center gap-2 text-xs font-mono tracking-wide text-zinc-600 mt-1 lg:group-hover:text-zinc-400 transition-colors">
        <Terminal className="w-3 h-3" />
        <span>~/repos</span>
      </div>
    </div>

    <div className="z-10 lg:w-3/4">
      <h3 className="font-medium text-zinc-200 leading-tight flex items-baseline gap-2 lg:group-hover:text-blue-400 transition-colors">
        {project.name}
        <ArrowUpRight className="h-4 w-4 shrink-0 translate-y-1 transition-transform lg:group-hover:-translate-y-0 lg:group-hover:translate-x-1" />
      </h3>
      <p className="mt-2 text-sm leading-normal text-zinc-400">
        {project.desc}
      </p>
      <ul className="mt-4 flex flex-wrap text-xs gap-2 font-mono">
        {project.tags.map((tag, tIndex) => (
          <li
            key={tIndex}
            className="flex items-center rounded bg-zinc-900 px-2 py-1 text-zinc-300 border border-zinc-800"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  </a>
);
