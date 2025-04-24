import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-black text-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-heading font-bold bg-gradient-to-r from-gray-200 to-white text-transparent bg-clip-text">XII - TKJ 2</h1>
          <div className="hidden sm:block">
            <ul className="flex space-x-6">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-gray-300 transition duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="hover:text-gray-300 transition duration-300"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("students")}
                  className="hover:text-gray-300 transition duration-300"
                >
                  Students
                </button>
              </li>
            </ul>
          </div>
          <div className="sm:hidden">
            <ul className="flex space-x-4">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-gray-300 transition duration-300 text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="hover:text-gray-300 transition duration-300 text-sm"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("students")}
                  className="hover:text-gray-300 transition duration-300 text-sm"
                >
                  Students
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
