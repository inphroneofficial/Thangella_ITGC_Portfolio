
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';
import { Badge } from './ui/badge';

const Navbar = () => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleSectionObservation = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute('id') as string;
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionObservation);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionObservation);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Audit Info', href: '#audit-info' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const navbarBg = theme === 'dark' 
    ? isScrolled ? 'bg-zinc-900/90 backdrop-blur-md' : 'bg-transparent' 
    : isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-lato ${
        navbarBg
      } ${isScrolled ? 'shadow-sm py-2' : 'py-4'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold gradient-heading relative group">
          Thangella G.
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-3 py-2 rounded-md transition-colors duration-300 ${
                activeSection === link.href.substring(1) 
                  ? `${theme === 'dark' ? 'text-white' : 'text-foreground'} font-medium` 
                  : `${theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-foreground/70 hover:text-foreground'}`
              }`}
            >
              {activeSection === link.href.substring(1) && (
                <span className="absolute inset-0 bg-primary/10 rounded-md -z-10"></span>
              )}
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </a>
          ))}
          <ThemeToggle />
          <Button
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300 rounded-full px-6 relative overflow-hidden group"
            asChild
          >
            <a href="#contact">
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className={`p-2 rounded-full ${theme === 'dark' ? 'bg-zinc-800 border-zinc-700' : 'bg-white border-primary/10'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : 'text-foreground'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : 'text-foreground'}`} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full ${theme === 'dark' ? 'bg-zinc-900/95' : 'bg-white/95'} backdrop-blur-md shadow-lg animate-fade-in`}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center py-3 px-4 rounded-lg ${
                  activeSection === link.href.substring(1) 
                    ? `${theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-primary/10 text-foreground'}` 
                    : `${theme === 'dark' ? 'text-white/80 hover:bg-zinc-800' : 'text-foreground/80 hover:bg-primary/5'}`
                } transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <Badge variant="outline" className="ml-auto border-primary/30 text-primary text-xs">
                    Active
                  </Badge>
                )}
              </a>
            ))}
            <Button
              className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300 rounded-lg mt-2"
              asChild
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
