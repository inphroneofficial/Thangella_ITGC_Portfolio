import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Twitter, MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useTheme } from '@/contexts/ThemeContext';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Contact = () => {
  const { theme } = useTheme();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create Gmail mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    const mailtoLink = `mailto:imgtk17@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default mail client
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      toast({
        title: "Email client opened!",
        description: "Please complete sending your message through your email client.",
      });
      setIsSubmitting(false);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/gthangella/' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/g_thangella_k?igsh=aWczdnVtaDR1N280' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/i/flow/login?redirect_after_login=%2FGtk947' },
    { name: 'WhatsApp', icon: MessageSquare, url: 'https://wa.me/8499090369' },
    { 
      name: 'Naukri', 
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v-2h-2v2zm0-4h2V7h-2v7z"/>
        </svg>
      ), 
      url: 'https://www.naukri.com/mnjuser/profile' 
    }
  ];

  return (
    <section id="contact" className={`py-20 ${theme === 'dark' ? 'bg-zinc-900/80' : 'bg-gradient-to-br from-secondary/30 to-white'} relative overflow-hidden`}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-64 h-64 bg-primary/5 rounded-full absolute -top-32 -right-32 blur-3xl"></div>
        <div className="w-64 h-64 bg-purple-500/5 rounded-full absolute -bottom-32 -left-32 blur-3xl"></div>
        <div className="particle w-16 h-16 rounded-full bg-primary/10 absolute top-[20%] left-[30%] floating-element" style={{ animationDelay: '0s', animationDuration: '14s' }}></div>
        <div className="particle w-12 h-12 rounded-full bg-purple-500/10 absolute bottom-[30%] right-[20%] floating-element" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium mb-4 border-primary/30 text-primary">Contact Me</Badge>
          <h2 className="text-3xl md:text-5xl font-bold gradient-heading">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-foreground/70'}`}>
            Feel free to contact me for any inquiries or opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Card className={`overflow-hidden card-3d hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
            theme === 'dark' ? 'bg-zinc-800/90 border-zinc-700' : 'bg-white/90 border-primary/10'
          } backdrop-blur-sm animate-slide-up`}>
            <CardContent className="p-8">
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-foreground'} mb-8`}>Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start group transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-foreground/60'}`}>Email</h4>
                    <a href="mailto:imgtk17@gmail.com" className={`text-lg font-medium hover:text-primary transition-colors ${theme === 'dark' ? 'text-white' : ''}`}>
                      imgtk17@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-foreground/60'}`}>Phone</h4>
                    <a href="tel:8008133117" className={`text-lg font-medium hover:text-primary transition-colors ${theme === 'dark' ? 'text-white' : ''}`}>
                      8008133117
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-foreground/60'}`}>Location</h4>
                    <p className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : ''}`}>
                      Hyderabad, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white/90' : ''}`}>Connect With Me</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                      aria-label={link.name}
                    >
                      {link.name === 'Naukri' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-primary group-hover:text-white transition-colors">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v-2h-2v2zm0-4h2V7h-2v7z"/>
                        </svg>
                      ) : (
                        <link.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className={`overflow-hidden card-3d hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
            theme === 'dark' ? 'bg-zinc-800/90 border-zinc-700' : 'bg-white/90 border-primary/10'
          } backdrop-blur-sm animate-slide-up animation-delay-200`}>
            <CardContent className="p-8">
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-foreground'} mb-8`}>Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="group">
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`border-foreground/20 focus:border-primary ${theme === 'dark' ? 'bg-zinc-700/50 border-zinc-600 text-white' : ''} transition-all duration-300 focus:ring-2 focus:ring-primary/30 h-12 rounded-lg`}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`border-foreground/20 focus:border-primary ${theme === 'dark' ? 'bg-zinc-700/50 border-zinc-600 text-white' : ''} transition-all duration-300 focus:ring-2 focus:ring-primary/30 h-12 rounded-lg`}
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`border-foreground/20 focus:border-primary ${theme === 'dark' ? 'bg-zinc-700/50 border-zinc-600 text-white' : ''} transition-all duration-300 focus:ring-2 focus:ring-primary/30 h-12 rounded-lg`}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`border-foreground/20 focus:border-primary min-h-[150px] ${theme === 'dark' ? 'bg-zinc-700/50 border-zinc-600 text-white' : ''} transition-all duration-300 focus:ring-2 focus:ring-primary/30 rounded-lg resize-none`}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary rounded-lg py-6 transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1 relative overflow-hidden group"
                  disabled={isSubmitting}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/80 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  {isSubmitting ? (
                    <span className="flex items-center relative z-10">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center relative z-10">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
