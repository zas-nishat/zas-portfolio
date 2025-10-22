import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Primary Skills",
      skills: ["Flutter", "Dart", "Firebase", "Mobile UI/UX", "State Management"]
    },
    {
      title: "Learning & Exploring",
      skills: ["JavaScript", "React", "Node.js", "Laravel", "PHP", "MySQL"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "VS Code", "Figma", "REST APIs", "Postman"]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            My current tech stack and learning path
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-base px-4 py-2 bg-card/80 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all cursor-default animate-fade-in-up"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
