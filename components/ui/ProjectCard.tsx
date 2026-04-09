'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ opacity: 0.85 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="aspect-[16/9] bg-portfolio-bg-secondary overflow-hidden mb-4 border border-portfolio-border">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-portfolio-text-secondary">
                No Image
              </span>
            </div>
          )}
        </div>

        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] tracking-[0.12em] uppercase text-portfolio-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-sm font-medium leading-snug text-portfolio-text-primary group-hover:text-portfolio-text-secondary transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-portfolio-text-secondary mt-1 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-portfolio-text-secondary flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Link>
    </motion.div>
  );
}
