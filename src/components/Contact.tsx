import { Mail, Store } from "lucide-react";
import { siGithub } from "simple-icons";
import { site } from "@/config/site";
import Reveal from "./Reveal";
import LinkButton from "./LinkButton";
export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <Reveal className="mx-auto max-w-4xl">
        <div className="glass relative overflow-hidden p-10 text-center sm:p-16">
          <div aria-hidden className="absolute -top-32 left-1/2 h-72 w-[32rem] -translate-x-1/2 rounded-full" style={{ background: "radial-gradient(closest-side,rgba(6,182,212,.28),transparent)" }} />
          <div className="relative">
            <p className="label">Contact</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Have an idea? Let&apos;s build it.</h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--mute)]">Have a project in mind or looking for someone to bring your website idea to life? Let&apos;s connect.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LinkButton href={site.fiverr}><Store size={18} />Fiverr</LinkButton>
           <LinkButton href={site.github} variant="g">
  <svg
    role="img"
    aria-label="GitHub"
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px] fill-current"
  >
    <path d={siGithub.path} />
  </svg>
  GitHub
</LinkButton>
              <LinkButton href={site.email ? `mailto:${site.email}` : ""} variant="g"><Mail size={18} />Email</LinkButton>
              {site.social.map((s) => <LinkButton key={s.label} href={s.href} variant="g">{s.label}</LinkButton>)}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
