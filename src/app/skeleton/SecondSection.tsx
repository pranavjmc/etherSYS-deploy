import React from "react";
import { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";


function SecondSection() {
  const [selectedProductIndex, setSelectedProductIndex] = useState<
    number | null
  >(0);

  const product = [
    { title: "Product 1" },
    { title: "Product 2" },
    { title: "Product 3" },
    { title: "Product 4" },
    { title: "Product 5" },
    // Add more data as needed
  ];

  const productDetails = [
    {
      title: "Heading 1",
      description:
        "Collect data for computer vision annotation with Viso Suite. Use automated collection capabilities to gather high quality training data. Control and secure all data collection. Enable continuous data collection to further improve your AI models.",
      imageUrl: "/isometric-style-appliances-set_23-2147633906.avif",
    },
    {
      title: "Heading 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio odit blanditiis ipsum reiciendis eveniet, ex ducimus ipsam repellat esse fugiat. Ipsam odio commodi odit tenetur vitae soluta consectetur voluptatibus!",
      imageUrl: "/isometric-style-appliances-set_23-2147633906.avif",
    },
    {
      title: "Heading 3",
      description:
        "Collect data for computer vision annotation with Viso Suite. Use automated collection capabilities to gather high quality training data. Control and secure all data collection. Enable continuous data collection to further improve your AI models.",
      imageUrl: "/isometric-style-appliances-set_23-2147633906.avif",
    },
    {
      title: "Heading 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio odit blanditiis ipsum reiciendis eveniet, ex ducimus ipsam repellat esse fugiat. Ipsam odio commodi odit tenetur vitae soluta consectetur voluptatibus!",
      imageUrl: "/isometric-style-appliances-set_23-2147633906.avif",
    },
    {
      title: "Heading 5",
      description:
        "Collect data for computer vision annotation with Viso Suite. Use automated collection capabilities to gather high quality training data. Control and secure all data collection. Enable continuous data collection to further improve your AI models.",
      imageUrl: "/isometric-style-appliances-set_23-2147633906.avif",
    },
    {
      title: "Heading6",
      description:
        "Collect data for computer vision annotation with Viso Suite. Use automated collection capabilities to gather high quality training data. Control and secure all data collection. Enable continuous data collection to further improve your AI models.",
      imageUrl: "/isometric-style-appliances-set_23-2147633906.avif",
    },
  ];

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
        className="grid mob:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:h-[30vh] sm:h-[60vh] md:h-[30vh] justify-items-center items-center  sm:mt-10 md:mt-10 lg:mt-0 mob:mt-6 lg:gap-y-0 mob:gap-y-6"
      >
        <div className="sm:mt-0 md:mt-0 lg:mt-0">
          <motion.p className="lg:text-6xl mob:text-5xl mob:text-2xll text-center mb-2 text-indigo-700 dark:text-indigo-600">
            {count1}
          </motion.p>
          <p className="text-center text-lg font-bold">context is here</p>
        </div>
        <div className="sm:mt-0 md:mt-0 lg:mt-0">
          <motion.p className="lg:text-6xl mob:text-5xl  text-center mb-2 text-indigo-700 dark:text-indigo-600">
            {count2}
          </motion.p>
          <p className="text-center text-lg font-bold">context is here</p>
        </div>
        <div className="sm:mt-0 lg:mt-0 md:col-span-2 md:mt-0 lg:col-span-1 sm:col-span-2 mob:col-span-2">
          <motion.p className="lg:text-6xl mob:text-5xl text-center mb-2 text-indigo-700 dark:text-indigo-600">
            {count3}
          </motion.p>
          <p className="text-center text-lg font-bold">context is here</p>
        </div>
      </div>
      <div className="w-full lg:mt-0 sm:mt-2 md:mt-10 mob:mt-2">
        <p className="text-base text-center opacity-40">
          Ether Daylight System
        </p>
      </div>

      <div className="sm:pt-28 md:pt-20 lg:pt-14 mob:pt-10">
        <div className="w-full sm:h-[20vh] content-center grid grid-cols-1 gap-y-4">
          <p className="text-3xl text-center font-bold mob:mx-6 lg:mx-0">
            One infrastructure for the entire AI lifecycle
          </p>
          <p className="text-lg lg:text-center md:text-center sm:text-center sm:mx-10 text-slate-500 lg:mx-60 md:mx-20 mob:text-justify mob:mx-8">
            Accelerate and scale your computer vision with the full-stack
            platform to build, deploy, and maintain AI vision applications,
            customized with your own data. Equip your entire organization to
            build solutions for any use case, with any model, on any hardware.
          </p>
        </div>
        <div className="w-full pt-20 flex lg:px-40 sm:px-10 gap-0">
          <div className=" flex-grow border-b-2 self-center"></div>
          <div className="flex justify-center mx-4">
            <p className="lg:text-2xl mob:text-xl text-center opacity-40 font-bold -mb-1">
              EtherSYS Products
            </p>
          </div>
          <div className=" flex-grow border-b-2 self-center"></div>
        </div>
        <div className="grid grid-flow-col sm:gap-x-2 mob:gap-x-2 lg:gap-x-4  mt-10 justify-center justify-items-center  rounded-xl">
          {product.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedProductIndex(index)}
              className={`lg:w-[14vh] lg:h-[12vh] mob:w-[10vh] mob:h-[8vh] border-2 rounded-xl flex items-center justify-center shadow-md text-base font-bold tracking-wider transition-colors duration-300 dark:border-zinc-700
        ${
          selectedProductIndex === index
            ? "bg-blue-500 text-white border-blue-600 dark:bg-blue-800 dark:border-blue-900"
            : "hover:bg-slate-50 hover:text-blue-500 dark:hover:bg-zinc-800 dark:hover:text-blue-300"
        }`}
            >
              <p className="text-center tracking-wider font-bold lg:text-base mob:text-sm mob:mx-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        {selectedProductIndex !== null && (
          <div className="grid sm:grid-cols-1  md:grid-cols-1 mob:mx-4 lg:grid-cols-2 sm:gap-y-0 gap-y-6 sm:mx-10 lg:mx-60  mt-10 justify-center justify-items-center bg-neutral-100 lg:p-10 mob:p-6 rounded-xl shadow-md border-2 dark:bg-zinc-700 dark:border-zinc-800">
            <div>
              <p className="text-3xl font-bold mr-10 text-purple-600">
                {productDetails[selectedProductIndex].title}
              </p>
              <p className="text-lg mt-4 text-justify indent-4 md:mr-6 lg:mr-6 sm:ml-0 mob:mx-0">
                {productDetails[selectedProductIndex].description}
              </p>
            </div>

            <div className="lg:mt-0 md:mt-4 sm:mt-4">
              <Image
                src={productDetails[selectedProductIndex].imageUrl}
                width={400}
                height={300} // You need to provide height explicitly
                className="rounded-xl"
                alt="Product Image"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SecondSection;
