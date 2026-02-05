
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#sem1', text: '1st Sem' },
    { href: '#sem2', text: '2nd Sem' },
    { href: '#sem3', text: '3rd Sem' },
    { href: '#exam-tips', text: 'Exam Tips' },
  ];

  const MainNav = ({ isMobile = false }) => (
     <nav className={isMobile ? "flex flex-col items-center space-y-2 w-full" : "hidden md:flex items-center space-x-2"}>
        {navLinks.map((link, index) => (
        <a 
            key={link.href} 
            href={link.href} 
            onClick={() => isMobile && setIsMenuOpen(false)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${ isMobile ? 'w-full text-center' : ''} ${
            index === 0 
            ? 'bg-blue-600 text-white' 
            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
        >
            {link.text}
        </a>
        ))}
    </nav>
  );

  return (
    <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-x-6">
            <a href="#" className="text-xl font-bold text-white tracking-wider">
                RGPV SETU
            </a>
            <MainNav />
        </div>
        
      
        
        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none" aria-label="Toggle menu">
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
        </div>
      </div>

       {isMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 p-4">
            <MainNav isMobile={true} />
            <div className="flex justify-center items-center space-x-6 pt-4 mt-4 border-t border-slate-800">
                <a href="#" aria-label="Custom Link" className="text-slate-400 hover:text-white transition-colors"><i className="fas fa-link text-xl"></i></a> 
                <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors"><i className="fab fa-linkedin text-2xl"></i></a>
            </div>
        </div>
       )}
    </header>
  );
};

export default Header;
