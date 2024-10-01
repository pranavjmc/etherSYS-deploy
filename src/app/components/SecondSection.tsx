import React from 'react'
import { useState, useEffect, useRef } from "react";
import { motion, easeIn, useInView, useAnimation } from "framer-motion";

function SecondSection() {
  const ref=useRef(null);
  const inView=useInView(ref, {once:true})
  const controls=useAnimation()

  const variants={
    hidden:{
      opacity:0,y:20
    },
    visible:{
      opacity:1,y:0
    }
  }

  useEffect(()=>{
    if(inView){
      controls.start('visible')
    }

  },[inView])

  return (
    <>
      <div className="w-full h-[100vh] bg-slate-100 dark:bg-slate-900 dark:text-white border-b-4 dark:border-slate-800">
        <div className="pt-20 mt-2">
          <motion.p
            className=" text-2xl mx-[100px] font-bold text-center mt-5 sm:text-3xl "
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            Our Unique Values
          </motion.p>
          <motion.p
            className=" text-base mx-[30px] font-bold text-center mt-5 sm:text-xl sm:max-[100px]"
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            We specialized in delivering cutting-edge solutions for enterprise
            use-cases in the fields of Industrial IoT 4.0/5.0, Green Energy, and
            Digital Healthcare solutions tailored for enterprise applications.
          </motion.p>
          <motion.p
            className=" text-base mx-[30px] font-bold text-center mt-5 sm:text-xl sm:max-[100px]"
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            To effectively address challenges in enterprise use-cases, it is
            essential to have a comprehensive understanding of the entire
            ecosystem involved.
          </motion.p>
          <motion.p
            className=" text-base mx-[30px] font-bold text-center mt-5 sm:text-xl sm:max-[100px]"
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            We specialize in rapid prototype development, with a turnaround time
            of 24 to 48 hours, to showcase new device or application
            integrations efficiently. Celebrating Excellence, Trust, and Always
            On Time.
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default SecondSection
