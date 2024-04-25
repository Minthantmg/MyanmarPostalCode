import React, { useEffect } from "react";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { displayProps } from "../types";

const _nav = ({ toggleDisplay }: displayProps) => {
  const router = useRouter();

  const gotoHome = () => {
    router.push("/");
  };

  const gotoState = () => {
    router.push("/state");
  };

  const gotoService = () => {
    router.push("/service-page");
  };

  const gotoAbout = () => {
    router.push("/about");
  };

  useEffect(() => {
    router.prefetch("/");
    router.prefetch("/state");
    router.prefetch("/service-page");
    router.prefetch("/about");
  }, []);
  return (
    <div className="flex justify-between items-center border-b-2 p-4 px-4 sm:px-32">
      <div className="cursor-pointer" onClick={gotoHome}>
        M<span className="text-[10px]">yanmar</span> P
        <span className="text-[10px]">ostal</span> C
        <span className="text-[10px]">ode</span>
      </div>
      <div className="gap-5 flex">
        <div onClick={gotoHome} className="cursor-pointer hidden sm:block">
          Home
        </div>
        <div onClick={gotoState} className="cursor-pointer hidden sm:block">
          State
        </div>
        <div onClick={gotoService} className="cursor-pointer hidden sm:block">
          Service
        </div>
        <div onClick={gotoAbout} className="cursor-pointer hidden sm:block">
          About
        </div>
        <div className="sm:hidden" onClick={toggleDisplay}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default _nav;
