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

export const getAllTicketByUser = (axiosInstance, id, status) => {
    // const status = form.status;
    // const id = form.id;
    return axiosInstance.get(
        `/api/v1/ReservationTicket/getAllTicketsByUser/${id}/${status}`
    );
};
