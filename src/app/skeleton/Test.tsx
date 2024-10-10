import React from "react";
import { motion } from "framer-motion";

function Test() {
  return (
    <div>
      <svg
        className="lg:w-[90vh] lg:h-[90vh] md:w-[80vh] sm:w-[60vh] mob:w-[60vh]"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="299" cy="299" r="226" fill="white" />
        <circle cx="299" cy="299" r="115.5" fill="#0011A5" />

        

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          // style={{ transformOrigin: "297px 314px" }}
        >
          <motion.circle
            cx="299"
            cy="299"
            r="226"
            fill="transparent"
            strokeWidth={5}
            stroke="url(#gradientStroke)"
            strokeDasharray={500}
            strokeDashoffset={500}
            initial={{ rotate: 20 }}
            // style={{ transformOrigin: "297px 314px" }}
          />
          {/* The small circle that will move along the path */}
          <motion.circle
            r="8"
            fill="#FF5733"
            filter="url(#dropShadow)"
            cx="300"
            cy="70"
          ></motion.circle>
        </motion.g>

        <defs>
          <linearGradient
            id="gradientStroke"
            x1="0%"
            y1="0%"
            x2="20%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#FF5733", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "white", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>

        <defs>
          <filter id="dropShadow" x="-10%" y="-10%" width="200%" height="200%">
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation="2"
              floodColor="#ff8d75"
              floodOpacity="1"
            />
          </filter>
        </defs>
        <defs>
          <filter
            id="filter0_b_1_2"
            x="139"
            y="380"
            width="72"
            height="72"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_1_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_1_2"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_1_2">
            <rect
              width="64"
              height="64"
              fill="white"
              transform="translate(267 110)"
            />
          </clipPath>
          <clipPath id="clip1_1_2">
            <rect
              width="64"
              height="64"
              fill="white"
              transform="translate(267 448)"
            />
          </clipPath>
          <clipPath id="clip2_1_2">
            <rect
              width="64"
              height="64"
              fill="white"
              transform="translate(391 167)"
            />
          </clipPath>
          <clipPath id="clip3_1_2">
            <rect
              width="64"
              height="64"
              fill="white"
              transform="translate(391 386)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default Test;
