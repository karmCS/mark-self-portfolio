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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="bg-white/40 border border-portfolio-border rounded p-4"
    >
      {icon && <div className="text-2xl mb-2">{icon}</div>}
      <h4 className="text-base font-sans mb-2 text-portfolio-text-primary">{title}</h4>
      <p className="text-sm text-portfolio-text-secondary leading-relaxed italic">{description}</p>
    </motion.div>
  );
}

export function AlertPipeline() {
  return (
    <div className="w-full max-w-3xl mx-auto my-10 sm:my-16 p-5 sm:p-8 bg-portfolio-bg-secondary/60 rounded border border-portfolio-border">
      <h3 className="text-xl sm:text-2xl font-sans mb-6 sm:mb-8 text-center text-portfolio-text-primary">AI-Powered Alert System</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <AlertStage
          title="Grafana (VM 1)"
          description="Monitors metrics via InfluxDB; triggers on threshold breach"
          delay={0}
          icon="📊"
        />

        <AlertStage
          title="n8n Workflow (VM 1)"
          description="Receives Grafana webhook, formats alert context"
          delay={0.2}
          icon="⚙️"
        />

        <AlertStage
          title="Ollama (VM 2)"
          description="Phi3:mini translates technical alert into plain English"
          delay={0.4}
          icon="🤖"
        />

        <AlertStage
          title="Discord Bot (VM 2)"
          description="Python bot posts human-readable alert to Discord server"
          delay={0.6}
          icon="💬"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-5 sm:mt-6 p-4 bg-white/60 border border-portfolio-border rounded"
      >
        <p className="text-sm text-center text-portfolio-text-primary italic leading-relaxed">
          All processing happens locally — no data leaves the homelab network
        </p>
      </motion.div>
    </div>
  );
}