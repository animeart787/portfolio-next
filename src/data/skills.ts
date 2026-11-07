// si = key from the `simple-icons` package (falls back to the lucide icon if the key doesn't exist in your installed version).
export type Skill = { name: string; desc: string; si?: string; lucide?: string; primary?: boolean };
export const skillGroups: { title: string; blurb: string; items: Skill[] }[] = [
  { title: "Frontend Development", blurb: "Where most of my time goes.", items: [
    { name: "HTML5", si: "siHtml5", lucide: "Code2", desc: "Semantic, accessible page structure." },
    { name: "CSS3", si: "siCss3", lucide: "Palette", desc: "Layouts, animation and glass effects." },
    { name: "JavaScript", si: "siJavascript", lucide: "Code2", primary: true, desc: "Interactivity and application logic." },
    { name: "TypeScript", si: "siTypescript", lucide: "Code2", primary: true, desc: "Typed, maintainable components." },
    { name: "React.js", si: "siReact", lucide: "Atom", primary: true, desc: "Component-driven interfaces." },
    { name: "Next.js 16", si: "siNextdotjs", lucide: "Triangle", primary: true, desc: "App Router sites and products." },
    { name: "Tailwind CSS", si: "siTailwindcss", lucide: "Wind", primary: true, desc: "Fast, consistent styling." },
    { name: "Responsive Web Design", lucide: "Smartphone", desc: "Layouts that fit every screen." },
  ]},
  { title: "Backend & Database", blurb: "Enough backend to ship full products.", items: [
    { name: "Supabase", si: "siSupabase", lucide: "Database", desc: "Database and auth for app backends." },
    { name: "Next.js API Routes", si: "siNextdotjs", lucide: "Triangle", desc: "Server endpoints inside the app." },
    { name: "REST API Integration", lucide: "Plug", desc: "Connecting to third-party services." },
    { name: "Authentication Systems", lucide: "ShieldCheck", desc: "Sign-in and protected routes." },
  ]},
  { title: "AI Integration", blurb: "Exploring AI-powered applications.", items: [
    { name: "Google Gemini API", si: "siGooglegemini", lucide: "Sparkles", desc: "Generative features in apps." },
    { name: "Google GenAI SDK", lucide: "Cpu", desc: "Calling Gemini from code." },
    { name: "AI App Development", lucide: "Bot", desc: "Turning AI ideas into products." },
    { name: "Prompt Engineering", lucide: "MessageSquareCode", desc: "Writing prompts that behave." },
  ]},
  { title: "UI/UX & Design", blurb: "Interfaces should feel good, not just work.", items: [
    { name: "UI Design", lucide: "LayoutDashboard", desc: "Clear visual hierarchy." },
    { name: "UX Design", lucide: "Route", desc: "Flows that make sense." },
    { name: "Glassmorphism", lucide: "Layers", desc: "Translucent, layered surfaces." },
    { name: "Responsive Interface Design", lucide: "Tablet", desc: "Designing for every breakpoint." },
    { name: "Interactive Components", lucide: "MousePointerClick", desc: "UI that responds to the user." },
    { name: "Micro-interactions", lucide: "Wand2", desc: "Small details that add polish." },
    { name: "Animation Design", lucide: "Clapperboard", desc: "Purposeful motion." },
  ]},
  { title: "Development Tools", blurb: "Daily workflow.", items: [
    { name: "Git", si: "siGit", lucide: "GitBranch", desc: "Version control." },
    { name: "GitHub", si: "siGithub", lucide: "Github", desc: "Hosting and collaboration." },
    { name: "VS Code", lucide: "Code2", desc: "Primary editor." },
    { name: "npm", si: "siNpm", lucide: "Package", desc: "Package management." },
    { name: "Framer Motion", si: "siFramer", lucide: "Clapperboard", desc: "Animation for React." },
  ]},
];
