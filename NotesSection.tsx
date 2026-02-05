
import React from 'react';
import NoteCard from './NoteCard';

interface Subject {
  name: string;
  link: string;
  code: string;
}

interface NotesSectionProps {
  id: string;
  title: string;
  subjects: Subject[];
}

const NotesSection: React.FC<NotesSectionProps> = ({ id, title, subjects }) => {
  return (
    <section id={id} className="py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-slate-700 pb-4">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {subjects.map((subject, index) => (
          <NoteCard key={index} subjectName={subject.name} driveLink={subject.link} subjectCode={subject.code} />
        ))}
      </div>
    </section>
  );
};

export default NotesSection;
