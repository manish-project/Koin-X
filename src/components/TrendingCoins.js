import React, { useEffect, useState } from "react";

function App() {
  const [trendingData, setTrendingData] = useState([]);
  let newtrendingData = trendingData.slice(0, 3);
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
    <div className="bg-white lg:ml-10 m-2 mt-5 rounded-lg">
      <h1 className="font-bold  py-7 px-5 text-2xl">Trending Coins (24H)</h1>
      <ul>
        {newtrendingData.map((coin, index) => (
          <div className="flex justify-between px-5">
            <div className="flex gap-1 pb-5">
              <img
                src={coin.item.small}
                alt="TendingCoinsymbol"
                width={30}
                className="rounded-2xl"
              />
              <li key={coin.item.name} className="text-lg font-medium">
                {coin.item.name}
              </li>
              <li key={index} className="text-lg font-medium">
                {`(${coin.item.symbol})`}
              </li>
            </div>
            <div className="">
              <li
                key={coin.item.data.price_change_percentage_24h.usd}
                className="bg-green-100 px-2 rounded-"
              >
                {` ${coin.item.data.price_change_percentage_24h.usd.toFixed(
                  2
                )}%`}
              </li>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
