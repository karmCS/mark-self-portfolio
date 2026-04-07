'use client';

import { motion } from 'framer-motion';

interface NetworkNodeProps {
  title: string;
  description: string;
  delay: number;
  position: 'top' | 'middle' | 'bottom';
}

function NetworkNode({ title, description, delay, position }: NetworkNodeProps) {
  const bgColor = position === 'top' ? 'bg-blue-900/10 border-blue-500/30'
                : position === 'middle' ? 'bg-blue-900/10 border-blue-500/30'
                : 'bg-green-900/10 border-green-500/30';

  return (
    <motion.div
      initial={{ opacity: 0, y: position === 'top' ? -30 : position === 'bottom' ? 30 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`rounded p-3 border ${bgColor}`}
    >
      <h4 className="font-semibold mb-1 text-sm text-slate-200">{title}</h4>
      <p className="text-xs text-slate-400 leading-snug">{description}</p>
    </motion.div>
  );
}

export function NetworkArchitecture() {
  return (
    <div className="w-full max-w-2xl mx-auto my-12 p-6 bg-slate-900/30 rounded-lg border border-slate-800">
      <h3 className="text-lg font-serif mb-6 text-center text-slate-200">Network Flow</h3>

      {/* Internet/User Layer */}
      <div className="mb-4">
        <NetworkNode 
          title="Public Internet"
          description="User requests markcalip.com"
          delay={0}
          position="top"
        />
      </div>
      
      {/* Cloudflare Layer */}
      <div className="mb-4">
        <NetworkNode
          title="Cloudflare Tunnel"
          description="SSL termination, DDoS protection, CDN caching"
          delay={0.5}
          position="middle"
        />
      </div>

      {/* Homelab Entry */}
      <div className="mb-4">
        <NetworkNode 
          title="Caddy Reverse Proxy (VM 1)"
          description="Routes traffic to *.friday.local domains"
          delay={1}
          position="middle"
        />
      </div>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <NetworkNode 
          title="k3s Cluster (VM 3)"
          description="Portfolio website on NodePort 30080"
          delay={1.5}
          position="bottom"
        />
        
        <NetworkNode 
          title="Docker Services (VM 1)"
          description="Immich, Vaultwarden, Nextcloud, etc."
          delay={1.7}
          position="bottom"
        />
        
        <NetworkNode 
          title="Ollama (VM 2)"
          description="AI inference for alert interpretation"
          delay={1.9}
          position="bottom"
        />
      </div>
    </div>
  );
}