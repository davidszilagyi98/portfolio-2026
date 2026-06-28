export interface Project {
  slug: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  tags: string[];
  link?: string;
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  adobexdUrl?: string;
  longDescriptionKey: string;
  challengeKey: string;
  solutionKey: string;
  featuresKey: string[];
  technologies: string[];
  timeframe: string;
  role: string;
  icon: "ShoppingCart" | "Globe" | "Code" | "Database" | "Palette" | "Smartphone";
  size: "large" | "medium" | "small";
  metrics?: Record<string, string>;
  metricLabelsKey?: Record<string, string>;
}

export const projectsData: Project[] = [
  {
    slug: "shopify-ecommerce",
    titleKey: "projects_shopify_title",
    descriptionKey: "projects_shopify_desc",
    image: "/bg-screenshot.png",
    tags: ["Shopify", "E-commerce", "Analytics"],
    link: "https://buildgreener.co.uk/",
    liveUrl: "https://buildgreener.co.uk/",
    longDescriptionKey: "project_shopify_longDesc",
    challengeKey: "project_shopify_challenge",
    solutionKey: "project_shopify_solution",
    featuresKey: [
      "project_shopify_feature1",
      "project_shopify_feature2",
      "project_shopify_feature3",
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "Google Analytics", "Meta Ads"],
    timeframe: "2024 Feb - 2026 April",
    role: "Web & E-commerce Specialist",
    icon: "ShoppingCart",
    size: "large",
    metrics: { products: "600+", growth: "+15%" },
    metricLabelsKey: { products: "projects_products", growth: "projects_growth" },
  },
  {
    slug: "wordpress-website",
    titleKey: "projects_wordpress_title",
    descriptionKey: "projects_wordpress_desc",
    image: "/wp-screenshot.png",
    tags: ["WordPress", "SEO", "Performance"],
    link: "https://kooka.co.uk/",
    liveUrl: "https://kooka.co.uk/",
    longDescriptionKey: "project_wordpress_longDesc",
    challengeKey: "project_wordpress_challenge",
    solutionKey: "project_wordpress_solution",
    featuresKey: [
      "project_wordpress_feature1",
      "project_wordpress_feature2",
      "project_wordpress_feature3",
    ],
    technologies: ["WordPress", "PHP", "Elementor", "Yoast SEO", "Google Analytics"],
    timeframe: "2024 Feb - 2026 April",
    role: "Web Developer & Marketing Consultant",
    icon: "Globe",
    size: "medium",
    metrics: { pages: "20+", speed: "<2s" },
    metricLabelsKey: { pages: "projects_pages", speed: "projects_speed" },
  },
  {
    slug: "frontend-components",
    titleKey: "projects_frontend_title",
    descriptionKey: "projects_frontend_desc",
    image: "/dw-swift.png",
    tags: ["C#", ".NET", "Bootstrap"],
    link: "https://dynamicweb.com/accelerators/dynamicweb-swift",
    liveUrl: "https://dynamicweb.com/accelerators/dynamicweb-swift",
    longDescriptionKey: "project_frontend_longDesc",
    challengeKey: "project_frontend_challenge",
    solutionKey: "project_frontend_solution",
    featuresKey: [
      "project_frontend_feature1",
      "project_frontend_feature2",
      "project_frontend_feature3",
    ],
    technologies: ["C#", ".NET", "JavaScript", "Bootstrap", "Azure DevOps"],
    timeframe: "2023 Aug - 2024 Jan",
    role: "Frontend Developer Intern",
    icon: "Code",
    size: "medium",
    metrics: { components: "30+", reviews: "50+" },
    metricLabelsKey: { components: "projects_components", reviews: "projects_reviews" },
  },
  {
    slug: "ux-design-system",
    titleKey: "projects_ux_title",
    descriptionKey: "projects_ux_desc",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Figma", "Adobe XD", "Prototyping"],
    longDescriptionKey: "project_ux_longDesc",
    challengeKey: "project_ux_challenge",
    solutionKey: "project_ux_solution",
    featuresKey: [
      "project_ux_feature1",
      "project_ux_feature2",
      "project_ux_feature3",
    ],
    technologies: ["Figma", "Adobe XD", "Photoshop", "Principle"],
    timeframe: "2020 - 2022",
    role: "UX/UI Designer",
    icon: "Palette",
    size: "small",
  },
  {
    slug: "headless-ecommerce",
    titleKey: "projects_headless_ecommerce_title",
    descriptionKey: "projects_headless_ecommerce_desc",
    image: "/headless-implementation.png",
    tags: ["Headless", "Next.js", "API"],
    longDescriptionKey: "project_headless_longDesc",
    challengeKey: "project_headless_challenge",
    solutionKey: "project_headless_solution",
    featuresKey: [
      "project_headless_feature1",
      "project_headless_feature2",
      "project_headless_feature3",
    ],
    technologies: ["Next.js", "TypeScript", "REST API", "Tailwind CSS"],
    timeframe: "2024 - 2025",
    role: "Full Stack Developer",
    icon: "Code",
    size: "medium",
    metrics: { speed: "0.8s", lighthouse: "95+" },
    metricLabelsKey: { speed: "projects_speed", lighthouse: "Lighthouse" },
  },
];
