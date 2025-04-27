import { motion } from "framer-motion";
import PPImage from "../data/gambar/PP.png";

const TeacherSection = () => {
  return (
    <section id="teacher" className="py-24 bg-white px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Controls animation while in view
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: 20 }} // Controls animation when exiting the view
          className="text-4xl font-heading font-bold text-center mb-16 text-black"
        >
          Our Teacher
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }} // Controls animation while in view
            transition={{ duration: 0.6 }}
            exit={{ opacity: 0, x: -50 }} // Controls animation when exiting the view
            className="flex-1"
          >
            <h3 className="text-3xl font-heading font-bold text-black mb-4">Mrs. Fitri Ainun Rosita</h3>
            <p className="text-gray-800 mb-6 text-lg">
              Beliau mengajar kami selama 3 tahun, menggabungkan teori dengan praktik untuk mengasah
              keterampilan pemecahan masalah. Pendekatannya mempersiapkan kami menghadapi tantangan
              dunia teknologi yang terus berkembang, sehingga kami siap berkontribusi di industri.
            </p>
            <p className="text-gray-600 mb-8">
              Beliau sangat baik, selalu sabar, perhatian, dan tulus dalam membimbing kami.
              Dengan kebaikan hatinya, beliau tidak hanya mengajarkan ilmu, tetapi juga memberikan inspirasi untuk terus belajar dan berkembang.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm">Baik Hati</span>
              <span className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm">Ramah</span>
              <span className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm">Sabar</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }} // Controls animation while in view
            transition={{ duration: 0.6, delay: 0.2 }}
            exit={{ opacity: 0, x: 50 }} // Controls animation when exiting the view
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 shadow-xl">
              <img
                src={PPImage}
                alt="Teacher portrait"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;
