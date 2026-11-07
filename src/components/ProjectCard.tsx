import Image from "next/image";
import Reveal from "./Reveal";
import LinkButton from "./LinkButton";
export type Project = { title: string; description: string; tags: string[]; image?: string; live?: string; source?: string };
// Reusable: add entries to `projects` in config/site.ts. Odd indexes mirror the layout.
export default function ProjectCard({ p, index }: { p: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Reveal>
      <article className="grid items-center gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className={`glass glow relative aspect-video overflow-hidden p-2 ${flip ? "lg:order-2" : ""}`}>
          {p.image ? <Image src={p.image} alt={`${p.title} screenshot`} fill sizes="(min-width:1024px) 60vw, 100vw" className="rounded-[1.1rem] object-cover" />
            : <div className="flex h-full items-center justify-center rounded-[1.1rem] bg-gradient-to-br from-[var(--cyan-l)] to-white text-center text-sm text-[var(--mute)]"><p className="px-6">Add a screenshot in <code>/public/projects</code><br />and set <code>image</code> in config/site.ts</p></div>}
        </div>
        <div className={`glass p-7 lg:-ml-16 lg:translate-y-6 ${flip ? "lg:order-1 lg:-mr-16 lg:ml-0" : ""}`}>
          <p className="label">Project {String(index + 1).padStart(2, "0")}</p>
          <h3 className="mt-2 text-3xl font-bold">{p.title}</h3>
          <p className="mt-3 text-[var(--mute)]">{p.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-full bg-[var(--cyan-l)] px-3 py-1 text-xs font-medium text-[var(--cyan-d)]">{t}</li>)}</ul>
          <div className="mt-6 flex flex-wrap gap-3"><LinkButton href={p.live}>View Project</LinkButton><LinkButton href={p.source} variant="g">Source Code</LinkButton></div>
        </div>
      </article>
    </Reveal>
  );
}
