import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { style } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        option={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full sm:w-[360px] bg-tertiary p-5 rounded-2xl "
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-2xl object-cover"
          />
          <div
            className="absolute inset-0 flex m-3 justify-end 
          card-img_hover"
          >
            <div
              onClick={() => window.open(source_code_link)}
              className="black-gradient w-10 h-10 rounded-full 
             justify-center items-center flex cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <>
      {
        <motion.div variants={textVariant()}>
          <p className={style.sectionSubText}>My work</p>
          <h2 className={style.sectionHeadText}>Projects.</h2>
        </motion.div>
      }
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following project showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          link to code repositories and live demo in it. It reflects my ability
          to solve complex problems, work with different technlogies, and manage
          projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
