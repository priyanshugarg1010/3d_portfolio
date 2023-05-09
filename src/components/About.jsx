import React from "react";
import { style } from "../style";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  // return <p>{title}</p>;
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 
        min-h-[280px] flex flex-col justify-evenly items-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-center font-bold text-[20px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>Introduction</p>
        <h2 className={style.sectionHeadText}>overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary
        text-[17px] leading-[30px] max-w-xl"
      >
        I am a skilled Full Stack Developer with experience in javascript, and
        expertise in frameworks like React, Node-js, and Three-js. I'm a quick
        learner, and work closely with clients to create efficient, userfriendly
        and scalable solutions that solve real-world problems. Lets work
        together to bring your ideas to life.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
