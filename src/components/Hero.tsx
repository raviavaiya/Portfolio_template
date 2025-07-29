import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-4 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse ${
          darkMode ? 'bg-blue-900' : 'bg-blue-300'
        }`}></div>
        <div className={`absolute -bottom-8 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse ${
          darkMode ? 'bg-purple-900' : 'bg-purple-300'
        }`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse ${
          darkMode ? 'bg-green-900' : 'bg-green-300'
        }`} style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className={`text-5xl md:text-7xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            } animate-fade-in-up`}>
              AI/ML
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
            <p className={`text-xl md:text-2xl ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
              Transforming data into intelligent solutions with cutting-edge machine learning and artificial intelligence
            </p>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className={`px-8 py-3 rounded-full font-semibold border-2 transition-all duration-200 hover:shadow-lg transform hover:scale-105 ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              View Projects
            </a>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com"
              className={`p-3 rounded-full transition-all duration-200 hover:shadow-lg transform hover:scale-110 ${
                darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className={`p-3 rounded-full transition-all duration-200 hover:shadow-lg transform hover:scale-110 ${
                darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className={`p-3 rounded-full transition-all duration-200 hover:shadow-lg transform hover:scale-110 ${
                darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
        </div>
      </div>
    </section>
  );
};

export default Hero;