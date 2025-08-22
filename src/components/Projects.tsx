import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "https://github.com/DeepankSingh/E_Poster",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Hospital Management System",
      description: "The Hospital Management System is a desktop application developed using Java for the user interface and PostgreSQL for the database management. ",
      image: "HMS_image.png",
      technologies: ["Java", "JDBC", "Swing & AWT", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/DeepankSingh/Hospital-Management-System",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Chegg Expert Monitor",
      description: "This extension helps you stay notified of new questions on the Expert Q&A page without needing to constantly check the screen.",
      image: "extension_image.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://chromewebstore.google.com/detail/chegg-expert-monitor/cebaliopabibcmopapegpieomhjeongo",
      githubUrl: "https://github.com/DeepankSingh/QuestionAlert",
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of the projects I've worked on recently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 text-cyan-400">
                    {project.icon}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 border border-slate-600 text-gray-300 text-sm font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;