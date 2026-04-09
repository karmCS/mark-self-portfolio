export default function Footer() {
  return (
    <footer className="border-t border-portfolio-border">
      <div className="max-w-content mx-auto px-6 sm:px-10 md:px-16 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary">
            Mark Calip — {new Date().getFullYear()}
          </span>

          <div className="flex items-center gap-8">
            <a
              href="https://github.com/karmCS"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/mark-calip-a770a5271"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mark.c.calip@gmail.com"
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-portfolio-text-secondary hover:text-portfolio-text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
