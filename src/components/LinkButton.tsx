"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
type P = { href?: string; children: React.ReactNode; variant?: "p" | "g"; className?: string };
// Magnetic button. Renders a disabled control (not a dead link) when href is not configured yet.
export default function LinkButton({ href, children, variant = "p", className = "" }: P) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const move = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left - r.width / 2) * 0.25); y.set((e.clientY - r.top - r.height / 2) * 0.25);
  };
  const cls = `btn btn-${variant} ${className}`;
  if (!href) return <span className={cls} aria-disabled="true" title="Link not configured yet">{children}<small className="opacity-70">(soon)</small></span>;
  const ext = href.startsWith("http");
  return (
    <motion.a ref={ref} href={href} style={{ x, y }} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }}
      {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={cls}>{children}</motion.a>
  );
}
