import * as services from "~/services";

export const getTop10 = async (axiosInstance) => {
  try {
    const res = await services.getTop10(axiosInstance);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getProjectDetailById = async (axiosInstance) => {
  try {
    const res = await services.getProjectDetailById(axiosInstance);
    return res;
  } catch (err) {
    console.log(err);
  }
};
