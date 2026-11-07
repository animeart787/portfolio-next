import Reveal from "./Reveal";
const steps = [
  ["01", "Understand", "Understand the client's requirements and goals."],
  ["02", "Design", "Plan the layout, visual direction, and user experience."],
  ["03", "Develop", "Build the website using modern technologies."],
  ["04", "Deliver", "Test responsiveness, fix issues, and deliver the agreed work."],
];
export default function Process() {
  return (
    <section id="process" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal><p className="label">Process</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">How I work.</h2></Reveal>
        <ol className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-5">
          <span aria-hidden className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-[var(--cyan)] to-transparent md:bottom-auto md:left-0 md:right-0 md:top-6 md:h-px md:w-auto md:bg-gradient-to-r" />
          {steps.map(([n, t, d], i) => (
            <li key={n} className="relative pl-16 md:pl-0 md:pt-16">
              <Reveal delay={i * 0.12}>
                <span className="font-head glass absolute left-0 top-0 flex h-12 w-12 items-center justify-center text-sm font-bold text-[var(--cyan-d)]" style={{ borderRadius: 999 }}>{n}</span>
                <div className="glass glow p-5 hover:-translate-y-1"><h3 className="text-lg font-semibold">{t}</h3><p className="mt-1 text-sm text-[var(--mute)]">{d}</p></div>
              </Reveal>
            </li>))}
        </ol>
      </div>
    </section>
  );
}
