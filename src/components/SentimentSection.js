import React from "react";
import { IoIosInformationCircle } from "react-icons/io";
import Carousel from "./Carousel";

function SentimentSection() {
  return (
    <div className="bg-white mt-12 lg:ml-10 w-full rounded-lg box-border">
      <div>
        <h1 className="text-2xl font-semibold p-5">Sentiment</h1>
        <div className="flex items-center gap-1.5 pl-5 font-semibold">
          <h5 className="text-lg">Key Events</h5>
          <IoIosInformationCircle />
        </div>
      </div>
      <Carousel />
      <div className="flex items-center gap-1.5 pl-5 font-semibold">
        <h5 className="text-3xl text-gray-500">Analyst Estimates</h5>
        <IoIosInformationCircle className="text-lg" />
      </div>
      <div className="flex">
        <div className=" ml-5 mt-5 pl-5 lg:w-40 lg:h-40 w-24  h-24 rounded-full bg-green-100 flex justify-center items-center text-3xl font-bold text-green-600">
          76%
        </div>
        <div className=" ml-24  lg:mt-12 mt-5 mb-24">
          <div className="flex items-center px-5 py-2">
            <h3 className="text-lg text-gray-500 font-semibold">Buy</h3>
            <div className=" ml-10 lg:w-96 md:w-72 w-20 bg-green-500 h-2 rounded-lg"></div>
            <p className="p-1">76%</p>
          </div>
          <div className="flex  items-center px-5 py-2">
            <h3 className="text-lg text-gray-500 font-semibold">Hold</h3>
            <div className="ml-10 lg:w-20 w-8 bg-slate-500 h-2 rounded-lg"></div>
            <p className="p-1">8%</p>
          </div>
          <div className="flex  items-center px-5 py-2">
            <h3 className="text-lg text-gray-500 font-semibold">Sale</h3>
            <div className="ml-10 lg:w-60 md:48 w-16 bg-red-500 h-2 rounded-lg"></div>
            <p className="p-1">16%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SentimentSection;
