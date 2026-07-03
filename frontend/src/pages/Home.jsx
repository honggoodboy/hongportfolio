import Hong from "../assets/Hong.jpg";

export default function Home() {
  return (
    <section id="home" className="min-h-screen bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <p className="text-[#E6A100] text-xl mb-3">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
              <span className="text-black">Soeung </span>
              <span className="text-[#E6A100]">Menghong</span>
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Software Engineering Student &
              <br />
              <span className="text-[#E6A100]">
                Junior Full-Stack Developer
              </span>
            </h2>

            <p className="text-gray-600 max-w-xl text-lg leading-relaxed mb-10">
              I am a Software Engineering student passionate about
              web development, software design, and Object-Oriented Programming. I enjoy building responsive web
              applications using React, Express, Node.js, and MongoDB
              while continuously learning new technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/projects"
                className="bg-[#E6A100] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#CC9000] transition"
              >
                View My Projects
              </a>

              <a
                href="/contact"
                className="border-2 border-[#E6A100] text-[#E6A100] px-8 py-4 rounded-xl font-semibold hover:bg-[#E6A100] hover:text-white transition"
              >
                Contact Me
              </a>
                            <a
                href="/cv.pdf"
                download
                className="bg-[#E6A100] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#CC9000] transition"
              >
                Download CV
              </a>
            </div>

            {/* Quick Info */}
            <div className="flex gap-10 mt-12">

              <div>
                <h3 className="text-3xl font-bold text-[#E6A100]">
                  5+
                </h3>
                <p className="text-gray-500">
                  Academic Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#E6A100]">
                  3+
                </h3>
                <p className="text-gray-500">
                  Technologies
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#E6A100]">
                  100%
                </h3>
                <p className="text-gray-500">
                  Learning Passion
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-[#F6E4B4] rounded-full scale-110"></div>

              <img
                src={Hong}
                alt="Soeung Menghong"
                className="relative z-10 w-[380px] h-[380px] object-cover rounded-full border-8 border-white shadow-2xl"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}