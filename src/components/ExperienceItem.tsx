import type { Experience } from "../types";

export const ExperienceItem = ({ exp }: { exp: Experience }) => (
  <div className="group relative flex flex-col lg:flex-row gap-4 lg:gap-6 transition-all p-4 -mx-4 rounded-xl lg:p-0 lg:mx-0 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-900/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] lg:group-hover:drop-shadow-lg"></div>

    <header className="z-10 lg:w-1/4 text-xs font-mono tracking-wide text-zinc-500 mt-1">
      {exp.year}
    </header>

    <div className="z-10 lg:w-3/4">
      <h3 className="font-medium text-zinc-200 leading-tight">
        {exp.role} <span className="text-zinc-500">·</span>{" "}
        <span className="text-zinc-300">{exp.company}</span>
      </h3>
      <p className="mt-2 text-sm leading-normal text-zinc-400">{exp.desc}</p>
    </div>
  </div>
);
