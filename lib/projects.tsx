import { Project } from '@/types/project';
import { AlertPipeline } from '@/components/diagrams/alert-pipeline';
import { CICDPipeline } from '@/components/diagrams/ci-cd-pipeline';
import { NetworkArchitecture } from '@/components/diagrams/network-architecture';
import CollapsibleInfoCard from '@/components/ui/collapsible-info-card';

export const projects: Project[] = [
  {
    slug: 'project-rendu',
    title: 'Project Rendu - Local-First Medical Documentation System',
    description: 'A two-device, fully local medical scribe. Nothing leaves the LAN.',
    longDescription: (
      <>
        <h2>Overview</h2>
        <p>Rendu is a two-device, fully local medical documentation system built for a single non-technical clinician. A Raspberry Pi 5 with a 7-inch touchscreen records and transcribes patient encounters; an ASUS ROG Ally formats them into clinical notes using a local LLM. Nothing leaves the local network — no cloud APIs, no accounts, no subscriptions, no telemetry.</p>

        <p>Off-the-shelf medical scribes are cloud-based and subscription-priced. Rendu is the self-hosted alternative built around two constraints: simplicity for the end user, and privacy by construction. The Pi is the capture device; the Ally is the read-and-edit device; mDNS over the LAN is the only thing connecting them.</p>

        <CollapsibleInfoCard label="Hardware">
          <div className="space-y-6">
            <div>
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] block mb-3">Capture Device — Raspberry Pi 5</span>
              <ul className="space-y-2">
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Official 7-inch touchscreen at native 800×480</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">USB microphone for clinical audio capture</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">microSD storage with local SQLite database</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">systemd auto-start on boot — runs as an appliance</li>
              </ul>
            </div>

            <div className="border-t border-[#D8D5CE] pt-5">
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] block mb-3">Inference Device — ASUS ROG Ally</span>
              <ul className="space-y-2">
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Windows 11 handheld with integrated GPU</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Runs Ollama with <span className="text-[#111111] font-medium">llama3.1:8b</span> for PHI redaction and note formatting</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Hosts the FastAPI backend and React review UI</li>
              </ul>
            </div>
          </div>
        </CollapsibleInfoCard>

        <CollapsibleInfoCard label="Architecture">
          <div className="space-y-6">
            <div>
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] block mb-3">Two-Device Split</span>
              <p className="text-[13px] text-[#666666] leading-relaxed mb-3">The capture path and the inference path are physically separated. The Pi handles realtime audio capture and on-device Whisper.cpp transcription; the Ally handles the heavier LLM work. They communicate over the LAN with mDNS-resolved hostnames so neither device needs static IPs or manual configuration.</p>
              <ul className="space-y-2">
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]"><span className="text-[#111111] font-medium">Pi → Ally:</span> POST /sync with audio + transcript payload</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]"><span className="text-[#111111] font-medium">Ally → Pi:</span> 200 OK acknowledges receipt</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]"><span className="text-[#111111] font-medium">Discovery:</span> mDNS hostname <span className="font-mono text-[12px]">rendu-ally.local</span> — no IP configuration required</li>
              </ul>
            </div>

            <div className="border-t border-[#D8D5CE] pt-5">
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] block mb-3">Pi Side</span>
              <ul className="space-y-2">
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">PyQt5 touchscreen UI sized for 800×480</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">PyAudio + Whisper.cpp for local capture and transcription</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">SQLite via stdlib <span className="font-mono text-[12px]">sqlite3</span></li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Custom in-app on-screen keyboard — no system OSK or physical keyboard needed</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">systemd unit for auto-start; appliance-style boot</li>
              </ul>
            </div>

            <div className="border-t border-[#D8D5CE] pt-5">
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] block mb-3">Ally Side</span>
              <ul className="space-y-2">
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">FastAPI backend, packaged as a single Windows exe via PyInstaller</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">React + Vite frontend served locally for review and edit</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">SQLAlchemy + SQLite for persistence</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Ollama with <span className="font-mono text-[12px]">llama3.1:8b</span> for PHI redaction and structured note formatting</li>
                <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Multi-template note formats (SOAP, DAP, Epic) with per-format prompts</li>
              </ul>
            </div>

            <div className="border-t border-[#D8D5CE] pt-5">
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#999] block mb-3">Privacy Model</span>
              <p className="text-[13px] text-[#666666] leading-relaxed">All audio, transcripts, and generated notes stay on the LAN. The system has no outbound network calls in normal operation. PHI redaction runs locally before any text is presented for review, and the clinician copy-pastes the final note into their EMR — Rendu itself never integrates with external services.</p>
            </div>
          </div>
        </CollapsibleInfoCard>

        <CollapsibleInfoCard label="Engineering Process - Spec-First, Agent-Paired">
          <div className="space-y-4">
            <p className="text-[13px] text-[#666666] leading-relaxed">Rendu was built with a clear division of labor between me and the AI agent. Before any code was written, I authored six design documents covering architecture, data model, infrastructure, on-device behavior, and the network contract between the Pi and the Ally. Those specs are the artifacts that drove implementation — not the code.</p>

            <p className="text-[13px] text-[#666666] leading-relaxed">With the specs in place, I used Claude Code as the implementation agent against a tests-first loop:</p>

            <ul className="space-y-2 pl-2">
              <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Lift acceptance criteria from a spec section into a failing pytest scaffold</li>
              <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Have the agent generate a diff that satisfies the failing tests, with the relevant spec passed in as context</li>
              <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Review the diff against the spec, push back on shortcuts, and require fixes for edge cases the spec calls out (mic-unplugged guards, idle-time accounting on pause, scroll-versus-long-press disambiguation)</li>
              <li className="text-[13px] text-[#666666] pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#999] before:text-[11px]">Update the spec when implementation revealed a gap, so the doc stays authoritative for the next iteration</li>
            </ul>

            <p className="text-[13px] text-[#666666] leading-relaxed">The architecture, data model, infrastructure, and design decisions are mine. Claude Code translated them into Python, PyQt, FastAPI, and React under that loop. The Pi side ships with a 29-test pytest suite covering the audio pipeline, sync state machine, and on-screen keyboard contract.</p>
          </div>
        </CollapsibleInfoCard>

        <CollapsibleInfoCard label="Key Learnings">
          <div className="space-y-4">
            <p className="text-[13px] text-[#666666] leading-relaxed">Writing the specs first was the highest-leverage decision in the project. Every shortcut the agent reached for had a corresponding line in the spec to push back against — and every gap in the spec exposed a real design decision I had to make myself. The specs became the contract, the test source, and the review rubric all at once.</p>
            <p className="text-[13px] text-[#666666] leading-relaxed">Splitting capture from inference across two devices made the privacy story trivial to defend and the UX simpler at each end. The Pi only has to do one thing well; the Ally only has to do one thing well; the contract between them is a single POST. Most of the hard problems in clinician-facing software (account management, cloud syncing, offline reconciliation) disappear when the LAN is the only network you trust.</p>
            <p className="text-[13px] text-[#666666] leading-relaxed">Building for a non-technical user forced discipline I would not have had otherwise. The on-screen keyboard, the systemd auto-start, the single SYNC NOW button, the badge-based status model on the recordings list — all of those exist because the target clinician will not open a terminal, will not read logs, and will not know what mDNS is. The system has to disappear into the workflow.</p>
            <p className="text-[13px] text-[#666666] leading-relaxed">Rendu is in active use today. Future work includes a richer note editor on the Ally side and a graceful-shutdown path on the Pi to handle power-loss mid-recording. New work follows the same spec-first, agent-paired loop.</p>
          </div>
        </CollapsibleInfoCard>
      </>
    ),
    tags: ['Python', 'FastAPI', 'Local LLM'],
    thumbnail: '/images/projects/rendu-hero.jpg',
    screenshotTracks: [
      {
        label: 'Pi UI — 800×480',
        slides: [
          {
            src: '/images/projects/rendu/01-record.png',
            caption: 'Record screen, idle. Tap to capture an encounter.',
          },
          {
            src: '/images/projects/rendu/02-recordings.png',
            caption:
              'Recordings list with all four status badges (SYNCED, READY, TRANSCRIBING, SYNC FAILED). The pencil opens the on-screen keyboard for inline rename.',
          },
          {
            src: '/images/projects/rendu/03-sync.png',
            caption: 'Sync screen with the pending count and the SYNC NOW action.',
          },
          {
            src: '/images/projects/rendu/04-touch-keyboard.png',
            caption:
              'Custom in-app touch keyboard. No physical keyboard or system OSK required; works the same in DEV_MODE on Windows.',
          },
        ],
      },
      {
        label: 'Ally UI — 1440×900',
        slides: [
          {
            src: '/images/projects/rendu/ally/01-kanban.png',
            caption: 'Kanban board grouping recordings by lifecycle stage.',
          },
          {
            src: '/images/projects/rendu/ally/02-note-detail.png',
            caption:
              'Note detail view with the formatted clinical note ready for review and copy-paste into the EMR.',
          },
          {
            src: '/images/projects/rendu/ally/03-templates.png',
            caption:
              'Template manager for swapping between SOAP, DAP, and Epic-style note formats with per-format prompts.',
          },
          {
            src: '/images/projects/rendu/ally/04-settings.png',
            caption:
              'Settings surface for the local Ollama model, retention behavior, and mDNS hostname.',
          },
        ],
      },
    ],
    githubUrl: 'https://github.com/karmCS/project-rendu',
    date: '2026-05-06',
  },
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
