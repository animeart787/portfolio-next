"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
const links = ["home", "about", "skills", "projects", "services", "contact"];
export default function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <motion.header initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}
      className="fixed inset-x-0 top-4 z-50 mx-auto w-[min(94%,60rem)]">
      <nav aria-label="Primary" className="glass flex items-center justify-between px-5 py-3" style={{ borderRadius: 999 }}>
        <a href="#home" className="font-head text-sm font-bold tracking-widest">{site.handle}</a>
        <ul className="hidden gap-1 md:flex">
          {links.map((l) => (
            <li key={l}><a href={`#${l}`} className="relative block rounded-full px-4 py-1.5 text-sm capitalize text-[var(--mute)] hover:text-[var(--ink)]">
              {active === l && <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-[var(--cyan-l)]/80" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
              <span className={`relative ${active === l ? "font-semibold text-[var(--cyan-d)]" : ""}`}>{l}</span></a></li>
          ))}
        </ul>
        <button className="md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, y: -10, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.96 }}
            className="glass mt-2 flex flex-col p-3 md:hidden">
            {links.map((l) => (<li key={l}><a href={`#${l}`} onClick={() => setOpen(false)} className={`block rounded-xl px-4 py-3 capitalize ${active === l ? "bg-[var(--cyan-l)] font-semibold text-[var(--cyan-d)]" : ""}`}>{l}</a></li>))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
