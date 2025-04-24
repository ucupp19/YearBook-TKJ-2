import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-b from-primary to-blue-800 text-white px-4"
    >
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-heading font-bold mb-6"
        >
          XII - TKJ 2
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-blue-100"
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
          className="inline-block bg-accent hover:bg-orange-500 text-white py-3 px-8 rounded-full font-semibold transition duration-300 shadow-lg"
        >
          View Our Gallery
        </motion.button>
      </div>
    </section>
  );
};

export default HomeSection;
