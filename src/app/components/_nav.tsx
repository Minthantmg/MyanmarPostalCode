import React, {useEffect} from "react";
import {Menu} from "lucide-react";
import {useRouter} from "next/navigation";
import {displayProps} from "../types";
import Image from "next/image";
import logo from "../../../public/myanmar.png"

const _nav = ({toggleDisplay}: displayProps) => {
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
        <div className="flex justify-between fixed items-center border-b-2 p-4 px-4 sm:px-32 w-full bg-white">
            <div className="cursor-pointer flex justify-center items-center" onClick={gotoHome}>
                <Image src={logo} alt="logo" className="w-8 h-8"/>
                <span className="text-xl ml-1">M</span>
                <span className="text-base pt-1">yanmar</span>
                <span className="text-xl ml-1">P</span>
                <span className="text-base pt-1">ostal</span>
                <span className="text-xl ml-1">C</span>
                <span className="text-base pt-1">ode</span>
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
                    <Menu/>
                </div>
            </div>
        </div>
    );
};

export default _nav;
