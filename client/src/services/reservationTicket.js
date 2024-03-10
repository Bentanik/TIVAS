export const paymentReservaion = (axiosInstance, form) => {
  return axiosInstance.post(
    "/api/v1/reservationticket/paymentreservation",
    form
  );
};

export const createTicket = (axiosInstance, form) => {
  return axiosInstance.post("/api/v1/reservationticket/createTicket", form);
};

export const createReservation = (axiosInstance, form) => {
  return axiosInstance.post(
    "/api/v1/reservationticket/createReservation",
    form
  );
};

export const checkPriority = (axiosInstance, id) => {
  return axiosInstance.get(`/api/v1/reservationticket/checkPriority/${id}`);
};

export const getUserPriority = (axiosInstance, id) => {
  return axiosInstance.get(
    `/api/v1/ReservationTicket/getAllUserPriority/${id}`
  );
};

export const getUserNoPriority = (axiosInstance, id) => {
  return axiosInstance.get(
    `/api/v1/ReservationTicket/getAllUserNoPriority/${id}`
  );
};

