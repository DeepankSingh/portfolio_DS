import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Description */}
            <div className="mb-8 md:mb-0">
              <div className="text-2xl font-bold text-white mb-2">
                <span className="text-cyan-400">Dev</span>Portfolio
              </div>
              <p className="text-gray-400 max-w-md">
                Building digital experiences that make a difference, one line of code at a time.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-cyan-400 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-5 h-5 text-gray-300 group-hover:text-slate-900" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-cyan-400 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-slate-900" />
              </a>
              <a
                href="mailto:singhdeepank9@gmail.com"
                className="p-3 bg-slate-800 rounded-full hover:bg-cyan-400 transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="w-5 h-5 text-gray-300 group-hover:text-slate-900" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>© {currentYear} Deepank Singh. All rights reserved.</p>
              <p className="flex items-center gap-1 mt-2 md:mt-0">
                Made with <Heart className="w-4 h-4 text-red-400" fill="currentColor" /> and lots of coffee
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;