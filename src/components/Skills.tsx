import { Award, Code, Database, Briefcase } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6 text-[#46A094]" />,
      items: ["React", "TypeScript", "Tailwind CSS", "Angular.js"],
      bgColor: "from-[#F2FCE2] to-[#E5DEFF]"
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6 text-[#46A094]" />,
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
      bgColor: "from-[#D3E4FD] to-[#FDE1D3]"
    },
    {
      category: "Tools",
      icon: <Briefcase className="w-6 h-6 text-[#46A094]" />,
      items: ["Git", "PostMan", "VS Code", "Figma"],
      bgColor: "from-[#FEF7CD] to-[#FEC6A1]"
    },
    {
      category: "Soft Skills",
      icon: <Award className="w-6 h-6 text-[#46A094]" />,
      items: ["Problem Solving", "Communication", "Team Leadership", "Agile"],
      bgColor: "from-[#FFDEE2] to-[#F1F0FB]"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
            Skills & Expertise
          </h2>
          <p className="text-[#000000]/70 max-w-2xl mx-auto">
            A diverse set of skills and technologies I use to bring ideas to life
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in hover:scale-105 bg-white border-[#F97316]/10"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold text-[#000000]/80">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="text-[#000000]/60 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
