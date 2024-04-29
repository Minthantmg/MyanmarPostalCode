"use client";
import React from "react";
import {useRegion} from "../../../hooks/useRegion";
import {columns} from "./columns";
import {DataTable} from "./data-table";

const region = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {getRegionListHook} = useRegion();
    const {data: region, isLoading, isError, isSuccess} = getRegionListHook();

    return (
        <div>
            {isLoading && (
                <div className="w-full h-screen">
                    <div className="flex justify-center items-center sm:pt-44">
                        Loading...
                    </div>
                </div>
            )}
            {isSuccess && (
                <div>
                    <div className="container sm:mx-auto sm:pt-14">
                        <DataTable columns={columns} data={region.data}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default region;
