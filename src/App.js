import React from "react";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import TradingViewWidget from "./components/TradingViewWidget";
import KoinxAd from "./components/KoinxAd";
import TrendingCoins from "./components/TrendingCoins";
import PerformancePage from "./components/PerformancePage";
import SentimentSection from "./components/SentimentSection";
import Tokenomics from "./components/Tokenomics";
import AboutSection from "./components/AboutSection";
import Team from "./components/Team";
import Chart from "./components/Chart";

function App() {
  return (
    <div>
      <Navbar />
      <div className="ml-12 my-7">
        <span className="font-normal text-gray-600">{`Crypocurrencies`} </span>
        <span>&nbsp; </span>
        <span className="font-thin text-xs text-gray-600">
          <FontAwesomeIcon icon={faAngleRight} />
          <FontAwesomeIcon icon={faAngleRight} />
          &nbsp; &nbsp;
        </span>
        <span className="font-medium">Bitcoin</span>
      </div>
      <main className="flex flex-wrap flex-col lg:flex-row md:flex-row lg:mb-20 mb-10">
        <div className="lg:w-8/12 md:w-8/12 w-full lg:mr-8">
          <div className="w-full lg:h-1/6 md:h-1/6 h-full">
            <TradingViewWidget />
          </div>
          <div>
            <PerformancePage />
            <SentimentSection />
            <AboutSection />
            <Tokenomics />
            <Team />
            <Chart title="You may also Like" />
            <Chart title="Trending Coins" />
          </div>
        </div>

        <div className="lg:w-1/4 md:w-1/3 ">
          <KoinxAd className="" />
          <TrendingCoins />
        </div>
      </main>
    </div>
  );
}

export default App;
