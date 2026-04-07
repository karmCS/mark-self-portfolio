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
        rounded-lg p-6 shadow-lg
        ${highlight 
          ? 'bg-green-900/20 border-2 border-green-500 shadow-green-500/20' 
          : 'bg-slate-800/50 border border-slate-700'
        }
      `}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </motion.div>
  );
}

function AnimatedArrow({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex justify-center my-4"
    >
      <svg width="24" height="40" viewBox="0 0 24 40" className="text-slate-500">
        <line x1="12" y1="0" x2="12" y2="32" stroke="currentColor" strokeWidth="2" />
        <polygon points="12,40 6,30 18,30" fill="currentColor" />
      </svg>
    </motion.div>
  );
}

export function CICDPipeline() {
  return (
    <div className="w-full max-w-3xl mx-auto p-8 bg-slate-900/50 rounded-xl border border-slate-800">
      <h2 className="text-2xl font-bold mb-8 text-center">CI/CD Pipeline</h2>
      
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