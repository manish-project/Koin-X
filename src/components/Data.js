import React from "react";

function Data({ title, price }) {
  return (
    <div>
      <div className="flex justify-between p-5">
        <div>{title}</div>
        <div>{price}</div>
      </div>
      <hr className="h-0.5 bg-slate-300" />
    </div>
  );
}

export default Data;
