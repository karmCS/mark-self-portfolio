'use client';

import { motion } from 'framer-motion';

interface StageProps {
  title: string;
  description: string;
  delay: number;
  icon?: string;
}

function AlertStage({ title, description, delay, icon }: StageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="bg-slate-800/20 border border-slate-700/30 rounded-md p-3"
    >
      {icon && <div className="text-xl mb-1.5">{icon}</div>}
      <h4 className="text-sm font-medium mb-1 text-slate-100">{title}</h4>
      <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export function AlertPipeline() {
  return (
    <div className="w-full max-w-xl mx-auto my-10 p-5 bg-slate-900/20 rounded-lg border border-slate-800/50">
      <h3 className="text-base font-serif mb-5 text-center text-slate-200 font-semibold">AI-Powered Alert System</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        <AlertStage
          title="Grafana"
          description="Detects threshold breach (CPU > 80%, disk full, etc.)"
          delay={0}
          icon="📊"
        />

        <AlertStage
          title="n8n Workflow"
          description="Receives webhook, extracts alert details"
          delay={0.3}
          icon="⚙️"
        />

        <AlertStage
          title="Ollama (Phi3:mini)"
          description="Interprets alert into plain English"
          delay={0.6}
          icon="🤖"
        />

        <AlertStage
          title="Discord Bot"
          description="Posts to server, viewable on phone"
          delay={0.9}
          icon="💬"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="mt-4 p-3 bg-blue-500/5 border border-blue-500/20 rounded-md"
      >
        <p className="text-xs text-center text-blue-200">
          <strong className="font-medium">Result:</strong> Real-time alerts without VPN — faster response to downtime
        </p>
      </motion.div>
    </div>
  );
}