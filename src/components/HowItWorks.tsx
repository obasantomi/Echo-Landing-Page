import form from "../assets/images/form.svg";
import surge from "../assets/images/SurgeDisplay.png";
import action from "../assets/images/ActionDisplay.png";

const HowItWorks = () => {
  return (
    <section className="my-40 px-10  md:px-20 md:justify-between justify-center flex flex-col md:flex-row gap-10">
      {/* LEFT — Sticky column */}
      <div className="flex h-full md:mt-5 md:sticky md:top-25 justify-center">
        <div className=" flex flex-col items-center md:items-start gap-10 max-w-100">
          <p className="text-[#F49B31] text-[14px] whitespace-nowrap">
            How Echo works?
          </p>

          <h1 className="text-[#FFC37B] text-[45px] text-center md:text-start font-semibold">
            A Few Easy Steps to Start Making{" "}
            <span className="text-[#F49B31]">Change</span>
          </h1>
        </div>
      </div>

      {/* RIGHT — Scrollable column */}

      <div className="overflow-x-scroll md:overflow-auto [scrollbar-width:none]">
        <div className="flex flex-row w-250 md:w-full md:flex-col gap-15 text-[#F49B31]">
          <div className="flex flex-col gap-5 items-center">
            <img src={form} alt="" className="float-right" />
            <p>Claim Your Voice</p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img src={surge} alt="" />
            <p>Drive the Agenda</p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img src={action} alt="" />
            <p>See Real Action</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
