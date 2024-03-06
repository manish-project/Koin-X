import React, { useState } from "react";

function Menu() {
  const [activeItem, setActiveItem] = useState("Overview");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <div className="mt-3 ">
        <ul className="flex lg:gap-24 md:gap-12 gap-2 font-medium text-base cursor-pointer ">
          <li
            onClick={() => handleItemClick("Overview")}
            style={{ color: activeItem === "Overview" ? "blue" : "black" }}
          >
            Overview
          </li>
          <li
            onClick={() => handleItemClick("Fundamentals")}
            style={{ color: activeItem === "Fundamentals" ? "blue" : "black" }}
          >
            Fundamentals
          </li>
          <li
            onClick={() => handleItemClick("New Insights")}
            style={{ color: activeItem === "New Insights" ? "blue" : "black" }}
          >
            New Insights
          </li>
          <li
            onClick={() => handleItemClick("Sentiments")}
            style={{ color: activeItem === "Sentiments" ? "blue" : "black" }}
          >
            Sentiments
          </li>
          <li
            onClick={() => handleItemClick("Team")}
            style={{ color: activeItem === "Team" ? "blue" : "black" }}
          >
            Team
          </li>
          <li
            onClick={() => handleItemClick("Technicals")}
            style={{ color: activeItem === "Technicals" ? "blue" : "black" }}
          >
            Technicals
          </li>
          <li
            onClick={() => handleItemClick("Tokenomics")}
            style={{ color: activeItem === "Tokenomics" ? "blue" : "black" }}
          >
            Tokenomics
          </li>
        </ul>
        {activeItem && (
          <hr className="bg-blue-500 mt-5 h-1" style={{ width: "90px" }} />
        )}
      </div>
    </div>
  );
}

export default Menu;
