
import React from 'react';

interface NoteCardProps {
  subjectName: string;
  driveLink: string;
  subjectCode: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ subjectName, driveLink, subjectCode }) => {
  return (
    <div className="bg-slate-900 rounded-lg shadow-lg overflow-hidden border border-slate-800 flex flex-col h-full p-6 transition-colors hover:border-blue-600/50">
      <div className="flex-grow">
        <p className="text-sm text-slate-400 mb-1">{subjectCode}</p>
        <h3 className="text-lg font-bold text-white">{subjectName}</h3>
      </div>
      <a
        href={driveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 w-full bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center flex items-center justify-center"
      >
        <i className="fas fa-download mr-2"></i>
        Download Notes
      </a>
    </div>
  );
};

export default NoteCard;
