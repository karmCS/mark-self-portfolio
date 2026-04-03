import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FadeInView from '@/components/animations/FadeInView';
import { Code, Cpu, Database, Wrench } from 'lucide-react';

export default function About() {
  const skills = [
    {
      category: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'Java'],
      icon: Code,
    },
    {
      category: 'Hardware',
      items: ['Arduino', 'Raspberry Pi', 'FPGA', 'PCB Design'],
      icon: Cpu,
    },
    {
      category: 'Web Development',
      items: ['React', 'Next.js', 'Node.js', 'Tailwind CSS'],
      icon: Database,
    },
    {
      category: 'Tools',
      items: ['Git', 'Docker', 'Linux', 'VS Code'],
      icon: Wrench,
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-8 md:px-16">
        <div className="max-w-content mx-auto">
          <FadeInView>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-8">
              About Me
            </h1>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <FadeInView delay={0.2}>
              <div className="aspect-square bg-portfolio-bg-secondary rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-portfolio-text-secondary">
                  <p className="text-sm">Your Photo Here</p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-serif mb-4">
                  Introduction
                </h2>
                <p className="text-portfolio-text-secondary leading-relaxed">
                  I'm a Computer Engineering student passionate about creating
                  innovative solutions that bridge the gap between hardware and
                  software. My journey in technology has been driven by
                  curiosity and a desire to build things that make a difference.
                </p>
                <p className="text-portfolio-text-secondary leading-relaxed">
                  With experience in both embedded systems and web development,
                  I enjoy tackling complex challenges and learning new
                  technologies. When I'm not coding, you can find me
                  experimenting with IoT projects or contributing to open-source
                  software.
                </p>
              </div>
            </FadeInView>
          </div>

          <FadeInView delay={0.4}>
            <h2 className="text-3xl sm:text-4xl font-serif mb-12">
              Technical Skills
            </h2>
          </FadeInView>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <FadeInView key={skillGroup.category} delay={0.5 + index * 0.1}>
                  <div className="bg-portfolio-bg-secondary border border-portfolio-border rounded-lg p-6 hover:border-portfolio-text-secondary transition-colors">
                    <div className="mb-4">
                      <Icon className="w-8 h-8 text-portfolio-text-primary" />
                    </div>
                    <h3 className="text-xl font-serif mb-4">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <li
                          key={skill}
                          className="text-portfolio-text-secondary text-sm"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInView>
              );
            })}
          </div>

          <FadeInView delay={0.9}>
            <div className="mt-20 bg-portfolio-bg-secondary border border-portfolio-border rounded-lg p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-serif mb-6">
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Bachelor of Science in Computer Engineering
                  </h3>
                  <p className="text-portfolio-text-secondary">
                    University Name
                  </p>
                  <p className="text-portfolio-text-secondary text-sm">
                    Expected Graduation: 2025
                  </p>
                </div>
                <p className="text-portfolio-text-secondary leading-relaxed mt-4">
                  Relevant Coursework: Data Structures, Computer Architecture,
                  Embedded Systems, Digital Signal Processing, Machine Learning
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </main>
      <Footer />
    </>
  );
}
