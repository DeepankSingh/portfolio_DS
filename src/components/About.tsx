import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Finding creative solutions to complex challenges"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I’m a passionate Software Developer with a strong foundation in Java, Python, C, and modern web technologies. 
                I enjoy solving real-world problems through clean, efficient, and scalable code.

              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Over the past few years, I’ve worked on projects ranging from IoT-based systems and AI-powered applications to web platforms built with Spring Boot and Flutter. 
                My curiosity often drives me to explore new tools and frameworks, whether it’s building mobile apps, experimenting with DevOps practices, or working on machine learning models.
              </p>

              
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in continuous learning and am currently sharpening my skills in Spring, Cloud technologies, and CI/CD pipelines to grow into a versatile developer.

              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I’m not coding, you’ll find me at the gym, sharing my learning journey on LinkedIn, or brainstorming new project ideas that bring together creativity and technology.

              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My goal is simple: to build impactful software that makes life easier, smarter, and better.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm font-medium">
                  Java
                </span>
                <span className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm font-medium">
                  SQL
                </span>
                <span className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm font-medium">
                  Spring Boot
                </span>
                <span className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm font-medium">
                  Python
                </span>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-cyan-400 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;