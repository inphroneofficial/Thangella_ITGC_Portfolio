
import { useEffect, useState } from 'react';
import { Shield, Server, CheckCircle, FileText, Lock, AlertTriangle, ArrowLeft, Users, Database, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const AuditInfoPage = () => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const auditCategories = [
    {
      title: "IT General Controls (ITGC)",
      icon: Shield,
      color: "from-blue-500/10 to-blue-600/5",
      textColor: "text-blue-500",
      description: "Foundation controls ensuring stable and secure computing environment for SOX 404 compliance.",
      details: [
        "Access Management - User provisioning, deprovisioning, and termination processes",
        "Segregation of Duties (SOD) analysis and conflict resolution",
        "High Privileged Access (HPA) reviews and administrator group assessments",
        "Password configuration audits in Windows environments",
        "Change Management - Request reviews, approvals, and emergency change validation",
        "IT Operations - Data backup, restoration, job monitoring, and scheduling controls"
      ]
    },
    {
      title: "IT Automated Controls (ITAC)",
      icon: Server,
      color: "from-purple-500/10 to-purple-600/5",
      textColor: "text-purple-500",
      description: "Application-embedded controls ensuring accurate data processing and system calculations.",
      details: [
        "System calculations and automatic data validations",
        "Interface controls for accurate data transfers between systems",
        "Configuration settings enforcing business rules and policies",
        "Report generation controls ensuring complete and accurate outputs",
        "Database integrity checks and automated reconciliations",
        "Workflow automation and approval routing controls"
      ]
    },
    {
      title: "SOX 404 Compliance",
      icon: FileText,
      color: "from-amber-500/10 to-amber-600/5",
      textColor: "text-amber-500",
      description: "Sarbanes-Oxley Act compliance focusing on internal controls over financial reporting (ICFR).",
      details: [
        "Test of Design (ToD) and Test of Effectiveness (ToE) execution",
        "Control gap identification and remediation planning",
        "Audit walkthrough facilitation with internal and external auditors",
        "Evidence collection and documentation for compliance audits",
        "Risk and control assessments with gap analysis",
        "Quarterly and semi-annual control testing and reporting"
      ]
    },
    {
      title: "Access Management",
      icon: Lock,
      color: "from-green-500/10 to-green-600/5",
      textColor: "text-green-500",
      description: "Comprehensive access control management using Windows Active Directory and enterprise systems.",
      details: [
        "User Access Reviews (UAR) and periodic recertification processes",
        "Generic ID management and shared account governance",
        "Asset deactivation and timely access revocation procedures",
        "Windows Active Directory access validation and control testing",
        "Privileged access assessment against control requirements",
        "Role-based access control (RBAC) implementation and monitoring"
      ]
    },
    {
      title: "Risk Assessment & Management",
      icon: AlertTriangle,
      color: "from-red-500/10 to-red-600/5",
      textColor: "text-red-500",
      description: "Comprehensive risk identification, analysis, and mitigation strategies for IT environments.",
      details: [
        "IT risk assessments and control effectiveness evaluation",
        "Risk documentation and remediation tracking processes",
        "Root Cause Analysis (RCA) for incidents and control failures",
        "Vulnerability assessments and security gap analysis",
        "Business impact analysis and risk prioritization",
        "Continuous risk monitoring and reporting frameworks"
      ]
    },
    {
      title: "Audit Management & Tools",
      icon: Database,
      color: "from-teal-500/10 to-teal-600/5",
      textColor: "text-teal-500",
      description: "Enterprise tools and platforms for audit execution, issue tracking, and compliance management.",
      details: [
        "ServiceNow GRC platform for control management and tracking",
        "JIRA for audit request management and issue remediation",
        "SQL querying for audit data analysis and testing support",
        "Microsoft Excel advanced features (VLOOKUP, Pivot Tables, Conditional Formatting)",
        "Audit documentation using PowerPoint and Word for reporting",
        "Data-driven analysis supporting audit testing and evidence collection"
      ]
    }
  ];
  
  const frameworks = [
    {
      name: "COBIT (Control Objectives for Information and Related Technologies)",
      description: "Framework for governance and management of enterprise IT systems and processes"
    },
    {
      name: "ISO 27001 - Information Security Management",
      description: "International standard for information security management systems and risk assessment"
    },
    {
      name: "SOC1 & SOC2 - Service Organization Controls",
      description: "Audit standards for service organizations focusing on controls relevant to financial reporting and security"
    },
    {
      name: "ITIL - Information Technology Infrastructure Library",
      description: "Best practices for IT service management and alignment with business objectives"
    }
  ];
  
  return (
    <div className={`min-h-screen transition-colors duration-300 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="particle w-40 h-40 rounded-full bg-primary/5 absolute top-[10%] right-[10%] floating-element" style={{ animationDelay: '0s', animationDuration: '15s' }}></div>
        <div className="particle w-32 h-32 rounded-full bg-purple-500/5 absolute top-[60%] left-[5%] floating-element" style={{ animationDelay: '3s', animationDuration: '14s' }}></div>
        <div className="particle w-24 h-24 rounded-full bg-blue-500/5 absolute top-[30%] left-[20%] floating-element" style={{ animationDelay: '1s', animationDuration: '18s' }}></div>
        <div className="particle w-36 h-36 rounded-full bg-teal-500/5 absolute bottom-[15%] right-[15%] floating-element" style={{ animationDelay: '2s', animationDuration: '16s' }}></div>
      </div>
    
      {/* Fixed navigation button */}
      <div 
        className={`fixed top-4 left-4 z-50 transition-all duration-300 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <Button 
          variant="outline" 
          size="sm"
          className={`flex items-center gap-2 rounded-full backdrop-blur-md ${
            theme === 'dark' 
              ? 'bg-gray-800/80 border-gray-700 text-white hover:bg-gray-700/80' 
              : 'bg-white/80 border-gray-200 text-gray-900 hover:bg-white'
          }`}
          asChild
        >
          <Link to="/">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </Button>
      </div>
      
      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="mb-12 animate-fade-in">
          {!isScrolled && (
            <Button 
              variant="outline" 
              className={`flex items-center gap-2 mb-10 ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 border-gray-700 text-white hover:bg-gray-700/50' 
                  : 'bg-white/50 border-gray-200 text-gray-900 hover:bg-white'
              } backdrop-blur-sm`}
              asChild
            >
              <Link to="/">
                <ArrowLeft size={16} />
                Back to Portfolio
              </Link>
            </Button>
          )}
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge 
              variant="outline" 
              className={`px-4 py-1.5 text-sm font-medium mb-4 animate-fade-in ${
                theme === 'dark' 
                  ? 'border-primary/30 text-primary bg-primary/10' 
                  : 'border-primary/30 text-primary bg-primary/5'
              }`}
            >
              Professional Knowledge Base
            </Badge>
            <h1 className={`text-4xl md:text-6xl font-bold animate-scale-in ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent'
            }`}>
              IT Audit & Compliance Expertise
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
            <p className={`text-lg animate-fade-in max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Comprehensive expertise in IT Risk & Compliance with 1.4 years of hands-on experience in 
              SOX 404 compliance, ITGC testing, and enterprise audit frameworks.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {auditCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`overflow-hidden relative group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                theme === 'dark' 
                  ? 'bg-gray-800/90 border-gray-700 hover:border-primary/30' 
                  : 'bg-white/90 border-gray-200 hover:border-primary/30'
              } animate-slide-up backdrop-blur-sm`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-50 transition-opacity duration-300 group-hover:opacity-100`}></div>
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <CardHeader className="relative z-10">
                <div className={`absolute right-4 top-4 ${category.textColor} opacity-80 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={24} />
                </div>
                <CardTitle className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  {category.title}
                </CardTitle>
                <CardDescription className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  {category.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start group/item transition-all duration-300 hover:translate-x-1 px-2 py-1 rounded-lg hover:bg-primary/5">
                      <CheckCircle className={`h-4 w-4 ${category.textColor} mr-3 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform`} />
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Frameworks section */}
        <div className="mt-16 max-w-4xl mx-auto animate-slide-up animation-delay-700">
          <Card className={`${
            theme === 'dark' 
              ? 'bg-gray-800/90 border-gray-700' 
              : 'bg-white/90 border-gray-200'
          } backdrop-blur-sm`}>
            <CardHeader>
              <CardTitle className={`text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Professional Frameworks & Standards
              </CardTitle>
              <CardDescription className={`text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Industry-standard frameworks that guide IT audit and compliance practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {frameworks.map((framework, index) => (
                  <div key={index} className="flex items-start group hover:bg-primary/5 p-4 rounded-lg transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-primary font-semibold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {framework.name}
                      </h4>
                      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        {framework.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experience highlights */}
        <div className="mt-16 max-w-4xl mx-auto animate-slide-up animation-delay-900">
          <Card className={`${
            theme === 'dark' 
              ? 'bg-gray-800/90 border-gray-700' 
              : 'bg-white/90 border-gray-200'
          } backdrop-blur-sm`}>
            <CardHeader>
              <CardTitle className={`text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Professional Experience Highlights
              </CardTitle>
              <CardDescription className={`text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Key achievements and responsibilities in IT Risk & Compliance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`p-4 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                }`}>
                  <h4 className={`font-semibold mb-3 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <Users className="h-5 w-5 text-primary" />
                    Client Engagement
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      • Partnership with engineering, operations, and product teams
                    </li>
                    <li className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      • Internal and external audit coordination
                    </li>
                    <li className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      • Stakeholder engagement and communication
                    </li>
                  </ul>
                </div>
                <div className={`p-4 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                }`}>
                  <h4 className={`font-semibold mb-3 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <Settings className="h-5 w-5 text-primary" />
                    Technical Proficiency
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      • ServiceNow GRC and JIRA expertise
                    </li>
                    <li className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      • SQL querying and data analysis
                    </li>
                    <li className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      • Windows Active Directory assessments
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuditInfoPage;
