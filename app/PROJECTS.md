# Project Management Guide

## Adding a New Project

Edit `/lib/projects.ts` and add this template to the `projects` array:

\`\`\`typescript
{
  slug: 'your-project-slug',  // URL-friendly name (lowercase, hyphens)
  title: 'Your Project Title',
  description: 'One-line summary for project cards',
  longDescription: `
    <h2>Project Overview</h2>
    <p>What you built and why.</p>

    <h3>Key Features</h3>
    <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
      <li>Feature 3</li>
    </ul>

    <h3>Technical Stack</h3>
    <p>Technologies used and architecture decisions.</p>

    <h3>Challenges & Learnings</h3>
    <p>What you learned or problems you solved.</p>
  `,
  tags: ['Tech1', 'Tech2', 'Tech3'],
  thumbnail: '/images/projects/your-project.png',  // Add image to public/images/projects/
  githubUrl: 'https://github.com/yourusername/repo',  // or '' if private
  liveUrl: 'https://your-demo.com',  // or '' if not deployed
  date: 'YYYY-MM-DD',  // Today's date or project completion date
},
\`\`\`

## Removing Projects

Delete the entire object (from `{` to `},`) for any project you want to remove.

To clear all projects:
\`\`\`typescript
export const projects: Project[] = [];
\`\`\`

## Workflow

1. Add/edit project in `projects.ts`
2. Add thumbnail image to `public/images/projects/`
3. Commit and push
4. Projects auto-sort by date (newest first)