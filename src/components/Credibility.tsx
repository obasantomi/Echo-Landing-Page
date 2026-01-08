import hsl from "../assets/images/Hsl Logo.svg";
import cloud from "../assets/images/Cloud Plexo.svg";

const Credibility = () => {
  return (
    <section className="flex px-5 mt-10 flex-col gap-10 items-center">
      <div className="flex flex-col items-center gap-10 text-[40px]">
        <p className="text-[14px] text-[#F49B31]">Credibility & Backing</p>
        <h1 className="font-bold text-center">Trusted and Supported by</h1>
      </div>

      <div className="flex gap-15">
        <div className="flex flex-col items-center gap-3 select-none">
          <img src={hsl} alt="" draggable="false" />
          <p className="text-center">Hebron Startup Lab</p>
        </div>
        <div className="flex flex-col items-center gap-3 select-none">
          <img src={cloud} alt="" draggable="false" />
          <p>CloudPlexo</p>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
