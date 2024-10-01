import React from 'react'
import { useState, useEffect, useRef } from "react";
import { motion, easeIn, useInView, useAnimation } from "framer-motion";

function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    footerAnimate:{
      opacity:1,
      x:0
    },
    footerInitial:{
      opacity:0,
      x:-20
    }
    
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      controls.start("footerAnimate");
    }
  }, [inView]);

  return (
    <>
      <div className="w-full h-full bg-blue-950 mt-2 grid grid-cols-1 justify-items-center pl-6 sm:grid sm:grid-cols-2 sm:h-[30vh] sm:px-56">
        <motion.div
          className="w-[400px] pt-8 sm:w-[460px] "
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
        >
          <p className="text-center text-2xl font-bold border-b-[1px] pb-2  text-cyan-50 border-amber-600">
            About Us
          </p>
          <p className="text-justify mt-4  text-cyan-50">
            We are leaders in Industrial IoT 4.0, Green Energy, and Digital
            Healthcare solutions. Our end-to-end expertise drives value from
            data, offering quick prototype development (24-48 hrs) for seamless
            integrations. Your innovation partner.
          </p>
        </motion.div>
        <motion.div
          className="w-[400px] pt-8 pb-8 sm:w-[460px]"
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
        >
          <p className="text-center text-2xl font-bold border-b-[1px] pb-2 text-cyan-50 border-amber-600">
            Quick Links
          </p>
          <div className="grid grid-cols-2 mx-4 justify-items-center mt-2 gap-6 sm:grid sm:grid-cols-4">
            <a href="" className="text-xl font-semibold  text-cyan-50">
              About
            </a>
            <a href="" className="text-xl font-semibold  text-cyan-50">
              Product
            </a>
            <a href="" className="text-xl font-semibold  text-cyan-50">
              Use Case
            </a>
            <a href="" className="text-xl font-semibold  text-cyan-50">
              Solutions
            </a>
            <a href="" className="text-xl font-semibold  text-cyan-50">
              Services
            </a>
            <a href="" className="text-xl font-semibold  text-cyan-50">
              Contact
            </a>
            <a href="" className="text-xl font-semibold  text-cyan-50">
              Shop
            </a>
            <a href="" className="text-xl font-semibold  text-cyan-50">
              Team
            </a>
          </div>
        </motion.div>
      </div>
      <div className=" bg-blue-950 px-10 border-t-[1px] border-amber-300 py-2">
        <motion.p
          className=" text-cyan-50 sm:text-left text-center opacity-70"
          ref={ref}
          variants={variants}
          initial="footerInitial"
          animate={controls}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
        >
          Copyright ©2024 Ether Daylight Systems Pvt. Ltd.
        </motion.p>
      </div>
    </>
  );
}

export default Footer
