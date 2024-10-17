import React from "react";
import { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { iconDetails, IconDetails } from "./IconDetails";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


function SecondSection() {
  const [selectedProductIndex, setSelectedProductIndex] = useState<
    number
  >(0);

  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start({}).then(() => {
        animateNumber(100, setCount1);
        animateNumber(80, setCount2);
        animateNumber(40, setCount3);
      });
    }
  }, [isInView, controls]);

  const animateNumber = (target: number, setCount: React.Dispatch<React.SetStateAction<number>>) => {
    let start = 0;
    const duration = 1000;
    const increment = target / (duration / 10);

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);
  };

  return (
    <>
      <div
        ref={sectionRef}
        className="grid sm:grid-cols-1 mob:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:h-[30vh] sm:h-[50vh] md:h-[30vh] mob:h-[50vh]  justify-items-center items-center  sm:mt-10 md:mt-10 lg:mt-0 mob:mt-6"
      >
        <div className="sm:mt-0 md:mt-0 lg:mt-0">
          <motion.p className="lg:text-6xl mob:text-5xl text-center mb-2 text-indigo-700 dark:text-indigo-600 font-poppins">
            {count1}
          </motion.p>
          <p className="text-center text-lg font-bold font-poppins">
            context is here
          </p>
        </div>
        <div className="sm:mt-0 md:mt-0 lg:mt-0">
          <motion.p className="lg:text-6xl mob:text-5xl text-center mb-2 text-indigo-700 dark:text-indigo-600 font-poppins">
            {count2}
          </motion.p>
          <p className="text-center text-lg font-bold font-poppins">
            context is here
          </p>
        </div>
        <div className="sm:mt-0 lg:mt-0 md:col-span-2 md:mt-0 lg:col-span-1 sm:col-span-2 mob:col-span-2">
          <motion.p className="lg:text-6xl mob:text-5xl text-center mb-2 text-indigo-700 dark:text-indigo-600">
            {count3}
          </motion.p>
          <p className="text-center text-lg font-bold font-poppins">
            context is here
          </p>
        </div>
      </div>
      <div className="w-full lg:mt-0 sm:mt-2 md:mt-10 mob:mt-2">
        <p className="text-base text-center opacity-40 font-poppins font-semibold">
          Ether Daylight System
        </p>
      </div>

      <div className="sm:pt-28 md:pt-20 lg:pt-14 mob:pt-10">
        <div className="w-full sm:h-[20vh] content-center grid grid-cols-1 gap-y-4">
          <p className="text-3xl text-center font-bold mob:mx-6 lg:mx-0 font-poppins">
            One infrastructure for the entire AI lifecycle
          </p>
          <p className="text-lg lg:text-center md:text-center sm:text-center sm:mx-10 text-slate-500 lg:mx-52 md:mx-20 mob:text-justify mob:mx-8 font-poppins">
            Accelerate and scale your computer vision with the full-stack
            platform to build, deploy, and maintain AI vision applications,
            customized with your own data. Equip your entire organization to
            build solutions for any use case, with any model, on any hardware.
          </p>
        </div>
        <div className="w-full pt-10 flex lg:px-32 sm:px-10 gap-0">
          <div className=" flex-grow border-b-2 self-center"></div>
          <div className="flex justify-center mx-4">
            <p className="text-2xl  mob:text-xl text-center opacity-40 font-bold -mb-1 font-poppins">
              EtherAIoT Suite
            </p>
          </div>
          <div className=" flex-grow border-b-2 self-center"></div>
        </div>
        <div className="grid grid-flow-col sm:gap-x-2 mob:gap-x-2 lg:gap-x-2 lg:ml-4  mt-10 justify-center justify-items-center lg:flex mob:hidden  rounded-xl">
          {iconDetails.details.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedProductIndex(index)}
              className={`w-[14vh] grid grid-cols-1 h-[8vh] cursor-pointer border-2 rounded-xl gap-y-0 items-center justify-center shadow-md font-bold tracking-wider transition-colors duration-300 dark:border-zinc-700
        ${
          selectedProductIndex === index
            ? "bg-blue-500 text-white border-blue-600 dark:bg-blue-800 dark:border-blue-900"
            : "hover:bg-slate-50 hover:text-blue-500 dark:hover:bg-zinc-800 dark:hover:text-blue-300"
        }`}
            >
              <p className="text-center tracking-wider font-semibold lg:text-sm mob:text-sm mob:mx-2 font-poppins">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="lg:hidden mob:flex mt-6 mob:w-full justify-center">
          <Select
            onValueChange={(value) => {
              const index = iconDetails.details.findIndex(
                (item) => item.title === value
              );
              setSelectedProductIndex(index);
            }}
          >
            <SelectTrigger className="w-60 h-14 bg-blue-500 text-xl text-white border-blue-500 tracking-wider">
              <SelectValue
                placeholder={iconDetails.details[selectedProductIndex].title}
              />
            </SelectTrigger>
            <SelectContent>
              {iconDetails.details.map((item, index) => (
                <SelectItem value={item.title} key={index} className="text-lg h-12">
                  {item.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {selectedProductIndex !== null && (
          <div className="lg:w-[1320px] grid sm:grid-cols-1 mob:grid-cols-1 mob:mx-8 md:grid-cols-1 lg:grid-cols-2 sm:gap-y-0 gap-y-6 sm:mx-10 lg:mx-28  mt-10  justify-items-center bg-neutral-100 lg:p-10 mob:p-6 rounded-xl shadow-md border-2 dark:bg-zinc-700 dark:border-zinc-800">
            <div>
              <p className="text-3xl font-bold lg:ml-6 mr-10 text-purple-600 font-poppins">
                {iconDetails.details[selectedProductIndex].title}
              </p>
              <p className="text-lg mt-6 text-justify indent-4 lg:ml-6 md:mr-6 lg:mr-0 sm:ml-0 font-poppins">
                {iconDetails.details[selectedProductIndex].description}
              </p>
            </div>

            <div className="lg:mt-0 lg:h-auto md:mt-4 sm:mt-4 lg:ml-16">
              <img
                src={iconDetails.details[selectedProductIndex].href}
                className="rounded-xl lg:h-[400px] mob:h-60 mob:w-60 lg:w-[400px]"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SecondSection;
