import React from 'react';
import { Github, ExternalLink, Brain, Eye, MessageSquare, TrendingUp } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'Intelligent Image Classification',
      description: 'Deep learning model for multi-class image classification using CNN architecture with 95% accuracy on custom dataset.',
      icon: Eye,
      technologies: ['PyTorch', 'OpenCV', 'Flask', 'AWS'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Natural Language Sentiment Analyzer',
      description: 'Real-time sentiment analysis system processing social media data with BERT-based transformer model.',
      icon: MessageSquare,
      technologies: ['Transformers', 'Python', 'Docker', 'Redis'],
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Machine learning pipeline for business forecasting with interactive visualizations and automated reporting.',
      icon: TrendingUp,
      technologies: ['Scikit-learn', 'Streamlit', 'PostgreSQL', 'Plotly'],
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Neural Network Optimizer',
      description: 'Custom optimization algorithms for deep neural networks with improved convergence and performance metrics.',
      icon: Brain,
      technologies: ['TensorFlow', 'NumPy', 'Jupyter', 'MLflow'],
      image: 'https://images.pexels.com/photos/8386425/pexels-photo-8386425.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl mx-auto`}>
            Showcasing AI/ML solutions that solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className={`p-2 rounded-lg ${
                    darkMode ? 'bg-gray-800/80' : 'bg-white/80'
                  } backdrop-blur-sm`}>
                    <project.icon className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode 
                          ? 'bg-gray-600 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;