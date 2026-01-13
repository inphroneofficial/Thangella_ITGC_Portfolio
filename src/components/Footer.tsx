
import { Linkedin, Instagram, Twitter, MessageSquare, Download } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/gthangella/',
      color: 'text-[#0A66C2] dark:text-[#0A66C2]'
    },
    { 
      name: 'Naukri', 
      icon: 'naukri', 
      url: 'https://www.naukri.com/mnjuser/profile?id=&altresid',
      color: 'text-[#FF7555] dark:text-[#FF7555]'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://www.instagram.com/g_thangella_k?igsh=aWczdnVtaDR1N280',
      color: 'text-[#E4405F] dark:text-[#E4405F]'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://x.com/i/flow/login?redirect_after_login=%2FGtk947',
      color: 'text-[#1DA1F2] dark:text-[#1DA1F2]'
    },
    { 
      name: 'WhatsApp', 
      icon: MessageSquare, 
      url: 'https://wa.me/8499090369',
      color: 'text-[#25D366] dark:text-[#25D366]'
    },
    { 
      name: 'Telegram', 
      icon: MessageSquare, 
      url: 'https://t.me/G_Thangella_K',
      color: 'text-[#26A5E4] dark:text-[#26A5E4]'
    }
  ];
  
  return (
    <footer className={`${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'} py-12 relative overflow-hidden`}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-primary/10">
          <div className="flex flex-col">
            <a href="#home" className="text-2xl font-bold gradient-heading mb-4">
              Thangella G.
            </a>
            <p className={`${theme === 'dark' ? 'text-white/60' : 'text-foreground/60'} mb-4`}>
              IT Audit & Compliance Specialist based in Hyderabad, India. Specialized in IT general controls, SOX compliance, and audit processes.
            </p>
            <div className="flex items-center space-x-2 mt-auto">
              <Badge variant="outline" className="border-primary/30 text-primary">2026</Badge>
              <Badge variant="outline" className="border-primary/30 text-primary">Portfolio</Badge>
            </div>
          </div>
          
          <div className="flex flex-col md:items-center">
            <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-foreground'} mb-4`}>Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Audit Info', 'Education', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className={`${theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-foreground/70 hover:text-foreground'} transition-colors hover:underline`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-center">
              <Button variant="outline" className="rounded-full px-6 py-2 border-primary/30 button-shine relative overflow-hidden group" asChild>
                <a href="./Gadidamalla_Thangella_ITGC_IT_Audit_2026.pdf" download="./Gadidamalla_Thangella_ITGC_IT_Audit_2026.pdf">
                  <Download className="h-4 w-4 mr-2" />
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Download Resume</span>
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-foreground'} mb-4`}>Connect With Me</h3>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`hover-lift flex flex-col items-center justify-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 group ${link.color}`}
                  aria-label={link.name}
                >
                  {link.name === 'Naukri' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="mb-1 group-hover:scale-110 transition-transform">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v-2h-2v2zm0-4h2V7h-2v7z"/>
                    </svg>
                  ) : (
                    <link.icon className="h-5 w-5 mb-1 group-hover:scale-110 transition-transform" />
                  )}
                  <span className={`text-xs ${theme === 'dark' ? 'text-white/80' : 'text-foreground/80'}`}>{link.name}</span>
                </a>
              ))}
            </div>
            <div className={`${theme === 'dark' ? 'text-white/60' : 'text-foreground/60'} text-sm`}>
              <div className="flex items-center mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:thangella17@gmail.com" className="hover:text-primary transition-colors">thangella17@gmail.com</a>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:7207840501" className="hover:text-primary transition-colors">7207840501</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className={`${theme === 'dark' ? 'text-white/60' : 'text-foreground/60'} flex items-center justify-center md:justify-start mb-4 md:mb-0`}>
            &copy; {currentYear} All Rights Reserved
          </div>
          
          <div className={`${theme === 'dark' ? 'text-white/60' : 'text-foreground/60'} text-sm text-center md:text-right`}>
            <span className="text-primary">Thangella G.</span> | IT Audit & Compliance Specialist
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
