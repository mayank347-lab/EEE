import React from "react";

const ExamTips: React.FC = () => {
  const tips: string[] = [
    "Write as many pages as possible with relevant content. Detailed answers help in scoring better marks.",
    "If a question includes a diagram, draw it neatly and clearly. Use the diagram to explain your answer.",
    "Start with questions that you know well or that have appeared in previous exams.",
    "Even if you do not know the exact answer, try to connect the question with a related topic you know. Explain that topic properly and write meaningful points.",
    "Write in clear handwriting and keep your answers well-structured using headings and sub-points.",
    "Avoid leaving questions blank. Attempt every question with whatever relevant knowledge you have.",
    "Use keywords, definitions, formulas, and examples wherever possible to improve answer quality."
  ];

  return (
    <section id="exam-tips" className="py-8 md:py-12">
      <div className="bg-slate-900 rounded-lg shadow-2xl p-8 md:p-12 border border-slate-800">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 relative">
          RGPV Exams Tips
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span>
        </h2>

        {/* Tips List */}
        <ul className="space-y-4 mb-12 text-lg text-gray-300 md:pl-8">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-check-circle text-blue-500 mt-1 mr-3"></i>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
        <a
  href="https://www.youtube.com/watch?v=cQ0ZJ-oKL1https://www.youtube.com/watch?si=y3kmko-oWa2Ipyg-&v=cQ0ZJ-oKL1Q&feature=youtu.be"
  href=""
  target="_blank"
  className="block rounded-xl p-6 bg-slate-800 hover:bg-slate-700"
>
  <h3 className="text-white text-xl font-semibold">
    RGPV Exam Preparation Tips
  </h3>
  <p className="text-slate-400">
    Click to watch video
  </p>
</a>


<iframe
  className="w-full aspect-video"
  src="https://www.youtube.com/embed/cQ0ZJ-oKL1Q"
  title="RGPV Exam Preparation Tips"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>


      </div>

        </p>
      </div>
    </div>

        {/* WhatsApp Button */ }
  <div className="text-center mt-8">
    <a
      href="https://whatsapp.com/channel/0029VaBBGeVFCCoaDeWdp10S"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-500 text-white font-bold text-xl py-4 px-8 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:scale-105"
    >
      <i className="fab fa-whatsapp mr-3"></i>
      Join WhatsApp Community For Upcoming Updates
    </a>


    <h3> For Upcoming notes, important topics, solved question papers, and model question papers—join our WhatsApp channel.
    </h3>

  </div>

      </div >
    </section >
  );
};

export default ExamTips;
