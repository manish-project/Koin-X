import React from "react";
import teamdata from "./teamdata.json";

function Team() {
  return (
    <div className="lg:ml-10 ml-5 bg-white  w-full pb-10 rounded-lg">
      <div>
        <div className="p-10">
          <h1 className="text-2xl font-bold pb-8">Team</h1>
          <h5 className="text-lg font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
            asperiores sequi. Iusto enim nulla voluptates doloremque, omnis
            aliquam sequi obcaecati error! Corrupti nihil voluptatem beatae
            atque praesentium voluptatum officia placeat.
          </h5>
        </div>
        <div>
          {teamdata.map((item, index) => (
            <div
              key={index}
              className="flex m-10 items-center bg-blue-100 p-10 rounded-lg"
            >
              <div className="w-48 mr-5 flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-36 rounded-lg"
                />
                <h3>{item.name}</h3>
                <h5>{item.designation}</h5>
              </div>
              <div>{item.about}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
