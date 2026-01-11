import form from "../assets/images/form.svg";
import surge from "../assets/images/SurgeDisplay.png";
import action from "../assets/images/ActionDisplay.png";
import { motion } from "motion/react";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="mt-40 mb-20 px-10  md:px-20 md:justify-between justify-center flex flex-col md:flex-row gap-10"
    >
      {/* LEFT — Sticky column */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="flex h-full md:mt-5 md:sticky md:top-25 justify-center"
      >
        <div className=" flex flex-col items-center md:items-start gap-10 max-w-100">
          <p className="text-[#F49B31] text-[14px] whitespace-nowrap">
            How Echo works?
          </p>

          <h1 className="text-[#FFC37B] text-[45px] text-center md:text-start font-semibold">
            A Few Easy Steps to Start Making{" "}
            <span className="text-[#F49B31]">Change</span>
          </h1>
        </div>
      </motion.div>

      {/* RIGHT — Scrollable column */}

      <div className="overflow-x-scroll md:overflow-auto [scrollbar-width:none]">
        <div className="flex flex-row  w-180 md:w-full md:flex-col gap-15 text-[#F49B31]">
          <div className="flex flex-col gap-5 items-center">
            <img
              src={form}
              alt=""
              className="w-50 md:w-full"
              draggable="false"
            />
            <p>Claim Your Voice</p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img
              src={surge}
              alt=""
              className="w-50 md:w-full"
              draggable="false"
            />
            <p>Drive the Agenda</p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img
              src={action}
              alt=""
              className="w-50 md:w-full"
              draggable="false"
            />
            <p>See Real Action</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
