import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, Facebook } from "lucide-react";

const Contact = () => {
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

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/zas-nishat" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/zas-nishat/" },
    { icon: Mail, label: "Email", href: "mailto:zahedalsabit945@gmail.com" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/nishat.zayn" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socialLinks.map((link, index) => (
              <Button
                key={link.label}
                variant="outline"
                size="lg"
                className={`border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-5 h-5 mr-2" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>

          <div className="pt-8 border-t border-primary/10">
            <p className="text-muted-foreground">
              © 2025 Zahed Al Sabit. Built with React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
