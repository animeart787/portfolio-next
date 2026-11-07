"use client";
import { motion } from "motion/react";
import { Palette, Smartphone, Plug, ShieldCheck, Sparkles, Cpu, Bot, MessageSquareCode, LayoutDashboard, Route, Layers, Tablet, MousePointerClick, Wand2, Clapperboard,  Code2, Atom, Triangle, Wind, Database, GitBranch, Package, Boxes, type LucideIcon } from "lucide-react";
const map: Record<string, LucideIcon> = { Palette, Smartphone, Plug, ShieldCheck, Sparkles, Cpu, Bot, MessageSquareCode, LayoutDashboard, Route, Layers, Tablet, MousePointerClick, Wand2, Clapperboard,  Code2, Atom, Triangle, Wind, Database, GitBranch, Package };
type P = { name: string; desc: string; primary?: boolean; index: number; brand?: { path: string; hex: string }; lucide?: string };
export default function SkillCard({ name, desc, primary, index, brand, lucide }: P) {
  const L = (lucide && map[lucide]) || Boxes;
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.07 }} whileHover={{ y: -6 }}
      className={`glass glow relative p-5 ${primary ? "ring-1 ring-[var(--cyan)]/50" : ""}`}>
      {primary && <span className="label absolute right-4 top-4 !text-[0.6rem]">Primary</span>}
      <motion.span whileHover={{ rotate: 8, scale: 1.12 }} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
        {brand ? <svg viewBox="0 0 24 24" width={26} height={26} role="img" aria-label={name} fill={`#${brand.hex === "000000" ? "0F172A" : brand.hex}`}><path d={brand.path} /></svg> : <L size={24} className="text-[var(--cyan-d)]" aria-hidden />}
      </motion.span>
      <h4 className="mt-4 font-semibold">{name}</h4>
      <p className="mt-1 text-sm text-[var(--mute)]">{desc}</p>
    </motion.div>
  );
}
