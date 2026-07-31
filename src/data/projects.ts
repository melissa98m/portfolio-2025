export type ProjectStatus = "deployed" | "wip" | "contributor" | "private";

export interface ProjectData {
  id: string;
  title: string;
  imageName: string;
  link?: string;
  preview?: string;
  status: ProjectStatus;
  techs: string[];
  /** Si true, une page détail existe */
  hasDetailPage?: boolean;
  /** Chemin vers le logo SVG, affiché dans la page détail */
  logo?: string;
}

export const PROJECT_IDS = [
  "dernierSigne",
  "dashboardDocker",
  "weeb",
  "mangaddict",
  "woofalk",
  "ops",
  "sousLaMer",
  "salamandre",
  "fleuriste",
] as const;

export type ProjectId = (typeof PROJECT_IDS)[number];

export const projectsData: ProjectData[] = [
  {
    id: "dernierSigne",
    title: "Dernier Signe",
    imageName: "dernier-signe",
    preview: "https://dernier-signe.vercel.app/",
    status: "wip",
    techs: ["django", "react", "vite", "tailwindcss", "framerMotion", "celery", "redis", "postgresql", "stripe", "resend", "docker"],
    hasDetailPage: true,
    logo: "/dernier-signe-logo.svg",
  },
  {
    id: "dashboardDocker",
    title: "Dashboard Docker",
    imageName: "dashboard-docker",
    status: "private",
    techs: ["fastapi", "next", "react", "sqlite", "docker", "resend"],
    hasDetailPage: true,
  },
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
    preview: "https://mangaddict.melissa-mangione.com/",
    status: "deployed",
    techs: ["PHP", "symfony", "tailwindcss", "twig", "stimulus", "redis", "mysql", "docker", "webpack"],
    hasDetailPage: true,
  },
  {
    id: "woofalk",
    title: "Woofalk",
    imageName: "woofalk",
    link: "https://github.com/melissa98m/Woofalk",
    preview: "https://woofalk.com",
    status: "deployed",
    techs: ["laravel", "PHP", "react", "vite", "mysql", "docker", "githubActions", "vercel"],
    hasDetailPage: true,
  },
  {
    id: "ops",
    title: "Outdoor private security",
    imageName: "ops",
    preview: "https://www.outdoor-private-security.fr/",
    status: "deployed",
    techs: ["wordpress", "PHP", "tailwindcss"],
  },
  {
    id: "sousLaMer",
    title: "Sous la mer",
    imageName: "sous-la-mer",
    preview: "https://airbnb-template-mauve.vercel.app/",
    status: "deployed",
    techs: ["react", "typeScript", "tailwindcss", "vercel"],
  },
  {
    id: "salamandre",
    title: "Salamandre Vision",
    imageName: "salamandre",
    preview: "https://www.salamandre-vision.fr/",
    status: "deployed",
    techs: ["astro", "vercel", "resend"],
    hasDetailPage: true,
  },
  {
    id: "fleuriste",
    title: "Demo Fleuriste",
    imageName: "fleuriste",
    preview: "https://demo-payload-fleuriste.vercel.app/",
    status: "deployed",
    techs: ["next", "payload", "tailwindcss", "typeScript", "postgresql", "vercel"],
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
  dernierSigne: {
    features: ["auth", "prestation", "payment", "catalog", "deathDetection", "admin", "rgpd", "contact", "design"],
    techStack: ["backend", "frontend", "devops"],
  },
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
  woofalk: {
    features: ["browse", "content", "map", "likes", "profile", "admin", "mobile"],
    techStack: ["backend", "frontend", "mobile", "devops"],
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
      "quickstart",
      "commands",
      "mfa",
      "security",
      "persistence",
      "docs",
    ],
    techStack: ["backend", "frontend", "data", "devops"],
  },
};
