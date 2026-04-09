import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/Hero';
import FadeInView from '@/components/animations/FadeInView';

const skills = [
  {
    category: 'Generative AI & Automation',
    items: ['Local LLM Deployment', 'AI-Assisted Infrastructure Design', 'Python Discord Bot Deployment', 'Bolt.new for Web Applications'],
  },
  {
    category: 'Hardware',
    items: ['x86 Server Architecture', 'Multi-Tier Storage (NVMe/SATA/HDD)', 'Computer Hardware Fluency', 'Intuitive Hardware Troubleshooting'],
  },
  {
    category: 'Infrastructure Operations',
    items: ['Linux Server Administration (Ubuntu 24.04)', 'Docker Container Orchestration', 'Proxmox Virtualization', 'Reverse Proxy & DNS Management'],
  },
  {
    category: 'Tools & Platforms',
    items: ['VS Code & Remote Development', 'Git Version Control', 'Command Line Operations', 'Infrastructure Monitoring'],
  },
];

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <section id="about" className="border-t border-portfolio-border">
          <div className="max-w-content mx-auto px-6 sm:px-10 md:px-16 py-20 sm:py-28">

            <div className="grid md:grid-cols-[1fr_1.6fr] gap-16 md:gap-24 mb-24 items-start">
              <FadeInView>
                <div className="aspect-[4/5] bg-portfolio-bg-secondary overflow-hidden border border-portfolio-border max-w-xs">
                  <img
                    src="/images/projects/cleanedheadshot.png"
                    alt="Mark Calip"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeInView>

              <FadeInView delay={0.12}>
                <div className="pt-2">
                  <div className="mb-6">
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary">
                      About
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-6 leading-snug">
                    Third-year Computer Engineering student building production-grade infrastructure.
                  </h2>
                  <p className="text-sm text-portfolio-text-secondary leading-relaxed">
                    I'm Mark Calip, studying Computer Engineering at California State University, San Bernardino. I design and operate production-grade systems — from self-hosted cloud services to AI-powered monitoring pipelines — all running on hardware in my homelab.
                  </p>
                  <p className="text-sm text-portfolio-text-secondary leading-relaxed mt-4">
                    My approach combines Docker, Kubernetes, and modern DevOps tools with AI-first thinking, preparing me for a career where infrastructure isn't just managed — it's intelligently architected.
                  </p>
                </div>
              </FadeInView>
            </div>

            <FadeInView delay={0.08}>
              <div className="mb-8 flex items-center gap-6">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary">
                  Technical Skills
                </span>
                <div className="flex-1 h-px bg-portfolio-border" />
              </div>
            </FadeInView>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-portfolio-border mb-24">
              {skills.map((skillGroup, index) => (
                <FadeInView key={skillGroup.category} delay={0.08 + index * 0.06}>
                  <div className={`p-6 sm:p-8 h-full ${index < skills.length - 1 ? 'border-r border-portfolio-border' : ''}`}>
                    <h3 className="font-mono text-[9px] tracking-[0.14em] uppercase text-portfolio-text-secondary mb-5 leading-relaxed">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <li key={skill} className="text-xs text-portfolio-text-primary leading-relaxed">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInView>
              ))}
            </div>

            <FadeInView>
              <div className="mb-8 flex items-center gap-6">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary">
                  Education
                </span>
                <div className="flex-1 h-px bg-portfolio-border" />
              </div>
              <div className="border border-portfolio-border p-8 sm:p-10">
                <div className="grid sm:grid-cols-[auto_1fr] gap-x-16 gap-y-1">
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-portfolio-text-secondary self-start mt-0.5">
                    Degree
                  </span>
                  <p className="text-sm font-medium text-portfolio-text-primary">
                    Bachelor of Science in Computer Engineering
                  </p>

                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-portfolio-text-secondary self-start mt-0.5 pt-3">
                    School
                  </span>
                  <p className="text-sm text-portfolio-text-secondary pt-3">
                    California State University San Bernardino
                  </p>

                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-portfolio-text-secondary self-start mt-0.5 pt-3">
                    Graduation
                  </span>
                  <p className="text-sm text-portfolio-text-secondary pt-3">
                    Spring 2026
                  </p>

                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-portfolio-text-secondary self-start mt-0.5 pt-3">
                    Coursework
                  </span>
                  <p className="text-sm text-portfolio-text-secondary pt-3">
                    Computer Architecture · Embedded Systems · Operating Systems
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
