import * as services from "~/services";

export const getAllTimeshare = async (axiosInstance, form) => {
  try {
    const res = await services.getAllTimeshare(axiosInstance, form);
    return res;
  } catch (err) {
    console.log(err);
  }
};
