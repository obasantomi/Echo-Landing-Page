import pointer from "../assets/images/pointer.svg";
import change from "../assets/images/change.svg";
import change_sm from "../assets/images/change_sm.svg";
import { motion } from "motion/react";
import WaitingListForm from "./WaitingListForm";

const WaitList = () => {
  return (
    <section id="waitlist" className="flex my-20 relative gap-10 px-5 items-center flex-col">
      <header className="text-[#F49B31] flex flex-col items-center">
        <p className="text-[12px]">Start building the future now!</p>
        <h1 className="font-bold text-center text-[40px] md:text-[64px]">
          JOIN THE WAIT-LIST!
        </h1>
        <p className="text-center">Be a part of Echo's founding community</p>
      </header>

      <div className="flex justify-center">
        <img src={pointer} alt="" className="w-[70%]" />
      </div>

      <div className=" flex w-full flex-col items-center gap-5">
        <img src={change_sm} alt="" className="lg:hidden" />

        <WaitingListForm />
        <motion.img
          initial={{ opacity: 0, right: 0 }}
          whileInView={{ opacity: 1, right: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src={change}
          alt=""
          className="absolute right-20 hidden lg:block bottom-20"
        />
      </div>
    </section>
  );
};

export default WaitList;
