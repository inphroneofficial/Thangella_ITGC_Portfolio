import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import AuditInfo from '@/components/AuditInfo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Chatbot from '@/components/Chatbot/Chatbot';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="font-lato dark:bg-zinc-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <AuditInfo />
        <Education />
        <Contact />
        <Footer />
        <Chatbot />
      </div>
    </ThemeProvider>
  );
};

export default Index;
