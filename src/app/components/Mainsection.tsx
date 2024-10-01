import React from "react";
import { motion, easeIn } from "framer-motion";

function Mainsection() {
  return (
    <>
      <div className="w-full h-[91vh]  bg-slate-100 dark:bg-slate-900 dark:text-white border-b-4 dark:border-slate-800">
        <div className="pt-20">
          <div className="">
            <motion.p
              className=" text-2xl mx-[40px] font-bold text-center sm:text-4xl sm:mx-[100px]"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{
                y: { duration: 0.4 },
                opacity: { duration: 0.8 },
                ease: { easeIn },
              }}
            >
              Providing an Innovative Enterprise Solution:
            </motion.p>
            <motion.p
              className=" text-2xl mx-[30px] font-bold text-center sm:text-4xl sm:mx-[100px]"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{
                y: { duration: 0.4 },
                opacity: { duration: 0.8 },
                ease: { easeIn },
              }}
            >
              Unleashing the Power of Digital Transformation to Maximize Data
              Value
            </motion.p>
          </div>
          <motion.p
            className=" text-base mx-[40px] font-bold text-center mt-5 sm:text-xl sm:mx-[100px]"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{
              y: { duration: 1, delay: 0.3 },
              opacity: { duration: 1, delay: 0.5 },
              ease: { easeIn },
            }}
          >
            Experience the power of EtherAIoT in driving IIoT 4.0/5.0 for
            Digital Transformation.
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default Mainsection;
