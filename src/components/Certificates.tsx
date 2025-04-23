
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Award } from "lucide-react";

export const Certificates = () => {
  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "CipherScools",
      date: "2024",
    },
    {
      title: "Decode DSA with JAVA",
      issuer: "PW Skills",
      date: "2025",
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "2024",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
            Certifications
          </h2>
          <p className="text-[#000000]/70 max-w-2xl mx-auto">
            Professional certifications and achievements in technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-105 bg-gradient-to-br from-gray-100 to-gray-400 border-none"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <Award className="w-8 h-8 text-[#46A094]" />
                <div>
                  <CardTitle className="text-xl text-[#000000]">{cert.title}</CardTitle>
                  <p className="text-sm text-[#2C5F4F]/70">{cert.issuer}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#2C5F4F]/80">Issued: {cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
