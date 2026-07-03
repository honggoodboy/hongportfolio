import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

export default function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    problem: "",
    features: "",
    technologies: "",
    contribution: "",
    challenges: "",
    lessonsLearned: "",
    githubLink: "",
    demoLink: "",
  });

  useEffect(() => {
    loadProject();
  }, [id]);

  const loadProject = async () => {
    try {
      const res = await api.get(`/projects/${id}`);

      setFormData({
        title: res.data.title || "",
        image: res.data.image || "",
        description: res.data.description || "",
        problem: res.data.problem || "",
        features: res.data.features?.join(", ") || "",
        technologies: res.data.technologies?.join(", ") || "",
        contribution: res.data.contribution || "",
        challenges: res.data.challenges || "",
        lessonsLearned: res.data.lessonsLearned || "",
        githubLink: res.data.githubLink || "",
        demoLink: res.data.demoLink || "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        features: formData.features
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        technologies: formData.technologies
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      await api.put(`/projects/${id}`, payload, {
        headers: {
          "x-admin-key": "portfolio2026",
        },
      });

      navigate("/admin/projects");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] py-10 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Edit Project
          </h1>

          <p className="text-gray-500 mt-2">
            Update your portfolio project information.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-5"
        >
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A100]"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A100]"
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A100]"
          />

          <textarea
            name="problem"
            placeholder="Problem Addressed"
            value={formData.problem}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A100]"
          />

          <textarea
            name="features"
            placeholder="Features (comma separated)"
            value={formData.features}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A100]"
          />

          <textarea
            name="technologies"
            placeholder="Technologies (comma separated)"
            value={formData.technologies}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A100]"
          />

          <textarea
            name="contribution"
            placeholder="My Contribution"
            value={formData.contribution}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A100]"
          />

          <textarea
            name="challenges"
            placeholder="Challenges Encountered"
            value={formData.challenges}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A100]"
          />

          <textarea
            name="lessonsLearned"
            placeholder="Lessons Learned"
            value={formData.lessonsLearned}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A100]"
          />

          <input
            type="text"
            name="githubLink"
            placeholder="GitHub Link"
            value={formData.githubLink}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A100]"
          />

          <input
            type="text"
            name="demoLink"
            placeholder="Demo Link"
            value={formData.demoLink}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#E6A100]"
          />

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="bg-[#E6A100] text-white px-6 py-3 rounded-xl hover:bg-[#cc8e00] transition"
            >
              Update Project
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/projects")}
              className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}