export default function About() {
  return (
    <section id="about" className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold text-center mb-4">
          About Me
        </h1>

        <div className="w-24 h-1 bg-[#E6A100] mx-auto mb-12"></div>

        <div className="bg-[#FAFAF8] p-8 rounded-2xl shadow-lg">

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I am <strong>Soeung Menghong</strong>, a Software Engineering
            student with a strong interest in web development, software
            design, and modern technologies. My academic journey has
            provided me with knowledge in programming, database systems,
            software architecture, and full-stack application development.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I became interested in software engineering because I enjoy
            solving real-world problems through technology. I am
            particularly fascinated by how software can improve efficiency,
            enhance user experiences, and create innovative solutions for
            businesses and communities.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            My career goal is to become a professional Full-Stack Developer
            and continuously expand my knowledge of modern software
            development practices. I aim to contribute to impactful
            projects while developing strong technical and teamwork skills.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Some of my strengths include problem-solving, adaptability,
            teamwork, and a willingness to learn new technologies. I enjoy
            taking on challenges that allow me to improve both my technical
            and analytical abilities.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            I value professionalism, continuous learning, collaboration,
            and responsibility. I particularly enjoy working on web
            applications, database-driven systems, and user-focused
            software solutions using technologies such as React, Node.js,
            Express, MongoDB, and Java.
          </p>

        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-[#E6A100] mb-2">
              Education
            </h3>
            <p className="text-gray-600">
              Software Engineering Student
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-[#E6A100] mb-2">
              Career Goal
            </h3>
            <p className="text-gray-600">
              Full-Stack Developer
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-[#E6A100] mb-2">
              Technologies
            </h3>
            <p className="text-gray-600">
              React • Node.js • MongoDB
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}