import React from "react";
import { motion } from "framer-motion";
import { style } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  company,
  image,
  designation,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 xs:w-[320px] rounded-3xl p-10 w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white text-[18px] tracking-wider">{testimonial}</p>
        <div className="flex justify-between items-center mt-7 gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white text-[16px] font-medium">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="rounded-full w-10 h-10 object-cover "
          />
        </div>
      </div>
    </motion.div>
  );
};
const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${style.padding} bg-tertiary rounded-2xl 
      min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={style.sectionSubText}>What others say</p>
          <h2 className={style.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div
        className={`${style.paddingX} -mt-20 pb-14 flex 
      flex-wrap gap-7`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard index={index} key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
