import { Rocket, Building2, Triangle, Atom, LayoutDashboard, Paintbrush, Smartphone, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import Reveal from "./Reveal";
const services = [
  { i: Rocket, t: "Landing Page Development", d: "Focused pages that turn visitors into customers." },
  { i: Building2, t: "Business Website Development", d: "Professional multi-page sites for your brand." },
  { i: Triangle, t: "Next.js Website Development", d: "Fast, SEO-friendly sites built on Next.js." },
  { i: Atom, t: "React Frontend Development", d: "Reusable, well-structured React interfaces." },
  { i: LayoutDashboard, t: "SaaS Dashboard Design", d: "Clear dashboards for data-heavy products." },
  { i: Paintbrush, t: "Website UI Redesign", d: "Fresh, modern looks for existing sites." },
  { i: Smartphone, t: "Responsive Website Development", d: "Flawless on phones, tablets and desktops." },
];
export default function Services() {
  const link = site.fiverr ? { href: site.fiverr, target: "_blank", rel: "noopener noreferrer" } : { "aria-disabled": true as const };
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal><p className="label">Services</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">What I can build for you.</h2></Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => (
            <li key={s.t} className={i < 3 ? "lg:col-span-3" : "lg:col-span-2"}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <a {...link} className="glass glow group flex h-full items-start gap-4 p-6 hover:-translate-y-1.5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--cyan-l)] text-[var(--cyan-d)] transition-transform group-hover:rotate-6"><s.i size={22} /></span>
                  <span className="flex-1"><span className="block font-semibold">{s.t}</span><span className="mt-1 block text-sm text-[var(--mute)]">{s.d}</span></span>
                  <ArrowUpRight size={18} className="text-[var(--cyan)] opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </Reveal>
            </li>))}
        </ul>
      </div>
    </section>
  );
}
