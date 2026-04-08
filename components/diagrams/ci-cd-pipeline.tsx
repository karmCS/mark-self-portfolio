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
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={`
        rounded-md px-4 py-3 transition-colors
        ${highlight
          ? 'bg-green-500/5 border border-green-500/20'
          : 'bg-slate-800/20 border border-slate-700/30'
        }
      `}
    >
      <h4 className="text-sm font-medium mb-1 text-slate-100">{title}</h4>
      <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function AnimatedArrow({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
      className="flex justify-center my-2"
    >
      <svg width="12" height="20" viewBox="0 0 12 20" className="text-slate-700/50">
        <line x1="6" y1="0" x2="6" y2="14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        <polygon points="6,20 3,15 9,15" fill="currentColor" />
      </svg>
    </motion.div>
  );
}

export function CICDPipeline() {
  return (
    <div className="w-full max-w-lg mx-auto my-10 p-5 bg-slate-900/20 rounded-lg border border-slate-800/50">
      <h3 className="text-base font-serif mb-5 text-center text-slate-200 font-semibold">CI/CD Pipeline</h3>

      <PipelineStage
        title="Developer Push"
        description="git push to main branch triggers GitHub webhook"
        delay={0}
      />

      <AnimatedArrow delay={0.4} />

      <PipelineStage
        title="Self-Hosted Runner (VM 3)"
        description="GitHub Actions runner on k3s VM receives webhook"
        delay={0.8}
      />

      <AnimatedArrow delay={1.2} />

      <PipelineStage
        title="Docker Build"
        description="Multi-stage build → Tag image → Push to ghcr.io"
        delay={1.6}
      />

      <AnimatedArrow delay={2} />

      <PipelineStage
        title="kubectl apply"
        description="Deploy updated image to k3s cluster"
        delay={2.4}
      />

      <AnimatedArrow delay={2.8} />

      <PipelineStage
        title="Rolling Update"
        description="k3s performs zero-downtime deployment"
        delay={3.2}
      />

      <AnimatedArrow delay={3.6} />

      <PipelineStage
        title="Live Website"
        description="Updated site accessible at markcalip.com (~4-5 min total)"
        delay={4}
        highlight
      />
    </div>
  );
}