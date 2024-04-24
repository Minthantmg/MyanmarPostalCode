import { useQuery } from "@tanstack/react-query";
import { getRegionList } from "../api/region";

const getRegionListHook = () => {
  return useQuery({
    queryKey: ["get", "regions"],
    queryFn: getRegionList,
  });
};

export const useRegion = () => {
  return {
    getRegionListHook,
  };
};
