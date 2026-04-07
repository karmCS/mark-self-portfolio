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
      className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 shadow-lg"
    >
      {icon && <div className="text-4xl mb-3">{icon}</div>}
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </motion.div>
  );
}

export function AlertPipeline() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-slate-900/50 rounded-xl border border-slate-800">
      <h2 className="text-2xl font-bold mb-8 text-center">AI-Powered Alert System</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
        className="mt-8 p-4 bg-blue-900/20 border border-blue-700 rounded-lg"
      >
        <p className="text-sm text-center text-blue-300">
          <strong>Result:</strong> Real-time alerts without VPN — faster response to downtime
        </p>
      </motion.div>
    </div>
  );
}