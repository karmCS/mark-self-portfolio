import { Project } from '@/types/project';
import { AlertPipeline } from '@/components/diagrams/alert-pipeline';
import { CICDPipeline } from '@/components/diagrams/ci-cd-pipeline';
import { NetworkArchitecture } from '@/components/diagrams/network-architecture';

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

        <h2>Hardware</h2>
        <p><strong>Dell Optiplex 3080 Micro</strong> running Ubuntu Server</p>
        <ul>
          <li>Intel i5-10500t (6 cores, 12 threads)</li>
          <li>16 GB DDR4 SODIMM</li>
          <li>500 GB NVMe SSD + 500 GB SATA SSD</li>
          <li>4TB HDD (external bay)</li>
        </ul>

        <h2>Architecture</h2>

        <h3>Virtualization - Proxmox VE</h3>
        <ul>
          <li><strong>VM 1:</strong> Main services (8GB RAM, 6 cores)</li>
          <li><strong>VM 2:</strong> AI inference (4GB RAM, 2 cores)</li>
          <li><strong>VM 3:</strong> K3s cluster hosting this website (2GB RAM, 2 cores)</li>
        </ul>

        <h3>Storage Architecture</h3>
        <p><strong>Primary Storage:</strong></p>
        <ul>
          <li>500 GB NVMe for active files</li>
          <li>2nd SATA drive for local backups</li>
          <li>Rclone encrypted sync to Google Drive (offsite)</li>
        </ul>

        <p><strong>Personal Cloud:</strong></p>
        <ul>
          <li>4TB HDD for photos (Immich) and files (Nextcloud)</li>
        </ul>

        <p><strong>Current Limitations:</strong> Achieving the 3-2-1 backup rule (3 copies, 2 local, 1 offsite) on a budget remains challenging. iPhone backups are locked to iCloud, and Immich/Nextcloud lack affordable offsite solutions. The infrastructure is designed for scalability as storage costs improve.</p>

        <h3>Containerization</h3>
        <ul>
          <li>Docker + Docker Compose with organized category-based compose files</li>
          <li>Portainer for container management and live log streaming</li>
        </ul>

        <h3>Networking Stack</h3>
        <ul>
          <li>Caddy reverse proxy with automatic HTTPS</li>
          <li>Pi-hole + Unbound for private DNS and network-wide ad blocking</li>
          <li>WireGuard VPN for secure remote access</li>
        </ul>

        <h3>Monitoring & Observability</h3>
        <ul>
          <li>InfluxDB for time-series metrics storage</li>
          <li>Telegraf agents collecting CPU, RAM, and disk metrics</li>
          <li>Grafana dashboards with threshold-based alerting</li>
        </ul>

        <h3>AI-Powered Monitoring</h3>
        <p>AI-powered automation is reshaping infrastructure operations. This project integrates local LLM inference into real-world monitoring workflows, demonstrating how AI can interpret system alerts and reduce response times.</p>

        <ul>
          <li>Ollama running Phi3:mini for local LLM inference (CPU-only)</li>
          <li>Custom Python Discord bot for health checks and notifications</li>
          <li>n8n workflow orchestration</li>
        </ul>

        <AlertPipeline />

        <p><strong>Alert Flow:</strong> When Grafana triggers an alert, n8n sends it to the AI bot. The bot uses Phi3:mini to interpret technical metrics into plain English, then posts to Discord for mobile notifications—no VPN required for monitoring.</p>

        <h2>Website Infrastructure</h2>

        <h3>Kubernetes Deployment (K3s)</h3>
        <p>Selected K3s to gain hands-on experience with industry-standard orchestration and implement zero-downtime deployment patterns.</p>

        <h3>CI/CD Pipeline</h3>

        <CICDPipeline />

        <p><strong>Automated workflow triggered on push to main:</strong></p>
        <ul>
          <li>Pull latest code from GitHub</li>
          <li>Multi-stage Docker build of Next.js application</li>
          <li>Tag and push image to GitHub Container Registry</li>
          <li>Deploy to k3s cluster</li>
          <li>Rolling update with zero downtime</li>
        </ul>

        <h3>Public Access Architecture</h3>

        <NetworkArchitecture />

        <ul>
          <li>Cloudflare Tunnel to homelab (no port forwarding needed)</li>
          <li>Built-in DDoS protection and CDN</li>
          <li>SSL/TLS termination via Cloudflare</li>
          <li>Accessible at markcalip.com</li>
        </ul>

        <h2>Key Learnings</h2>
        <p>This project taught me that infrastructure is built through iteration and failure. I've rebuilt components multiple times—most dramatically after a single rm -rf command with, not so specific path, destroyed my Proxmox host (I spent quite considerable time fixing this). Recovering from VM disk images taught me more about LVM storage architecture than any tutorial could.</p>

        <p>In addition, leveraging AI tools greatly accelerated the learning process and planning the scaffolding of this project. Creating compose files, planning my stack of services, and learning how each component connect together was seamless. AI-forward workflows are already transforming productivity in all aspects of the tech industry, and expanding on this skill will prove increasingly valuable in the field.</p>

        <p>Successful infrastructure requires a detailed architectural thinking, a mindset acquired from studying computer engineering. When each layer serves a clear purpose, that is when reliable products emerge.</p>

        <p>Moving forward, this homelab will serve as a playground for some end-to-end projects I have planned soon. I love the idea of utilizing this space as a place where I can build, break, and rebuild systems and expanding my skills.</p>
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