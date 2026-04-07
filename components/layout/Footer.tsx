import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/karmCS', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'Email', href: 'mailto:mark.c.calip@gmail.com', icon: Mail },
  ];

  return (
    <footer className="border-t border-portfolio-border bg-portfolio-bg-secondary">
      <div className="max-w-content mx-auto px-4 sm:px-8 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-portfolio-text-secondary text-sm">
            © {currentYear} Thanks for stopping by!
          </p>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
