import { Code2, MapPin, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/config/site";
const cards = [
  { icon: MapPin, t: "Location", d: site.location },
  { icon: Code2, t: "Focus", d: "Frontend development & UI/UX design" },
  { icon: Sparkles, t: "Exploring", d: "AI-powered applications" },
];
export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal><p className="label">About</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">A little about me.</h2>
          <div className="mt-6 space-y-4 text-lg text-[var(--mute)]">
            <p>I&apos;m Arnav Kumar Gupta, a developer from Khagaria, Bihar, India. I&apos;m passionate about technology, web development, and creating digital experiences.</p>
            <p>I enjoy experimenting with modern technologies, learning new tools, and turning ideas into functional applications.</p>
            <p>My focus is on frontend development, UI/UX design, and exploring AI-powered applications.</p>
          </div></Reveal>
        <div className="grid content-start gap-4">
          {cards.map((c, i) => (<Reveal key={c.t} delay={i * 0.12}><div className="glass glow flex items-center gap-4 p-5 hover:-translate-y-1">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--cyan-l)] text-[var(--cyan-d)]"><c.icon size={22} /></span>
            <div><p className="label">{c.t}</p><p className="font-medium">{c.d}</p></div></div></Reveal>))}
        </div>
      </div>
    </section>
  );
}
