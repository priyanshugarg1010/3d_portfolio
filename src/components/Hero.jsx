import { motion } from "framer-motion";
import { style } from "../style";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${style.paddingX} absolute inset-0 flex
         flex-row top-[120px] max-w-7xl
         mx-auto items-start gap-5`}
      >
        <div
          className="flex flex-col justify-center 
        items-center mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${style.heroHeadText} text-white`}>
            Hi, I am <span className="text-[#915eff]">Priyanshu</span>
          </h1>
          <p className={`${style.heroSubText} text-white-60`}>
            <div className="text-[22px]">
              I develope <b>Full-Stack</b> web applications, seamlessly
              integrating frontend and backend technologies to deliver
              user-centric digital solutions.
            </div>
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div
        className="absolute w-full flex justify-center
      items-center xs:bottom-10 bottom-32"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 
          border-secondary flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
