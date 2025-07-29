import React from 'react';
import { Brain, Code, Database, TrendingUp } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    { icon: Brain, title: 'AI Research', description: 'Deep learning and neural networks' },
    { icon: Code, title: 'ML Engineering', description: 'Production-ready ML systems' },
    { icon: Database, title: 'Data Science', description: 'Statistical analysis and insights' },
    { icon: TrendingUp, title: 'MLOps', description: 'Scalable ML infrastructure' }
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <p className={`text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl mx-auto`}>
            Passionate about leveraging artificial intelligence to solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm an AI/ML developer with a passion for creating intelligent systems that make a real impact. 
              With expertise in deep learning, computer vision, and natural language processing, I bridge the 
              gap between cutting-edge research and practical applications.
            </p>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              My journey in AI started with a fascination for how machines could learn and adapt. 
              Today, I work on building scalable ML systems, from data preprocessing to model deployment, 
              ensuring that AI solutions are not just accurate but also reliable and maintainable.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'AWS', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <highlight.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className={`text-lg font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {highlight.title}
                </h3>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;