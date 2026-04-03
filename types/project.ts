export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  thumbnail: string;
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
}
