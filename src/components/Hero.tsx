import React from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <img
          src="/photo.png" // put your image path here
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Deepank Singh</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in-delay-1">
            Full Stack Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
            Passionate about creating beautiful, functional, and user-friendly applications. 
            I love turning complex problems into simple, elegant solutions.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8 animate-fade-in-delay-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-slate-800 rounded-full hover:bg-cyan-400 transition-all duration-300 hover:scale-110 group">
              <Github className="w-6 h-6 text-gray-300 group-hover:text-slate-900" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-slate-800 rounded-full hover:bg-cyan-400 transition-all duration-300 hover:scale-110 group">
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-slate-900" />
            </a>
            <a href="mailto:singhdeepank9@gmail.com"
               className="p-3 bg-slate-800 rounded-full hover:bg-cyan-400 transition-all duration-300 hover:scale-110 group">
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-slate-900" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            
            <a
    href="/Resume_Deepank_Singh_v2.pdf"   // put your CV file inside the "public" folder
    download="Deepank-Singh-CV.pdf" // rename downloaded file
    className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
  >
    <Download size={20} />
    Download CV
  </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;