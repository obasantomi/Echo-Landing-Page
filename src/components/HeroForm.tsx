import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const HeroForm = () => {
  const [openIdentity, setOpenIdentity] = useState(false);

  return (
    <div className="flex justify-center mt-40 px-5 md:mt-80 z-20">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center pb-5 max-w-200 w-full gap-15 md:gap-7.5"
      >
        <div className="flex flex-col gap-4 md:flex-row md:gap-2.5 w-full max-w-170 md:max-w-170">
          <input
            type="email"
            name="email"
            required
            id="email"
            autoComplete="on"
            placeholder="Your email..."
            className="py-3.5 px-5 flex-1 max-h-12.5 bg-white shadow border-0 outline-none text-[14px] rounded-[50px]  w-full"
          />

          <motion.div
            onClick={() => setOpenIdentity(!openIdentity)}
            className="flex flex-col relative gap-3"
          >
            <div className="select-none text-[12px] py-4 whitespace-nowrap gap-2.5 hidden md:flex items-center text-white hover:bg-[#fa9c29]  bg-[#ff9c23] cursor-pointer px-6  rounded-[15px]">
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
                initial={{ opacity: 0, y: 100 }}
                animate={
                  openIdentity ? { opacity: 1, y: 55 } : { opacity: 0, y: 100 }
                }
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-35 right-50 transform translate-x-53 hidden md:flex absolute flex-col"
              >
                <div className="p-2 bg-white rounded-t-[10px]">
                  <motion.p className="py-1.5 px-5 b text-center hover:bg-[#F3F4F6] rounded-[10px]">
                    User
                  </motion.p>
                </div>
                <div className="p-2 bg-white rounded-b-[10px]">
                  <motion.p className="py-1.5 px-5 rounded-[10px] hover:bg-[#F3F4F6] text-center">
                    Leader
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <button className="select-none  text-[12px] text-white max-h-12.5 hidden md:flex items-center hover:bg-[#fa9c29]  bg-[#ff9c23] cursor-pointer px-8 rounded-[15px]">
            Join the Waitlist!
          </button>

          {/* Mobile */}
          <div className="flex gap-5 justify-center md:hidden w-full">
            <motion.div
              onClick={() => setOpenIdentity(!openIdentity)}
              className="flex flex-col relative gap-3"
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
                  initial={{ opacity: 0, y: 100 }}
                  animate={
                    openIdentity
                      ? { opacity: 1, y: 55 }
                      : { opacity: 0, y: 100 }
                  }
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-35 right-50 transform translate-x-53 flex md:hidden absolute flex-col"
                >
                  <div className="p-2 bg-white rounded-t-[10px]">
                    <motion.p className="py-1.5 px-5 b text-center hover:bg-[#F3F4F6] rounded-[10px]">
                      User
                    </motion.p>
                  </div>
                  <div className="p-2 bg-white rounded-b-[10px]">
                    <motion.p className="py-1.5 px-5 rounded-[10px] hover:bg-[#F3F4F6] text-center">
                      Leader
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <button className="border select-none border-[#F49B31] max-h-12.5 text-[12px] hover:bg-[#F49B31CC] hover:text-white bg-[#F49B314D] cursor-pointer px-5 py-2.5 rounded-[15px]">
              Join the Waitlist!
            </button>
          </div>
        </div>

        <div className="gap-2.5 mb-10 hidden md:flex">
          <button className="bg-[#ff9c23] text-[12px] text-white px-2.5 py-1.25 rounded-2xl">
            Anonymous & Secure
          </button>
          <button className="bg-[#ff9c23] text-[12px] text-white px-2.5 py-1.25 rounded-2xl">
            3,700+ student responses
          </button>
          <button className="bg-[#ff9c23] text-[12px] text-white px-2.5 py-1.25 rounded-2xl">
            89.1% said they'd use Echo
          </button>
          <button className="bg-[#ff9c23] text-[12px] text-white px-2.5 py-1.25 rounded-2xl">
            Supported by Covenant University
          </button>
        </div>

        {/* Mobile */}
        <div className="flex flex-col w-full mb-10 items-center gap-7 md:hidden">
          <div className="flex  gap-10">
            <button className="bg-[#ff9c23] text-[15px]  text-white px-5 py-1.25 rounded-2xl">
              Anonymous & Secure
            </button>
            <button className="bg-[#ff9c23] text-[15px] text-white px-5 py-1.25 rounded-2xl">
              3,700+ student responses
            </button>
          </div>
          <button className="bg-[#ff9c23] text-[15px] text-white px-5 py-1.25 rounded-2xl">
            89.1% said they'd use Echo
          </button>
          <button className="bg-[#ff9c23] text-[15px] text-white px-5 py-1.25 rounded-2xl">
            Supported by Covenant University
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroForm;
