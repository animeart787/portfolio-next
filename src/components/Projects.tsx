import { projects } from "@/config/site";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal><p className="label">Featured projects</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">Things I&apos;m building.</h2></Reveal>
        <div className="mt-14 space-y-24">{projects.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}</div>
      </div>
    </section>
  );
}
