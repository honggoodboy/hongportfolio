import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

import AdminProjects from "./pages/AdminProjects";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";
import AdminLogin from "./pages/AdminLogin";

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
      {/* Public Routes */}
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/admin-login" element={<AdminLogin />} />

      {/* Protected Admin Routes */}
      <Route
        path="/admin/projects"
        element={
          <ProtectedAdminRoute>
            <AdminProjects />
          </ProtectedAdminRoute>
        }
      />

      <Route
        path="/admin/projects/add"
        element={
          <ProtectedAdminRoute>
            <AddProject />
          </ProtectedAdminRoute>
        }
      />

      <Route
        path="/admin/projects/edit/:id"
        element={
          <ProtectedAdminRoute>
            <EditProject />
          </ProtectedAdminRoute>
        }
      />
    </Routes>
  );
}