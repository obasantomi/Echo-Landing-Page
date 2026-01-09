import { FiChevronRight } from "react-icons/fi";
import pointer from "../assets/images/pointer.svg";
import change from "../assets/images/change.svg";
import change_sm from "../assets/images/change_sm.svg";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const WaitList = () => {
  const [openIdentity, setOpenIdentity] = useState(false);

  return (
    <section className="flex my-20 relative gap-10 px-5 items-center flex-col">
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

        <form
          action=""
          className="flex w-full  flex-col gap-4 md:flex-row max-w-250"
        >
          <input
            type="email"
            name="email"
            required
            id="email"
            autoComplete="on"
            placeholder="Your email..."
            className="py-3.5 px-5 flex-1 bg-white shadow border-0 outline-none text-[14px] rounded-[50px] max-h-12.5 w-full"
          />
          <motion.div
            onClick={() => setOpenIdentity(!openIdentity)}
            className="flex items-center flex-col gap-3"
            initial={{ maxHeight: 50 }}
            animate={openIdentity ? { maxHeight: 200 } : { maxHeight: 50 }}
            transition={{ maxHeight: { duration: 0.7 } }}
          >
            <div className="select-none text-[12px] py-4 whitespace-nowrap gap-2.5 hidden md:flex items-center text-white hover:bg-[#fa9c29]  bg-[#ff9c23] max-w-30 cursor-pointer px-6  rounded-[15px]">
              I am a?
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: openIdentity ? 90 : 0 }}
              >
                <FiChevronRight size={18} className="text-2xl text-white" />
              </motion.span>
            </div>

            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  openIdentity ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-35 hidden md:flex flex-col"
              >
                <div className="p-2 bg-white rounded-t-[10px]">
                  <motion.p className="py-1.5 px-5  hover:bg-[#F3F4F6] text-center rounded-[10px]">
                    User
                  </motion.p>
                </div>
                <div className="p-2 bg-white rounded-b-[10px]">
                  <motion.p className="py-1.5 px-5 hover:bg-[#F3F4F6] rounded-[10px] text-center">
                    Leader
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <button className="select-none  text-[12px] md:min-h-12.5 text-black hidden md:flex items-center border max-h-12.5 border-[#fa9c29]  bg-[#F49B314D] cursor-pointer px-8 rounded-[15px]">
            Join the Waitlist!
          </button>

          {/* Mobile */}
          <div className="flex gap-5 justify-center md:hidden w-full">
            <motion.div
              onClick={() => setOpenIdentity(!openIdentity)}
              className="flex items-center flex-col gap-3"
              initial={{ maxHeight: 50 }}
              animate={openIdentity ? { maxHeight: 200 } : { maxHeight: 50 }}
              transition={{ maxHeight: { duration: 0.7 } }}
            >
              <div className="select-none text-[12px] py-4 whitespace-nowrap gap-2.5 flex md:hidden items-center text-white hover:bg-[#fa9c29]  bg-[#ff9c23] cursor-pointer px-6  rounded-[15px]">
                I am a?
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: openIdentity ? 90 : 0 }}
                >
                  <FiChevronRight size={18} className="text-2xl text-white" />
                </motion.span>
              </div>

              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    openIdentity ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-35 flex flex-col"
                >
                  <div className="p-2 bg-white rounded-t-[10px]">
                    <motion.p className="py-1.5 px-5 b text-center hover:bg-[#F3F4F6] rounded-[10px]">
                      User
                    </motion.p>
                  </div>
                  <div className="p-2 bg-white rounded-b-[10px]">
                    <motion.p className="py-1.5 px-5 hover:bg-[#F3F4F6] rounded-[10px] text-center">
                      Leader
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
            <button className="border select-none border-[#F49B31] text-[12px] hover:bg-[#F49B31CC] max-h-12.5 hover:text-white bg-[#F49B314D] cursor-pointer px-5 py-2.5 rounded-[15px]">
              Join the Waitlist!
            </button>
          </div>
          <motion.img
            initial={{ opacity: 0, right: 0 }}
            whileInView={{ opacity: 1, right: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src={change}
            alt=""
            className="absolute right-20 hidden lg:block bottom-20"
          />
        </form>
      </div>
    </section>
  );
};

export default WaitList;
