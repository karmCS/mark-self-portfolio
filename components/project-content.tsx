'use client';

import { ReactNode } from 'react';

interface ProjectContentProps {
  content: string | ReactNode;
}

export function ProjectContent({ content }: ProjectContentProps) {
  // If content is already JSX, render it directly
  if (typeof content !== 'string') {
    return <div className="project-content">{content}</div>;
  }

  // Fallback for old string-based content 
  return <div className="project-content" dangerouslySetInnerHTML={{ __html: content }} />;
}