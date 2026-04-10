import Footer from '@/components/layout/Footer';
import FadeInView from '@/components/animations/FadeInView';
import ProjectCard from '@/components/ui/ProjectCard';
import CurrentWorkCard from '@/components/ui/current-work-card';
import { Meteors } from '@/components/ui/meteors';
import { getAllProjects } from '@/lib/projects';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Projects() {
  const projects = getAllProjects();

  return (
    <>
      <main className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Meteors number={50} />
        </div>

        <div className="max-w-content mx-auto px-6 sm:px-10 md:px-16 pt-24 pb-24 relative z-10">
          <FadeInView>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors mb-16 group"
            >
              <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-0.5" />
              Home
            </Link>
          </FadeInView>

          <FadeInView delay={0.08}>
            <div className="mb-16">
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary block mb-4">
                Selected Work
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-tight">
                Projects
              </h1>
            </div>
          </FadeInView>

          <FadeInView delay={0.18}>
            <div className="mb-8 flex items-center gap-6">
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary">
                Completed
              </span>
              <div className="flex-1 h-px bg-portfolio-border" />
            </div>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
            {projects.map((project, index) => (
              <FadeInView key={project.slug} delay={0.2 + index * 0.08}>
                <ProjectCard project={project} />
              </FadeInView>
            ))}
          </div>

          <FadeInView delay={0.14}>
            <div className="mb-20">
              <CurrentWorkCard />
            </div>
          </FadeInView>

          {projects.length === 0 && (
            <FadeInView delay={0.2}>
              <div className="py-20 border-t border-portfolio-border">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary">
                  No projects yet — check back soon.
                </p>
              </div>
            </FadeInView>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
