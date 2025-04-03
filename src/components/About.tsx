
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <h3 className="section-subtitle">About Me</h3>
            <h2 className="section-title">Get to know me</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                Hello! I'm Sajid, a passionate Computer Science & Engineering student with a keen interest in building digital solutions that make a difference. My journey in tech began during my diploma studies, where I discovered my love for programming and problem-solving.
              </p>
              <p>
                I enjoy tackling complex challenges and turning them into simple, elegant solutions. My academic background has equipped me with a strong foundation in computer science principles, and I continuously strive to expand my knowledge and skills.
              </p>
              <p>
                When I'm not coding or studying, you might find me exploring new technologies, contributing to open source projects, or engaging with the tech community to stay updated with the latest trends and advancements in the field.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/3">
            <Card className="glass-panel overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4 bg-slate-800/50">
                  <h3 className="text-xl font-bold text-white mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-portfolio-accent font-medium">2020 - Present</p>
                      <h4 className="text-lg font-semibold text-white">Diploma in Computer Science & Engineering</h4>
                      <p className="text-slate-400">Polytechnic Institute</p>
                    </div>
                    <div>
                      <p className="text-portfolio-accent font-medium">2019 - 2020</p>
                      <h4 className="text-lg font-semibold text-white">Certification in Web Development</h4>
                      <p className="text-slate-400">Online Learning Platform</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-4">Personal Info</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-portfolio-accent font-medium w-20">Name:</span>
                      <span className="text-slate-300">Sajid</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-accent font-medium w-20">Age:</span>
                      <span className="text-slate-300">22</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-accent font-medium w-20">Location:</span>
                      <span className="text-slate-300">Bangladesh</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-accent font-medium w-20">Email:</span>
                      <span className="text-slate-300">sajid@example.com</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
