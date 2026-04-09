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
      <main className="min-h-screen">
        <div className="max-w-content mx-auto px-6 sm:px-10 md:px-16 pt-20 pb-24">

          <FadeInView animateOnMount>
            <div className="flex items-center gap-3 mb-16">
              <Link
                href="/"
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors group inline-flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-0.5" />
                Home
              </Link>
              <span className="text-portfolio-border">/</span>
              <Link
                href="/projects"
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors"
              >
                Projects
              </Link>
            </div>
          </FadeInView>

          <FadeInView delay={0.06} animateOnMount>
            <div className="mb-8">
              <div className="flex flex-wrap gap-4 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-[0.14em] uppercase text-portfolio-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight max-w-3xl">
                {project.title}
              </h1>
            </div>
          </FadeInView>

          <FadeInView delay={0.12} animateOnMount>
            <div className="flex items-center gap-6 mb-14 border-b border-portfolio-border pb-8">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-primary border-b border-portfolio-text-primary pb-px hover:text-portfolio-text-secondary hover:border-portfolio-text-secondary transition-colors"
                >
                  <Github className="w-3 h-3" />
                  View on Github
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Live Demo
                </a>
              )}
            </div>
          </FadeInView>

          {project.thumbnail && (
            <FadeInView delay={0.16} animateOnMount>
              <div className="aspect-video bg-portfolio-bg-secondary overflow-hidden mb-14 border border-portfolio-border">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeInView>
          )}

          <FadeInView delay={0.2} animateOnMount>
            <div className="max-w-2xl project-content">
              <ProjectContent content={project.longDescription} />
            </div>
          </FadeInView>

          {project.images && project.images.length > 0 && (
            <FadeInView delay={0.24} animateOnMount>
              <div className="grid md:grid-cols-2 gap-4 mt-14">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video bg-portfolio-bg-secondary overflow-hidden border border-portfolio-border"
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
