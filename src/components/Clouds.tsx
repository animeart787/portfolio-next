// Fixed, CSS-only atmosphere: three depth layers of soft clouds + cyan light + particles. Deterministic values avoid hydration mismatch.
const layers = [
  { size: 520, op: 0.9, dur: 150, top: [2, 28, 52, 76] },
  { size: 380, op: 0.7, dur: 105, top: [14, 40, 64, 88] },
  { size: 240, op: 0.55, dur: 70, top: [8, 46, 70] },
];
export default function Clouds() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full" style={{ background: "radial-gradient(closest-side,rgba(6,182,212,.20),transparent)" }} />
      <div className="absolute -bottom-52 -right-40 h-[600px] w-[700px] rounded-full" style={{ background: "radial-gradient(closest-side,rgba(207,250,254,.9),transparent)" }} />
      {layers.map((l, li) =>
        l.top.map((top, i) => (
          <div key={`${li}-${i}`} className="cloud" style={{
            width: l.size * (1 + (i % 2) * 0.4), height: l.size * 0.45, top: `${top}%`, opacity: l.op,
            filter: `blur(${22 + li * 6}px)`, animationDuration: `${l.dur + i * 17}s`, animationDelay: `-${(i * 41 + li * 13) % l.dur}s`,
          }} />
        )))}
      {Array.from({ length: 22 }).map((_, i) => (
        <span key={i} className="dot" style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`, animationDuration: `${6 + (i % 5) * 2}s`, animationDelay: `-${i % 7}s` }} />
      ))}
    </div>
  );
}
