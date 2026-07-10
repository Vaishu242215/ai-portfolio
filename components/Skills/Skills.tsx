export default function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: ["Python", "Java"],
    },
    {
      title: "AI / ML",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
      ],
    },
    {
      title: "Libraries",
      skills: [
        "TensorFlow",
        "Keras",
        "OpenCV",
        "YOLOv5",
        "Scikit-learn",
        "Transformers",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Google Colab",
        "Roboflow",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-white/5 rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}