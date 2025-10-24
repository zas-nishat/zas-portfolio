import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    technologies: string[];
    features: string[];
    images: string[];
    liveDemoLink: string;
    githubRepoLink: string;
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="space-y-6 p-4">
      <h2 className="text-3xl font-bold">{project.title}</h2>
      <p className="text-muted-foreground">{project.longDescription}</p>

      <div>
        <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Key Features</h3>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 pt-4">
        {project.githubRepoLink && project.githubRepoLink !== "#" && (
          <Button asChild variant="outline">
            <a href={project.githubRepoLink} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
