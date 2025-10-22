import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce App",
      description: "A full-featured mobile shopping app built with Flutter, featuring cart management, product catalog, and user authentication.",
      tags: ["Flutter", "Firebase", "Dart"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Manager",
      description: "A productivity app for managing daily tasks with clean UI and smooth animations.",
      tags: ["Flutter", "SQLite", "Provider"],
      link: "#",
      github: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information app with beautiful animations and location-based forecasts.",
      tags: ["Flutter", "REST API", "Bloc"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Some of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`p-6 bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-primary/10 border border-primary/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 border-primary/30 hover:bg-primary/10">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="flex-1 border-primary/30 hover:bg-primary/10">
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
