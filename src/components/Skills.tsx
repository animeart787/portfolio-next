import * as si from "simple-icons";
import { skillGroups } from "@/data/skills";
import SkillCard from "./SkillCard";
import Reveal from "./Reveal";
const icons = si as unknown as Record<string, { path: string; hex: string } | undefined>;
// Server component: resolves brand SVG paths here so the client bundle doesn't ship the whole icon set.
export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal><p className="label">Skills &amp; technologies</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">My toolkit.</h2>
          <p className="mt-4 max-w-xl text-[var(--mute)]">The tools I build with. Cards marked Primary are my main technologies.</p></Reveal>
        <div className="mt-14 space-y-14">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <Reveal><div className="mb-5 flex items-baseline gap-4"><h3 className="text-xl font-semibold">{g.title}</h3><span className="hidden h-px flex-1 bg-gradient-to-r from-[var(--cyan)]/40 to-transparent sm:block" /><span className="text-sm text-[var(--mute)]">{g.blurb}</span></div></Reveal>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {g.items.map((s, i) => {
                  const b = s.si ? icons[s.si] : undefined;
                  return <SkillCard key={s.name} index={i} name={s.name} desc={s.desc} primary={s.primary} brand={b ? { path: b.path, hex: b.hex } : undefined} lucide={s.lucide} />;
                })}
              </div>
            </div>))}
        </div>
      </div>
    </section>
  );
}
