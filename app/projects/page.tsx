import Footer from '@/components/layout/Footer';
import FadeInView from '@/components/animations/FadeInView';
import ProjectCard from '@/components/ui/ProjectCard';
import { getAllProjects } from '@/lib/projects';

export default function Projects() {
  const projects = getAllProjects();

  return (
    <>
      <main className="min-h-screen pt-24 sm:pt-16 pb-20 px-4 sm:px-8 md:px-16">
        <div className="max-w-content mx-auto">
          <FadeInView>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans mb-5 sm:mb-6 leading-tight">
              Projects
            </h1>
            <p className="text-portfolio-text-secondary text-base sm:text-lg mb-12 sm:mb-16 max-w-2xl leading-relaxed">
              A collection of projects showcasing my work as I learn more about the world of development operations.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <FadeInView key={project.slug} delay={0.2 + index * 0.1}>
                <ProjectCard project={project} />
              </FadeInView>
            ))}
          </div>

          {projects.length === 0 && (
            <FadeInView delay={0.2}>
              <div className="text-center py-20">
                <p className="text-portfolio-text-secondary text-lg">
                  No projects yet. Check back soon!
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
