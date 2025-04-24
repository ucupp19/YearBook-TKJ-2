import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import { galleryImages } from "../data/galleryImages";

const GallerySection = () => {
  // Create duplicated arrays for continuous scrolling effect
  const firstRowImages = [...galleryImages.slice(0, 5), ...galleryImages.slice(0, 5)];
  const secondRowImages = [...galleryImages.slice(5, 10), ...galleryImages.slice(5, 10)];
  
  // Animation controls for both rows
  const firstRowControls = useAnimationControls();
  const secondRowControls = useAnimationControls();
  
  // State to track hover status
  const [isFirstRowHovered, setIsFirstRowHovered] = useState(false);
  const [isSecondRowHovered, setIsSecondRowHovered] = useState(false);
  
  // Animation functions
  const startAnimation = (controls: ReturnType<typeof useAnimationControls>) => {
    controls.start({
      x: "-50%",
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      }
    });
  };
  
  const pauseAnimation = (controls: ReturnType<typeof useAnimationControls>) => {
    // This pauses the animation at its current position
    controls.stop();
  };
  
  // Start animations when component mounts
  useEffect(() => {
    startAnimation(firstRowControls);
    startAnimation(secondRowControls);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-white px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold text-center mb-12 text-black"
        >
          Gallery
        </motion.h2>

        <div 
          className="gallery-container mb-8"
          onMouseEnter={() => {
            setIsFirstRowHovered(true);
            pauseAnimation(firstRowControls);
          }}
          onMouseLeave={() => {
            setIsFirstRowHovered(false);
            startAnimation(firstRowControls);
          }}
        >
          <motion.div
            className="gallery-row"
            animate={firstRowControls}
            initial={{ x: 0 }}
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

        <div 
          className="gallery-container"
          onMouseEnter={() => {
            setIsSecondRowHovered(true);
            pauseAnimation(secondRowControls);
          }}
          onMouseLeave={() => {
            setIsSecondRowHovered(false);
            startAnimation(secondRowControls);
          }}
        >
          <motion.div
            className="gallery-row"
            animate={secondRowControls}
            initial={{ x: 0 }}
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
