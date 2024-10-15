import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function PreFooter() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-y-0 mob:grid-cols-1 h-full bg-gradient-to-r from-indigo-950 from-45% to-sky-900 to-80%">
        <div className="flex-col h-[40vh] content-center">
          <p className="text-white text-xl font-bold font-poppins text-center lg:mb-4 mob:mb-0 mx-20">
            Get the software infrastructure you need to deliver computer vision
            - all in one platform
          </p>
          <p className="text-lg text-gray-300 text-center mb-2">
            One platform for all your computer vision use cases
          </p>
          <p className="text-lg text-gray-300 text-center mb-2">
            Build future-proof applications 10x faster
          </p>
          <p className="text-lg text-gray-300 text-center mb-2">
            Enterprise-grade scalability and security
          </p>
        </div>
        <div className="flex-col lg:h-[40vh] mob:h-[20vh] content-center">
          <p className="text-white text-xl font-semibold font-poppins text-center">
            Meet one of our product experts
          </p>
          <div className="mt-2 flex  justify-center ml-18">
            <div className="">
              <div className="mt-2">
                <div className="flex w-[300px] rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-300 placeholder:pl-2 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="work email"
                  />
                </div>
              </div>
            </div>
            <Link
              href="/products"
              className={cn(buttonVariants({ variant: "lime" }),"mt-2 ml-3")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreFooter;
