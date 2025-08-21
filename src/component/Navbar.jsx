import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur-lg text-white z-50 overflow-hidden">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4 gap-2">
        <h1 className="text-2xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">M Sivani</h1>

        <div className="hidden md:flex gap-8">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 flex flex-col items-center gap-6 py-6">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg hover:text-cyan-400 transition"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
