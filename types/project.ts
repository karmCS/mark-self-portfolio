import React from 'react';

export interface ScreenshotSlide {
  src: string;
  caption?: string;
}

export interface ScreenshotTrack {
  label: string;
  slides: ScreenshotSlide[];
  aspect?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string | React.ReactNode;
  tags: string[];
  thumbnail: string;
  images?: string[];
  screenshotTracks?: ScreenshotTrack[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
}