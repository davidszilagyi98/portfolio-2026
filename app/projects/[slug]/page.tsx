import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProjectDetail } from "@/components/project-detail";
import { projectsData } from "@/lib/projects-data";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  return {
    title: project ? `Project | David Szilagyi` : "Project | David Szilagyi",
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="container px-6 max-w-4xl mx-auto py-32 text-center">
          <h1 className="text-4xl font-semibold mb-4">Project not found</h1>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ProjectDetail project={project} />
      <Footer />
    </main>
  );
}
