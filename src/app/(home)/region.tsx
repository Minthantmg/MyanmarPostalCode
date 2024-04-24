"use client";
import React from "react";
import { useRegion } from "../../../hooks/useRegion";

const region = () => {
  const { getRegionListHook } = useRegion();
  const { data: region, isLoading, isError, isSuccess } = getRegionListHook();
  console.log(region?.data);
  return (
    <div>
      {isSuccess && (
        <>
          {/* {region.slice(0, 10).map((item: string) => (
            <>
              <div></div>
            </>
          ))} */}
        </>
      )}
    </div>
  );
};

export default region;
