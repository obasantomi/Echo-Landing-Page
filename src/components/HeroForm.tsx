import WaitingListForm from "./WaitingListForm";

const HeroForm = () => {

  return (
    <div className="flex justify-center mt-40 px-5 md:mt-80 z-20">
      <div className="flex flex-col  items-center pb-5 max-w-200 w-full gap-15 md:gap-7.5">
        <WaitingListForm />

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
      </div>
    </div>
  );
};

export default HeroForm;
