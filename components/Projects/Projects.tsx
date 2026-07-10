const projects = [
  {
    title: "SecureNote – Fake Currency Detector",
    tech: "Python • Flask • ViT • Roboflow • pyttsx3",
    description:
      "An AI-powered fake currency detection system designed for visually impaired users with gesture-based interaction and voice feedback.",
  },

  {
    title: "EduSpeak",
    tech: "Python • NLP • BART • Streamlit • gTTS",
    description:
      "An educational platform that extracts text from PDFs, summarizes content, translates it into Tamil, and generates speech output.",
  },

  {
    title: "Zero-Knowledge Login Framework",
    tech: "Cyber Security • Authentication",
    description:
      "A passwordless authentication framework using Zero-Knowledge Proofs to improve security and privacy.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-cyan-400 text-sm mb-4">
              {project.tech}
            </p>

            <p className="text-gray-300">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}