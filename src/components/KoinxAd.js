import React from "react";

function KoinxAd() {
  return (
    <div className="bg-blue-600 lg:ml-10 m-3 rounded-lg pb-10 lg:mt-0 mt-20 md:mt-0">
      <div className="flex flex-wrap justify-center items-center p-10 gap-4 leading-6	">
        <h1 className="text-white font-extrabold text-3xl ">
          Get Started with KoinX
        </h1>
        <h1 className=" text-white font-extrabold text-3xl">for FREE</h1>
        <p className="text-white font-semibold">
          With our range features that you can equip for free, KoinX allow you
          to be more educated and aware of
        </p>
        <p className="text-white font-semibold">your tax reports.</p>
      </div>
      <div className="flex justify-center">
        <img src="/assets/images/Frame.png" alt="frame-image" width={200} />
      </div>
      <div className="flex justify-center items-center ">
        <button className="bg-white h-12 px-5 mt-3 text-center rounded-lg">
          Get Started for FREE 🡢
        </button>
      </div>
    </div>
  );
}

export default KoinxAd;
