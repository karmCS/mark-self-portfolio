'use client';

import { motion } from 'framer-motion';

interface NetworkNodeProps {
  title: string;
  description: string;
  delay: number;
  position: 'top' | 'middle' | 'bottom';
}

function NetworkNode({ title, description, delay, position }: NetworkNodeProps) {
  const bgColor = position === 'top' ? 'bg-blue-500/5 border-blue-500/20'
                : position === 'middle' ? 'bg-slate-500/5 border-slate-500/20'
                : 'bg-green-500/5 border-green-500/20';

  return (
    <motion.div
      initial={{ opacity: 0, y: position === 'top' ? -15 : position === 'bottom' ? 15 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`rounded-md px-4 py-3 border ${bgColor}`}
    >
      <h4 className="font-medium mb-1 text-sm text-slate-100">{title}</h4>
      <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export function NetworkArchitecture() {
  return (
    <div className="w-full max-w-xl mx-auto my-10 p-5 bg-slate-900/20 rounded-lg border border-slate-800/50">
      <h3 className="text-base font-serif mb-5 text-center text-slate-200 font-semibold">Network Flow</h3>

      <div className="mb-3">
        <NetworkNode
          title="Public Internet"
          description="User requests markcalip.com"
          delay={0}
          position="top"
        />
      </div>

      <div className="mb-3">
        <NetworkNode
          title="Cloudflare Tunnel"
          description="SSL termination, DDoS protection, CDN caching"
          delay={0.3}
          position="middle"
        />
      </div>

      <div className="mb-4">
        <NetworkNode
          title="Caddy Reverse Proxy (VM 1)"
          description="Routes traffic to *.friday.local domains"
          delay={0.6}
          position="middle"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        <NetworkNode
          title="k3s Cluster (VM 3)"
          description="Portfolio website on NodePort 30080"
          delay={0.9}
          position="bottom"
        />

        <NetworkNode
          title="Docker Services (VM 1)"
          description="Immich, Vaultwarden, Nextcloud, etc."
          delay={1.1}
          position="bottom"
        />

        <NetworkNode
          title="Ollama (VM 2)"
          description="AI inference for alert interpretation"
          delay={1.3}
          position="bottom"
        />
      </div>
    </div>
  );
}