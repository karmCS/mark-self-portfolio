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
    <div className="w-full max-w-3xl mx-auto my-10 sm:my-16 p-5 sm:p-8 bg-portfolio-bg-secondary/60 rounded border border-portfolio-border">
      <h3 className="text-xl sm:text-2xl font-sans mb-6 sm:mb-8 text-center text-portfolio-text-primary">Public Access Architecture</h3>

      <div className="mb-3 sm:mb-4">
        <NetworkNode
          title="Public Internet"
          description="User requests markcalip.com"
          delay={0}
          position="top"
        />
      </div>

      <div className="mb-3 sm:mb-4">
        <NetworkNode
          title="Cloudflare"
          description="SSL termination, DDoS protection, CDN caching"
          delay={0.2}
          position="middle"
        />
      </div>

      <div className="mb-4 sm:mb-6">
        <NetworkNode
          title="Cloudflare Tunnel → k3s (VM 3)"
          description="Direct tunnel from VM 1 to 192.168.68.103:30080"
          delay={0.4}
          position="middle"
        />
      </div>

      <div className="mb-4 sm:mb-6">
        <NetworkNode
          title="Portfolio Website (NodePort 30080)"
          description="Next.js app running in Kubernetes pod"
          delay={0.6}
          position="bottom"
        />
      </div>

      <div className="mt-6 sm:mt-8 pt-6 border-t border-portfolio-border">
        <h4 className="text-lg font-sans mb-4 text-portfolio-text-primary">Internal Services (VM 1)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <NetworkNode
            title="Caddy Reverse Proxy"
            description="Routes *.friday.local domains (Immich, Vaultwarden, Nextcloud)"
            delay={0.8}
            position="bottom"
          />
          <NetworkNode
            title="Ollama (VM 2)"
            description="AI inference for Grafana alert interpretation"
            delay={1}
            position="bottom"
          />
        </div>
      </div>
    </div>
  );
}