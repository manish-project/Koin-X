// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";
import Menu from "./Menu";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|7D"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "volumeDownColor": "rgba(255, 235, 59, 0.5)",
          "lineWidth": 1,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1w|60",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "lineColor": "rgba(41, 98, 255, 1)",
          "timeHoursFormat": "24-hours"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container lg:ml-10 p-3" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <Menu />
      <hr className=" bg-slate-300 h-1" />
    </div>
  );
}

export default memo(TradingViewWidget);
