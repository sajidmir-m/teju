
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft';
}

const skills: Skill[] = [
  { name: "HTML & CSS", level: 90, category: 'technical' },
  { name: "JavaScript", level: 85, category: 'technical' },
  { name: "React", level: 80, category: 'technical' },
  { name: "TypeScript", level: 75, category: 'technical' },
  { name: "Node.js", level: 70, category: 'technical' },
  { name: "Python", level: 65, category: 'technical' },
  { name: "MongoDB", level: 60, category: 'technical' },
  { name: "SQL", level: 55, category: 'technical' },
  { name: "Problem Solving", level: 90, category: 'soft' },
  { name: "Communication", level: 85, category: 'soft' },
  { name: "Teamwork", level: 95, category: 'soft' },
  { name: "Time Management", level: 80, category: 'soft' },
];

const technicalSkills = skills.filter(skill => skill.category === 'technical');
const softSkills = skills.filter(skill => skill.category === 'soft');

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h3 className="section-subtitle">My Skills</h3>
        <h2 className="section-title">What I Know</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="glass-panel border-slate-700 p-6">
            <h3 className="text-xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-portfolio-accent">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-slate-700" indicatorClassName="bg-portfolio-accent" />
                </div>
              ))}
            </div>
          </Card>
          
          <div className="space-y-8">
            <Card className="glass-panel border-slate-700 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Soft Skills</h3>
              <div className="space-y-6">
                {softSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-portfolio-accent">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-slate-700" indicatorClassName="bg-portfolio-accent" />
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="glass-panel border-slate-700 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Git", "VS Code", "Docker", "Figma", "Next.js", "Tailwind CSS", "Redux", "GraphQL"].map((tool) => (
                  <div key={tool} className="flex items-center">
                    <div className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></div>
                    <span className="text-slate-300">{tool}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
