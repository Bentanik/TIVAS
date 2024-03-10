import * as services from "~/services";

export const createNewTypeRoom = async (axiosInstance, param, form) => {
  try {
    const res = await services.createNewTypeRoom(axiosInstance, param, form);
    return res;
  } catch (err) {
    console.log(err);
  }
};
