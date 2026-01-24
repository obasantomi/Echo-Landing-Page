import Noise from "../assets/images/Noise.svg";
import ProblemCard from "./ProblemCard";
import shout from "../assets/images/shout.svg";
import broken from "../assets/images/broken.svg";
import layer from "../assets/images/Layer_2.svg";
import heart from "../assets/images/heart.svg";
import { motion } from "motion/react";

const Problem = () => {
  return (
    <section id="problem" className="bg-black text-white px-5 pt-20">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col items-center mb-20 mx-auto max-w-137.5"
      >
        <p className="text-[#F49B31] mb-10">The Problem</p>
        <h1 className="text-[60px] text-center">
          Feedback today is noise not insight.
        </h1>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-5 md:gap-15 lg:gap-30 justify-center items-center mt-10">
        <div className="mb-10 md:mb-0">
          <div className="flex flex-col select-none items-center">
            <h1 className="xl:text-[160px] text-[120px] text-[#F49B31] font-bold">
              60%
            </h1>
            <span className="flex flex-col items-center">
              <p className="text-center">
                of people feel unheard by leadership.
              </p>
              <p className="text-[#F49B31]">~ Edelman, 2024</p>
            </span>
          </div>
        </div>
        <motion.div
          animate={{ opacity: [0.1, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.5,
            ease: "easeInOut",
          }}
          className="select-none"
        >
          <img src={Noise} alt="" className="w-sm" draggable="false" />
        </motion.div>
        <div className="flex flex-col  select-none items-center">
          <h1 className="xl:text-[160px] text-[120px] text-[#F49B31] font-bold">
            70%
          </h1>
          <span className="flex flex-col items-center">
            <p className="text-center">
              of institutions cite weak engagement as barrier
            </p>
            <p className="text-[#F49B31]">~ OECD</p>
          </span>
        </div>
      </div>

      <div className="grid max-w-250 xl:max-w-300 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-5  gap-x-12 mt-25">
        <ProblemCard count={"01"} problemIcon={shout}>
          Students speak, but it becomes chaos.
        </ProblemCard>
        <ProblemCard count={"02"} problemIcon={broken}>
          Leaders care, but lack reliable feedback systems.
        </ProblemCard>
        <ProblemCard count={"03"} problemIcon={layer}>
          Policies misfire with no structured channel.
        </ProblemCard>
        <ProblemCard count={"04"} problemIcon={heart}>
          Trust suffers on both sides.
        </ProblemCard>
      </div>
    </section>
  );
};

export default Problem;
