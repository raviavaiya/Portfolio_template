import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Senior AI/ML Engineer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading AI initiatives and developing production-scale machine learning systems. Built recommendation engines serving 1M+ users daily.',
      achievements: [
        'Improved model accuracy by 25% through advanced feature engineering',
        'Reduced inference latency by 40% using model optimization techniques',
        'Led team of 5 ML engineers on computer vision projects'
      ]
    },
    {
      title: 'Machine Learning Engineer',
      company: 'DataDriven Inc',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and deployed ML models for fraud detection and customer analytics. Implemented MLOps pipelines for automated model training.',
      achievements: [
        'Built fraud detection system with 98% accuracy',
        'Automated ML pipeline reducing deployment time by 60%',
        'Mentored junior developers on ML best practices'
      ]
    },
    {
      title: 'Data Scientist',
      company: 'Analytics Pro',
      location: 'Boston, MA',
      period: '2018 - 2020',
      description: 'Performed statistical analysis and built predictive models for business intelligence. Collaborated with cross-functional teams on data strategy.',
      achievements: [
        'Delivered insights that increased revenue by $2M annually',
        'Created automated reporting system for executive dashboard',
        'Published research on predictive modeling techniques'
      ]
    }
  ];

  const education = [
    {
      degree: 'M.S. in Computer Science (AI/ML)',
      school: 'Stanford University',
      period: '2016 - 2018',
      description: 'Specialized in machine learning, deep learning, and computer vision'
    },
    {
      degree: 'B.S. in Mathematics & Statistics',
      school: 'MIT',
      period: '2012 - 2016',
      description: 'Foundation in mathematical modeling and statistical analysis'
    }
  ];

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Experience & Education
          </h2>
          <p className={`text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl mx-auto`}>
            My journey in AI/ML development and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className={`text-2xl font-semibold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className={`text-xl font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.title}
                      </h4>
                      <p className="text-blue-500 font-medium">{exp.company}</p>
                    </div>
                    <div className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <div className="flex items-center space-x-1 mb-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className={`mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className={`text-sm ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className={`text-2xl font-semibold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  <h4 className={`text-xl font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {edu.degree}
                  </h4>
                  <p className="text-blue-500 font-medium mb-2">{edu.school}</p>
                  <div className={`flex items-center space-x-1 mb-3 text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {edu.description}
                  </p>
                </div>
              ))}

              {/* Certifications */}
              <div className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}>
                <h4 className={`text-xl font-semibold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Certifications
                </h4>
                <div className="space-y-3">
                  {[
                    'AWS Certified Machine Learning - Specialty',
                    'Google Cloud Professional ML Engineer',
                    'TensorFlow Developer Certificate'
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-blue-500" />
                      <span className={`${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;