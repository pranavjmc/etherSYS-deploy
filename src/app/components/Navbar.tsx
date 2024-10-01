"use client"
 
import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
  navigationLinkStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import ModeToggle from "./ModeToggle";
import MenuButton from "./MenuButton";
import { motion, easeIn, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { useTheme, } from "next-themes";
  

 

function Navbar() {

  const [navOpen, navClose]=useState(false)
  const[show, hide]=useState(true)
  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState(false);
  const {scrollY}=useScroll()

  


   useEffect(() => {
     setMode(theme === "light" ? false : true);
   }, [theme]);

   const variants={
    hidden:{
      y: -100
    },
    visible:{
      y:0
    }
   }
  
   useMotionValueEvent(scrollY,"change",(latest)=>{
    const previous = scrollY.getPrevious();
    if (latest > previous! && latest > 150) {
      // Scrolling down
      hide(false);
    } else if (latest < previous!) {
      // Scrolling up
      hide(true);
    }
   })
 
  return (
    <div
      className="sticky top-0 w-full bg-white dark:bg-slate-800 dark:text-white dark:border-slate-700 border-b-2"
    >
      <div
        className=" sm:w-full py-4 flex flex-col    top-0 bg-white sm:flex sm:flex-row  sm:h:full dark:bg-slate-800 dark:text-white dark:border-slate-700"
        
      >
        <div className="grid grid-cols-2">
          <NavigationMenu className="">
            <p className="sm:ml-40 ml-6 font-bold text-2xl">
              Sample
            </p>

            <NavigationMenuList className=" ml-16 sm:flex hidden">
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationLinkStyle()}>
                  Link1
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navigationLinkStyle()}>
                  Item One
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Dropdown Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationLinkStyle()}>
                  Link2
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationLinkStyle()}>
                  Link3
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationLinkStyle()}>
                  Link4
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationLinkStyle()}>
                  Link5
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="sm:hidden flex justify-end mr-10 gap-x-10">
            <ModeToggle />
            <div onClick={() => navClose((navOpen) => !navOpen)}>
              <MenuButton />
            </div>
          </div>
        </div>

        <NavigationMenu className="self-end sm:mx-10 mx-10 sm:flex hidden ">
          <NavigationMenuList className="mx-0 mt-4 sm:flex sm:flex-row flex-col sm:mt-0 sm:mx-20 w-full sm:my-0 ">
            <Button className=" ml-2 dark:text-white bg-cyan-700 hover:bg-cyan-600 sm:my-0 my-2 mx-2">
              Button
            </Button>
          </NavigationMenuList>
          <div className="ml-6 sm:block hidden">
            <ModeToggle />
          </div>
        </NavigationMenu>
      </div>

      <motion.div
        className="dark:bg-slate-800 dark:text-white dark:border-slate-700 sm:hidden block w-[350px] fixed h-full right-0 bg-white border-l-2 top-[67px]"
        animate={{ opacity: navOpen ? 1 : 0, x: navOpen ? 0 : "100%" }}
      >
        <NavigationMenu className=" my-20 mx-32">
          <NavigationMenuList className=" flex-col sm:my-0 gap-y-6 ">
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationLinkStyle()}>
                Link1
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navigationLinkStyle()}>
                Item One
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Dropdown Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationLinkStyle()}>
                Link2
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationLinkStyle()}>
                Link3
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationLinkStyle()}>
                Link4
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationLinkStyle()}>
                Link5
              </NavigationMenuLink>
            </NavigationMenuItem>
            <Button className=" ml-2 dark:text-white bg-cyan-700 hover:bg-cyan-600 sm:my-0 my-2 mx-2">
              Button
            </Button>
          </NavigationMenuList>
          <div className="ml-6 sm:block hidden">
            <ModeToggle />
          </div>
        </NavigationMenu>
      </motion.div>
    </div>
  );
}

export default Navbar
