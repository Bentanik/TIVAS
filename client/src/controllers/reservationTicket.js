import * as services from "~/services";

export const paymentReservaion = async (axiosInstance, form) => {
  try {
    const res = await services.paymentReservaion(axiosInstance, form);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const createTicket = async (axiosInstance, form) => {
  try {
    const res = await services.createTicket(axiosInstance, form);
    return res;
  } catch (err) {
    console.log(err);
  }
};
