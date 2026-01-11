import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiChevronRight } from "react-icons/fi";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BiErrorCircle } from "react-icons/bi";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  identity: z.string().nullable().optional(),
});

type FormData = z.infer<typeof schema>;

const WaitingListForm = () => {
  const [identity, setIdentity] = useState<string | null>(null);
  const [identityError, setIdentityError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    data.identity = identity;
    if (!data.identity) {
      setIdentityError("Please select an identity");
      return;
    }
    reset();
    setIdentityError(null);

    // Data sent to backend
    console.log(data);
  }

  const [openIdentity, setOpenIdentity] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex justify-self-center flex-col gap-4 md:flex-row md:gap-2.5 w-full max-w-170 md:max-w-250">
        <div className="flex flex-col gap-3 w-full">
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Your email..."
            className="py-3.5 px-5 flex-1 max-h-12.5 bg-white shadow border-0 outline-none text-[14px] rounded-[50px]  w-full"
          />
          <div className="flex gap-2">
              {errors.email && (
                <p className="text-[12px] ml-2 flex items-center gap-1 text-red-500">
                  {errors.email.message}
                  <span>
                    <BiErrorCircle />
                  </span>
                </p>
              )}
              {identityError && (
                <p className="text-[12px] ml-2 flex items-center gap-1 text-red-500">
                  {identityError}
                  <span>
                    <BiErrorCircle />
                  </span>
                </p>
              )}
          </div>
        </div>
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
                <motion.p
                  onClick={() => setIdentity("user")}
                  className="py-1.5 px-5 cursor-pointer text-center hover:bg-[#F3F4F6] rounded-[10px]"
                >
                  User
                </motion.p>
              </div>
              <div className="p-2 bg-white rounded-b-[10px]">
                <motion.p
                  onClick={() => setIdentity("leader")}
                  className="py-1.5 px-5 rounded-[10px] cursor-pointer hover:bg-[#F3F4F6] text-center"
                >
                  Leader
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <button
          type="submit"
          className="select-none  text-[12px] text-white max-h-12.5 hidden md:flex items-center hover:bg-[#fa9c29]  bg-[#ff9c23] cursor-pointer px-8 rounded-[15px]"
        >
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
                  openIdentity ? { opacity: 1, y: 55 } : { opacity: 0, y: 100 }
                }
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-35 cursor-pointer right-50 transform translate-x-53 flex md:hidden absolute flex-col"
              >
                <div className="p-2 bg-white rounded-t-[10px]">
                  <motion.p
                    onClick={() => setIdentity("user")}
                    className="py-1.5 px-5 cursor-pointer text-center hover:bg-[#F3F4F6] rounded-[10px]"
                  >
                    User
                  </motion.p>
                </div>
                <div className="p-2 bg-white rounded-b-[10px]">
                  <motion.p
                    onClick={() => setIdentity("leader")}
                    className="py-1.5 px-5 rounded-[10px] cursor-pointer hover:bg-[#F3F4F6] text-center"
                  >
                    Leader
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <button
            type="submit"
            className="border select-none border-[#F49B31] max-h-12.5 text-[12px] hover:bg-[#F49B31CC] hover:text-white bg-[#F49B314D] cursor-pointer px-5 py-2.5 rounded-[15px]"
          >
            Join the Waitlist!
          </button>
        </div>
      </div>
    </form>
  );
};

export default WaitingListForm;
