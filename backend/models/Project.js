import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: 
  { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  problem: { type: String, required: true },
  features: [{ type: String, required: true }],
  technologies: [{ type: String, required: true }],
  contribution: { type: String },
  challenges: { type: String },
  lessonsLearned: { type: String },
  githubLink: { type: String },
  demoLink: { type: String },
});

export default mongoose.model("Project", projectSchema);