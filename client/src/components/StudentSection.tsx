import { motion } from "framer-motion";
import { students } from "../data/students";
import Particles from "./animations/TextPressure/Particles";

const StudentSection = () => {
  return (
    <section id="students" className="relative py-20 bg-black-50 px-4 overflow-hidden">
      
      {/* Particles as background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#FFFF80', '#FFAA80']}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 container mx-auto select-none">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-heading font-bold text-center mb-12 text-black"
        >
          The Students
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center select-none">
          {students.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
              className="text-center mb-8"
            >
              <div className="bg-white p-2 rounded-lg shadow-md mb-3 w-full h-40 overflow-hidden border border-black-200 hover:border-black-400 transition-all duration-300 hover:shadow-lg select-none">
                <img
                  src={student.photoUrl}
                  alt={`${student.name}'s photo`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center rounded hover:scale-110 transition duration-300"
                />
              </div>
              <p className="font-medium text-black-700">{student.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentSection;
