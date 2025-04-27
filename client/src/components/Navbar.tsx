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

  const [displayedText, setDisplayedText] = useState(""); // To store the current text
const texts = ["XII - TKJ 2", "Malaz" , "Rajin"]; // List of texts to loop through
const typingSpeed = 100; // ms per character
const erasingSpeed = 50; // ms per character
const delayAfterTyping = 1000; // 1 second delay after typing full text

useEffect(() => {
  let typingTimeout: NodeJS.Timeout;
  let erasingTimeout: NodeJS.Timeout;
  let delayTimeout: NodeJS.Timeout;
  let currentTextIndex = 0;
  let charIndex = 0;
  let isErasing = false;

  const type = () => {
    const currentText = texts[currentTextIndex];
    if (!isErasing) {
      // Typing
      if (charIndex < currentText.length) {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        charIndex++;
        typingTimeout = setTimeout(type, typingSpeed);
      } else {
        // Finished typing, wait then start erasing
        delayTimeout = setTimeout(() => {
          isErasing = true;
          erasingTimeout = setTimeout(type, erasingSpeed);
        }, delayAfterTyping);
      }
    } else {
      // Erasing
      if (charIndex > 0) {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        charIndex--;
        erasingTimeout = setTimeout(type, erasingSpeed);
      } else {
        // Finished erasing, move to next text
        isErasing = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        typingTimeout = setTimeout(type, typingSpeed);
      }
    }
  };

  type();

  return () => {
    clearTimeout(typingTimeout);
    clearTimeout(erasingTimeout);
    clearTimeout(delayTimeout);
  };
}, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-black text-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
        <h1 className="text-xl font-heading font-bold bg-gradient-to-r from-gray-200 to-white text-transparent bg-clip-text">
  {displayedText}
</h1>
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
                  onClick={() => scrollToSection("teacher")}
                  className="hover:text-gray-300 transition duration-300"
                >
                  Teacher
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
            <ul className="flex space-x-3">
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
                  onClick={() => scrollToSection("teacher")}
                  className="hover:text-gray-300 transition duration-300 text-sm"
                >
                  Teacher
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
