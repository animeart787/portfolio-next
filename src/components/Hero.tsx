"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, MapPin } from "lucide-react";
import { site } from "@/config/site";
export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);
  const fy = useTransform(scrollY, [0, 500], [0, -60]);
  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pb-24 pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
        <motion.div style={{ y }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }} className="glass p-8 sm:p-12">
          <p className="label">Hello, I&apos;m Arnav</p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-6xl">Building digital experiences that <span className="text-[var(--cyan-d)]">make an impact.</span></h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--mute)]">I&apos;m Arnav Kumar Gupta, a web developer passionate about creating modern websites, interactive interfaces, and intelligent digital products.</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-[var(--mute)]"><MapPin size={16} className="text-[var(--cyan)]" />Based in Bihar, India.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-p">Explore My Work</a>
            <a href="#contact" className="btn btn-g">Let&apos;s Talk</a>
          </div>
          {site.availability.show && <p className="mt-6 inline-flex items-center gap-2 text-sm"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />{site.availability.text}</p>}
        </motion.div>
        <motion.aside style={{ y: fy }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="hidden lg:block">
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} whileHover={{ rotate: -2, scale: 1.03 }} className="glass glow p-6">
            <p className="label">Developer card</p>
            <p className="font-head mt-3 text-xl font-semibold">{site.name}</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div><dt className="text-[var(--mute)]">Focus</dt><dd>Frontend · UI/UX · AI apps</dd></div>
              <div><dt className="text-[var(--mute)]">Stack</dt><dd>Next.js · React · TypeScript</dd></div>
              <div><dt className="text-[var(--mute)]">Location</dt><dd>{site.location}</dd></div>
            </dl>
          </motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="glass ml-16 mt-6 h-20 w-40" />
        </motion.aside>
      </div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--cyan-d)]">
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="glass flex h-11 w-11 items-center justify-center" style={{ borderRadius: 999 }}><ArrowDown size={18} /></motion.span>
      </a>
    </section>
  );
}
