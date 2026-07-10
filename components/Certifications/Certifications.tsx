const certifications = [
  "Java Full Stack Development - CodeBuilders (2024)",
  "HTML, CSS & JavaScript - CodeBuilders (2024)",
  "Python Programming - K'Log Institution (2023)",
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        Certifications
      </h2>

      <div className="space-y-4">
        {certifications.map((item) => (
          <div
            key={item}
            className="bg-white/5 rounded-xl p-5"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}