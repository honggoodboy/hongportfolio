import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "education",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        <p className="text-2xl font-bold text-[#000000]">
          My Portfolio
        </p>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-[#E6A100] transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block px-6 py-4 border-b"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}