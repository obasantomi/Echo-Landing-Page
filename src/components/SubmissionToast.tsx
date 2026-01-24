import { AnimatePresence, motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

interface ToastProps {
  show?: boolean;
  message?: string;
}

const SubmissionToast = ({
  show,
  message = "Joined successfully",
}: ToastProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.96 }}
          animate={{ opacity: 1, y: 16, scale: 1 }}
          exit={{ opacity: 0, y: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed top-6 right-6 z-50 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg"
        >
          {/* Icon */}
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500">
            <FaCheck className="text-white text-xs" />
          </div>

          <span className="text-sm font-medium text-gray-900">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubmissionToast;
