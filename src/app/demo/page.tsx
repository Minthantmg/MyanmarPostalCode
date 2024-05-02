"use client";
import React from "react";
import {useRegion} from "../../../hooks/useRegion";
import {columns} from "./columns";
import {DataTable} from "./data-table";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {DropdownMenuCheckboxItemProps} from "@radix-ui/react-dropdown-menu";
import Loading from "../components/_loading"

type Checked = DropdownMenuCheckboxItemProps["checked"]

const region = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [english, setEnglish] = React.useState<Checked>(true)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [myanmar, setMyanmar] = React.useState<Checked>(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {getRegionListHook} = useRegion();
    const {data: region, isLoading, isError, isSuccess} = getRegionListHook();

    const handleEnglish = () => {
        setMyanmar(false)
        setEnglish(true)
    }

    const handleMyanmar = () => {
        setEnglish(false)
        setMyanmar(true)
    }

    return (
        <div className="min-h-screen">
            {isLoading && <Loading/>}
            {isSuccess && (
                <div>
                    <div className="container sm:mx-auto pt-20">
                        <div className="flex justify-end">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">English</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuCheckboxItem
                                        checked={english}
                                        onCheckedChange={setEnglish}
                                        onClick={handleEnglish}
                                    >
                                        English
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem
                                        checked={myanmar}
                                        onCheckedChange={setMyanmar}
                                        onClick={handleMyanmar}
                                    >
                                        Myanmar
                                    </DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <DataTable columns={columns} data={region.data}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default region;
