'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-white/40 border border-portfolio-border rounded overflow-hidden group"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="aspect-video bg-portfolio-bg-secondary/40 relative overflow-hidden">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-portfolio-text-secondary">
              <p className="text-sm font-serif italic">Project Image</p>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-serif mb-3 text-portfolio-text-primary transition-opacity group-hover:opacity-70">
            {project.title}
          </h3>
          <p className="text-portfolio-text-secondary text-base mb-4 line-clamp-2 leading-relaxed italic">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-portfolio-bg-primary/30 border border-portfolio-border text-xs text-portfolio-text-primary font-serif"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 text-portfolio-text-secondary">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-portfolio-text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-portfolio-text-primary transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
