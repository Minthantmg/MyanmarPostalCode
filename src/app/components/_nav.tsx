import React from "react";
import { Menu } from "lucide-react";
import { displayProps } from "../types";

const _nav = ({ toggleDisplay }: displayProps) => {
  return (
    <div className="flex justify-start items-center border-b-2 p-4 sm:p-8">
      <div className="cursor-pointer sm:hidden z-10" onClick={toggleDisplay}>
        <Menu />
      </div>
      <div className="w-full fixed">
        <div className="flex justify-center items-center">
          <div>
            M<span className="text-[10px]">yanmar</span> P
            <span className="text-[10px]">ostal</span> C
            <span className="text-[10px]">ode</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default _nav;
