
import { CheckCircle, Shield, Lock, Server, Database, Users, FileText } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const Skills = () => {
  const { theme } = useTheme();
  
  const skillGroups = [
    {
      title: "IT Audit & Compliance",
      icon: Shield,
      color: "from-blue-500/10 to-blue-600/5",
      textColor: "text-blue-500",
      skills: [
        "IT General Controls (ITGC)",
        "IT Automated Controls (ITAC)",
        "SOX 404 Compliance",
        "Test of Design (ToD)",
        "Test of Effectiveness (ToE)",
        "Risk and Control Assessment",
        "Control Gap Identification",
        "Audit Documentation"
      ]
    },
    {
      title: "Access & Change Management",
      icon: Lock,
      color: "from-purple-500/10 to-purple-600/5",
      textColor: "text-purple-500",
      skills: [
        "User Provisioning & Deprovisioning",
        "Segregation of Duties (SOD)",
        "User Access Reviews (UAR)",
        "High Privileged Access (HPA)",
        "Change Management Controls",
        "Incident Management & RCA",
        "Password Policy Audits",
        "Windows Active Directory"
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: Database,
      color: "from-teal-500/10 to-teal-600/5",
      textColor: "text-teal-500",
      skills: [
        "ServiceNow GRC",
        "JIRA",
        "SQL (Basic querying)",
        "COBIT Framework",
        "ISO 27001 & SOC1/SOC2",
        "Microsoft Excel Advanced",
        "PowerPoint & Word",
        "GRC Concepts"
      ]
    }
  ];

  const proficiencyLevels = [
    { skill: "SOX Compliance", percentage: 95, color: "bg-blue-500" },
    { skill: "IT General Controls", percentage: 90, color: "bg-purple-500" },
    { skill: "Access Management", percentage: 88, color: "bg-teal-500" },
    { skill: "Risk Assessment", percentage: 85, color: "bg-amber-500" }
  ];

  return (
    <section id="skills" className={`py-20 ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gradient-to-br from-secondary/50 to-white'} relative overflow-hidden`}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent opacity-50"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium mb-4 border-primary/30 text-primary">My Expertise</Badge>
          <h2 className="text-3xl md:text-5xl font-bold gradient-heading">Professional Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            My specialized skillset in IT Risk and Compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden relative group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-3d animate-slide-up ${
                theme === 'dark' ? 'bg-zinc-800/90 border-zinc-700' : 'bg-white/90 border-primary/10'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-50 transition-opacity duration-300 group-hover:opacity-100`}></div>
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${group.color} mr-4 group-hover:-rotate-12 transition-transform duration-300`}>
                    <group.icon className={`h-6 w-6 ${group.textColor}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{group.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {group.skills.map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start rounded-lg p-2 transition-all duration-300 hover:bg-primary/5"
                      style={{ animationDelay: `${(index * 0.2) + (idx * 0.1)}s` }}
                    >
                      <CheckCircle className={`h-5 w-5 ${group.textColor} mr-3 flex-shrink-0`} />
                      <span className={theme === 'dark' ? 'text-white/80' : 'text-gray-700'}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill meter section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className={`overflow-hidden ${theme === 'dark' ? 'bg-zinc-800/90 border-zinc-700' : 'bg-white/90 border-primary/10'} animate-slide-up animation-delay-700`}>
            <CardContent className="p-8">
              <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-6 text-center`}>Professional Proficiency Levels</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {proficiencyLevels.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{skill.skill}</span>
                      <span className={`font-semibold ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>{skill.percentage}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden relative">
                      <div 
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`} 
                        style={{ 
                          width: `${skill.percentage}%`,
                          boxShadow: `0 0 10px ${skill.color}` 
                        }}
                      ></div>
                      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-50"></div>
                    </div>
                    <div className="mt-1 flex">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1 flex-1 ${i < Math.round(skill.percentage / 20) ? skill.color : 'bg-gray-200 dark:bg-zinc-700'} ${i > 0 ? 'ml-1' : ''} rounded-full transition-all duration-300`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
