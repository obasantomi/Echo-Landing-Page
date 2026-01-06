import logo from "../assets/icons/Echo Logo (Coloured).svg";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center w-full px-5 fixed top-7.5 z-10">
      <div className="bg-white py-2 px-3.75 shadow w-full mx-2 max-w-246.25 rounded-[30px] flex gap-2 md:gap-12 justify-between items-center ">
        {/* Logo */}
        <div className="inline-flex select-none gap-1.25 ">
          <span>
            <img src={logo} alt="Echo Logo" className="inline-block w-5 h-5" />
          </span>
          <span className="text-[#FFC37B] text-[20px] font-bold">Echo</span>
        </div>

        {/* Links */}
        <ul className="inline-flex text-[#060B13] gap-5 md:gap-2 flex-1 justify-around md:justify-between text-[12px] font-normal">
          <li className="cursor-pointer select-none">Home</li>
          <li className="cursor-pointer select-none hidden md:block">
            The Problem
          </li>
          <li className="cursor-pointer select-none block md:hidden">
            Problem
          </li>
          <li className="cursor-pointer select-none">Solution</li>
          <li className="cursor-pointer select-none hidden md:block">
            How it works
          </li>
          <li className="cursor-pointer select-none hidden md:block">
            For Leaders
          </li>
          <li className="cursor-pointer select-none hidden md:block">FAQ</li>
        </ul>

        {/* Join Waitlist */}
        <button className="border select-none border-[#F49B31] text-[12px] hidden md:block hover:bg-[#F49B31CC] hover:text-white bg-[#F49B314D] cursor-pointer px-5 py-2.5 rounded-[15px]">
          Join the Waitlist!
        </button>
      </div>
    </div>
  );
};

export default NavBar;
