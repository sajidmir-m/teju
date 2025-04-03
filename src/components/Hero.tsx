
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <p className="text-portfolio-accent text-lg mb-4 animate-fade-in">Hello, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white animate-fade-in" style={{ animationDelay: '100ms' }}>
            Sajid.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            I build things for the web.
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
            I'm a Computer Science student specializing in building exceptional digital experiences. Currently focused on expanding my knowledge and skills in various technologies.
          </p>
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Button className="bg-portfolio-accent text-portfolio-dark hover:bg-portfolio-accent/90 transition-all">
              Get in touch
            </Button>
            <Button variant="outline" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10">
              View my work
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-portfolio-accent">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
