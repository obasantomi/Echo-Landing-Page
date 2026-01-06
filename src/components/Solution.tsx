import SolutionCard from "./SolutionCard";
import ping from "../assets/images/Pings.svg";
import pingPic from "../assets/images/Pings.png";
import wavePic from "../assets/images/Wave.png";
import wave from "../assets/images/waves.svg";
import surgePic from "../assets/images/Surge.png";
import surge from "../assets/images/Surges.svg";

const Solution = () => {
  return (
    <div className="mt-10 px-5">
      <div className="flex select-none flex-col items-center">
        <p className="text-[#F49B31] mb-5">The Solution</p>
        <p className="md:text-[45px] text-[37px] font-semibold">
          <span className="text-[#FFC45C] mr-2">Real</span>
          <span className="text-[#F49B31]">Voices.</span>
        </p>
        <p className="md:text-[45px] text-[37px] font-semibold">
          <span className="text-[#FFC45C] mr-2">Real</span>
          <span className="text-[#F49B31]">Action.</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 text-[#F49B31] justify-center mb-10 mt-12.5">
        <SolutionCard image={pingPic} icon={ping} solution={"Report Issues"} />
        <SolutionCard
          image={wavePic}
          icon={wave}
          solution={"Propose Solutions"}
        />
        <SolutionCard
          image={surgePic}
          icon={surge}
          solution={"Prioritize What Matters"}
        />
      </div>
    </div>
  );
};

export default Solution;
