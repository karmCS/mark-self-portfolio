import React from 'react';

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string | React.ReactNode;  
  tags: string[];
  thumbnail: string;
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
}