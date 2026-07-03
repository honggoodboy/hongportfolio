import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

import AdminProjects from "./pages/AdminProjects";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";

function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />

      <Route
        path="/admin/projects"
        element={<AdminProjects />}
      />

      <Route
        path="/admin/projects/add"
        element={<AddProject />}
      />

      <Route
        path="/admin/projects/edit/:id"
        element={<EditProject />}
      />
    </Routes>
  );
}