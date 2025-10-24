import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import personalInfo from "@/data/personalinfo.json"; // Import personalInfo

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

  const iconComponents: { [key: string]: React.ElementType } = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    mail: Mail,
    facebook: Facebook,
  };

  const socialLinks = personalInfo.socials.map(social => ({
    icon: iconComponents[social.icon.toLowerCase()],
    label: social.name,
    href: social.url,
  }));

  // Add email link from personalInfo
  socialLinks.push({
    icon: Mail,
    label: "Email",
    href: `mailto:${personalInfo.email}`,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, description });
    // Here you would typically send this data to a backend service
    alert("Message sent! (Check console for data)");
    setName("");
    setEmail("");
    setDescription("");
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socialLinks.map((link, index) => (
              <Button
                key={link.label}
                variant="outline"
                size="lg"
                className={`p-4 text-base sm:text-lg border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.icon && <link.icon className="w-5 h-5 mr-2" />}
                  {link.label}
                </a>
              </Button>
            ))}
          </div>

          <div className="relative flex justify-center items-center my-8">
            <div className="absolute w-full border-t border-primary/20" />
            <span className="relative bg-background px-4 text-muted-foreground text-sm">
              OR SEND AN EMAIL
            </span>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur border-primary/10 max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Example@gmail.com"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={2}
                  placeholder="Write your message here..."
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

