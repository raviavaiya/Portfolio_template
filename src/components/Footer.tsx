import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} border-t`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center justify-center md:justify-start space-x-1`}>
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>using React & Tailwind CSS</span>
            </p>
          </div>
          <div className={`text-center md:text-right ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <p>&copy; 2025 AI/ML Developer. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;