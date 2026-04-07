'use client';

import { CICDPipeline } from './diagrams/ci-cd-pipeline';
import { AlertPipeline } from './diagrams/alert-pipeline';
import { NetworkArchitecture } from './diagrams/network-architecture';

interface ProjectContentProps {
  content: string;
}

export function ProjectContent({ content }: ProjectContentProps) {
  // Split content by diagram markers
  const parts = content.split(/(<CICDPipeline \/>|<AlertPipeline \/>|<NetworkArchitecture \/>)/);
  
  return (
    <div>
      {parts.map((part, index) => {
        if (part === '<CICDPipeline />') {
          return <CICDPipeline key={index} />;
        }
        if (part === '<AlertPipeline />') {
          return <AlertPipeline key={index} />;
        }
        if (part === '<NetworkArchitecture />') {
          return <NetworkArchitecture key={index} />;
        }
        return <div key={index} dangerouslySetInnerHTML={{ __html: part }} />;
      })}
    </div>
  );
}