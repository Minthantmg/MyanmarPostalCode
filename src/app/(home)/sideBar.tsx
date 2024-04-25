import React from "react";
import { cities } from "../../../Constants";

const sideBar = () => {
  return (
    <div className="border-r-2 min-h-screen w-1/3 sm:w-full">
      {cities.map((city) => (
        <div key={city.id} className="border-b-2 p-2 cursor-pointer">
          {city.name}
        </div>
      ))}
    </div>
  );
};

export default sideBar;
