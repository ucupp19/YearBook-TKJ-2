import { motion } from "framer-motion";

const TeacherSection = () => {
  return (
    <section id="teacher" className="py-24 bg-green-50 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold text-center mb-16 text-green-700"
        >
          Our Teacher
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-3xl font-heading font-bold text-green-700 mb-4">Mrs. Jane Smith</h3>
            <p className="text-green-800 mb-6 text-lg">
              With over 10 years of experience teaching Computer and Network Engineering, 
              Mrs. Smith brings both practical industry knowledge and academic excellence 
              to her classroom.
            </p>
            <p className="text-green-600 mb-8">
              Her teaching philosophy emphasizes hands-on learning, problem-solving, and 
              preparing students for real-world challenges in the rapidly evolving field 
              of technology.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm">Networking</span>
              <span className="inline-block bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm">Programming</span>
              <span className="inline-block bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm">Systems Architecture</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-200 shadow-xl">
              <img 
                src="https://randomuser.me/api/portraits/women/65.jpg" 
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