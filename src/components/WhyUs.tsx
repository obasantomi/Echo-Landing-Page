import lock from "../assets/images/lock.svg";
import community from "../assets/images/community.svg";
import anonymous from "../assets/images/anonymous.svg";
import hands from "../assets/images/hands.svg";

const WhyUs = () => {
  return (
    <section
    id="why-us"
    className="bg-[#FFC37B] py-10 px-5 flex items-center gap-10.5 flex-col">
      <p>Why us??</p>

      <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 md:gap-30">
        <div className="flex gap-3.75 text-[#454545] flex-col items-center">
          <span className="h-30 w-30 rounded-full bg-white flex justify-center items-center">
            <img src={lock} alt="" />
          </span>

          <p className="text-center text-[12px]">Encryption + Privacy</p>
        </div>

        <div className="flex gap-3.75 text-[#454545] flex-col items-center">
          <span className="h-30 w-30 rounded-full bg-white flex justify-center items-center">
            <img src={community} alt="" />
          </span>

          <p className="text-center text-[12px]">Verified community access</p>
        </div>

        <div className="flex gap-3.75 text-[#454545] flex-col items-center">
          <span className="h-30 w-30 rounded-full bg-white flex justify-center items-center">
            <img src={anonymous} alt="" className="w-1/2" />
          </span>

          <p className="text-center text-[12px]">Anonymous posting</p>
        </div>

        <div className="flex gap-3.75 text-[#454545] flex-col items-center">
          <span className="h-30 w-30 rounded-full bg-white flex justify-center items-center">
            <img src={hands} alt="" />
          </span>

          <p className="text-center text-[12px]">
            Built in collaboration with campus leadership
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
