import { motion } from "framer-motion";

function Skeleton({ height, width, classes }) {
  return (
    <>
      <div
        className={`relative  rounded-2xl overflow-hidden bg-gray-200 ${classes}`}
        style={{ width, height }}
      >
        <motion.div
          className="rounded-sm absolute inset-0 bg-gray-100"
          initial={{ x: "-90%" }}
          animate={{ x: "90%" }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "backInOut",
            repeatType: "mirror",
          }}
        />
      </div>
    </>
  );
}

export default Skeleton;
