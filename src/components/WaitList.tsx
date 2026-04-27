import pointer from "../assets/images/pointer.svg";
import change from "../assets/images/change.svg";
import change_sm from "../assets/images/change_sm.svg";
import { motion } from "motion/react";

const WaitList = () => {
  return (
    <section
      id="waitlist"
      className="flex mt-20 gap-10 px-5 items-center flex-col"
    >
      <header className="text-[#F49B31] flex flex-col items-center">
        <p className="text-[12px]">Start building the future now!</p>
        <h1 className="font-bold text-center text-[44px] md:text-[90px]">
          JOIN THE REVOLUTION!
        </h1>
        <p className="text-center">Be a part of Echo's founding community</p>
      </header>

      <div className="flex justify-center">
        <img src={pointer} alt="" className="w-[70%]" />
      </div>

      <div className=" flex w-full flex-col items-center gap-5">
        <img src={change_sm} alt="" className="lg:hidden" />

        <div className="w-full relative">
          <div className="flex justify-center">
            <a
              target="_blank"
              href="https://webapp-echo.vercel.app/signUp"
              className="border transition-all duration-300 bg-[#F49B314D] hover:bg-[#F49B31] hover:text-white border-[#F49B31] rounded-[40px] text-black py-2 px-3 md:py-5 md:px-25"
            >
              Join ECHO
            </a>
          </div>
          <motion.img
            initial={{ opacity: 0, right: 0 }}
            whileInView={{ opacity: 1, right: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src={change}
            alt=""
            className="absolute right-150 hidden lg:block bottom-30"
          />
        </div>
      </div>
    </section>
  );
};

export default WaitList;
