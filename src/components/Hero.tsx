import HeroForm from "./HeroForm";
import Admin from "../assets/images/Admin Feed Details - Landing 1.png";
import Feed from "../assets/images/Feed - Landing 1.png";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="home" className="relative mt-60 lg:mt-40  overflow-hidden">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="flex select-none flex-col items-center"
      >
        <p className="md:text-[64px] text-center text-[#F49B31] max-w-210 mb-5 text-[37px] font-bold">
          Where every voice drives real institutional change
        </p>

        <div className="flex gap-1 text-center mb-5 text-[#F49B31] max-w-125">
          Echo gives communities a space to raise problems, propose solutions,
          and hold institutions accountable to act.
        </div>

        <div className="flex gap-3 mt-5">
          <a
            target="_blank"
            href="https://webapp-echo.vercel.app/login"
            className="bg-[#F49B31] hover:bg-[#F49B314D] text-white border transition-all duration-300  border-[#F49B31] rounded-[20px] py-3.75 px-7.5"
          >
            Log in
          </a>
          <a
            target="_blank"
            href="https://webapp-echo.vercel.app/signUp"
            className=" text-[#F49B31] border transition-all duration-300 hover:bg-[#F49B31] hover:text-white border-[#F49B31] rounded-[20px] py-3.75 px-7.5"
          >
            Join ECHO
          </a>
        </div>
      </motion.div>

      <HeroForm />

      <motion.img
        initial={{ y: 200, x: 0 }}
        animate={{ y: -100, x: 50 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
        src={Feed}
        alt=""
        className="absolute select-none hidden lg:block -z-20 -bottom-70 -left-90"
        draggable="false"
      />
      <motion.img
        initial={{ y: 200, x: 0 }}
        animate={{ y: -100, x: -50 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
        src={Admin}
        alt=""
        className="absolute select-none hidden lg:block -z-20 -bottom-70 -right-90"
        draggable="false"
      />
    </section>
  );
};

export default Hero;
