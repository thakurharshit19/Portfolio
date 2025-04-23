import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Link2 } from "lucide-react";
// import photo from "/public/photo.jpg"
export const Projects = () => {
  const projects = [
    {
      title: "Notes App",
      description: "A full-stack web application built with modern technologies",
      tech: "React • MongoDB • Node.js",
      image: "/notes.png",
      link: "https://notesappcipherschols05.netlify.app/"
    },
    {
      title: "Talk-A-Tive",
      description: "Mobile-first online chatting platform with seamless UX",
      tech: "React.js • Tailwind • PostgreSQL",
      image: "/chat.png",
      link: "https://lets-chat-xkxk.onrender.com"
    },
    {
      title: "N-Queens Visualiser",
      description: "Step by step visualisation of Nqueen Problem",
      tech: "HTML • CSS • HavaScript",
      image: "/nqueen.png",
      link: "https://harshit2047.github.io/N-Queens-Visualizer/"
    },
    {
      title: "Bike Rental System",
      description: "A web-based bike rental system built with Laravel for seamless bike booking and management.",
      tech: "Php • Laravel • SQL",
      image: "bike.png",
      link: "https://project-four.example.com"
    },
    {
      title: "Weather Forecast",
      description: "A simple weather forecast web app built with HTML, CSS, and JavaScript to display real-time weather updates.",
      tech: "HTML • CSS • JS",
      image: "/weather.png",
      link: "https://project-five.example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#F8F9FA]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F4F] mb-4">
            Featured Projects
          </h2>
          <p className="text-[#2C5F4F]/70 max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group"
            >
              <Card 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-105 bg-white border-[#2C5F4F]/10"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-[#2C5F4F] flex items-center gap-2">
                    {project.title}
                    <Link2 className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription className="text-[#2C5F4F]/70">{project.tech}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#2C5F4F]/80">{project.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
