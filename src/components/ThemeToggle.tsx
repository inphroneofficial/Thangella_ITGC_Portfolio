
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Toggle } from '@/components/ui/toggle';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleToggle = () => {
    // Add animation effect to the body before theme change
    if (theme === 'light') {
      document.body.classList.add('theme-transition-to-dark');
      setTimeout(() => {
        document.body.classList.remove('theme-transition-to-dark');
      }, 500);
      
      toast({
        title: "Dark mode activated",
        description: "The website theme has been switched to dark mode.",
      });
    } else {
      document.body.classList.add('theme-transition-to-light');
      setTimeout(() => {
        document.body.classList.remove('theme-transition-to-light');
      }, 500);
      
      toast({
        title: "Light mode activated",
        description: "The website theme has been switched to light mode.",
      });
    }
    
    toggleTheme();
  };

  return (
    <Toggle 
      variant="outline"
      size="sm"
      pressed={theme === 'dark'}
      onPressedChange={handleToggle}
      aria-label="Toggle theme"
      className="rounded-full p-2 border-transparent hover:border-primary/20 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
      {theme === 'dark' ? (
        <>
          <Sun className="h-4 w-4 text-yellow-400 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 text-primary relative z-10 group-hover:-rotate-45 transition-transform duration-300" />
        </>
      )}
    </Toggle>
  );
};

export default ThemeToggle;
