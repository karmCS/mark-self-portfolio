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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="bg-slate-800/30 border border-slate-700/50 rounded p-3"
    >
      {icon && <div className="text-2xl mb-2">{icon}</div>}
      <h4 className="text-sm font-semibold mb-1 text-slate-200">{title}</h4>
      <p className="text-xs text-slate-400 leading-snug">{description}</p>
    </motion.div>
  );
}

export function AlertPipeline() {
  return (
    <div className="w-full max-w-2xl mx-auto my-12 p-6 bg-slate-900/30 rounded-lg border border-slate-800">
      <h3 className="text-lg font-serif mb-6 text-center text-slate-200">AI-Powered Alert System</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <AlertStage 
          title="Grafana"
          description="Detects threshold breach (CPU > 80%, disk full, etc.)"
          delay={0}
          icon="📊"
        />
        
        <AlertStage 
          title="n8n Workflow"
          description="Receives webhook, extracts alert details"
          delay={0.5}
          icon="⚙️"
        />
        
        <AlertStage 
          title="Ollama (Phi3:mini)"
          description="Interprets alert into plain English"
          delay={1}
          icon="🤖"
        />
        
        <AlertStage 
          title="Discord Bot"
          description="Posts to server, viewable on phone"
          delay={1.5}
          icon="💬"
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="mt-6 p-3 bg-blue-900/10 border border-blue-700/30 rounded"
      >
        <p className="text-xs text-center text-blue-300">
          <strong>Result:</strong> Real-time alerts without VPN — faster response to downtime
        </p>
      </motion.div>
    </div>
  );
}