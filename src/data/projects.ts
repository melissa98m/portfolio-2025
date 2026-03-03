export type ProjectStatus = "deployed" | "wip" | "contributor";

export interface ProjectData {
  id: string;
  title: string;
  imageName: string;
  link: string;
  preview: string;
  status: ProjectStatus;
  techs: string[];
  /** Si true, une page détail existe */
  hasDetailPage?: boolean;
}

export const PROJECT_IDS = [
  "weeb",
  "mangaddict",
  "ops",
  "sousLaMer",
  "salamandre",
  "fleuriste",
  "dashboardDocker",
] as const;

export type ProjectId = (typeof PROJECT_IDS)[number];

export const projectsData: ProjectData[] = [
  {
    id: "weeb",
    title: "Weeb Website",
    imageName: "weeb",
    link: "https://github.com/melissa98m/weeb-website",
    preview: "https://weeb-website.vercel.app/",
    status: "deployed",
    techs: ["react", "django", "ml", "vite", "tailwindcss", "vercel", "framerMotion", "docker", "githubActions"],
    hasDetailPage: true,
  },
  {
    id: "mangaddict",
    title: "MangAddict",
    imageName: "mangaddict",
    link: "https://mangaddict.melissa-mangione.com/",
    preview: "https://mangaddict.melissa-mangione.com/",
    status: "deployed",
    techs: ["PHP", "symfony", "tailwindcss", "twig", "stimulus", "redis", "mysql", "docker", "webpack"],
    hasDetailPage: true,
  },
  {
    id: "ops",
    title: "Outdoor private security",
    imageName: "ops",
    link: "https://www.outdoor-private-security.fr/",
    preview: "https://www.outdoor-private-security.fr/",
    status: "deployed",
    techs: ["wordpress", "PHP", "tailwindcss"],
  },
  {
    id: "sousLaMer",
    title: "Sous la mer",
    imageName: "sous-la-mer",
    link: "https://airbnb-template-mauve.vercel.app/",
    preview: "https://airbnb-template-mauve.vercel.app/",
    status: "deployed",
    techs: ["react", "typeScript", "tailwindcss", "vercel"],
  },
  {
    id: "salamandre",
    title: "Salamandre Vision",
    imageName: "salamandre",
    link: "https://www.salamandre-vision.fr/",
    preview: "https://www.salamandre-vision.fr/",
    status: "deployed",
    techs: ["astro", "vercel", "resend"],
    hasDetailPage: true,
  },
  {
    id: "fleuriste",
    title: "Demo Fleuriste",
    imageName: "fleuriste",
    link: "https://demo-payload-fleuriste.vercel.app/",
    preview: "https://demo-payload-fleuriste.vercel.app/",
    status: "deployed",
    techs: ["next", "payload", "tailwindcss", "typeScript", "postgresql", "vercel"],
    hasDetailPage: true,
  },
  {
    id: "dashboardDocker",
    title: "Dashboard Docker",
    imageName: "dashboard-docker",
    link: "https://github.com/melissa98m/dashboard-docker",
    preview: "https://github.com/melissa98m/dashboard-docker",
    status: "wip",
    techs: ["fastapi", "next", "react", "sqlite", "docker", "resend"],
    hasDetailPage: true,
  },
];

export function getProjectById(id: string): ProjectData | undefined {
  return projectsData.find((p) => p.id === id);
}

/** Clés des sections détail par projet (i18n: projects.detail.{id}.features / techStack) */
export const PROJECT_DETAIL_KEYS: Record<
  string,
  { features: string[]; techStack: string[] }
> = {
  weeb: {
    features: ["public", "auth", "profile", "admin", "ml", "theme", "protections"],
    techStack: ["backend", "frontend", "tools", "devops"],
  },
  mangaddict: {
    features: [
      "auth",
      "manga",
      "ratings",
      "lists",
      "library",
      "i18n",
      "ui",
      "newsletter",
      "badges",
      "polls",
      "recommendations",
      "moderation",
    ],
    techStack: ["backend", "frontend", "tools"],
  },
  salamandre: {
    features: ["home", "legal", "contact", "analytics", "seo"],
    techStack: ["core", "tools"],
  },
  fleuriste: {
    features: ["admin", "design", "customization", "contact", "performance"],
    techStack: ["core", "tools"],
  },
  dashboardDocker: {
    features: [
      "containers",
      "monitoring",
      "alerts",
      "debug",
      "commandCenter",
      "act",
      "auth",
      "pwa",
    ],
    techStack: ["backend", "frontend", "data"],
  },
};
