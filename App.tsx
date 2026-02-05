
import React from 'react';
import Header from './components/Header';
import NotesSection from './components/NotesSection';
import ExamTips from './components/ExamTips';
import Footer from './components/Footer';

const sem1Subjects = [
  { name: 'Engineering Chemistry', link: 'https://drive.google.com/drive/folders/1kcwNVXzO0yNY8FA0jUGuQ1Jm9BfPTmxB?usp=drive_link' },
  { name: 'Engineering Mathematics-I', link: 'https://drive.google.com/drive/folders/1lL2hvU0Uu0VG5yx7tIv-__CeeJ1QfOK0?usp=drive_link' },
  { name: 'Engineering Graphics', link: 'https://drive.google.com/drive/folders/1P-6yEVQ5XQ9fw1hHy30zXb0g3ip3NFwy?usp=drive_link' },
  { name: 'English for Communication', link: 'https://drive.google.com/drive/folders/121Mnp8dwEeFtXDEV2CULwmsei6t4q_cf?usp=drive_link' },
  { name: 'Basic Electrical & Electronics Engineering', link: 'https://drive.google.com/drive/folders/1b2zvYRrxnO8C4AdNTyMlD_93e1n_aBiW?usp=drive_link' },
];

const sem2Subjects = [
  { name: 'Basic Computer Engineering', link: 'https://drive.google.com/drive/folders/1fRh_imh4PXIxowYaK27muumwgq0jV8yO?usp=drive_link' },
  { name: 'Basic Mechanical Engineering', link: 'https://drive.google.com/drive/folders/1Xtd8HT156JGiDP9s_R_1Fc88y9gswiwa?usp=drive_link' },
  { name: 'Engineering Mathematics-II', link: 'https://drive.google.com/drive/folders/1fNNCQZWurzXFf4JwWfuhx7PuStW9eCSl?usp=drive_link' },
  { name: 'Basic Civil Engineering & Mechanics', link: 'https://drive.google.com/drive/folders/1Mask4e6aW-_qTVRt91zAnTsK8-clswua?usp=drive_link' },
  { name: 'Engineering Physics', link: 'https://drive.google.com/drive/folders/1wv3MJ3YDtkzNDNbSm6B4XhPZfrNsxrlF?usp=drive_link' },
];

const sem3Subjects = [
  { name: 'Energy & Environmental Ecology', link: 'https://drive.google.com/drive/folders/1J7rv3SQ6hmbChs3443Cd6jSW3v-2WelM?usp=drive_link' },
  { name: 'Digital Circuit Systems', link: 'https://drive.google.com/drive/folders/171nFLa5L9Y9NTysz4Z9RQML345w5VnzJ?usp=drive_link' },
  { name: 'Object Oriented Programming & Methodology', link: 'https://drive.google.com/drive/folders/1U-bRwpLYD3tUOlprlIplmkLZ8cDLQtGY?usp=drive_link' },
  { name: 'Data Structures', link: 'https://drive.google.com/drive/folders/1afh7cJvGJpEnwzCgNy7pKpBtcyu7o0TK?usp=drive_link' },
  { name: 'Discrete Structures', link: 'https://drive.google.com/drive/folders/1yj6NYu8QHJri4g4ctgPsYdf9SQMpEtEF?usp=drive_link' },
];

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 text-gray-200 min-h-screen font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <section className="text-center pt-8 pb-12 md:pt-12 md:pb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            RGPV SETU
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            RGPV Setu is an independent educational platform that compiles handwritten notes and important academic topics for reference purposes only. All study materials available on this website are the intellectual property of their respective original authors. Full credit for the content goes to the real owners. RGPV Setu does not claim ownership of any third-party materials and shares them solely to support students in their academic preparation.
          </p>
        </section>
        <NotesSection id="sem1" title="1st Semester Notes & Imp Topic" subjects={sem1Subjects} />
        <NotesSection id="sem2" title="2nd Semester Notes & Imp Topic" subjects={sem2Subjects} />
        <NotesSection id="sem3" title="3rd Semester Notes & Imp Topic" subjects={sem3Subjects} />
        <ExamTips />
      </main>
      <Footer />
    </div>
  );
};

export default App;
