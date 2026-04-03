import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'diy-nas-server',
    title: 'DIY NAS Server',
    description: 'A home server built on a used HP EliteDesk for under $310 USD',
    longDescription: `
      <h2>Project Overview</h2>
      <p>Built a custom Network Attached Storage (NAS) server using TrueNAS on recycled enterprise hardware.</p>

      <h3>Key Features</h3>
      <ul>
        <li>24/7 file storage and backup solution</li>
        <li>Plex media server integration</li>
        <li>Automated backup systems</li>
        <li>Remote access capabilities</li>
      </ul>

      <h3>Technical Implementation</h3>
      <p>Configured TrueNAS SCALE on an HP EliteDesk with 16GB RAM and multiple hard drives in a ZFS configuration for data redundancy.</p>

      <h3>Challenges & Learnings</h3>
      <p>Learned about RAID configurations, network protocols, and system administration while staying within budget constraints.</p>
    `,
    tags: ['TrueNAS', 'Self-hosting', 'Home Lab', 'Linux'],
    thumbnail: '',
    githubUrl: '',
    liveUrl: '',
    date: '2024-03-15',
  },
  {
    slug: 'smart-home-automation',
    title: 'Smart Home Automation',
    description: 'IoT-based home automation system using ESP32 and MQTT',
    longDescription: `
      <h2>Project Overview</h2>
      <p>Designed and implemented a smart home automation system using ESP32 microcontrollers and Home Assistant.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Temperature and humidity monitoring</li>
        <li>Automated lighting control</li>
        <li>Motion detection sensors</li>
        <li>Mobile app integration</li>
      </ul>

      <h3>Technical Stack</h3>
      <p>ESP32, MQTT protocol, Home Assistant, Python scripts for automation rules.</p>
    `,
    tags: ['ESP32', 'IoT', 'MQTT', 'Home Assistant'],
    thumbnail: '',
    githubUrl: 'https://github.com',
    liveUrl: '',
    date: '2024-02-10',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Modern portfolio website built with Next.js and Framer Motion',
    longDescription: `
      <h2>Project Overview</h2>
      <p>A responsive portfolio website showcasing my projects and skills with smooth animations.</p>

      <h3>Features</h3>
      <ul>
        <li>Fully responsive design</li>
        <li>Smooth scroll animations</li>
        <li>Dynamic project showcase</li>
        <li>Dark theme interface</li>
      </ul>
    `,
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    thumbnail: '',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    date: '2024-01-20',
  },
  {
    slug: 'arduino-weather-station',
    title: 'Arduino Weather Station',
    description: 'Real-time weather monitoring system with Arduino and sensors',
    longDescription: `
      <h2>Project Overview</h2>
      <p>Built a comprehensive weather station using Arduino to collect and display environmental data.</p>

      <h3>Sensors Used</h3>
      <ul>
        <li>DHT22 for temperature and humidity</li>
        <li>BMP180 for barometric pressure</li>
        <li>Rain sensor module</li>
        <li>UV light sensor</li>
      </ul>

      <h3>Data Visualization</h3>
      <p>Created a web dashboard to display real-time weather data with historical charts.</p>
    `,
    tags: ['Arduino', 'Sensors', 'C++', 'Data Visualization'],
    thumbnail: '',
    githubUrl: 'https://github.com',
    liveUrl: '',
    date: '2023-11-05',
  },
];

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
