import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Server } from "lucide-react";

const About = () => {
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

  const interests = [
    {
      icon: Smartphone,
      title: "Flutter Development",
      description: "Building cross-platform mobile apps with beautiful UIs and smooth performance"
    },
    {
      icon: Code2,
      title: "JavaScript",
      description: "Currently learning modern JavaScript frameworks and web development"
    },
    {
      icon: Server,
      title: "Laravel",
      description: "Exploring backend development with PHP's powerful Laravel framework"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate developer focused on creating exceptional mobile experiences and continuously expanding my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <Card
              key={interest.title}
              className={`p-6 bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                animationDelay: `${index * 0.2}s`,
                transitionDelay: `${index * 0.2}s`
              }}
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <interest.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
              <p className="text-muted-foreground">{interest.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
