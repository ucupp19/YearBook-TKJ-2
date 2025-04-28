import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { galleryImages } from "../data/galleryImages";

// Reusable scrolling row component
const ScrollingRow = ({
  images,
  controls,
  initialX,
  reverse = false,
  onImageClick,
}: {
  images: typeof galleryImages;
  controls: ReturnType<typeof useAnimationControls>;
  initialX: string;
  reverse?: boolean;
  onImageClick: (url: string) => void;
}) => (
  <div
    className="gallery-container overflow-hidden mb-8"
    onMouseEnter={() => controls.stop()}
    onMouseLeave={() =>
      controls.start({
        x: reverse ? "0%" : "-50%",
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      })
    }
  >
    <motion.div className="gallery-row flex" animate={controls} initial={{ x: initialX }}>
      {images.map((image, index) => (
        <div key={index} className="px-2 shrink-0">
          <img
            src={image.url}
            alt={image.alt}
            onClick={() => onImageClick(image.url)}
            className="h-48 w-80 object-cover rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-500 cursor-pointer select-none"
          />
        </div>
      ))}
    </motion.div>
  </div>
);

const GallerySection = () => {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  // Duplicate images for infinite scroll
  const firstRowImages = [...galleryImages.slice(0, 6), ...galleryImages.slice(0, 6)];
  const secondRowImages = [...galleryImages.slice(6, 12), ...galleryImages.slice(6, 12)];
  const thirdRowImages = [...galleryImages.slice(12, 18), ...galleryImages.slice(12, 18)];

  // Animation controls for each row
  const firstRowControls = useAnimationControls();
  const secondRowControls = useAnimationControls();
  const thirdRowControls = useAnimationControls();

  // Start animations on mount
  useEffect(() => {
    firstRowControls.start({
      x: "-50%",
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 100,
        ease: "linear",
      },
    });

    secondRowControls.start({
      x: "0%",
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 100,
        ease: "linear",
      },
    });

    thirdRowControls.start({
      x: "-50%",
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 100,
        ease: "linear",
      },
    });
  }, []);

  // Handler to close modal
  const closeModal = () => setSelectedImageUrl(null);

  return (
    <section id="gallery" className="py-20 bg-white px-4">
      <div className="container mx-auto select-none">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-heading font-bold text-center mb-12 text-black select-none"
        >
          Gallery
        </motion.h2>

        <ScrollingRow
          images={firstRowImages}
          controls={firstRowControls}
          initialX="0%"
          onImageClick={setSelectedImageUrl}
        />

        <ScrollingRow
          images={secondRowImages}
          controls={secondRowControls}
          initialX="-50%"
          reverse
          onImageClick={setSelectedImageUrl}
        />

        <ScrollingRow
          images={thirdRowImages}
          controls={thirdRowControls}
          initialX="0%"
          onImageClick={setSelectedImageUrl}
        />
      </div>

      {/* Modal for enlarged image */}
      {selectedImageUrl && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 select-none"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-300 select-none"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedImageUrl}
              alt="Enlarged"
              className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
