import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const res = await api.get("/projects");

      console.log("API RESPONSE:", res.data);
      console.log("IS ARRAY:", Array.isArray(res.data));

      setProjects(res.data);
    } catch (error) {
      console.error("Failed to load projects:", error);
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
  <div className="text-center md:text-left">
    <h1 className="text-5xl font-bold mb-4">
      My Projects
    </h1>

    <div className="w-24 h-1 bg-[#E6A100] mx-auto md:mx-0"></div>
  </div>

  <Link
    to="/admin/projects"
    className="mt-4 md:mt-0 bg-[#E6A100] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#cc8e00] transition"
  >
    Admin Dashboard
  </Link>
</div>


        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Here are some of the projects I have worked on during my studies and
          personal learning journey. These projects showcase my skills in
          software development, UI/UX design, database management, and web
          technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-3">{project.title}</h2>

                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#FFF5DA] text-[#E6A100] text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#E6A100] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#cc8e00] transition"
                    >
                      GitHub
                    </a>
                  )}

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-[#E6A100] text-[#E6A100] px-4 py-2 rounded-lg text-sm hover:bg-[#FFF5DA] transition"
                    >
                      Live Demo
                    </a>
                  )}

                  <span
                    onClick={() => setSelectedProject(project)}
                    className="ml-auto text-[#E6A100] text-sm font-medium cursor-pointer hover:underline"
                  >
                    More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
</div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg">Description</h3>
                <p>{selectedProject.description}</p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Problem Addressed</h3>
                <p>{selectedProject.problem}</p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Main Features</h3>
                <ul className="list-disc ml-5">
                  {selectedProject.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#FFF5DA] text-[#E6A100] px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg">My Contribution</h3>
                <p>{selectedProject.contribution}</p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Challenges Encountered</h3>
                <p>{selectedProject.challenges}</p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Lessons Learned</h3>
                <p>{selectedProject.lessonsLearned}</p>
              </div>
            </div>

            <div className="flex gap-3 mt-6 flex-wrap">
              {selectedProject.githubLink && (
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#E6A100] text-white px-4 py-2 rounded-lg"
                >
                  GitHub
                </a>
              )}

              {selectedProject.demoLink && (
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#E6A100] text-[#E6A100] px-4 py-2 rounded-lg"
                >
                  Live Demo
                </a>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
    </section>
  );
}
