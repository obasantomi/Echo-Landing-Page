import logo from "../assets/icons/Echo Logo (Coloured).svg";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white py-4 px-3.75 mt-7.5 my-auto w-full max-w-246.25 rounded-[30px] flex justify-between items-center ">
        {/* Logo */}
        <div className="inline-flex select-none gap-1.25 ">
          <span>
            <img src={logo} alt="Echo Logo" className="inline-block w-5 h-5" />
          </span>
          <span className="text-[#FFC37B] text-[20px] font-bold">Echo</span>
        </div>

        {/* Links */}
        <ul className="inline-flex text-[#060B13] gap-6.25 text-[12px] font-normal">
          <li className="cursor-pointer select-none">Home</li>
          <li className="cursor-pointer select-none">The Problem</li>
          <li className="cursor-pointer select-none">Solution</li>
          <li className="cursor-pointer select-none">How it works</li>
          <li className="cursor-pointer select-none">For Leaders</li>
          <li className="cursor-pointer select-none">FAQ</li>
        </ul>

        <button className="border select-none border-[#F49B31] text-[12px] hover:bg-[#F49B31CC] hover:text-white bg-[#F49B314D] cursor-pointer p-2.5 rounded-[15px]">
          Join the Waitlist!
        </button>
      </div>
    </div>
  );
};

export default NavBar;
