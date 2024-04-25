"use client";

import {ColumnDef} from "@tanstack/react-table";
import {ArrowUpDown} from "lucide-react";
import {Button} from "@/components/ui/button";

export interface Postal {
    id: string;
    "en.town_township": string;
    "en.qv_tract" : string;
    postal_code: string;
}


export const columns: ColumnDef<Postal>[] = [
    {
        accessorKey: "en.qv_tract",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Quarters
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>

            )
        },
        cell: ({row}) => {
            const postal_data = row.original;
            // @ts-ignore
            return <div>{postal_data.en?.qv_tract}</div>;
        },
    },
    {
        accessorKey: "en.town_township",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Township
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>

            )
        },
        cell: ({row}) => {
            const postal_data = row.original;
            // @ts-ignore
            return <div>{postal_data.en?.town_township}</div>;
        },
    },
    {
        accessorKey: "postal_code",
        header: "Township"
    },
];
