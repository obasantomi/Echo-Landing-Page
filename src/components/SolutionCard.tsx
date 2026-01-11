interface SolutionCardProps {
  image: string;
  icon: string;
  solution: string;
  solutionTitle: string;
}

const SolutionCard = ({
  image,
  icon,
  solution,
  solutionTitle,
}: SolutionCardProps) => {
  return (
    <div className="flex flex-col text-[15px]  gap-5 items-center">
      <img src={image} alt="" />
      <p className="flex items-center font-bold gap-2.5">
        <img src={icon} alt="" /> {solutionTitle}
      </p>
      <p>{solution}</p>
    </div>
  );
};

export default SolutionCard;
