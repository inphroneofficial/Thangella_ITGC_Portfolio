
import { Briefcase, Calendar, CheckCircle, Download } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { calculateExperience } from "@/utils/dateUtils";
import PremiumCard from "./PremiumCard";
import { Button } from "./ui/button";

const Experience = () => {
  const { theme } = useTheme();

  const expStart = new Date("2024-04-01");
  const yearsExp = calculateExperience(expStart);

  const highlights = [
    {
      date: "April 2024 – Present",
      role: "Consultant",
      company: "Globestar Software Ltd.ech Pvt. Ltd",
      points: [
        "Performed ITGC testing under SOX 404 compliance, covering access management, change management, and IT operations controls",
        "Evaluated segregation of duties (SOD) conflicts and reviewed justifications for user access control testing",
        "Conducted quarterly and semi-annual High Privileged Access (HPA) reviews and password configuration audits in Windows environments",
        "Reviewed user provisioning, deprovisioning, terminations, and asset deactivation to ensure timely access revocation",
        "Executed walkthroughs, Test of Design (ToD), and Test of Effectiveness (ToE) across IT general controls",
        "Assessed privileged access in administrator groups using Windows Active Directory and validated against control requirements",
        "Facilitated audit walkthroughs, gathered evidence, coordinated with internal teams and external auditors",
        "Participated in risk and control assessments, identifying gaps and supporting remediation tracking",
        "Assisted in audit summaries and reports with observations and recommendations for senior IT and compliance teams",
        "Supported ICFR efforts, contributing to operational and compliance audits",
        "Documented findings, tested control effectiveness over sample periods, and reviewed remediation plans",
        "Used SQL for data querying and analysis to support audit testing and reporting",
        "Utilized JIRA and ServiceNow GRC to manage control issues, audit requests, and remediation efforts",
        "Maintained audit documentation aligned with COBIT, ISO 27001, and SOC1/SOC2 frameworks",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-20 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"
          : "bg-gradient-to-r from-white via-primary/5 to-secondary/30"
      }`}
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-48 bg-primary/10 blur-3xl -top-20 left-20 rounded-full" />
        <div className="absolute w-96 h-48 bg-purple-500/10 blur-3xl -bottom-20 right-16 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="px-4 py-1.5 text-sm font-medium mb-4 border-primary/30 text-primary bg-primary/5 backdrop-blur"
          >
            Career Timeline
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold gradient-heading">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
          <p
            className={`text-base ${
              theme === "dark"
                ? "text-white/80"
                : "text-gray-700"
            }`}
          >
            1.8++ years of hands-on IT Risk & Compliance work.
          </p>
        </div>

        {/* Timeline v2 */}
        <ol className="relative border-l-4 border-primary/20 ml-4">
          {highlights.map((item, idx) => (
            <li key={idx} className="mb-12 ml-4 relative">
              <span className="absolute -left-6 flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary to-purple-500 rounded-full shadow-lg ring-4 ring-primary/10">
                <Briefcase className="h-5 w-5 text-white" />
              </span>
              <PremiumCard className="ml-4">
                <div className="mb-2 flex items-center gap-3 flex-wrap">
                  <Badge variant="secondary" className="border-primary/30 text-primary bg-primary/10 rounded-full">
                    {item.date}
                  </Badge>
                  <span className="font-bold text-xl gradient-heading">{item.role}</span>
                  <span className="font-medium text-primary/80">
                    @ {item.company}
                  </span>
                </div>
                <div className="space-y-3 mt-4">
                  {item.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className={theme === "dark" ? "text-white/85" : "text-gray-700"}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-right">
                  <a href="./Gadidamalla_Thangella_ITGC_IT_Audit_2026.pdf" download="./Gadidamalla_Thangella_ITGC_IT_Audit_2026.pdf">
                    <Button className="bg-primary text-white rounded-full py-2 px-5 button-shine flex items-center gap-2 shadow hover:bg-primary/90">
                      <Download className="h-4 w-4" />
                      Download Resume
                    </Button>
                  </a>
                </div>
              </PremiumCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
