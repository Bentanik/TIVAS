export const paymentReservaion = (axiosInstance, form) => {
  return axiosInstance.post(
    "/api/v1/reservationticket/paymentreservation",
    form
  );
};

export const createTicket = (axiosInstance, form) => {
  return axiosInstance.post("/api/v1/reservationticket/createTicket", form);
};
