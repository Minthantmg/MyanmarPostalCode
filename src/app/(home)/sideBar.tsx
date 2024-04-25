import React from "react";
import { cities } from "../../../Constants";
import Link from "next/link";
import { closeDisplayProps } from "../types";

const sideBar = ({ closeDisplay }: closeDisplayProps) => {
  return (
    <div className="border-r-2 h-fit sm:min-h-screen">
      {cities.map((city) => (
        <Link
          legacyBehavior={true}
          key={city.id}
          href=""
          className={`py-4 px-4 border-b flex items-start text-sm hover:no-underline hover:bg-gray-200`}
        >
          <div
            className="border-b-2 p-2 cursor-pointer flex flex-col justify-center items-center"
            onClick={closeDisplay}
          >
            {city.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default sideBar;
