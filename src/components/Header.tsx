
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-portfolio-dark/90 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-white text-2xl font-bold">
            Sajid<span className="highlighted-text">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-slate-300 hover:text-portfolio-accent transition-colors duration-300 relative ${index === 0 ? 'text-portfolio-accent' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="hover:text-portfolio-accent">{link.name}</span>
            </a>
          ))}
          <Button className="bg-transparent hover:bg-portfolio-accent/10 text-portfolio-accent border border-portfolio-accent hover:text-portfolio-accent transition-all">
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-portfolio-dark/95 z-50 flex flex-col items-center justify-center">
            <button 
              className="absolute top-4 right-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} className="text-white" />
            </button>
            <div className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-portfolio-accent text-2xl transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <Button className="mt-4 bg-transparent hover:bg-portfolio-accent/10 text-portfolio-accent border border-portfolio-accent hover:text-portfolio-accent transition-all">
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
