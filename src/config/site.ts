// Single source of truth. Empty strings = "not set yet": buttons render as disabled "(soon)" instead of broken links.
export const site = {
  name: "Arnav Kumar Gupta",
  handle: "ARNAV.DEV",
  location: "Khagaria, Bihar, India",
  url: "", // e.g. https://arnav.dev (used for metadata)
  email: "animeart7879@gmail.com",
github: "https://github.com/animeart787",
fiverr: "", // add later
social: [
  { label: "Instagram", href: "https://www.instagram.com/anime_art7879/" },
] as { label: string; href: string }[],
  availability: { show: false, text: "Open to new projects" },
};
export const projects = [
  {
    title: "CreatorPilot",
    description:
      "An AI-powered YouTube channel management platform designed to bring content assistance and creator workflows into one workspace.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Google Gemini API"],
   image: "/projects/creatorpilot.png",
    live: "",
    source: "",
  },
];
