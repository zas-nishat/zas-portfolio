import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            Flutter Developer
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Zahed Al Sabit</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          Crafting beautiful mobile experiences with Flutter, while expanding my skills in JavaScript and Laravel
        </p>

        <p className="text-base md:text-lg text-muted-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          Passionate about creating intuitive user interfaces and seamless mobile applications. 
          Currently on a journey to become a full-stack developer by mastering modern web technologies 
          and backend frameworks. I believe in writing clean, maintainable code and continuously learning 
          new tools to deliver exceptional digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 hover:bg-primary/10 text-lg px-8"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection("about")}>
          <ArrowDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
