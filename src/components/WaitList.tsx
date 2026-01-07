import { FiChevronRight } from "react-icons/fi";
import pointer from "../assets/images/pointer.svg";

const WaitList = () => {
  return (
    <section className="flex my-20 gap-10 px-5 items-center flex-col">
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

      <form className="flex w-full  flex-col gap-4 md:flex-row max-w-250">
        <input
          type="email"
          name="email"
          required
          id="email"
          autoComplete="on"
          placeholder="Your email..."
          className="py-3.5 px-5 flex-1 bg-white shadow border-0 outline-none text-[14px] rounded-[50px]  w-full"
        />

        <div className="select-none text-[12px] py-4 whitespace-nowrap gap-2.5 hidden md:flex items-center text-white hover:bg-[#fa9c29]  bg-[#ff9c23] cursor-pointer px-6  rounded-[15px]">
          I am a?
          <FiChevronRight size={18} className="text-2xl text-white" />
        </div>

        <button className="select-none  text-[12px] text-black hidden md:flex items-center border border-[#fa9c29]  bg-[#F49B314D] cursor-pointer px-8 rounded-[15px]">
          Join the Waitlist!
        </button>

        {/* Mobile */}
        <div className="flex gap-5 justify-center md:hidden w-full">
          <div className="select-none text-[12px]  py-4  gap-2.5 flex items-center text-white hover:bg-[#fa9c29]  bg-[#ff9c23] cursor-pointer px-6  rounded-[15px]">
            I am a?
            <FiChevronRight size={18} className="text-2xl text-white" />
          </div>

          <button className="border select-none border-[#F49B31] text-[12px] hover:bg-[#F49B31CC] hover:text-white bg-[#F49B314D] cursor-pointer px-5 py-2.5 rounded-[15px]">
            Join the Waitlist!
          </button>
        </div>
      </form>
    </section>
  );
};

export default WaitList;
