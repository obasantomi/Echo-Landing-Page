import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi2";
interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsopen] = useState(false);

  return (
    <motion.div
      onClick={() => setIsopen(!isOpen)}
      initial={{ maxHeight: 89 }}
      animate={{ maxHeight: isOpen ? 200 : 89 }}
      transition={{ maxHeight: { duration: 0.5 } }}
      className="w-full z-20 shadow py-8 px-4 md:px-8 opacity-90 text-[#060B13] my-5 overflow-y-hidden rounded-[15px] bg-white flex flex-col"
    >
      <motion.div className="flex justify-between items-center">
        <p>{question}</p>
        <motion.span
          layout
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className=""
        >
          <HiOutlineChevronRight size={25} />
        </motion.span>
      </motion.div>

      <AnimatePresence>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={isOpen ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-6 text-[12px] md:text-[14px] text-[#060B13]"
        >
          {answer}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
