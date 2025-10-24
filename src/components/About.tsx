import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Server } from "lucide-react";
import about from "@/data/about.json";

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



const iconComponents: { [key: string]: React.ElementType } = {
  Smartphone: Smartphone,
  Code2: Code2,
  Server: Server,
};

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A passionate developer focused on creating exceptional mobile experiences and continuously expanding my technical expertise
          </p>
          <a
            href="/cv.pdf"
            download="Zahed_Al_Sabit_CV.pdf"
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-6 py-2 text-base sm:text-lg border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-105 mb-12`}
          >
            Download CV
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {about.map((interest, index) => {
            const IconComponent = iconComponents[interest.icon];
            return (
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
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  {IconComponent && <IconComponent className="w-6 h-6 text-primary-foreground" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                <p className="text-muted-foreground">{interest.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
