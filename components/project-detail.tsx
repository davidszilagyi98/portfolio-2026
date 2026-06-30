"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Figma, ArrowUpRight, Calendar, User, Check, Globe } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";
import { Project } from "@/lib/projects-data";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { t } = useI18n();

  const title = t(project.titleKey);
  const description = t(project.descriptionKey);
  const longDescription = t(project.longDescriptionKey);
  const challenge = t(project.challengeKey);
  const solution = t(project.solutionKey);
  const features = project.featuresKey.map((key) => t(key));

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container px-6 max-w-5xl mx-auto relative">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{t("project_backToProjects")}</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient-subtle mb-6">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            {longDescription}
          </p>
        </motion.div>

        {/* Hero image */}
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="mb-16 rounded-2xl overflow-hidden glass-card border border-border"
>
  {project.video ? (
    <video
      autoPlay
      muted
      loop
      controls
      poster={project.image}
      className="w-full h-auto"
    >
      <source src={project.video} type="video/mp4" />
    </video>
  ) : (
    <img
      src={project.image}
      alt={title}
      className="w-full h-auto object-cover"
    />
  )}
</motion.div>

        {/* Meta info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="glass-card rounded-xl p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider">{t("project_timeline")}</span>
            </div>
            <p className="font-medium text-sm">{project.timeframe}</p>
          </div>

          <div className="glass-card rounded-xl p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <User className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider">{t("project_role")}</span>
            </div>
            <p className="font-medium text-sm">{project.role}</p>
          </div>

          {project.metrics && project.metricLabelsKey && (
            Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="glass-card rounded-xl p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Check className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider">{t(project.metricLabelsKey![key as keyof typeof project.metricLabelsKey])}</span>
                </div>
                <p className="font-semibold text-primary">{value}</p>
              </div>
            ))
          )}
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left column - content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4">{t("project_overview")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {longDescription}
              </p>
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-4">{t("project_challenge")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4">{t("project_solution")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {solution}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-4">{t("project_features")}</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right column - sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-2xl p-6 border border-border"
            >
              <h3 className="font-semibold mb-4">{t("project_technologies")}</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card rounded-2xl p-6 border border-border"
            >
              <h3 className="font-semibold mb-4">{t("project_links")}</h3>
              <div className="space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-primary/10 transition-colors group"
                  >
                    <Globe className="w-5 h-5 text-muted-foreground" />
                    <span className="flex-1 text-sm">{t("project_liveSite")}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-primary/10 transition-colors group"
                  >
                    <Github className="w-5 h-5 text-muted-foreground" />
                    <span className="flex-1 text-sm">{t("project_github")}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}

                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-primary/10 transition-colors group"
                  >
                    <Figma className="w-5 h-5 text-muted-foreground" />
                    <span className="flex-1 text-sm">{t("project_figma")}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="glass-card rounded-2xl p-8 border border-border max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">Interested in working together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects and opportunities.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
