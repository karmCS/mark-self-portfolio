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
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-portfolio-bg-secondary border border-portfolio-border rounded-lg overflow-hidden group"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="aspect-video bg-portfolio-bg-primary relative overflow-hidden">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-portfolio-text-secondary">
              <p className="text-sm">Project Image</p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-portfolio-bg-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <h3 className="text-xl sm:text-2xl font-serif mb-3 group-hover:text-portfolio-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-portfolio-text-secondary text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-portfolio-bg-primary border border-portfolio-border text-xs text-portfolio-text-secondary rounded-full"
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
                <Github className="w-4 h-4" />
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
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
