import Accordion from "./Accordion";
import logo from "../assets/images/faqLogo.svg";

const Faqs = () => {
  return (
    <section
      id="faq"
      className="py-25 relative px-5 flex mt-30 md:mt-30 flex-col gap-15 items-center bg-white"
    >
      <header className="flex items-center max-w-125 flex-col">
        <p className="#F49B31 text-[#F49B31] text-[12px]">Echo FAQ's</p>
        <h1 className="text-[45px] text-center text-[#060B13]">
          Frequently Asked Questions
        </h1>
      </header>

      <img
        src={logo}
        alt=""
        className="absolute top-80 bottom-10 pointer-events-none"
        draggable="false"
      />

      <div className="max-w-162.5 w-full">
        <Accordion
          question={"Is this a complaint app?"}
          answer={
            "No. Echo organizes issues and solutions so leaders can act on them. It’s built for structured feedback, not ranting."
          }
        />
        <Accordion
          question={"Will leaders see feedback?"}
          answer={
            "Yes. Verified leaders get a dashboard that shows prioritized, anonymized insights from their community."
          }
        />
        <Accordion
          question={"Can I stay anonymous?"}
          answer={
            "Yes. Your identity is hidden inside the platform. Leaders only see that feedback came from verified members of their community."
          }
        />
        <Accordion
          question={"Is it free for users?"}
          answer={
            "Yes. Students and citizens never pay. Institutions cover the cost because they’re the ones receiving and using the insights."
          }
        />
      </div>
    </section>
  );
};

export default Faqs;
