import React from 'react'

function PreFooter() {
  return (
    <>
      <div className="grid grid-cols-2 bg-gradient-to-r from-indigo-950 from-45% to-sky-900 to-80%">
        <div className="flex-col justify-center justify-items-center h-[40vh] content-center items-center place-content-center place-items-center">
          <p className="text-white text-xl font-bold font-poppins text-justify">
            Get the software infrastructure you need to deliver computer vision
            - all in one platform
          </p>
          <p className="text-lg text-gray-300">
            One platform for all your computer vision use cases
          </p>
          <p className="text-lg text-gray-300">
            Build future-proof applications 10x faster
          </p>
          <p className="text-lg text-gray-300">
            Enterprise-grade scalability and security
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default PreFooter
