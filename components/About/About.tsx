export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-28 text-gray-300"
    >
      <h2 className="text-5xl font-bold text-center mb-14 text-white">
        About Me
      </h2>

      <div className="bg-white/5 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-10 shadow-xl leading-9 text-lg">

        <p className="mb-6">
          Hello! I'm{" "}
          <span className="text-cyan-400 font-semibold">
            Vaishnavi
          </span>
          , an aspiring <span className="text-white font-semibold">Artificial Intelligence & Machine Learning Engineer</span> with
          a deep passion for building intelligent technologies that solve
          meaningful real-world problems. I believe Artificial Intelligence is
          transforming the future, and I aspire to contribute by developing
          innovative, reliable, and impactful AI-driven solutions.
        </p>

        <p className="mb-6">
          My interests span across <span className="text-cyan-400">Machine Learning</span>,
          <span className="text-cyan-400"> Deep Learning</span>,
          <span className="text-cyan-400"> Computer Vision</span>,
          <span className="text-cyan-400"> Natural Language Processing</span>,
          and intelligent software systems. I enjoy transforming ideas into
          practical applications by combining analytical thinking, creativity,
          and modern technologies.
        </p>

        <p className="mb-6">
          I continuously explore emerging AI research, industry trends, and
          cutting-edge tools to strengthen my technical expertise. For me,
          learning is a lifelong journey, and every project is an opportunity to
          improve my problem-solving abilities while creating solutions that are
          both efficient and user-centric.
        </p>

        <p>
          My long-term vision is to become a skilled AI Engineer capable of
          designing intelligent systems that improve everyday life and create
          positive social impact. I aim to contribute to organizations that
          value innovation, continuous learning, and technological excellence,
          while building products that make Artificial Intelligence more
          accessible, ethical, and meaningful for everyone.
        </p>

      </div>
    </section>
  );
}