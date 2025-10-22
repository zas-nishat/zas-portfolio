import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Server } from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Flutter Development",
      period: "2021 - Present",
      description: "Building cross-platform mobile applications with beautiful UIs and smooth animations. Focused on creating intuitive user experiences.",
      skills: ["Flutter", "Dart", "Firebase", "State Management"],
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "JavaScript Journey",
      period: "2023 - Present",
      description: "Exploring modern web development with JavaScript. Learning React, Node.js, and the ecosystem to build full-stack applications.",
      skills: ["JavaScript", "React", "Node.js", "TypeScript"],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Laravel Learning",
      period: "2024 - Present",
      description: "Diving into backend development with Laravel. Understanding MVC architecture, building RESTful APIs, and database management.",
      skills: ["Laravel", "PHP", "MySQL", "REST APIs"],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Continuous learning and growing as a developer
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${index % 2 === 0 ? "-translate-x-10" : "translate-x-10"}`
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-glow transform -translate-x-1/2 animate-pulse" />

                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ml-16 md:ml-0 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <Card className="p-6 bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-glow group">
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-sm text-muted-foreground">{exp.period}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-3 py-1 bg-primary/10 border border-primary/20 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
