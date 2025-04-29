import { motion } from "framer-motion";
import PPImage from "../data/gambar/TEACHER.png";

const TeacherSection = () => {
  return (
    <section id="teacher" className="min-h-screen flex items-center py-24 bg-white px-4">
      <div className="container mx-auto select-none">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Controls animation while in view
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: 20 }} // Controls animation when exiting the view
          className="text-4xl font-heading font-bold text-center mb-4 text-black"
        >
          Our Teacher
        </motion.h2>

        

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }} // Controls animation while in view
            transition={{ duration: 0.6 }}
            exit={{ opacity: 0, x: -50 }} // Controls animation when exiting the view
            className="flex-1 order-2 sm:order-1"
          >
            <h3 className="text-2xl font-heading font-bold text-black mb-2">Bu Fitri Ainun Rosita S.Pd</h3>
            <p className="text-gray-800 mb-9 text-justify text-lg sm:mx-4" >
              Beliau mengajar kami selama 3 tahun, menggabungkan teori dengan praktik untuk mengasah
              keterampilan pemecahan masalah. 
              Pendekatannya mempersiapkan kami menghadapi tantangan
              dunia teknologi yang terus berkembang, sehingga kami siap berkontribusi di industri.
            </p>
            <p className="text-gray-600 mb-6 text-justify text-lg sm:mx-4">
              Selain itu, beliau juga mengajarkan kami tentang pentingnya etika dan tanggung jawab
              dalam dunia teknologi.
              Dengan pengetahuan dan pengalaman yang luas, beliau selalu memberikan bimbingan
              yang berharga kepada kami.
              Kami sangat beruntung memiliki beliau sebagai guru kami.
            
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }} // Controls animation while in view
            transition={{ duration: 0.6, delay: 0.2 }}
            exit={{ opacity: 0, x: 50 }} // Controls animation when exiting the view
            className="flex-1 flex justify-center md:justify-end m-8 order-1 sm:order-2"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 shadow-xl ">
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
