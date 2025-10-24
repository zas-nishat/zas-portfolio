import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Smartphone, Server, Download, User, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import about from "@/data/about.json";
import educationData from "@/data/education.json";
import profileImage from "@/images/zas-nishat.jpg";

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

  const userDetails = [
    {
      icon: User,
      label: "Name",
      value: "Zahed Al Sabit",
    },
    {
      icon: Mail,
      label: "Email",
      value: "zahedalsabit945@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+8801870-345945",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Mirpur 12, Dhaka, Bangladesh",
    },
  ];

  const iconComponents: { [key: string]: React.ElementType } = {
    Smartphone: Smartphone,
    Code2: Code2,
    Server: Server,
    Github: Github,
    Linkedin: Linkedin,
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
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-stretch mb-24">
          <div className={`md:col-span-1 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"} max-w-xs mx-auto flex items-center`}>
            <img src={profileImage} alt="Zahed Al Sabit" className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/5]" />
          </div>

          <div className="md:col-span-2 space-y-8 flex flex-col justify-start">
            {/* Personal Details Section */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 justify-start">
              {userDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div
                    key={detail.label}
                    className={`flex items-start transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-semibold text-muted-foreground">{detail.label}</h4>
                      <p className="text-base">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Education Section */}
            <div className={`space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              style={{ transitionDelay: `${(userDetails.length + 1) * 100}ms` }}>
              <h3 className="text-lg font-semibold">Education:</h3>
              {educationData.education.map((edu, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h4 className="text-base font-semibold">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground">{edu.institution} ({edu.year})</p>
                  <p className="text-xs text-muted-foreground/80">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              style={{ transitionDelay: `${(userDetails.length + educationData.education.length + 2) * 100}ms` }}
            >
              <Button
                variant="outline"
                size="lg"
                className={`p-4 text-sm sm:text-base border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-105 w-full sm:w-auto`}
                asChild
              >
                <a href="/cv.pdf" download="Zahed_Al_Sabit_CV.pdf" className="flex items-center justify-start">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {about.map((interest, index) => {
            const IconComponent = iconComponents[interest.icon];
            return (
              <Card
                key={interest.title}
                className={`p-6 bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
