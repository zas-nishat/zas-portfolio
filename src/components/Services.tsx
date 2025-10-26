import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Smartphone, Server, Code2 } from "lucide-react";
import services from "@/data/services.json";
import { useIsMobile } from "@/hooks/use-mobile";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

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
    Server: Server,
    Code2: Code2,
  };

  return (
    <section id="services" ref={sectionRef} className="py-16 pb-6 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            My Services
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Offering professional services to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 items-stretch mb-12">
          {services.services.map((service, index) => {
            const Icon = iconComponents[service.icon];

            const serviceCard = (
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="p-8 h-full flex flex-col items-center text-center">
                  <div className="flex-shrink-0 h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-sm md:text-xl font-bold mb-4">{service.title}</h3>
                  <p className="hidden sm:block text-sm md:text-base text-muted-foreground">{service.description}</p>
                </Card>
              </div>
            );

            return (
              <Dialog key={index}>
                {isMobile ? (
                  <DialogTrigger asChild>{serviceCard}</DialogTrigger>
                ) : (
                  serviceCard
                )}
                <DialogContent>
                  <DialogHeader className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <DialogTitle className="text-2xl font-bold mb-2">{service.title}</DialogTitle>
                    <DialogDescription className="text-base text-muted-foreground">{service.description}</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
