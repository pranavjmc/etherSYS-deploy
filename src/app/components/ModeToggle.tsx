import React from 'react'
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
    
          <Button variant="outline" size="icon" onClick={toggleTheme} className='dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700'>
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:bg-slate-800 dark:hover:bg-slate-700" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        
    </div>
  );
}

export default ModeToggle
