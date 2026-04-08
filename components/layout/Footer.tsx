import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-portfolio-border bg-portfolio-bg-secondary">
      <div className="max-w-content mx-auto px-4 sm:px-8 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-portfolio-text-secondary text-sm">
            Thanks for stopping by!
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/karmCS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-text-secondary hover:text-portfolio-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/mark-calip-a770a5271"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-text-secondary hover:text-portfolio-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:mark.c.calip@gmail.com"
              className="text-portfolio-text-secondary hover:text-portfolio-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
