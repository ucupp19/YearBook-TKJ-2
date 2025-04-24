import { motion } from "framer-motion";
import { students } from "../data/students";

const StudentSection = () => {
  return (
    <section id="students" className="py-20 bg-gray-900 px-4 animate-fadeIn">
      <div className="container mx-auto">
        <h2 className="text-4xl font-decorative font-bold text-center mb-12 text-white animate-slideUp">
          Our Students
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
          {students.map((student, index) => (
            <div
              key={index}
              className={`text-center mb-8 animate-scaleIn`}
              style={{ animationDelay: `${index % 12 * 50}ms` }}
            >
              <div className="bg-black p-2 rounded-lg shadow-md mb-3 w-full h-40 overflow-hidden border border-gray-800">
                <img
                  src={student.photoUrl}
                  alt={`${student.name}'s photo`}
                  className="w-full h-full object-cover object-center rounded grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
              <p className="font-medium text-gray-300">{student.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentSection;
