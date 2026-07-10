export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        Experience
      </h2>

      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-2xl font-semibold">
          AI Intern
        </h3>

        <p className="text-cyan-400 mt-2">
          Retech Solutions
        </p>

        <p className="text-gray-400 mb-6">
          May 2025 – June 2025
        </p>

        <ul className="list-disc pl-5 space-y-3 text-gray-300">
          <li>
            Developed AI and Computer Vision applications using Python,
            OpenCV and YOLOv5.
          </li>

          <li>
            Collected and annotated datasets using Roboflow.
          </li>

          <li>
            Trained and optimized deep learning models.
          </li>

          <li>
            Worked with Machine Learning workflows and automation.
          </li>
        </ul>
      </div>
    </section>
  );
}