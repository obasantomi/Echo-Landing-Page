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
        <p className="md:text-[64px] text-[37px] font-bold">
          <span className="text-[#FFC45C] mr-2">Listen</span>
          <span className="text-[#F49B31]">Better.</span>
        </p>
        <p className="md:text-[64px] text-[37px] font-bold">
          <span className="text-[#FFC45C] mr-2">Lead</span>
          <span className="text-[#F49B31]">Smarter.</span>
        </p>
        <div className="flex gap-1">
          <span className="text-[#F2A956]">Turn</span>
          <span className="text-[#FFC37B]">Noise</span>
          <span className="text-[#F2A956]">Into</span>
          <span className="text-[#FFC37B]">Signal</span>
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
