import React from "react";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import TradingViewWidget from "./components/TradingViewWidget";
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
      <TradingViewWidget />
    </div>
  );
}

export default App;
