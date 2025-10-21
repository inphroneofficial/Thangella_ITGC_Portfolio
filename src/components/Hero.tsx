
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [nameText, setNameText] = useState('');
  const [roleText, setRoleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  // Typing effect for intro text
  useEffect(() => {
    const introText = "Hello, I'm";
    const fullName = "Thangella G.";
    const role = "IT Audit & Compliance Specialist";
    let introTimer: NodeJS.Timeout;
    let nameTimer: NodeJS.Timeout;
    let roleTimer: NodeJS.Timeout;
    let cursorTimer: NodeJS.Timeout;
    
    // Type intro text
    let introIndex = 0;
    introTimer = setInterval(() => {
      if (introIndex <= introText.length) {
        setDisplayText(introText.slice(0, introIndex));
        introIndex++;
      } else {
        clearInterval(introTimer);
        
        // Start typing name after intro is done
        let nameIndex = 0;
        nameTimer = setInterval(() => {
          if (nameIndex <= fullName.length) {
            setNameText(fullName.slice(0, nameIndex));
            nameIndex++;
          } else {
            clearInterval(nameTimer);
            
            // Start typing role after name is done
            let roleIndex = 0;
            roleTimer = setInterval(() => {
              if (roleIndex <= role.length) {
                setRoleText(role.slice(0, roleIndex));
                roleIndex++;
              } else {
                clearInterval(roleTimer);
              }
            }, 50);
          }
        }, 50);
      }
    }, 70);
    
    // Blinking cursor effect
    cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(introTimer);
      clearInterval(nameTimer);
      clearInterval(roleTimer);
      clearInterval(cursorTimer);
    };
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle w-20 h-20 rounded-full bg-primary/5 absolute top-[20%] right-[10%] floating-element" style={{ animationDelay: '0s', animationDuration: '12s' }}></div>
        <div className="particle w-12 h-12 rounded-full bg-purple-500/5 absolute top-[65%] left-[15%] floating-element" style={{ animationDelay: '2s', animationDuration: '16s' }}></div>
        <div className="particle w-16 h-16 rounded-full bg-primary/10 absolute top-[30%] left-[10%] floating-element" style={{ animationDelay: '1s', animationDuration: '14s' }}></div>
        <div className="particle w-24 h-24 rounded-full bg-purple-500/10 absolute bottom-[15%] right-[20%] floating-element" style={{ animationDelay: '3s', animationDuration: '18s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-3xl mx-auto text-center md:text-left md:mx-0">
          <h2 className="text-lg md:text-xl font-medium text-primary h-7 relative">
            {displayText}
            {!nameText && showCursor && <span className="animate-pulse">|</span>}
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-2 gradient-heading h-16 md:h-20 relative">
            {nameText}
            {nameText && !roleText && showCursor && <span className="animate-pulse">|</span>}
          </h1>
          <h3 className="text-xl md:text-2xl font-medium text-foreground/80 mt-2 h-8 md:h-10 relative">
            {roleText}
            {roleText && showCursor && <span className="animate-pulse">|</span>}
          </h3>
          <p className="text-lg text-foreground/70 mt-6 max-w-2xl animate-slide-up-slow">
            Experienced in IT general controls, SOX compliance, and audit processes. 
            I help organizations identify risks, implement remediation strategies, and 
            ensure regulatory compliance.
          </p>
          
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 animate-slide-up-slower">
            <Button className="bg-primary hover:bg-primary/90 rounded-full px-8 py-6 text-white shimmer-effect relative overflow-hidden" asChild>
              <a href="#contact">
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
              </a>
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 border-primary/30 button-shine relative overflow-hidden group" asChild>
              <a href="/Thangella_Gadidamalla_ITGC_IT_Audit_2025.pdf" download="./Thangella_Gadidamalla_ITGC_IT_Audit_2025.pdf">
                <Download className="h-5 w-5 mr-2" />
                <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Download Resume</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center md:justify-start space-x-4">
            <a href="https://www.linkedin.com/in/gthangella" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="mailto:imgtk17@gmail.com" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href="tel:8008133117" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" aria-label="Scroll down" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
