import React from "react";
import SideBar from "./(home)/sideBar";
import Region from "./(home)/region";

const page = () => {
  return (
    <div>
      <div className="w-2/5 hidden sm:block">
        <SideBar />
      </div>
      <div className="w-3/5 sm:w-full">
        <Region />
      </div>
    </div>
  );
};

export default page;
