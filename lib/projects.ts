import { Project } from '@/types/project';

export const projects: Project[] = [
  {
  slug: 'self-hosted-infrastructure',
  title: 'Project Friday - Production Grade Self Hosted Infrastructure',
  description: 'An AI-monitored personal cloud. Fully private, owned, operated, and controlled.',
  longDescription: `
    <h2>Project Overview</h2>
    <p>This project served as a means of replacing cloud dependency on services like iCloud and Google Drive while creating hands-on experience with DevOps production-grade tools.</p>
    
    <p>I have always been fascinated with the inner workings of cloud infrastructures, virtual machines, and large-scale system administration. This interest began after I was given the opportunity to get a look behind the scenes at my university's CSE department. Particularly in my operating systems course, virtual machines are the backbone of the department as they allow for greater flexibility in teaching.</p>
    
    <p>Thus, I started to do my own research to find ways to implement infrastructure at home. The key detail, however, is building this in a way that strays away from the hobbyist level. I wanted to implement industry standards and practices that you typically find in the real world of system administration and development operations. In addition, I wanted to run automation and AI - an industry that in this day and age is growing exponentially.</p>
    
    <p>AI-powered automation is reshaping infrastructure operations. This project allowed me to integrate local LLM inference into real-world monitoring workflows, demonstrating how AI can interpret system alerts and reduce response times.</p>

    <h3>The System</h3>
    <ul>
      <li>Dell Optiplex 3080 Micro running Ubuntu (purchased refurbished)</li>
      <ul>
        <li>Intel i5-10500t (6 cores, 12 threads)</li>
        <li>16 GB DDR4 SODIMM</li>
        <li>500 GB NVMe SSD + 2nd 500 GB SATA SSD</li>
        <li>4TB HDD connected to an external hard drive bay</li>
      </ul>
    </ul>

    <h3>The Technical Stack</h3>
    <ul>
      <li>Hypervisor: Proxmox VE</li>
      <ul>
        <li>Three virtual machines</li>
        <ul>
          <li>VM 1: Main services (8GB RAM/6 cores)</li>
          <li>VM 2: AI Inference (4GB RAM/2 cores)</li>
          <li>VM 3: This website here through a k3s cluster (2GB RAM/2 cores)</li>
        </ul>
      </ul>
    </ul>

    <h3>Storage Strategy</h3>
    <ul>
      <li>500 GB NVMe holds all main files, 2nd SATA drive for local backup, Rclone syncs encrypted backup to Google Drive</li>
      <li>4TB HDD becomes my personal cloud. Photos sync through Immich, files sync through Nextcloud.</li>
      <ul>
        <li>This solution isn't perfect.</li>
        <li>Implementing the 3-2-1 industry standard (three storage solutions, two on-site, one off-site) without dropping hundreds of dollars is very difficult in practice.</li>
        <li>In addition, iPhone backups are hardcoded for iCloud - same with iMessages.</li>
        <li>Google Drive became my "off-site" backup for my main drive, but Immich and Nextcloud lack a solution.</li>
        <li>The beauty of this homelab however is scalability. Eventually, whenever the market stabilizes and I can pay a reasonable price for storage, I will fully lose dependence on the cloud.</li>
      </ul>
    </ul>

    <h3>Containerization</h3>
    <ul>
      <li>Docker + Docker Compose for everything with per-category compose files (network, monitoring, infrastructure, etc.)</li>
      <li>Portainer for container management and log streaming</li>
    </ul>

    <h3>Networking</h3>
    <ul>
      <li>Caddy reverse proxy with automatic HTTPS for simple URLs</li>
      <li>Pi-hole and Unbound providing private DNS and network ad-blocking features</li>
      <li>WireGuard VPN to allow for remote access</li>
    </ul>

    <h3>Monitoring and Observability</h3>
    <ul>
      <li>InfluxDB time-series database</li>
      <li>Telegraf agents collecting system metrics (CPU, RAM, disk usage)</li>
      <li>Grafana dashboards with threshold-based alerting integrated into n8n workflows</li>
    </ul>

    <h3>AI Infrastructure</h3>
    <ul>
      <li>Ollama running Phi3:mini for local LLM inference</li>
      <ul>
        <li>Lack of a dedicated GPU means CPU-only inference - for this specific use case I have no problem with that</li>
      </ul>
      <li>Custom written Python Discord bot for system health checks</li>
    </ul>

    <AlertPipeline />

    <ul>
      <li>n8n orchestration: When n8n receives an alert, the bot (connected to Phi3:mini) is prompted to interpret the message into easy-to-read text, then sends the message to a Discord server which can be viewed on my phone.</li>
      <li>Faster response to errors and downtime without needing WireGuard VPN</li>
    </ul>

    <h3>Website Hosting</h3>
    <ul>
      <li>Implemented with Kubernetes (k3s)</li>
      <ul>
        <li>Mainly picked to expand skills in k3s as an industry orchestration platform</li>
        <li>Allowed me to implement deployment patterns with zero-downtime</li>
      </ul>
    </ul>

    <h4>CI/CD Workflow</h4>

    <CICDPipeline />

    <ul>
      <li>Automated build pipeline triggered by git push to main branch</li>
      <li>Steps:</li>
      <ul>
        <li>Pull latest code from GitHub repo</li>
        <li>Build Next.js application with multi-stage Docker build</li>
        <li>Tag and push Docker image to GitHub container registry</li>
        <li>Deploy image to k3s cluster</li>
        <li>k3s performs rolling update</li>
      </ul>
    </ul>

    <h4>Networking</h4>

    <NetworkArchitecture />

    <ul>
      <li>Secure tunnel from Cloudflare edge to homelab without port forwarding</li>
      <li>DDoS protection and CDN</li>
      <li>SSL certificate (provided by Cloudflare)</li>
      <li>Access via markcalip.com</li>
    </ul>

    <h3>What I Learned</h3>
    <p>This project was an eye-opener for me. I spent a long time just planning out the infrastructure before the system even came in the mail.</p>
    
    <p>An important piece of this was utilizing AI in my workflow. I could have spent multiple months debugging, reading documentation, and parsing through Reddit posts. Instead this entire stack became fully operational in just one week's time. I studied what tools to use, best practices, how to secure my data, and debug errors all with Claude. In terms of orchestration, I learned that infrastructure is built in layers. It can be easy to get lost in all the cool tools you can use, but instead of duct-taping everything together, everything is organized and fit into place.</p>
  `,
  tags: ['Docker', 'Linux'],
  //thumbnail: '/images/projects/your-project.png',
  thumbnail: '',
  githubUrl: 'https://github.com/karmCS/mark-friday-homelab',
  date: '2026-04-07',
},
];

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}