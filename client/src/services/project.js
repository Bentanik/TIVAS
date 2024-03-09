export const getTop10 = (axiosInstance) => {
  return axiosInstance.get("/api/v1/project/top10");
};

export const getProjectDetailById = (axiosInstance, id) => {
  return axiosInstance.get(`/api/v1/project/${id}`);
};

export const getAllTypeRoom = (axiosInstance, id) => {
  return axiosInstance.get(`/api/v1/typeroom/getAll/${id}`);
};

export const getTypeRoom = (axiosInstance, id) => {
  return axiosInstance.get(`/api/v1/typeroom/${id}`);
};

export const getProjectByStatus = (axiosInstance, form) => {
  const limit = 10;
  const page = form.page;
  const status = form.status;
  return axiosInstance.get(
    `/api/v1/project/search?page=${page}&limit=${limit}&status=${status}`
  );
};


export const putOpenBooking = (axiosInstance, id) => {
  return axiosInstance.put(`/api/v1/project/openBooking/${id}`);
};

export const getAllProject = (axiosInstance) => {
    return axiosInstance.get(`/api/v1/project/getAll?page=1&limit=15`);
};

export const updateReservation = (axiosInstance, id, form) => {
    return axiosInstance.put(
        `/api/v1/project/updateReservationInfo/${id}`,
        form
    );
};

export const openReservaion = (axiosInstance, id) => {
    return axiosInstance.put(`api/v1/project/openReservationTicket/${id}`);
};
