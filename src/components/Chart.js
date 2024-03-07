import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Chart({ title }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as per your design needs
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          adaptiveHeight: true,
        },
      },
    ],
  };
  const [trendingData, setTrendingData] = useState([]);
  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        if (response.status !== 200) {
          throw new Error("Failed to fetch trending data");
        }
        const data = await response.json();
        setTrendingData(data.coins);
      } catch (error) {
        console.error("Error fetching trending data:", error);
      }
    };

    fetchTrendingData();
  }, []);
  return (
    <div className="p-10 ml-10 max-w-full mt-10 rounded-lg">
      <div>
        <div className="text-3xl font-bold p-10">{title}</div>
        <div className="">
          <Slider {...settings}>
            {trendingData.map((coin, index) => (
              <div className=" lg:gap-12 gap-8 shadow-xl border-2 border-b-slate-200 p-10">
                <div className="flex">
                  <img
                    src={coin.item.small}
                    alt="TendingCoinsymbol"
                    width={30}
                    className="rounded-2xl"
                  />
                  <div> {`(${coin.item.symbol})`}</div>
                  <div>
                    {`+ ${coin.item.data.price_change_percentage_24h.usd.toFixed(
                      2
                    )}%`}
                  </div>
                </div>
                <div>{coin.item.data.price}</div>
                <img src={coin.item.data.sparkline} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Chart;
