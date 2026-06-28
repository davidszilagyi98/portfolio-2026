"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight, ShoppingCart, Globe, Code, Database, Palette } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";
import { projectsData } from "@/lib/projects-data";

const iconMap = {
  ShoppingCart,
  Globe,
  Code,
  Database,
  Palette,
  Smartphone: Code,
};

export function Projects() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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
          {projectsData.map((project, index) => {
            const Icon = iconMap[project.icon];
            const isLarge = project.size === "large";
            const isMedium = project.size === "medium";

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`
                    group relative overflow-hidden rounded-2xl glass-card hover-lift cursor-pointer h-full
                    ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                    ${isMedium ? "md:row-span-2" : ""}
                  `}
                >
                  {/* Background image */}
                  <div className="absolute inset-0 opacity-60 group-hover:opacity-30 transition-opacity duration-500">
                    <img
                      src={project.image}
                      alt={t(project.titleKey)}
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
                      {t(project.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {t(project.descriptionKey)}
                    </p>

                    {/* Metrics (for large cards) */}
                    {project.metrics && project.metricLabelsKey && (
                      <div className="flex gap-4 mt-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-xs">
                            <span className="text-primary font-semibold">{value}</span>
                            <span className="text-muted-foreground ml-1">{t(project.metricLabelsKey![key as keyof typeof project.metricLabelsKey])}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </Link>
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
