'use client';

import { motion } from 'framer-motion';

interface NetworkNodeProps {
  title: string;
  description: string;
  delay: number;
  position: 'top' | 'middle' | 'bottom';
}

function NetworkNode({ title, description, delay, position }: NetworkNodeProps) {
  const bgColor = position === 'top' ? 'bg-white/50 border-portfolio-text-primary/30'
                : position === 'middle' ? 'bg-white/40 border-portfolio-border'
                : 'bg-white/40 border-portfolio-border';

  return (
    <motion.div
      initial={{ opacity: 0, y: position === 'top' ? -10 : position === 'bottom' ? 10 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`rounded px-4 py-3 border ${bgColor}`}
    >
      <h4 className="font-sans mb-1.5 text-base text-portfolio-text-primary">{title}</h4>
      <p className="text-sm text-portfolio-text-secondary leading-relaxed italic">{description}</p>
    </motion.div>
  );
}

export function NetworkArchitecture() {
  return (
    <div className="w-full max-w-3xl mx-auto my-16 p-8 bg-portfolio-bg-secondary/60 rounded border border-portfolio-border">
      <h3 className="text-2xl font-sans mb-8 text-center text-portfolio-text-primary">Network Flow</h3>

      <div className="mb-4">
        <NetworkNode
          title="Public Internet"
          description="User requests markcalip.com"
          delay={0}
          position="top"
        />
      </div>

      <div className="mb-4">
        <NetworkNode
          title="Cloudflare Tunnel"
          description="SSL termination, DDoS protection, CDN caching"
          delay={0.2}
          position="middle"
        />
      </div>

      <div className="mb-6">
        <NetworkNode
          title="Caddy Reverse Proxy (VM 1)"
          description="Routes traffic to *.friday.local domains"
          delay={0.4}
          position="middle"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <NetworkNode
          title="k3s Cluster (VM 3)"
          description="Portfolio website on NodePort 30080"
          delay={0.6}
          position="bottom"
        />

        <NetworkNode
          title="Docker Services (VM 1)"
          description="Immich, Vaultwarden, Nextcloud, etc."
          delay={0.8}
          position="bottom"
        />

        <NetworkNode
          title="Ollama (VM 2)"
          description="AI inference for alert interpretation"
          delay={1}
          position="bottom"
        />
      </div>
    </div>
  );
}