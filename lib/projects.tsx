import { Project } from '@/types/project';
import { AlertPipeline } from '@/components/diagrams/alert-pipeline';
import { CICDPipeline } from '@/components/diagrams/ci-cd-pipeline';
import { NetworkArchitecture } from '@/components/diagrams/network-architecture';
import CollapsibleInfoCard from '@/components/ui/collapsible-info-card';

export const projects: Project[] = [
  {
    slug: 'self-hosted-infrastructure',
    title: 'Project Friday - Enterprise Inspired Self Hosted Infrastructure',
    description: 'An AI-monitored personal cloud. Fully private, owned, operated, and controlled.',
    longDescription: (
      <>
        <h2>Overview</h2>
        <p>An industry-adjacent home infrastructure reducing dependence on cloud services by self-hosting alternatives to iCloud Photos, Google Drive, and password managers. This project combines enterprise DevOps practices with AI-powered monitoring to create a fully private, self-hosted cloud platform.</p>

        <p>My interest in cloud infrastructure and virtual machines deepened after observing my university's CSE department, where VMs provide the flexibility needed for teaching operating systems. Rather than building a hobbyist setup, I focused on implementing industry-standard practices used in professional system administration and development operations.</p>

        <CollapsibleInfoCard label="Hardware">
          <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] block mb-3">Dell Optiplex 3080 Micro — Ubuntu Server</span>
          <ul className="space-y-2">
            <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Intel i5-10500t (6 cores, 12 threads)</li>
            <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">16 GB DDR4 SODIMM</li>
            <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">500 GB NVMe SSD + 500 GB SATA SSD</li>
            <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">4TB HDD (external bay)</li>
          </ul>
        </CollapsibleInfoCard>

        <CollapsibleInfoCard label="Architecture">
          <div className="space-y-6">
            <div>
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] block mb-3">Virtualization — Proxmox VE</span>
              <ul className="space-y-2">
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]"><span className="text-[#111111] font-medium">VM 1:</span> Main services (8GB RAM, 6 cores)</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]"><span className="text-[#111111] font-medium">VM 2:</span> AI inference (4GB RAM, 2 cores)</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]"><span className="text-[#111111] font-medium">VM 3:</span> K3s cluster hosting this website (2GB RAM, 2 cores)</li>
              </ul>
            </div>

            <div className="border-t border-[#D8D5CE] pt-5">
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] block mb-4">Storage Architecture</span>
              <p className="text-[11px] font-mono tracking-[0.1em] uppercase text-[#999] mb-2">Primary Storage</p>
              <ul className="space-y-2 mb-4">
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">500 GB NVMe for active files</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">2nd SATA drive for local backups</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Rclone encrypted sync to Google Drive (offsite)</li>
              </ul>
              <p className="text-[11px] font-mono tracking-[0.1em] uppercase text-[#999] mb-2">Personal Cloud</p>
              <ul className="space-y-2 mb-4">
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">4TB HDD for photos (Immich) and files (Nextcloud)</li>
              </ul>
              <p className="text-[13px] text-[#666666] leading-relaxed mt-2"><span className="text-[#111111] font-medium">Current Limitations:</span> Achieving the 3-2-1 backup rule on a budget remains challenging. iPhone backups are locked to iCloud, and Immich/Nextcloud lack affordable offsite solutions. The infrastructure is designed for scalability as storage costs improve.</p>
            </div>

            <div className="border-t border-[#D8D5CE] pt-5">
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] block mb-3">Containerization</span>
              <ul className="space-y-2">
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Docker + Docker Compose with organized category-based compose files</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Portainer for container management and live log streaming</li>
              </ul>
            </div>

            <div className="border-t border-[#D8D5CE] pt-5">
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] block mb-3">Networking Stack</span>
              <ul className="space-y-2">
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Caddy reverse proxy with automatic HTTPS</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Pi-hole + Unbound for private DNS and network-wide ad blocking</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">WireGuard VPN for secure remote access</li>
              </ul>
            </div>

            <div className="border-t border-[#D8D5CE] pt-5">
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] block mb-3">Monitoring & Observability</span>
              <ul className="space-y-2">
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">InfluxDB for time-series metrics storage</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Telegraf agents collecting CPU, RAM, and disk metrics</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Grafana dashboards with threshold-based alerting</li>
              </ul>
            </div>

            <div className="border-t border-[#D8D5CE] pt-5">
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] block mb-3">AI-Powered Monitoring</span>
              <p className="text-[13px] text-[#666666] leading-relaxed mb-4">AI-powered automation is reshaping infrastructure operations. This project integrates local LLM inference into real-world monitoring workflows, demonstrating how AI can interpret system alerts and reduce response times.</p>
              <ul className="space-y-2 mb-4">
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Ollama running Phi3:mini for local LLM inference (CPU-only)</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Custom Python Discord bot for health checks and notifications</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">n8n workflow orchestration</li>
              </ul>
              <AlertPipeline />
              <p className="text-[13px] text-[#666666] leading-relaxed mt-4"><span className="text-[#111111] font-medium">Alert Flow:</span> When Grafana triggers an alert, n8n sends it to the AI bot. The bot uses Phi3:mini to interpret technical metrics into plain English, then posts to Discord for mobile notifications—no VPN required for monitoring.</p>
            </div>
          </div>
        </CollapsibleInfoCard>

        <CollapsibleInfoCard label="Website Infrastructure - PS I host this website on the homelab too">
          <div className="space-y-6">
            <div>
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] block mb-3">Kubernetes Deployment (K3s)</span>
              <p className="text-[13px] text-[#666666] leading-relaxed">Selected K3s to gain hands-on experience with industry-standard orchestration and implement zero-downtime deployment patterns.</p>
            </div>

            <div className="border-t border-[#D8D5CE] pt-5">
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] block mb-4">CI/CD Pipeline</span>
              <CICDPipeline />
              <p className="text-[13px] text-[#666666] leading-relaxed mt-4 mb-3"><span className="text-[#111111] font-medium">Automated workflow triggered on push to main:</span></p>
              <ul className="space-y-2">
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Pull latest code from GitHub</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Multi-stage Docker build of Next.js application</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Tag and push image to GitHub Container Registry</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Deploy to k3s cluster</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Rolling update with zero downtime</li>
              </ul>
            </div>

            <div className="border-t border-[#D8D5CE] pt-5">
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] block mb-4">Public Access Architecture</span>
              <NetworkArchitecture />
              <ul className="space-y-2 mt-4">
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Cloudflare Tunnel to homelab (no port forwarding needed)</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Built-in DDoS protection and CDN</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">SSL/TLS termination via Cloudflare</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Accessible at markcalip.com</li>
              </ul>
            </div>
          </div>
        </CollapsibleInfoCard>

        <CollapsibleInfoCard label="Key Learnings">
          <div className="space-y-4">
            <p className="text-[13px] text-[#666666] leading-relaxed">This project taught me that infrastructure is built through iteration and failure. I've rebuilt components multiple times—most dramatically after a single rm -rf command with, not so specific path, destroyed my Proxmox host (I spent quite considerable time fixing this). Recovering from VM disk images taught me more about LVM storage architecture than any tutorial could.</p>
            <p className="text-[13px] text-[#666666] leading-relaxed">In addition, leveraging AI tools greatly accelerated the learning process and planning the scaffolding of this project. Creating compose files, planning my stack of services, and learning how each component connect together was seamless. AI-forward workflows are already transforming productivity in all aspects of the tech industry, and expanding on this skill will prove increasingly valuable in the field.</p>
            <p className="text-[13px] text-[#666666] leading-relaxed">Successful infrastructure requires a detailed architectural thinking, a mindset acquired from studying computer engineering. When each layer serves a clear purpose, that is when reliable products emerge.</p>
            <p className="text-[13px] text-[#666666] leading-relaxed">Moving forward, this homelab will serve as a playground for some end-to-end projects I have planned soon. I love the idea of utilizing this space as a place where I can build, break, and rebuild systems and expanding my skills.</p>
          </div>
        </CollapsibleInfoCard>
      </>
    ),
    tags: ['Docker', 'Linux'],
    thumbnail: '/images/projects/friday-homelab-pic.png',
    githubUrl: 'https://github.com/karmCS/friday-homelab',
    date: '2026-04-07',
  },
];

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
