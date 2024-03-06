import React, { useState, useEffect } from "react";
import { GoTriangleUp } from "react-icons/go";
import { IoIosInformationCircle } from "react-icons/io";
import Data from "./Data";

function PerformancePage() {
  const [trendingData, setTrendingData] = useState([]);
  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
        );
        if (response.status !== 200) {
          throw new Error("Failed to fetch trending data");
        }
        const data = await response.json();
        setTrendingData(data.bitcoin);
      } catch (error) {
        console.error("Error fetching trending data:", error);
      }
    };

    fetchTrendingData();
  }, []);
  return (
    <div className="mt-16 lg:ml-10 px-4 pt-8 w-full bg-white pb-12 rounded-lg">
      {/* <hr className="w-full h-2 " /> */}
      <div>
        <h1 className="text-3xl font-medium px-2 pt-2">Performance</h1>
        <div className="relative">
          <div className="flex justify-between items-center mt-8 p-4 relative">
            <div>
              <h3 className="pb-1.5">Today's Low</h3>
              <p className="text-lg font-medium">46,930.22</p>
            </div>
            <div className=" lg:w-8/12 h-1.5 w-6/12 bg-gradient-to-r from-red-500 via-orange-400 to-green-400 rounded-lg "></div>

            <div>
              <p className="pb-1.5">Today's High</p>
              <p className="text-lg font-medium">46,930.22</p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col absolute lg:left-2/3 top-12 left-1/3 ">
            <GoTriangleUp className="" /> <div>$145451122</div>
          </div>
        </div>

        <div className="flex justify-between items-center px-4 mt-2">
          <div className="">
            <p className="pb-1.5">52W Low</p>
            <p className="text-lg font-medium"> 46,930.22</p>
          </div>
          <div className=" lg:w-8/12 w-6/12  h-1.5 bg-gradient-to-r from-red-500 via-orange-400 to-green-400  rounded-lg"></div>
          <div className="">
            <p className="pb-1.5">52W High</p>
            <p className="text-lg font-medium">46,930.22</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-1 pt-12 ml-3">
          <h1 className="text-xl font-semibold"> Fundamentals </h1>
          <IoIosInformationCircle />
        </div>
        <div className="flex justify-between lg:gap-24 p-4 lg:flex-row md:flex-row flex-col font-semibold">
          <div className="lg:w-1/2 md:w-1/2">
            <Data title={"Bitcoin Price"} price={`$${trendingData.usd}`} />
            <Data
              title={"24h Low/24h High"}
              price={`$${trendingData.usd_24h_change}`}
            />
            <Data title={"7d Low/7d High"} price={"$16382.37 / $16875.54"} />
            <Data title={"Trading Volume"} price={"23,249,202,782"} />
            <Data title={"Market Cap Rank"} price={"#1"} />
          </div>
          <div className="lg:w-1/2 md:w-1/2">
            <Data title={"Market Cap"} price={"$323,254,258,489"} />
            <Data title={"Market Cap Dominance"} price={"38.343"} />
            <Data title={"Volume/Market Cap"} price={0.0718} />
            <Data title={"All-Time High"} price={"$69044.77"} />
            <Data title={"All-Time Low"} price={"$67.81"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformancePage;
