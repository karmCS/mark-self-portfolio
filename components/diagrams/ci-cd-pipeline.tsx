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
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={`
        rounded p-3
        ${highlight
          ? 'bg-green-900/10 border border-green-500/30'
          : 'bg-slate-800/30 border border-slate-700/50'
        }
      `}
    >
      <h4 className="text-sm font-semibold mb-1 text-slate-200">{title}</h4>
      <p className="text-xs text-slate-400 leading-snug">{description}</p>
    </motion.div>
  );
}

function AnimatedArrow({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex justify-center my-2"
    >
      <svg width="16" height="24" viewBox="0 0 16 24" className="text-slate-600">
        <line x1="8" y1="0" x2="8" y2="18" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="8,24 4,18 12,18" fill="currentColor" />
      </svg>
    </motion.div>
  );
}

export function CICDPipeline() {
  return (
    <div className="w-full max-w-xl mx-auto my-12 p-6 bg-slate-900/30 rounded-lg border border-slate-800">
      <h3 className="text-lg font-serif mb-6 text-center text-slate-200">CI/CD Pipeline</h3>
      
      <PipelineStage 
        title="Developer Push"
        description="git push to main branch triggers GitHub webhook"
        delay={0}
      />
      
      <AnimatedArrow delay={0.5} />
      
      <PipelineStage 
        title="Self-Hosted Runner (VM 3)"
        description="GitHub Actions runner on k3s VM receives webhook"
        delay={1}
      />
      
      <AnimatedArrow delay={1.5} />
      
      <PipelineStage 
        title="Docker Build"
        description="Multi-stage build → Tag image → Push to ghcr.io"
        delay={2}
      />
      
      <AnimatedArrow delay={2.5} />
      
      <PipelineStage 
        title="kubectl apply"
        description="Deploy updated image to k3s cluster"
        delay={3}
      />
      
      <AnimatedArrow delay={3.5} />
      
      <PipelineStage 
        title="Rolling Update"
        description="k3s performs zero-downtime deployment"
        delay={4}
      />
      
      <AnimatedArrow delay={4.5} />
      
      <PipelineStage 
        title="Live Website"
        description="Updated site accessible at markcalip.com (~4-5 min total)"
        delay={5}
        highlight
      />
    </div>
  );
}