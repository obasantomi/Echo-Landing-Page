import logo from "../assets/images/logo black.svg";
import echo from "../assets/images/ECHO_foot.svg";
import linkedin from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitterr.svg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import youtube from "../assets/images/youtube.svg";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer layout className="p-10 flex flex-col bg-[#F49B31] ">
      <div className="flex gap-1 items-center">
        <span>
          <img src={logo} alt="" className="inline" />
        </span>
        <p className="text-[30px] mt-0.5 font-bold">Echo</p>
      </div>

      <div className="flex mt-3 text-white mb-20 text-[12px] justify-between gap-5">
        <p className="max-w-30 md:max-w-62.5">
          Let's build the future together, with the right tool.
        </p>

        <ul className="flex flex-col items-center md:flex-row gap-2 md:gap-8">
          <li className="text-center cursor-pointer"><a href="#home">Home</a></li>
          <li className="text-center cursor-pointer"><a href="#why-us">Features</a></li>
          <li className="text-center cursor-pointer"><a href="#how-it-works">How it works</a></li>
        </ul>

        <p className="cursor-pointer">contact@echo-ng.com</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="flex justify-center mb-10"
      >
        <img src={echo} alt="" draggable="false" className="select-none" />
      </motion.div>

      <div className="pt-7 mt-7 text-[12px] flex md:flex-row flex-col gap-4 justify-between text-white border-t border-[#FFC37B]">
        <p>Copyright ©2025 echo-ng.com</p>

        <div className="flex gap-1 items-center">
          <p className="inline mr-1">contact with us</p>
          <span className="w-8 h-8 rounded-full bg-[#FFC37B] flex justify-center items-center cursor-pointer">
            <img src={linkedin} alt="" />
          </span>
          <span className="w-8 h-8 rounded-full bg-[#FFC37B] flex justify-center items-center cursor-pointer">
            <img src={twitter} alt="" />
          </span>
          <span className="w-8 h-8 rounded-full bg-[#FFC37B] flex justify-center items-center cursor-pointer">
            <img src={facebook} alt="" />
          </span>
          <span className="w-8 h-8 rounded-full bg-[#FFC37B] flex justify-center items-center cursor-pointer">
            <img src={instagram} alt="" />
          </span>
          <span className="w-8 h-8 rounded-full bg-[#FFC37B] flex justify-center items-center cursor-pointer">
            <img src={youtube} alt="" />
          </span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
