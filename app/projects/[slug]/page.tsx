import { notFound } from 'next/navigation';
import Footer from '@/components/layout/Footer';
import FadeInView from '@/components/animations/FadeInView';

import { getProjectBySlug, getAllProjects } from '@/lib/projects';
import { ProjectContent } from '@/components/project-content';
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
      <main className="min-h-screen pt-24 sm:pt-16 pb-20 px-4 sm:px-8 md:px-16">
        <div className="max-w-content mx-auto">
          <FadeInView animateOnMount>
            <div className="flex items-center gap-4 mb-8 sm:mb-10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span className="font-serif text-sm sm:text-base">Home</span>
              </Link>
              <span className="text-portfolio-text-secondary/40">/</span>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors font-serif text-sm sm:text-base"
              >
                Projects
              </Link>
            </div>
          </FadeInView>

          <FadeInView delay={0.05} animateOnMount>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans mb-6">
              {project.title}
            </h1>
          </FadeInView>

          <FadeInView delay={0.1} animateOnMount>
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

          <FadeInView delay={0.15} animateOnMount>
            <div className="flex items-center gap-6 mb-12">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-portfolio-accent text-white font-medium rounded hover:opacity-90 transition-all duration-200"
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
                  className="inline-flex items-center gap-2 px-6 py-3 border border-portfolio-border text-portfolio-text-primary font-medium rounded hover:border-portfolio-accent hover:text-portfolio-accent transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </FadeInView>

          {project.thumbnail && (
            <FadeInView delay={0.2} animateOnMount>
              <div className="aspect-video bg-portfolio-bg-secondary rounded-lg overflow-hidden mb-12">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeInView>
          )}

          <FadeInView delay={0.25} animateOnMount>
            <div className="prose prose-invert max-w-none project-content">
              <ProjectContent content={project.longDescription} />
            </div>
          </FadeInView>

          {project.images && project.images.length > 0 && (
            <FadeInView delay={0.3} animateOnMount>
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
