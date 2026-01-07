import students from "../assets/images/students.svg";
import insight from "../assets/images/insight.svg";
import dashboard from "../assets/images/dashboard.svg";
import anonymous from "../assets/images/anonymous.svg";
import verctorLogo from "../assets/images/VectorLogo.svg";

const ForLeaders = () => {
  return (
    <section className="bg-[#F49B31] pb-20 px-5 flex flex-col gap-10 pt-10">
      <div className="flex flex-col items-center mx-auto  text-white max-w-300">
        <p className="mb-10">For Leaders</p>
        <h1 className="text-[40px] font-bold text-center">
          Built for Institutions that lead with trust and data.
        </h1>
      </div>

      <div className="flex flex-col items-center gap-20">
        <div className="w-full text-center">
          <div className="inline-flex flex-col md:flex-row justify-start items-center md:pl-5 w-full max-w-[320px] py-7.5 md:py-2.5 text-[14px] rounded-[15px] bg-[#FFC37B] gap-3">
            <span className="h-13 w-13 bg-white rounded-full flex justify-center items-center">
              <img src={students} alt="" draggable="false"/>
            </span>
            <p>Verified Student Network</p>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 w-full items-center">
          <div className="w-full text-center flex-1">
            <div className="inline-flex md:whitespace-nowrap text-balance flex-col md:flex-row justify-start items-center px-2 py-7.5 md:pl-5 md:pr-4 w-full max-w-[320px] md:py-2.5 text-[14px] rounded-[15px] bg-[#FFC37B] gap-3">
              <span className="h-13 w-13 bg-white rounded-full flex justify-center items-center">
                <img src={anonymous} alt="" draggable="false"/>
              </span>
              <p>Anonymous feedback</p>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={verctorLogo} alt="" className="w-full" draggable="false"/>
          </div>

          <div className="w-full text-center flex-1">
            <div className="inline-flex text-balance md:whitespace-nowrap flex-col md:flex-row justify-start items-center md:pl-5 px-4 md:pr-4 w-full max-w-[320px] py-7.5 md:py-2.5 text-[14px] rounded-[15px] bg-[#FFC37B] gap-3">
              <span className="h-13 w-13 bg-white rounded-full flex justify-center items-center">
                <img src={insight} alt="" draggable="false"/>
              </span>
              <p>Prioritized insight</p>
            </div>
          </div>
        </div>

        <div className="w-full text-center">
          <div className="inline-flex flex-col md:flex-row justify-start items-center w-full max-w-[320px] md:pl-5 py-7.5 md:py-2.5 text-[14px] rounded-[15px] bg-[#FFC37B] gap-3">
            <span className="h-13 w-13 bg-white rounded-full flex justify-center items-center">
              <img src={dashboard} alt="" draggable="false"/>
            </span>
            <p>Sentiment dashboards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForLeaders;
