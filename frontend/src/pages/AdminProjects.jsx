import { useEffect, useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import api from "../services/api";

  
export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState("projects");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
    fetchMessages();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await api.get("/messages");
      setMessages(res.data);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/projects/${id}`, {
        headers: {
          "x-admin-key": "portfolio2026",
        },
      });

      fetchProjects();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    
    <div className="min-h-screen bg-[#FAFAF8] py-10 px-6">
      <div className="mb-4">
  <button
    onClick={() => navigate("/")}
    className="px-3 py-1 text-sm border rounded-lg text-gray-600 hover:bg-gray-100 transition"
  >
    ← Back
  </button>
</div>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Portfolio Admin
            </h1>

            <p className="text-gray-500 mt-2">
              Manage projects and contact messages.
            </p>
          </div>

          {activeTab === "projects" && (
            <Link
              to="/admin/projects/add"
              className="mt-4 md:mt-0 bg-[#E6A100] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#cc8e00] transition"
            >
              + Add New Project
            </Link>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-5 py-2 rounded-lg transition ${
              activeTab === "projects"
                ? "bg-[#E6A100] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Projects
          </button>

          <button
            onClick={() => setActiveTab("messages")}
            className={`px-5 py-2 rounded-lg transition ${
              activeTab === "messages"
                ? "bg-[#E6A100] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Messages
          </button>
        </div>

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <>
            {projects.length === 0 && (
              <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                <h2 className="text-xl font-semibold text-gray-700">
                  No Projects Found
                </h2>

                <p className="text-gray-500 mt-2">
                  Start by adding your first project.
                </p>
              </div>
            )}

            <div className="grid gap-6">
              {projects.map((project) => (
                <div
                  key={project._id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-6">

                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-800">
                        {project.title}
                      </h2>

                      <p className="text-gray-600 mt-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies?.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-[#FFF5DA] text-[#E6A100] text-xs px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-3">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-28 h-20 object-cover rounded-lg border"
                        />
                      )}

                      <div className="flex gap-3">
                        <Link
                          to={`/admin/projects/edit/${project._id}`}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => handleDelete(project._id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Messages Tab */}
        {activeTab === "messages" && (
          <div className="space-y-4">
            {messages.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                <h2 className="text-xl font-semibold text-gray-700">
                  No Messages Found
                </h2>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message._id}
                  className="bg-white rounded-2xl shadow-md p-6"
                >
                  <h3 className="text-xl font-bold text-gray-800">
                    {message.name}
                  </h3>

                  <p className="text-gray-500">
                    {message.email}
                  </p>

                  <p className="mt-4 text-gray-700">
                    {message.message}
                  </p>
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
}