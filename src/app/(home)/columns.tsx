"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Postal = {
  id: string;
  town_township: string;
  qv_tract: string;
  postal_code: string;
};

export const columns: ColumnDef<Postal>[] = [
  {
    accessorKey: "town_township",
    header: "Township",
    cell: ({ row }) => {
      const postal_data = row.original;
      // @ts-ignore
      return <div>{postal_data.en?.town_township}</div>;
    },
  },
  {
    accessorKey: "qv_tract",
    header: "Qarters",
    cell: ({ row }) => {
      const postal_data = row.original;
      // @ts-ignore
      return <div>{postal_data.en?.qv_tract}</div>;
    },
  },
  {
    accessorKey: "postal_code",
    header: "PostalCode",
  },
];
