'use client';

import { motion } from 'framer-motion';

interface StageProps {
  title: string;
  description: string;
  delay: number;
  highlight?: boolean;
}

function PipelineStage({ title, description, delay, highlight }: StageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={`
        rounded px-5 py-4 transition-colors
        ${highlight
          ? 'bg-white/60 border-2 border-portfolio-text-primary'
          : 'bg-white/40 border border-portfolio-border'
        }
      `}
    >
      <h4 className="text-base font-sans mb-1.5 text-portfolio-text-primary">{title}</h4>
      <p className="text-sm text-portfolio-text-secondary leading-relaxed italic">{description}</p>
    </motion.div>
  );
}

function AnimatedArrow({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
      className="flex justify-center my-2 sm:my-3"
    >
      <svg width="16" height="20" viewBox="0 0 16 20" className="text-portfolio-text-secondary/40">
        <line x1="8" y1="0" x2="8" y2="14" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="8,20 4,14 12,14" fill="currentColor" />
      </svg>
    </motion.div>
  );
}

export function CICDPipeline() {
  return (
    <div className="w-full max-w-2xl mx-auto my-10 sm:my-16 p-5 sm:p-8 bg-portfolio-bg-secondary/60 rounded border border-portfolio-border">
      <h3 className="text-xl sm:text-2xl font-sans mb-6 sm:mb-8 text-center text-portfolio-text-primary">CI/CD Pipeline</h3>

      <PipelineStage
        title="Developer Push"
        description="git push to main branch triggers GitHub webhook"
        delay={0}
      />

      <AnimatedArrow delay={0.3} />

      <PipelineStage
        title="Self-Hosted Runner (VM 3)"
        description="GitHub Actions runner on k3s VM receives webhook"
        delay={0.6}
      />

      <AnimatedArrow delay={0.9} />

      <PipelineStage
        title="Docker Build"
        description="Multi-stage build → Tag image → Push to ghcr.io"
        delay={1.2}
      />

      <AnimatedArrow delay={1.5} />

      <PipelineStage
        title="kubectl apply"
        description="Deploy updated image to k3s cluster"
        delay={1.8}
      />

      <AnimatedArrow delay={2.1} />

      <PipelineStage
        title="Rolling Update"
        description="k3s performs zero-downtime deployment"
        delay={2.4}
      />

      <AnimatedArrow delay={2.7} />

      <PipelineStage
        title="Live Website"
        description="Updated site accessible at markcalip.com (~4-5 min total)"
        delay={3}
        highlight
      />
    </div>
  );
}