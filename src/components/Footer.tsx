import { site } from "@/config/site";
export default function Footer() {
  const a = "hover:text-[var(--cyan-d)]";
  return (
    <footer className="px-6 pb-10 pt-6 text-center text-sm text-[var(--mute)]">
      <div aria-hidden className="mx-auto mb-6 h-0.5 w-40 rounded bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent" style={{ animation: "bar 4s ease-in-out infinite" }} />
      <p className="font-medium text-[var(--ink)]">Designed &amp; Built by Arnav Kumar Gupta</p>
      <p className="mt-1">{site.location}</p>
     <p className="mt-3 flex justify-center gap-5">
  {site.github ? <a className={a} href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a> : <span>GitHub</span>}
  {site.fiverr ? <a className={a} href={site.fiverr} target="_blank" rel="noopener noreferrer">Fiverr</a> : <span>Fiverr</span>}
  {site.social.map((s) => (
    <a key={s.label} className={a} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
  ))}
</p>
    </footer>
  );
}
