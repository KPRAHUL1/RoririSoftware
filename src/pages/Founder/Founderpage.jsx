import React from 'react';
import { motion as Motion} from 'framer-motion';
import founder from "../../assets/founderimage/founder.png"
const FounderSection = () => {
  return (
    <section className="py-16 md:py-24 bg-roriri-dark px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-12">
        <Motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <p className="text-xl text-gray-500 leading-relaxed">
            " Our employees are the backbone of our organization, driving success and enabling our clients
              to thrive. I deeply value our team's dedication and strive to make Roriri
              a company that both employees and clients can be genuinely proud of. <br />
              My vision is to foster a workplace that inspires and deliver solutions that exceed expectations."
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-roriri-purple mb-4">
            MR.Ragupathi R
          </p>
         <h2 className=" text-black mb-6">
            Founder & Managing Director
          </h2> 
        </Motion.div>
        <Motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          {/* Founder's image */}
          <img
            src={founder} // Replace with actual image path
            alt="Mr. Ragupathi R"
            className="rounded-xl  w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </Motion.div>
      </div>
    </section>
  );
};

export default FounderSection;