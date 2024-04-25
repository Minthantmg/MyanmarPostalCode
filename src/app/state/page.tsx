"use client";
import React from "react";
import { useRegion } from "../../../hooks/useRegion";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const region = () => {
  const { getRegionListHook } = useRegion();
  const { data: region, isLoading, isError, isSuccess } = getRegionListHook();

  return (
    <div>
      {isSuccess && (
        <div>
          <div className="container sm:mx-auto">
            <DataTable columns={columns} data={region.data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default region;
