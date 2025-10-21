
import { BookOpen, Calendar, Award, School, GraduationCap } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const Education = () => {
  const { theme } = useTheme();
  
  const educationData = [
    {
      degree: "B.Sc (Hons) Computer Science and Game Development",
      institution: "Backstage Pass Institute of Gaming, Hyderabad",
      affiliation: "Affiliated to Jawaharlal Nehru Architecture and Fine Arts University",
      year: "Graduated 2024",
      grade: "First Class with Distinction",
      coursework: "Software Engineering, Database Systems, Network Security",
      skills: "Problem Solving, Critical Thinking, Technical Documentation",
      achievements: "Dean's List, Technical Showcase Award, Leadership Recognition",
      icon: School
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Gayatri Junior College, Hyderabad",
      affiliation: "Board of Intermediate Education, Telangana",
      year: "Completed 2019",
      grade: "First Class",
      coursework: "Mathematics, Physics, Chemistry, Applied Mechanics, Algebra, Calculus",
      skills: "Quantitative analysis, time management, logical reasoning, data interpretation, academic consistency",
      achievements: "Best Student, Academic Excellence",
      icon: GraduationCap
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Lotus Lap Public School, Hyderabad",
      affiliation: "Board of Secondary Education, Telangana State",
      year: "Completed 2017",
      grade: "Passed with Distinction",
      coursework: "Mathematics, General Science, Social Studies, English, Computer Basics, Environmental Studies",
      skills: "Foundational computing, presentation skills, written communication, group participation, early academic discipline",
      achievements: "Best Student, Outstanding Leadership",
      icon: BookOpen
    }
  ];
  
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium mb-4 animate-fade-in border-primary/30 text-primary">Educational Background</Badge>
          <h2 className="text-3xl md:text-5xl font-bold gradient-heading animate-fade-in">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-foreground/70'} animate-fade-in`}>
            My academic qualifications and learning journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <Card key={index} className={`overflow-hidden relative hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-3d ${
                theme === 'dark' ? 'bg-zinc-800/90 border-zinc-700' : 'bg-white/90 border-primary/10'
              } backdrop-blur-sm animate-slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-50"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="relative group">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 rotate-bg absolute inset-0 group-hover:rotate-12 transition-transform duration-500"></div>
                        <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center relative z-10">
                          <IconComponent className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>
                        {edu.degree}
                      </h3>
                      <h4 className="text-xl font-medium text-primary mt-1">
                        {edu.institution}
                      </h4>
                      <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-foreground/60'} mt-1`}>
                        {edu.affiliation}
                      </p>
                      
                      <div className="mt-4 flex flex-wrap gap-4">
                        <div className={`flex items-center ${theme === 'dark' ? 'text-white/70' : 'text-foreground/70'} px-4 py-2 rounded-full bg-primary/5`}>
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          <span>{edu.year}</span>
                        </div>
                        
                        <div className={`flex items-center ${theme === 'dark' ? 'text-white/70' : 'text-foreground/70'} px-4 py-2 rounded-full bg-primary/5`}>
                          <Award className="h-4 w-4 mr-2 text-primary" />
                          <span>{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className={`${theme === 'dark' ? 'bg-zinc-700/80 border-zinc-600' : 'bg-secondary/30 border-primary/10'} hover-lift group`}>
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <h5 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>Key Coursework</h5>
                        <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-foreground/70'} mt-1`}>
                          {edu.coursework}
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className={`${theme === 'dark' ? 'bg-zinc-700/80 border-zinc-600' : 'bg-secondary/30 border-primary/10'} hover-lift group`}>
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                            <path d="M2 17l10 5 10-5"></path>
                            <path d="M2 12l10 5 10-5"></path>
                          </svg>
                        </div>
                        <h5 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>Skills Gained</h5>
                        <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-foreground/70'} mt-1`}>
                          {edu.skills}
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className={`${theme === 'dark' ? 'bg-zinc-700/80 border-zinc-600' : 'bg-secondary/30 border-primary/10'} hover-lift group`}>
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        </div>
                        <h5 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>Achievements</h5>
                        <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-foreground/70'} mt-1`}>
                          {edu.achievements}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
