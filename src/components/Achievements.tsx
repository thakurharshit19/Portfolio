
import { Award, GraduationCap, Code } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const Achievements = () => {
  const achievements = [
    {
      title: "Academic Excellence",
      description: "Ranked among the Dean's List out of 7000+ students at Lovely Professional University with a CGPA of 7.9/10.0",
      icon: <GraduationCap className="w-6 h-6 text-[#46A094]" />
    },
    {
      title: "Coding Proficiency",
      description: "Solved 400+ programming questions on platforms like LeetCode, GFG, and Coding Ninjas",
      icon: <Code className="w-6 h-6 text-[#46A094]" />
    },
    {
      title: "Academic Achievement",
      description: "Scored 90.6% aggregate in Intermediate and 93.5% in Matriculation examinations",
      icon: <Award className="w-6 h-6 text-[#46A094]" />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white border">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00000] mb-4">
            Achievements
          </h2>
          <p className="text-[#000000]/70 max-w-2xl mx-auto">
            Recognition and milestones in my academic and professional journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-105 bg-white border-[#8B5CF6]/10"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {achievement.icon}
                  <h3 className="text-xl font-semibold text-[#000000]/80">
                    {achievement.title}
                  </h3>
                </div>
                <p className="text-[#46A094]">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
