import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { motion, easeIn, useInView, useAnimation } from "framer-motion";


import React from 'react'

function CardSection() {
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
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);


  return (
    <>
      <div className="bg-slate-100 py-10 mt-2 h-full dark:bg-slate-900 dark:text-white ">
        <motion.p
          className=" text-2xl mx-[100px] font-bold text-center mt-5 sm:ml-36 sm:text-4xl"
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
        >
          Our Featured Solutions
        </motion.p>
        <div className="justify-items-center pt-10 grid grid-cols-1 gap-10 justify-center items-center sm:grid sm:grid-cols-3 sm:mx-20 sm:ml-32 sm:my-4">
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            <Card className="w-[360px] h-[250px]">
              <CardHeader>
                <CardTitle className="text-center">Smart City</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-justify mx-2">
                  EtherIoT smart city solution is making urban life more
                  convenient and safer. It is helping cities improve
                  infrastructure & public utility services. It brings solutions
                  that can deal with the problem of water management, garbage,
                  air pollution, transportation and population.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            <Card className="w-[360px] h-[250px]">
              <CardHeader>
                <CardTitle className="text-center">Smart City</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-justify mx-2">
                  EtherIoT smart city solution is making urban life more
                  convenient and safer. It is helping cities improve
                  infrastructure & public utility services. It brings solutions
                  that can deal with the problem of water management, garbage,
                  air pollution, transportation and population.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            <Card className="w-[360px] h-[250px]">
              <CardHeader>
                <CardTitle className="text-center">Smart City</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-justify mx-2">
                  EtherIoT smart city solution is making urban life more
                  convenient and safer. It is helping cities improve
                  infrastructure & public utility services. It brings solutions
                  that can deal with the problem of water management, garbage,
                  air pollution, transportation and population.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            <Card className="w-[360px] h-[250px]">
              <CardHeader>
                <CardTitle className="text-center">Smart City</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-justify mx-2">
                  EtherIoT smart city solution is making urban life more
                  convenient and safer. It is helping cities improve
                  infrastructure & public utility services. It brings solutions
                  that can deal with the problem of water management, garbage,
                  air pollution, transportation and population.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            <Card className="w-[360px] h-[250px]">
              <CardHeader>
                <CardTitle className="text-center">Smart City</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-justify mx-2">
                  EtherIoT smart city solution is making urban life more
                  convenient and safer. It is helping cities improve
                  infrastructure & public utility services. It brings solutions
                  that can deal with the problem of water management, garbage,
                  air pollution, transportation and population.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            <Card className="w-[360px] h-[250px]">
              <CardHeader>
                <CardTitle className="text-center">Smart City</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-justify mx-2">
                  EtherIoT smart city solution is making urban life more
                  convenient and safer. It is helping cities improve
                  infrastructure & public utility services. It brings solutions
                  that can deal with the problem of water management, garbage,
                  air pollution, transportation and population.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default CardSection
