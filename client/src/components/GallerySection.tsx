import { motion } from "framer-motion";
import { galleryImages } from "../data/galleryImages";

const GallerySection = () => {
  // Create duplicated arrays for continuous scrolling effect
  const firstRowImages = [...galleryImages.slice(0, 5), ...galleryImages.slice(0, 5)];
  const secondRowImages = [...galleryImages.slice(5, 10), ...galleryImages.slice(5, 10)];

  return (
    <section id="gallery" className="py-20 bg-white px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold text-center mb-12 text-primary"
        >
          Gallery
        </motion.h2>

        <div className="gallery-container mb-8">
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
                  className="h-48 w-80 object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="gallery-container">
          <motion.div
            className="gallery-row"
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {secondRowImages.map((image, index) => (
              <div key={`row2-${index}`} className="px-2">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="h-48 w-80 object-cover rounded-lg shadow-md"
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
