import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const HomeSection = () => {
  const particlesContainerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    // Generate particles
    if (particlesContainerRef.current) {
      const container = particlesContainerRef.current;
      container.innerHTML = ''; // Clear any existing particles
      
      // Number of particles based on screen size
      const particleCount = window.innerWidth < 768 ? 30 : 60;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 2-5px
        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random starting position
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        // Random delay so they don't all move at once
        particle.style.animationDelay = `${Math.random() * 20}s`;
        
        // Random duration for more natural movement
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        
        // Random opacity
        particle.style.opacity = `${Math.random() * 0.6 + 0.2}`;
        
        // White particles with slight glow
        particle.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        particle.style.boxShadow = `0 0 ${size}px rgba(255, 255, 255, 0.4)`;
        
        container.appendChild(particle);
      }
    }
    
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center justify-center bg-black text-white px-4 relative overflow-hidden"
    >
      <div ref={particlesContainerRef} className="particles-container"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-gray-200 to-white text-transparent bg-clip-text"
        >
          XII - TKJ 2
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-300"
        >
          Welcome to our class showcase. We are a group of passionate Computer and Network Engineering students.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => {
            const gallerySection = document.getElementById("gallery");
            if (gallerySection) gallerySection.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-block bg-white hover:bg-gray-200 text-black py-3 px-8 rounded-full font-semibold transition duration-300 hover:scale-105 shadow-lg"
        >
          View Our Gallery
        </motion.button>
      </div>
    </section>
  );
};

export default HomeSection;
