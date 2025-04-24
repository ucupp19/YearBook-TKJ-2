import { motion } from "framer-motion";
import { galleryImages } from "../data/galleryImages";

const GallerySection = () => {
  // Create duplicated arrays for continuous scrolling effect
  const firstRowImages = [...galleryImages.slice(0, 5), ...galleryImages.slice(0, 5)];
  const secondRowImages = [...galleryImages.slice(5, 10), ...galleryImages.slice(5, 10)];

  return (
    <section id="gallery" className="py-20 bg-black px-4 animate-fadeIn">
      <div className="container mx-auto">
        <h2 className="text-4xl font-decorative font-bold text-center mb-12 text-white animate-slideUp">
          Gallery
        </h2>

        <div className="gallery-container mb-8 animate-fadeIn delay-300">
          <motion.div
            className="gallery-row"
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {firstRowImages.map((image, index) => (
              <div key={`row1-${index}`} className="px-2">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="h-48 w-80 object-cover rounded-lg shadow-md grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="gallery-container animate-fadeIn delay-500">
          <motion.div
            className="gallery-row"
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
              delay: 0.2, // Slight delay for second row to create staggered effect
            }}
          >
            {secondRowImages.map((image, index) => (
              <div key={`row2-${index}`} className="px-2">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="h-48 w-80 object-cover rounded-lg shadow-md grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
