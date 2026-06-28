"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight, ShoppingCart, Globe, Code, Database, Palette } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export function Projects() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: t("projects_shopify_title"),
      description: t("projects_shopify_desc"),
      image: "/bg-screenshot.png",
      tags: ["Shopify", "E-commerce", "Analytics"],
      link: "https://buildgreener.co.uk/",
      target: "_blank",
      size: "large",
      icon: ShoppingCart,
      metrics: { products: "600+", growth: "+15%" },
      metricLabels: { products: t("projects_products"), growth: t("projects_growth") },
    },
    {
      id: 2,
      title: t("projects_wordpress_title"),
      description: t("projects_wordpress_desc"),
      image: "/wp-screenshot.png",
      tags: ["WordPress", "SEO", "Performance"],
      link: "https://kooka.co.uk/",
      target: "_blank",
      size: "medium",
      icon: Globe,
      metrics: { pages: "20+", speed: "<2s" },
      metricLabels: { pages: t("projects_pages"), speed: t("projects_speed") },
    },
    {
      id: 3,
      title: t("projects_frontend_title"),
      description: t("projects_frontend_desc"),
      image: "/dw-swift.png",
      tags: ["C#", ".NET", "Bootstrap"],
      link: "https://dynamicweb.com/accelerators/dynamicweb-swift",
      target: "_blank",
      size: "medium",
      icon: Code,
      metrics: { components: "30+", reviews: "50+" },
      metricLabels: { components: t("projects_components"), reviews: t("projects_reviews") },
    },
    {
      id: 4,
      title: t("projects_ux_title"),
      description: t("projects_ux_desc"),
      image: "/connect.png",
      tags: ["React", "Adobe XD", "Prototyping"],
      link: "https://xd.adobe.com/view/a304b78c-960b-48fd-96f3-6c31eb0d30e3-f657/",
      target: "_blank",
      size: "small",
      icon: Palette,
    },
    {
      id: 5,
      title: t("projects_dashboard_title"),
      description: t("projects_dashboard_desc"),
      image: "/eaa-jobportal.png",
      tags: ["Figma", "Prototyping", "Design"],
      link: "https://www.figma.com/proto/wQkeOj7769yN2OIkIuANRF/Student-portal?node-id=277-2126&scaling=scale-down&page-id=0%3A1&starting-point-node-id=277%3A2126",
      target: "_blank",
      size: "small",
      icon: Database,
    },
    {
      id: 6,
      title: t("projects_headless_ecommerce_title"),
      description: t("projects_headless_ecommerce_desc"),
      image: "/headless-implementation.png",
      tags: ["Headless", "Next.js", "Figma", "Prototyping"],
      link: "https://www.figma.com/proto/iYPULAw6CABVoL0s1ngio3/Untitled?page-id=0%3A1&type=design&node-id=60-1465&viewport=552%2C148%2C0.04&t=Wl4VxUGWOORAXIHH-1&scaling=min-zoom&starting-point-node-id=60%3A1465&show-proto-sidebar=1",
      target: "_blank",
      size: "small",
      icon: Code,
    },
  ];

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 radial-gradient opacity-30" />

      <div className="container px-6 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t("projects_badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient-subtle">
            {t("projects_title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("projects_description")}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isLarge = project.size === "large";
            const isMedium = project.size === "medium";

            return (
              <motion.a
                key={project.id}
                href={project.link}
                target={project.target || undefined}
                rel={project.target ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
                  group relative overflow-hidden rounded-2xl glass-card hover-lift
                  ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                  ${isMedium ? "md:row-span-2" : ""}
                `}
              >
                {/* Background image */}
                <div className="absolute inset-0 opacity-60 group-hover:opacity-30 transition-opacity duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  {/* Icon */}
                  <div className="absolute top-6 left-6 w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* Metrics (for large cards) */}
                  {project.metrics && project.metricLabels && (
                    <div className="flex gap-4 mt-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-xs">
                          <span className="text-primary font-semibold">{value}</span>
                          <span className="text-muted-foreground ml-1">{project.metricLabels![key as keyof typeof project.metricLabels]}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>{t("projects_viewAll")}</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
