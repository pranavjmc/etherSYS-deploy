import React from "react";
import { motion } from "framer-motion";

function Test() {
  return (
    <div>
      <svg
        className="lg:w-[80vh] lg:h-[80vh] md:w-[80vh] sm:w-[60vh] mob:w-[60vh]"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <circle cx="300" cy="300" r="250" fill="white" />
        <circle cx="300" cy="300" r="150" fill="url(#paint0_linear_0_3)" />
        <g filter="url(#filter0_d_0_3)">
          <path
            d="M232.268 276.05V280.31H239.138V284.27H232.268V288.89H240.038V293H227.138V271.94H240.038V276.05H232.268ZM252.998 288.65V293H250.388C248.528 293 247.078 292.55 246.038 291.65C244.998 290.73 244.478 289.24 244.478 287.18V280.52H242.438V276.26H244.478V272.18H249.608V276.26H252.968V280.52H249.608V287.24C249.608 287.74 249.728 288.1 249.968 288.32C250.208 288.54 250.608 288.65 251.168 288.65H252.998ZM266.446 276.08C268.366 276.08 269.906 276.72 271.066 278C272.226 279.26 272.806 281 272.806 283.22V293H267.706V283.91C267.706 282.79 267.416 281.92 266.836 281.3C266.256 280.68 265.476 280.37 264.496 280.37C263.516 280.37 262.736 280.68 262.156 281.3C261.576 281.92 261.286 282.79 261.286 283.91V293H256.156V270.8H261.286V278.51C261.806 277.77 262.516 277.18 263.416 276.74C264.316 276.3 265.326 276.08 266.446 276.08ZM292.451 284.36C292.451 284.84 292.421 285.34 292.361 285.86H280.751C280.831 286.9 281.161 287.7 281.741 288.26C282.341 288.8 283.071 289.07 283.931 289.07C285.211 289.07 286.101 288.53 286.601 287.45H292.061C291.781 288.55 291.271 289.54 290.531 290.42C289.811 291.3 288.901 291.99 287.801 292.49C286.701 292.99 285.471 293.24 284.111 293.24C282.471 293.24 281.011 292.89 279.731 292.19C278.451 291.49 277.451 290.49 276.731 289.19C276.011 287.89 275.651 286.37 275.651 284.63C275.651 282.89 276.001 281.37 276.701 280.07C277.421 278.77 278.421 277.77 279.701 277.07C280.981 276.37 282.451 276.02 284.111 276.02C285.731 276.02 287.171 276.36 288.431 277.04C289.691 277.72 290.671 278.69 291.371 279.95C292.091 281.21 292.451 282.68 292.451 284.36ZM287.201 283.01C287.201 282.13 286.901 281.43 286.301 280.91C285.701 280.39 284.951 280.13 284.051 280.13C283.191 280.13 282.461 280.38 281.861 280.88C281.281 281.38 280.921 282.09 280.781 283.01H287.201ZM300.587 279.05C301.187 278.13 301.937 277.41 302.837 276.89C303.737 276.35 304.737 276.08 305.837 276.08V281.51H304.427C303.147 281.51 302.187 281.79 301.547 282.35C300.907 282.89 300.587 283.85 300.587 285.23V293H295.457V276.26H300.587V279.05ZM321.699 289.28H313.839L312.579 293H307.209L314.829 271.94H320.769L328.389 293H322.959L321.699 289.28ZM320.379 285.32L317.769 277.61L315.189 285.32H320.379ZM336.138 271.94V293H331.008V271.94H336.138ZM347.776 293.24C346.136 293.24 344.656 292.89 343.336 292.19C342.036 291.49 341.006 290.49 340.246 289.19C339.506 287.89 339.136 286.37 339.136 284.63C339.136 282.91 339.516 281.4 340.276 280.1C341.036 278.78 342.076 277.77 343.396 277.07C344.716 276.37 346.196 276.02 347.836 276.02C349.476 276.02 350.956 276.37 352.276 277.07C353.596 277.77 354.636 278.78 355.396 280.1C356.156 281.4 356.536 282.91 356.536 284.63C356.536 286.35 356.146 287.87 355.366 289.19C354.606 290.49 353.556 291.49 352.216 292.19C350.896 292.89 349.416 293.24 347.776 293.24ZM347.776 288.8C348.756 288.8 349.586 288.44 350.266 287.72C350.966 287 351.316 285.97 351.316 284.63C351.316 283.29 350.976 282.26 350.296 281.54C349.636 280.82 348.816 280.46 347.836 280.46C346.836 280.46 346.006 280.82 345.346 281.54C344.686 282.24 344.356 283.27 344.356 284.63C344.356 285.97 344.676 287 345.316 287.72C345.976 288.44 346.796 288.8 347.776 288.8ZM374.707 271.94V276.05H369.127V293H363.997V276.05H358.417V271.94H374.707ZM270.283 338.21C268.743 338.21 267.363 337.96 266.143 337.46C264.923 336.96 263.943 336.22 263.203 335.24C262.483 334.26 262.103 333.08 262.063 331.7H267.523C267.603 332.48 267.873 333.08 268.333 333.5C268.793 333.9 269.393 334.1 270.133 334.1C270.893 334.1 271.493 333.93 271.933 333.59C272.373 333.23 272.593 332.74 272.593 332.12C272.593 331.6 272.413 331.17 272.053 330.83C271.713 330.49 271.283 330.21 270.763 329.99C270.263 329.77 269.543 329.52 268.603 329.24C267.243 328.82 266.133 328.4 265.273 327.98C264.413 327.56 263.673 326.94 263.053 326.12C262.433 325.3 262.123 324.23 262.123 322.91C262.123 320.95 262.833 319.42 264.253 318.32C265.673 317.2 267.523 316.64 269.803 316.64C272.123 316.64 273.993 317.2 275.413 318.32C276.833 319.42 277.593 320.96 277.693 322.94H272.143C272.103 322.26 271.853 321.73 271.393 321.35C270.933 320.95 270.343 320.75 269.623 320.75C269.003 320.75 268.503 320.92 268.123 321.26C267.743 321.58 267.553 322.05 267.553 322.67C267.553 323.35 267.873 323.88 268.513 324.26C269.153 324.64 270.153 325.05 271.513 325.49C272.873 325.95 273.973 326.39 274.813 326.81C275.673 327.23 276.413 327.84 277.033 328.64C277.653 329.44 277.963 330.47 277.963 331.73C277.963 332.93 277.653 334.02 277.033 335C276.433 335.98 275.553 336.76 274.393 337.34C273.233 337.92 271.863 338.21 270.283 338.21ZM297.95 321.26V338H292.82V335.72C292.3 336.46 291.59 337.06 290.69 337.52C289.81 337.96 288.83 338.18 287.75 338.18C286.47 338.18 285.34 337.9 284.36 337.34C283.38 336.76 282.62 335.93 282.08 334.85C281.54 333.77 281.27 332.5 281.27 331.04V321.26H286.37V330.35C286.37 331.47 286.66 332.34 287.24 332.96C287.82 333.58 288.6 333.89 289.58 333.89C290.58 333.89 291.37 333.58 291.95 332.96C292.53 332.34 292.82 331.47 292.82 330.35V321.26H297.95ZM304.515 319.52C303.615 319.52 302.875 319.26 302.295 318.74C301.735 318.2 301.455 317.54 301.455 316.76C301.455 315.96 301.735 315.3 302.295 314.78C302.875 314.24 303.615 313.97 304.515 313.97C305.395 313.97 306.115 314.24 306.675 314.78C307.255 315.3 307.545 315.96 307.545 316.76C307.545 317.54 307.255 318.2 306.675 318.74C306.115 319.26 305.395 319.52 304.515 319.52ZM307.065 321.26V338H301.935V321.26H307.065ZM320.413 333.65V338H317.803C315.943 338 314.493 337.55 313.453 336.65C312.413 335.73 311.893 334.24 311.893 332.18V325.52H309.853V321.26H311.893V317.18H317.023V321.26H320.383V325.52H317.023V332.24C317.023 332.74 317.143 333.1 317.383 333.32C317.623 333.54 318.023 333.65 318.583 333.65H320.413ZM339.35 329.36C339.35 329.84 339.32 330.34 339.26 330.86H327.65C327.73 331.9 328.06 332.7 328.64 333.26C329.24 333.8 329.97 334.07 330.83 334.07C332.11 334.07 333 333.53 333.5 332.45H338.96C338.68 333.55 338.17 334.54 337.43 335.42C336.71 336.3 335.8 336.99 334.7 337.49C333.6 337.99 332.37 338.24 331.01 338.24C329.37 338.24 327.91 337.89 326.63 337.19C325.35 336.49 324.35 335.49 323.63 334.19C322.91 332.89 322.55 331.37 322.55 329.63C322.55 327.89 322.9 326.37 323.6 325.07C324.32 323.77 325.32 322.77 326.6 322.07C327.88 321.37 329.35 321.02 331.01 321.02C332.63 321.02 334.07 321.36 335.33 322.04C336.59 322.72 337.57 323.69 338.27 324.95C338.99 326.21 339.35 327.68 339.35 329.36ZM334.1 328.01C334.1 327.13 333.8 326.43 333.2 325.91C332.6 325.39 331.85 325.13 330.95 325.13C330.09 325.13 329.36 325.38 328.76 325.88C328.18 326.38 327.82 327.09 327.68 328.01H334.1Z"
            fill="white"
          />
        </g>

        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 3.5,
          }}
          style={{ transformOrigin: "300px 300px" }}
        >
          <motion.circle
            cx="300"
            cy="300"
            r="249"
            fill="transparent"
            strokeWidth={5}
            stroke="url(#gradientStroke)"
            strokeDasharray={600}
            strokeDashoffset={620}
            // initial={{ rotate: 20 }}
            style={{ transformOrigin: "300px 300px" }}
          />
          <g filter="url(#filter1_d_0_3)">
            <circle cx="300.5" cy="51.5" r="7.5" fill="#FFFEFE" />
          </g>
        </motion.g>

        {/* 1st icon */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <image height="40" width="40" href="/group.png" x={276} y={70} />
          <text fill="black" x={273} y={125} fontSize={12}>
            Connect
          </text>
        </motion.g>
        {/* 7 icon */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <image height="40" width="40" href="/group.png" x={272} y={470} />
          <text fill="black" x={269} y={525} fontSize={12}>
            Connect
          </text>
        </motion.g>
        {/* 10 icon */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.7 }}
        >
          <image height="40" width="40" href="/group.png" x={78} y={280} />
          <text fill="black" x={75} y={335} fontSize={12}>
            Connect
          </text>
        </motion.g>

        {/* 4 icon */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <image height="40" width="40" href="/group.png" x={475} y={280} />
          <text fill="black" x={471} y={335} fontSize={12}>
            Connect
          </text>
        </motion.g>
        {/* 12 icon */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.3 }}
        >
          <image height="40" width="40" href="/group.png" x={175} y={95} />
          <text fill="black" x={172} y={150} fontSize={12}>
            Connect
          </text>
        </motion.g>

        {/* 2 icon */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <image height="40" width="40" href="/group.png" x={378} y={95} />
          <text fill="black" x={375} y={150} fontSize={12}>
            Connect
          </text>
        </motion.g>

        {/* 3 icon */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <image height="40" width="40" href="/group.png" x={450} y={170} />
          <text fill="black" x={447} y={225} fontSize={12}>
            Connect
          </text>
        </motion.g>
        {/* 11 icon */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3 }}
        >
          <image height="40" width="40" href="/group.png" x={110} y={170} />
          <text fill="black" x={105} y={225} fontSize={12}>
            Connect
          </text>
        </motion.g>
        {/* 9 icon */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.4 }}
        >
          <image height="40" width="40" href="/group.png" x={110} y={390} />
          <text fill="black" x={107} y={445} fontSize={12}>
            Connect
          </text>
        </motion.g>
        {/* 5 icon */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <image height="40" width="40" href="/group.png" x={445} y={390} />
          <text fill="black" x={439} y={445} fontSize={12}>
            Connect
          </text>
        </motion.g>
        {/* 6 icon */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <image height="40" width="40" href="/group.png" x={370} y={450} />
          <text fill="black" x={366} y={505} fontSize={12}>
            Connect
          </text>
        </motion.g>
        {/* 8 icon */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.1 }}
        >
          <image height="40" width="40" href="/group.png" x={180} y={450} />
          <text fill="black" x={176} y={505} fontSize={12}>
            Connect
          </text>
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
              style={{ stopColor: "#0080ff", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "white", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>

        <defs>
          <filter
            id="filter0_d_0_3"
            x="223.138"
            y="270.8"
            width="155.57"
            height="75.44"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.97 0 0 0 0 0.97 0 0 0 0 0.97 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_3"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_3"
              result="shape"
            />
          </filter>
          <pattern
            id="pattern0_0_3"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xmlnsXlink="#image0_0_3" transform="scale(0.00195312)" />
          </pattern>
          <filter
            id="filter1_d_0_3"
            x="288"
            y="44"
            width="25"
            height="25"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_0_3"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_3"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_3"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_3"
            x1="402"
            y1="456"
            x2="291"
            y2="232"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0B02BE" />
            <stop offset="1" stopColor="#0B0A2F" />
          </linearGradient>
          <image id="image0_0_3" width="512" height="512" href="/group.png" />
        </defs>
      </svg>
    </div>
  );
}

export default Test;
