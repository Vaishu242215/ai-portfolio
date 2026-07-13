import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8 pt-24"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-cyan-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Vaishnavi V
          </h1>

          <h2 className="text-3xl text-gray-300 mt-4">
            AI & Machine Learning Engineer
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Passionate about Artificial Intelligence, Computer Vision,
            Deep Learning, NLP and building real-world intelligent
            applications.
          </p>

          <div className="flex gap-4 mt-8">

            {/* Hire Me Button */}
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-full text-black font-semibold transition duration-300"
            >
              Hire Me
            </a>

            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download="Vaishnavi_AI_ML_Resume.pdf"
              className="border border-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              Download Resume
            </a>

          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full border-4 border-cyan-400 overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.5)]">
            <Image
              src="/images/profile.png"
              alt="Vaishnavi"
              width={320}
              height={320}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}