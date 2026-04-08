import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/Hero';
import FadeInView from '@/components/animations/FadeInView';
import { Code, Cpu, Database, Wrench } from 'lucide-react';

const skills = [
  {
    category: 'Generative AI Development',
    items: ['Claude for Infrastructure Code', 'Bolt.new for Web Applications', 'Prompt Engineering for System Design', 'AI-Driven Troubleshooting Workflows'],
    icon: Code,
  },
  {
    category: 'Hardware',
    items: ['x86 Server Architecture', 'Multi-Tier Storage (NVMe/SATA/HDD)', 'Computer Hardware Fluency', 'Intuitive Hardware Troubleshooting'],
    icon: Cpu,
  },
  {
    category: 'Infrastructure Operations',
    items: ['Linux Server Administration', 'Docker Container Management', 'Proxmox Virtualization'],
    icon: Database,
  },
  {
    category: 'Tools & Platforms',
    items: ['VS Code and VSC Remote Development', 'Git Version Control', 'Command Line Operations', 'Self-Hosted Services Stack'],
    icon: Wrench,
  },
];

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <section id="about" className="py-24 px-4 sm:px-8 md:px-16 border-t border-portfolio-border">
          <div className="max-w-content mx-auto">

            <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
              <FadeInView>
                <div className="aspect-[4/5] bg-portfolio-bg-secondary rounded-lg overflow-hidden">
                  <img
                  src="/images/cleanedheadshot.png"
                  alt="Mark Calip"
                  className="w-full h-full object-cover"
                  />
                </div>
              </FadeInView>

              <FadeInView delay={0.15}>
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                    About Me
                  </h2>
                  <p className="text-portfolio-text-secondary leading-relaxed text-lg">
                    I'm Mark Calip, a third-year Computer Engineering student at California State University, San Bernardino, building practical DevOps skills through hands-on infrastructure projects. Rather than just following tutorials, I design and operate production-grade systems—from self-hosted cloud services to AI-powered monitoring pipelines—all running on hardware in my homelab. My approach combines systems thinking with modern tools like Docker, Kubernetes, and local LLM inference through AI-assisted workflows. I also build and ship web applications using generative AI tooling, treating each project as an exercise in product design and rapid prototyping. Whether I'm architecting infrastructure or iterating on user interfaces, I focus on understanding systems holistically—preparing me for a career in DevOps engineering where infrastructure isn't just managed, it's architected.
                  </p>
                </div>
              </FadeInView>
            </div>

            <FadeInView delay={0.1}>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10">
                Technical Skills
              </h2>
            </FadeInView>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {skills.map((skillGroup, index) => {
                const Icon = skillGroup.icon;
                return (
                  <FadeInView key={skillGroup.category} delay={0.1 + index * 0.08}>
                    <div className="bg-portfolio-bg-secondary border border-portfolio-border rounded-lg p-6 hover:border-portfolio-text-secondary transition-colors h-full">
                      <div className="mb-4">
                        <Icon className="w-6 h-6 text-portfolio-text-primary" />
                      </div>
                      <h3 className="text-base font-semibold mb-3">
                        {skillGroup.category}
                      </h3>
                      <ul className="space-y-1.5">
                        {skillGroup.items.map((skill) => (
                          <li key={skill} className="text-portfolio-text-secondary text-sm">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeInView>
                );
              })}
            </div>

            <FadeInView>
              <div className="bg-portfolio-bg-secondary border border-portfolio-border rounded-lg p-8 sm:p-12">
                <h2 className="text-2xl font-bold tracking-tight mb-6">
                  Education
                </h2>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    Bachelor of Science in Computer Engineering
                  </h3>
                  <p className="text-portfolio-text-secondary">
                    California State University San Bernardino
                  </p>
                  <p className="text-portfolio-text-secondary text-sm">
                    Expected Graduation: Spring 2026
                  </p>
                  <p className="text-portfolio-text-secondary text-sm pt-2">
                    Relevant Coursework: Computer Architecture, Embedded Systems, Operating Systems
                  </p>
                </div>
              </div>
            </FadeInView>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
