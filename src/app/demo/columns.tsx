"use client";

import {ColumnDef} from "@tanstack/react-table";

export interface Postal {
    id: string;
    en: object
    town_township: string;
    qv_tract : string;
    postal_code: string;
    tsp_code : string
}



export const columns: ColumnDef<Postal>[] = [
    {
        accessorKey: "qv_tract",
        header : "Quarters",
        cell: ({row}) => {
            const postal_data = row.original;
            // @ts-ignore
            return <div>{postal_data.en?.qv_tract}</div>;
        },
    },
    {
        accessorKey: "town_township",
        header: "Township",
        cell: ({row}) => {
            const postal_data = row.original;
            // @ts-ignore
            return <div>{postal_data.en?.town_township}</div>;
        },
    },
    {
        accessorKey: "postal_code",
        header: "PostalCode"
    },

    {
        accessorKey: "tsp_code",
        header: "TownCode"
    },
];