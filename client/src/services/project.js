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
}