
import {
  User,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Twitter,
  MessageSquare,
  Download,
  MapPin,
  Calendar,
  Briefcase,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { calculateAge, calculateExperience } from "@/utils/dateUtils";
import PremiumCard from "./PremiumCard";

const About = () => {
  const { theme } = useTheme();
  const dob = new Date("2002-05-17");
  const expStart = new Date("2024-04-01");
  const age = calculateAge(dob);
  const yearsExp = calculateExperience(expStart);

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/gthangella/' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/g_thangella_k?igsh=aWczdnVtaDR1N280' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/i/flow/login?redirect_after_login=%2FGtk947' },
    { name: 'WhatsApp', icon: MessageSquare, url: 'https://wa.me/8499090369' },
  ];

  return (
    <section
      id="about"
      className={`
        py-20 lg:py-32
        relative
        bg-gradient-to-br from-primary/5 via-background/90 to-secondary/60
        dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
        min-h-[80vh]
        flex justify-center items-center
        overflow-hidden
      `}
    >
      {/* V2 Decorative elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 xl:gap-28 justify-center items-stretch">
          {/* Left Profile Card */}
          <div className="w-full max-w-sm mx-auto lg:mx-0 flex-shrink-0">
            <PremiumCard className="flex flex-col items-center shadow-2xl">
              {/* Profile Pic or Initials - Square Shape */}
              <div className="w-48 h-48 mb-5 bg-primary/10 rounded-lg overflow-hidden border-4 border-primary/40 shadow-lg">
  <img
    src="/G.Thangella.png"
    alt="Thangella Gadidamalla"
    className="w-full h-full object-contain object-center"
  />
</div>



              <h3
                className={`text-2xl font-extrabold text-center ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Thangella Gadidamalla
              </h3>
              <p className="text-primary font-semibold text-center mb-2">
                IT Risk & Compliance Specialist
              </p>
              <Badge
                variant="secondary"
                className="mb-3 px-4 py-1 bg-primary/10 border-primary/20 text-xs text-primary"
              >
                Hyderabad, India
              </Badge>
              <div className="flex flex-col gap-3 w-full text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a
                    href="mailto:thangella17@gmail.com"
                    className={`hover:text-primary transition-colors flex-1 truncate ${
                      theme === "dark" ? "text-white/90" : "text-gray-700"
                    }`}
                  >
                    thangella17@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a
                    href="tel:8008133117"
                    className={`hover:text-primary transition-colors flex-1 truncate ${
                      theme === "dark" ? "text-white/90" : "text-gray-700"
                    }`}
                  >
                    8008133117
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  <span className={theme === "dark" ? "text-white/90" : "text-gray-700"}>Status: Single</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className={theme === "dark" ? "text-white/90" : "text-gray-700"}>DOB: May 17, 2002 </span>
                  <span className="ml-auto text-primary/90 font-bold">
                    ({age} y)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className={theme === "dark" ? "text-white/90" : "text-gray-700"}>Experience</span>
                  <span className="ml-auto font-bold text-primary/90">
                    1.4+ years
                  </span>
                </div>
              </div>
              {/* Social */}
              <div className="flex space-x-3 mt-7 mb-1">
                {socialLinks.map((link) => (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={link.name}
                    className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition hover:-translate-y-1 group"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
              <Button
                className="w-full mt-5 bg-gradient-to-tr from-primary to-purple-600 shadow-xl py-3 px-3 font-medium rounded-full button-shine"
                asChild
              >
                <a href="./Gadidamalla_Thangella_ITGC_IT_Audit_2025.pdf" download="./Gadidamalla_Thangella_ITGC_IT_Audit_2025.pdf">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </PremiumCard>
          </div>

          {/* Right: Professional Overview */}
          <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl md:text-5xl font-extrabold gradient-heading mb-6 text-center lg:text-left">
              Professional Overview
            </h2>
            <PremiumCard className="text-base leading-relaxed shadow-lg">
              <p
                className={
                  theme === "dark"
                    ? "text-white/85 mb-4"
                    : "text-gray-800 mb-4"
                }
              >
                IT Risk and Compliance professional with 1.6 years of hands-on experience in IT General Controls (ITGC), SOX 404 Compliance, and IT Risk Assessments. Proven track record of partnering with engineering, operations, and product teams to strengthen access controls, ensure process compliance, and support risk mitigation efforts.
              </p>
              <p
                className={
                  theme === "dark"
                    ? "text-white/80 mb-4"
                    : "text-gray-700 mb-4"
                }
              >
                Skilled in stakeholder engagement, audit execution, and issue remediation, with a solid understanding of IT governance frameworks including COBIT, ISO 27001, and SOC1/SOC2. Proficient in ServiceNow GRC, JIRA, and SQL for audit management, issue tracking, and data-driven analysis.
              </p>
              <p
                className={
                  theme === "dark"
                    ? "text-white/75"
                    : "text-gray-600"
                }
              >
                Focused on enabling compliant, secure business operations within product-driven environments. Strong capability in conducting end-to-end audits, evaluating control design and operating effectiveness, and supporting remediation efforts.
              </p>
              <div className="mt-6 flex flex-wrap gap-6 justify-center lg:justify-start">
                <Badge className="bg-primary/10 border-primary/20 text-primary">
                  English
                </Badge>
                <Badge className="bg-primary/10 border-primary/20 text-primary">
                  Hindi
                </Badge>
                <Badge className="bg-primary/10 border-primary/20 text-primary">
                  Telugu
                </Badge>
              </div>
            </PremiumCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
