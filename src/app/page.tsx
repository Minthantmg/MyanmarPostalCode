import React from "react";
import SideBar from "./(home)/sideBar";

const page = () => {
  return (
    <div>
      <div className="w-2/5 hidden sm:block">
        <SideBar />
      </div>
      <div className="w-3/5 sm:w-full"></div>
    </div>
  );
};

export default page;
