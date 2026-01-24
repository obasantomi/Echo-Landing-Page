import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineCheck } from "react-icons/ai"; // green tick
import { BiErrorCircle } from "react-icons/bi"; // red error

interface SubmissionToastProps {
  show: boolean;
  message: string;
  type?: "success" | "error";
}

const SubmissionToast = ({
  show,
  message,
  type = "success",
}: SubmissionToastProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-white"
          style={{
            backgroundColor: type === "success" ? "#22c55e" : "#ef4444", // green or red
          }}
        >
          <span className="text-lg">
            {type === "success" ? <AiOutlineCheck /> : <BiErrorCircle />}
          </span>
          <p className="text-sm">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubmissionToast;
