import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);


await Project.deleteMany();

await Project.insertMany([
  {
    title: "Reachsei Store",
    image: "/images/reachseistore.png",
    description:
      "An e-commerce platform that allows badminton players to browse, purchase, and manage badminton equipment, apparel, and accessories online.",

    problem:
      "Many badminton players struggle to find a reliable platform for purchasing quality badminton products.",

    features: [
      "Product catalog",
      "Category management",
      "Shopping cart",
      "User authentication",
      "Order management",
      "Admin dashboard",
    ],

    technologies: ["React", "Node.js", "Express", "Supabase"],

    contribution:
      "Designed and developed the frontend interface and implemented product management features.",

    challenges:
      "Managing shopping cart functionality and integrating frontend and backend systems.",

    lessonsLearned:
      "Improved full-stack development skills, API integration, database management, and responsive design.",

    githubLink: "https://github.com/honggoodboy/ReachSei_final",

    demoLink: "https://reach-sei-final.vercel.app/",
  },

  {
    title: "SaveEat",
    image: "/images/saveeat.png",

    description:
      "A food waste reduction platform that connects restaurants with customers through discounted surplus meals and a simple ordering system.",

    problem:
      "Restaurants often have unsold food that leads to waste and financial loss while customers miss affordable meal opportunities.",

    features: [
      "Meal listings",
      "Restaurant dashboard",
      "Customer ordering",
      "QR verification",
      "Inventory updates",
      "Secure checkout",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    contribution:
      "Designed the user interface, integrated APIs, and contributed to database and system design.",

    challenges:
      "Creating a smooth ordering workflow and handling real-time food availability updates.",

    lessonsLearned:
      "Strengthened skills in full-stack development, REST APIs, responsive design, and database management.",

    githubLink: "https://github.com/soeungmenghong/SaveEatWeb",
  },

  {
    title: "Repair Tech App",
    image: "/images/repairme.png",

    description:
      "A mobile application prototype that helps users find trusted repair shops, compare services, and access reliable maintenance solutions.",

    problem:
      "Users often struggle to find reliable repair services with transparent pricing and trustworthy reviews.",

    features: [
      "Shop search",
      "Ratings system",
      "Location finder",
      "Service listings",
      "Reviews",
      "Shop profiles",
    ],

    technologies: [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
    ],

    contribution:
      "Created user flows, wireframes, prototypes, and interface designs for the application.",

    challenges:
      "Designing an intuitive user experience while balancing functionality and simplicity.",

    lessonsLearned:
      "Improved skills in UX research, prototyping, user-centered design, and interface planning.",
  },

  {
    title: "Portfolio Website",
    image: "/images/portfolio.jpg",

    description:
      "A personal portfolio website designed to showcase projects, technical skills, educational background, and professional achievements.",

    problem:
      "Developers need a professional online platform to present their work and achievements effectively.",

    features: [
      "Project showcase",
      "Skills section",
      "Education section",
      "Contact form",
      "Responsive design",
      "Admin dashboard",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    contribution:
      "Designed and developed the complete application including frontend, backend, and database integration.",

    challenges:
      "Building a scalable structure and integrating dynamic project management features.",

    lessonsLearned:
      "Enhanced knowledge of full-stack development, REST APIs, MongoDB, and deployment workflows.",
  },
]);

console.log("Projects inserted successfully");

process.exit();