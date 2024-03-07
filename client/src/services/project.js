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

export const getProjectReservation = (axiosInstance, form) => {
  const limit = 10;
  const page = form.page;
  return axiosInstance.get(
    `/api/v1/project/search?page=${page}&limit=${limit}&status=1`
  );
};

export const getProjectBooking = (axiosInstance, form) => {
  const limit = 10;
  const page = form.page;
  return axiosInstance.get(
    `/api/v1/project/search?page=${page}&limit=${limit}&status=2`
  );
};

export const putOpenBooking = (axiosInstance, id) => {
  return axiosInstance.put(`/api/v1/project/openBooking/${id}`);
};
