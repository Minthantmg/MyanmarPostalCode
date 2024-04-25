import React from "react";
import SideBar from "./(home)/sideBar";
import Region from "./(home)/region";

const page = () => {
  return (
    <div className="flex">
      <div className="w-1/6 hidden sm:block">
        <SideBar />
      </div>
      <div className="sm:w-5/6">
        <Region />
      </div>
    </div>
  );
};

export default page;
