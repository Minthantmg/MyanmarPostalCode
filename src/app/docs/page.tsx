'use client'
import React, {useState} from "react";
import {Box, Copy} from "lucide-react";
import Check from "../../../public/check.png"
import Image from "next/image";

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [copied, setCopied] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [copiedAll, setCopiedAll] = useState(false);
    const singleText = 'https://myanmar-postal-code.vercel.app/api/data/myanmar?region=01';
    const allStateText = 'https://myanmar-postal-code.vercel.app/api/data/myanmar/regions';

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(singleText);
            setCopied(true);
        } catch (error) {
        } finally {
            setTimeout(() => setCopied(false), 5000);
        }
    };

    const handleCopyAll = async () => {
        try {
            await navigator.clipboard.writeText(allStateText);
            setCopiedAll(true);
        } catch (error) {
        } finally {
            setTimeout(() => setCopiedAll(false), 5000);
        }
    };

    return (
        <div className="w-full font-poppin">
            <div className="sm:px-36 px-8 grid gap-y-10">
                <div className="sm:pt-28 pt-20">
                    <div className="font-bold text-2xl text-yellow-600">
                        How to use it?
                    </div>
                    <div className="text-gray-400 sm:pt-8 sm:mr-10">
                        Myanmar Postal Code API can be used with any type of project that needs postal code and township
                        of myanmar in JSON format. you can use examples below to check how Myanmar Postal Code API works
                        and feel free to enjoy it in your awesome projects!
                    </div>
                </div>
                <div className="font-bold text-2xl flex items-center gap-2">
                    <Box/>
                    <div className="text-yellow-600">
                        States and Postal Codes
                    </div>
                </div>
                <div className="text-black text-lg leading-tight">
                    Get all regions
                </div>
                <div className="sm:w-3/5 w-[365px]">
                    <div className="mockup-code">
                        <pre
                            className="flex justify-between"><code className="text-wrap mr-4 sm:mr-0">{allStateText}</code>
                            {copiedAll ? (
                                <>
                                    <Image src={Check} alt="" className="w-6 h-6 ml-4 sm:ml-0 mr-1 sm:mr-0"/>
                                </>
                            ) : (
                                <div onClick={handleCopyAll}
                                     className="cursor-pointer ml-4 sm:ml-0 mr-1 sm:mr-0 w-6 h-6">
                                    <Copy/>
                                </div>
                            )}
                        </pre>
                    </div>
                </div>

                <div className="text-black text-lg leading-tight">
                    Get a single region
                </div>
                <div className="sm:w-3/5 w-[365px] pb-14">
                    <div className="mockup-code">
                        <pre
                            className="flex justify-between"><code className="text-wrap mr-4 sm:mr-0">{singleText}</code>
                            {copied ? (
                                <>
                                    <Image src={Check} alt="" className="w-6 h-6 ml-4 sm:ml-0 mr-1 sm:mr-0"/>
                                </>
                            ) : (
                                <div onClick={handleCopy} className="cursor-pointer ml-4 sm:ml-0 mr-1 sm:mr-0 w-6 h-6">
                                    <Copy/>
                                </div>
                            )}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
