import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FadeInView from '@/components/animations/FadeInView';
import { getProjectBySlug, getAllProjects } from '@/lib/projects';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-8 md:px-16">
        <div className="max-w-content mx-auto">
          <FadeInView>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6">
              {project.title}
            </h1>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-portfolio-bg-secondary border border-portfolio-border text-sm text-portfolio-text-secondary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeInView>

          <FadeInView delay={0.3}>
            <div className="flex items-center gap-6 mb-12">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-portfolio-accent text-portfolio-bg-primary font-medium rounded-sm hover:bg-portfolio-text-primary transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-portfolio-border text-portfolio-text-primary font-medium rounded-sm hover:border-portfolio-text-primary transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </FadeInView>

          {project.thumbnail && (
            <FadeInView delay={0.4}>
              <div className="aspect-video bg-portfolio-bg-secondary rounded-lg overflow-hidden mb-12">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeInView>
          )}

          <FadeInView delay={0.5}>
            <div
              className="prose prose-invert max-w-none project-content"
              dangerouslySetInnerHTML={{ __html: project.longDescription }}
            />
          </FadeInView>

          {project.images && project.images.length > 0 && (
            <FadeInView delay={0.6}>
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video bg-portfolio-bg-secondary rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </FadeInView>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
