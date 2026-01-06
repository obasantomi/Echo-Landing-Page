interface ProblemCardProps {
  children: string;
  count: string;
  problemIcon: string;
}

const ProblemCard = ({ children, count, problemIcon }: ProblemCardProps) => {
  return (
    <div className="bg-white flex-col mb-5 text-black rounded-[15px] gap-8 p-5 inline-flex">
      <div className="flex justify-between items-center">
        <span className="w-11.5 flex justify-center items-center h-11.5 rounded bg-[#F49B31]">
          <img src={problemIcon} alt="" />
        </span>
        <span>{count}</span>
      </div>
      <p>{children}</p>
    </div>
  );
};

export default ProblemCard;
