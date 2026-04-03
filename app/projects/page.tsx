'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import ProjectCard from '@/components/ui/ProjectCard';
import { getAllProjects } from '@/lib/projects';

export default function Projects() {
  const projects = getAllProjects();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-portfolio-bg-primary">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 text-portfolio-text-primary">
                Projects
              </h1>
              <p className="text-portfolio-text-secondary text-lg max-w-2xl mx-auto">
                A collection of projects showcasing my work in software
                development, embedded systems, and hardware design.
              </p>
            </>
          }
        >
          <div className="w-full h-full overflow-y-auto">
            <div className="grid md:grid-cols-2 gap-6 p-4">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>

            {projects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-portfolio-text-secondary text-lg">
                  No projects yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </ContainerScroll>
      </main>
      <Footer />
    </>
  );
}
