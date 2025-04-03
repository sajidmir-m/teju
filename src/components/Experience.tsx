
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Frontend Developer (Intern)",
    company: "Tech Innovations Ltd.",
    period: "Jan 2023 - Present",
    description: [
      "Developing responsive user interfaces using React and Tailwind CSS.",
      "Collaborating with senior developers to implement new features.",
      "Optimizing application performance and ensuring cross-browser compatibility.",
      "Participating in code reviews and contributing to team discussions."
    ]
  },
  {
    title: "Web Development Projects",
    company: "Freelance",
    period: "2021 - 2023",
    description: [
      "Designed and developed custom websites for small businesses.",
      "Created e-commerce solutions using modern web technologies.",
      "Implemented responsive designs ensuring optimal user experience across devices.",
      "Provided maintenance and support services post-deployment."
    ]
  },
  {
    title: "Technical Support",
    company: "IT Solutions Co.",
    period: "2020 - 2021",
    description: [
      "Provided technical assistance to clients facing hardware and software issues.",
      "Documented common problems and created troubleshooting guides.",
      "Maintained and updated computer systems and networks.",
      "Collaborated with the development team to resolve complex technical problems."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-portfolio-light/30">
      <div className="section-container">
        <h3 className="section-subtitle">My Experience</h3>
        <h2 className="section-title">Where I've Worked</h2>
        
        <Tabs defaultValue="0" className="max-w-3xl mx-auto mt-12">
          <TabsList className="bg-portfolio-dark/50 border border-slate-700 mb-8 overflow-x-auto flex w-full justify-start p-1">
            {experiences.map((exp, index) => (
              <TabsTrigger
                key={index}
                value={index.toString()}
                className="data-[state=active]:bg-portfolio-accent/10 data-[state=active]:text-portfolio-accent px-4 py-2"
              >
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {experiences.map((exp, index) => (
            <TabsContent key={index} value={index.toString()} className="mt-0">
              <Card className="glass-panel border-slate-700 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-portfolio-accent">{exp.company}</p>
                  <p className="text-sm text-slate-400">{exp.period}</p>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-portfolio-accent mr-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
