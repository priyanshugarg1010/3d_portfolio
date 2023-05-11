import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { style } from "../style";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse 
  flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={style.sectionSubText}>Get in touch</p>
        <h2 className={style.sectionHeadText}>Contact.</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="What's your name?"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder: text-secondary
              text-white outlined-none border-none font-medium rounded-lg"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              placeholder="What's your Email?"
              value={form.email}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder: text-secondary
              text-white outlined-none border-none font-medium rounded-lg"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows="7"
              name="message"
              placeholder="What do you want to say?"
              value={form.message}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder: text-secondary
              text-white outlined-none border-none font-medium rounded-lg"
            />
          </label>

          <button
            className="bg-tertiary py-3 px-8 outline-none 
          w-fit text-white rounded-xl shadow-primary font-bold 
          shadow-md font-medium border-none"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
