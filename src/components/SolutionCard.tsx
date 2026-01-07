interface SolutionCardProps {
  image: string;
  icon: string;
  solution: string;
}

const SolutionCard = ({ image, icon, solution }: SolutionCardProps) => {
  return (
    <div className="flex flex-col text-[15px]  gap-5 items-center">
      <img src={image} alt="" />
      <p className="flex items-center gap-2.5">
        <img src={icon} alt="" /> Pings
      </p>
      <p>{solution}</p>
    </div>
  );
};

export default SolutionCard;
