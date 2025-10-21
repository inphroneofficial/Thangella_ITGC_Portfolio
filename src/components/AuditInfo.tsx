
import { Shield, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';

const AuditInfo = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="audit-info" 
      className={`py-20 relative overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900' 
          : 'bg-gradient-to-r from-white via-primary/5 to-secondary/30'
      }`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <Badge 
            variant="outline" 
            className={`px-4 py-1.5 text-sm font-medium mb-4 ${
              theme === 'dark' 
                ? 'border-primary/30 text-primary bg-primary/5' 
                : 'border-primary/30 text-primary bg-primary/5'
            } backdrop-blur`}
          >
            Specialized Knowledge
          </Badge>
          <h2 className={`text-3xl md:text-5xl font-extrabold mb-4 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'
          }`}>
            IT Audit & Compliance
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
          <p className={`text-lg leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Explore my specialized knowledge in IT audit and compliance controls, frameworks, and methodologies
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card 
            className={`overflow-hidden relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border-2 ${
              theme === 'dark' 
                ? 'bg-zinc-800 border-zinc-700 hover:border-primary/30' 
                : 'bg-white border-primary/20 hover:border-primary/40'
            } backdrop-blur-sm`}
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating background elements */}
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
            
            <CardHeader className="relative z-10 pb-4 text-center">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 backdrop-blur">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className={`text-2xl md:text-3xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                IT Audit & Compliance Knowledge Base
              </CardTitle>
              <CardDescription className={`text-base ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Comprehensive insights into IT audit concepts, compliance frameworks, and control methodologies
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10 p-8">
              <div className={`mb-8 p-6 rounded-xl border ${
                theme === 'dark' 
                  ? 'bg-zinc-700/50 border-zinc-600/50' 
                  : 'bg-primary/5 border-primary/10'
              } backdrop-blur-sm`}>
                <h4 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  <FileText className="h-5 w-5 text-primary" />
                  What You'll Discover:
                </h4>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3 group/item">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className={`font-medium ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      IT General Controls (ITGC) frameworks and implementation strategies
                    </span>
                  </div>
                  <div className="flex items-start gap-3 group/item">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className={`font-medium ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      IT Automated Controls (ITAC) design and testing methodologies
                    </span>
                  </div>
                  <div className="flex items-start gap-3 group/item">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className={`font-medium ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      SOX compliance requirements and comprehensive audit approaches
                    </span>
                  </div>
                  <div className="flex items-start gap-3 group/item">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className={`font-medium ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      Risk assessment techniques and control effectiveness evaluation
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  className="group relative overflow-hidden rounded-full px-8 py-6 bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                  asChild
                >
                  <Link to="/audit-info" className="flex items-center gap-3">
                    <span className="relative z-10">Explore Knowledge Base</span>
                    <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-full"></span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AuditInfo;
