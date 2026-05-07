import { notFound } from 'next/navigation';
import Footer from '@/components/layout/Footer';
import FadeInView from '@/components/animations/FadeInView';
import { getProjectBySlug, getAllProjects } from '@/lib/projects';
import { ProjectContent } from '@/components/project-content';
import ScreenshotSlideshow from '@/components/ui/screenshot-slideshow';
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
        <article className="max-w-content mx-auto px-6 sm:px-10 md:px-16 pt-20 pb-32">

          <FadeInView animateOnMount>
            <div className="flex items-center gap-3 mb-20">
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

          <header className="mb-20">
            <FadeInView delay={0.06} animateOnMount>
              <div className="flex flex-wrap gap-x-3 gap-y-2 mb-8 font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary">
                {project.tags.map((tag, i) => (
                  <span key={tag} className="inline-flex items-center gap-x-3">
                    {tag}
                    {i < project.tags.length - 1 && (
                      <span className="text-portfolio-border" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </FadeInView>

            <FadeInView delay={0.12} animateOnMount>
              <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.02] max-w-4xl mb-12">
                {project.title}
              </h1>
            </FadeInView>

            {(project.githubUrl || project.liveUrl) && (
              <FadeInView delay={0.18} animateOnMount>
                <div className="flex items-center gap-8 pt-6 border-t border-portfolio-border">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-primary transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      <span className="border-b border-portfolio-text-primary pb-px group-hover:border-portfolio-text-secondary group-hover:text-portfolio-text-secondary transition-colors">
                        View on Github
                      </span>
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
            )}
          </header>

          {project.thumbnail && (
            <FadeInView delay={0.24} animateOnMount>
              <figure className="mb-24 bg-portfolio-bg-secondary border border-portfolio-border h-[420px] sm:h-[520px] md:h-[640px] flex items-center justify-center overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain"
                />
              </figure>
            </FadeInView>
          )}

          {project.screenshotTracks && project.screenshotTracks.length > 0 && (
            <FadeInView delay={0.06}>
              <div className="mb-24">
                <ScreenshotSlideshow tracks={project.screenshotTracks} />
              </div>
            </FadeInView>
          )}

          <FadeInView delay={0.06}>
            <div className="max-w-2xl mx-auto project-content">
              <ProjectContent content={project.longDescription} />
            </div>
          </FadeInView>

          {project.images && project.images.length > 0 && (
            <FadeInView delay={0.12}>
              <div className="grid md:grid-cols-2 gap-4 mt-20 max-w-2xl mx-auto">
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

          <FadeInView delay={0.06}>
            <div className="mt-32 pt-12 border-t border-portfolio-border max-w-2xl mx-auto">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors"
              >
                <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-0.5" />
                All Projects
              </Link>
            </div>
          </FadeInView>
        </article>
      </main>
      <Footer />
    </>
  );
}
