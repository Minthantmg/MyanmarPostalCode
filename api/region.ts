import { axiosInstance } from "../utils/axiosInstance";

export const getRegionList = async () => {
  try {
    const res = await axiosInstance.get("/", {
      params: {
        region: "01",
      },
    });
    return res.data;
  } catch (e) {
    throw e;
  }
};

