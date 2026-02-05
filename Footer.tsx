
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          &copy; Disclaimer: All notes belong to their original authors. RGPV Setu only collects and shares them for educational help.
        </p>
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Custom Link" className="text-slate-400 hover:text-white transition-colors"><i className="fas fa-link text-xl"></i></a> 
          <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors"><i className="fab fa-linkedin text-2xl"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
