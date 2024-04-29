'use client'
import React, {useState} from "react";
import {Box, Copy} from "lucide-react";
import Check from "../../../public/check.png"
import Image from "next/image";
import * as url from "url";

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [copied, setCopied] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [copiedAll, setCopiedAll] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [outputAll, setOutputAll] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [output, setOutput] = useState(false)

    const singleText = 'https://myanmar-postal-code.vercel.app/api/data/myanmar?region=01';
    const allText =  "https://myanmar-postal-code.vercel.app/api/data/myanmar/regions"

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
            await navigator.clipboard.writeText(allText);
            setCopiedAll(true);
        } catch (error) {
        } finally {
            setTimeout(() => setCopiedAll(false), 5000);
        }
    };

    const handleOutputAll = () => {
        setOutputAll(!outputAll)
    }

    const handleOutput = () => {
        setOutput(!output)
    }

    const data = [
        {
            "en": {
                "region": "'...',",
                "town_township": "'...',",
                "qv_tract": "'...',"
            },
            "mm": {
                "region": "'...',",
                "town_township": "'...',",
                "qv_tract": "'...',"
            },
            "_id": "'...',",
            "tsp_code": "'...',",
            "region_code": "'...',",
            "postal_code": "'...',",
            "qv_code": "'...',"
        },
    ];

    const dataAll = [
        [
            "15",
            "Naypyitaw Union Territory"
        ],
    ]

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
                <div className="sm:w-4/5 w-[365px]">
                    <div className="flex bg-gray-800 text-gray-400 px-4 py-2 rounded-sm">
                        <div className="w-2/3 text-justify">
                            {allText}
                        </div>
                        <div className="w-1/3 flex justify-end items-center">
                            {copiedAll ? (
                                <>
                                    <Image src={Check} alt="" className="w-6 h-6 ml-4 sm:ml-0 mr-1 sm:mr-0"/>
                                </>
                            ) : (
                                <div onClick={handleCopy}
                                     className="cursor-pointer ml-4 sm:ml-0 mr-1 sm:mr-0 w-6 h-6">
                                    <Copy/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div onClick={handleOutputAll}>
                    <button className="border border-green-300 text-black hover:bg-green-300 hover:text-white
                    px-4 py-2 rounded-sm">Output
                    </button>
                </div>
                {outputAll && (
                    <>
                        <div className="flex flex-col">
                            <span>[</span>
                            <span>{`{`}
                                <span>
                          {data.map((item) => (
                              <div key={item.postal_code}>
                                  <h2 className="flex flex-col">en :
                                      <span className="flex flex-col">{`{`}</span>
                                      <span>region :{item.en.region}</span>
                                      <span>town_township :{item.en.town_township}</span>
                                      <span>qv_tract :{item.en.qv_tract}</span>
                                      {`}`}
                                  </h2>
                                  <h2 className="flex flex-col">mm :
                                      <span className="flex flex-col">{`{`}</span>
                                      <span>region :{item.en.region}</span>
                                      <span>town_township :{item.en.town_township}</span>
                                      <span>qv_tract :{item.en.qv_tract}</span>
                                      {`}`}
                                  </h2>
                                  <p>_id : {item._id}</p>
                                  <p>tsp_code : {item.tsp_code}</p>
                                  <p>region_code : {item.region_code}</p>
                                  <p>postal_code : {item.postal_code}</p>
                                  <p>qv_code : {item.qv_code}</p>
                              </div>
                          ))}
                        </span>
                                {`}`} </span>
                            <span>]</span>
                        </div>
                    </>
                )}
                <div className="text-black text-lg leading-tight">
                    Get a single region
                </div>
                <div className="sm:w-4/5 w-[365px]">
                    <div className="flex bg-gray-800 text-gray-400 px-4 py-2 rounded-sm">
                        <div className="w-2/3 text-justify">
                            {singleText}
                        </div>
                        <div className="w-1/3 flex justify-end items-center">
                            {copied ? (
                                <>
                                    <Image src={Check} alt="" className="w-6 h-6 ml-4 sm:ml-0 mr-1 sm:mr-0"/>
                                </>
                            ) : (
                                <div onClick={handleCopy}
                                     className="cursor-pointer ml-4 sm:ml-0 mr-1 sm:mr-0 w-6 h-6">
                                    <Copy/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div onClick={handleOutput}>
                    <button className="border border-green-300 text-black hover:bg-green-300 hover:text-white
                    px-4 py-2 rounded-sm">Output
                    </button>
                </div>
                <div className="pb-14">
                    {output && (
                        <>
                            <div className="flex flex-col">
                                <span>[</span>
                                <span>[</span>
                                <span>
                            {dataAll.map((item) => (
                                <div key="1" className="flex flex-col">
                                    {item}
                                </div>
                            ))}
                            </span>
                                <span> ]</span>
                                <span>]</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default page;
