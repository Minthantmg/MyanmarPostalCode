"use client"
import React, {useEffect} from "react";
import Image from "next/image";
import logo from "../../../public/myanmar.png"
import {ChevronRight} from 'lucide-react';
import {useRouter} from "next/navigation";

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()

    const gotoService = () => {
        router.push('/service-page')
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
            router.prefetch('/service-page')
        }, [router]
    )
    return (
        <div className="w-full h-screen bg-cover bg-no-repeat bg-center"
             style={{backgroundImage: `url(/background.jpg)`}}>
            <div className="flex flex-col justify-center items-center gap-y-16 sm:gap-y-10">
                <div className="sm:flex pt-24 sm:pt-64 justify-center items-center">
                    <Image src={logo} alt="" className="sm:w-28 sm:h-28 w-36 h-36 ml-24 sm:ml-0"/>
                    <div className="text-xl sm:text-3xl text-white font-bold pt-4 sm:pt-0">Postal Codes/ Zip Codes Of
                        Myanmar
                    </div>
                    <Image src={logo} alt="" className="w-28 h-28 hidden sm:block"/>
                </div>
                <div className="text-white text-center text-lg px-4 sm:px-96">
                    Discover postal codes from myanmar with our easy-to-use search tool. Stay informed about the
                    myanmar postal system and connect with us for updates.
                </div>
                <div className="bg-orange-400 rounded-lg" onClick={gotoService}>
                    <button className="text-white flex justify-between">
                        <span className="pl-4 pr-2 py-4">Get Start For Use</span>
                        <span className="px-2 py-4"><ChevronRight/></span>
                    </button>
                </div>
                <div
                    className="absolute inset-x-0 bottom-0 w-full h-1/3 bg-gradient-to-b from-transparent to-gray-900 opacity-75"></div>
            </div>
        </div>);
};

export default page;
