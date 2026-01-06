import HeroForm from "./HeroForm";
import Admin from "../assets/images/Admin Feed Details - Landing 1.png";
import Feed from "../assets/images/Feed - Landing 1.png";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex select-none flex-col items-center">
        <p className="md:text-[64px] text-[37px] font-bold">
          <span className="text-[#FFC45C] mr-2">Listen</span>
          <span className="text-[#F49B31]">Better.</span>
        </p>
        <p className="md:text-[64px] text-[37px] font-bold">
          <span className="text-[#FFC45C] mr-2">Lead</span>
          <span className="text-[#F49B31]">Smarter.</span>
        </p>
        <div className="flex gap-1">
          <span className="text-[#F2A956]">Turn</span>
          <span className="text-[#FFC37B]">Noise</span>
          <span className="text-[#F2A956]">Into</span>
          <span className="text-[#FFC37B]">Signal</span>
        </div>
      </div>

      <HeroForm />

      <img
        src={Feed}
        alt=""
        className="absolute select-none hidden lg:block -z-20 -bottom-70 -left-90"
      />
      <img
        src={Admin}
        alt=""
        className="absolute select-none hidden lg:block -z-20 -bottom-70 -right-90"
      />
    </div>
  );
};

export default Hero;
