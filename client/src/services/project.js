export const getTop10 = (axiosInstance) => {
  return axiosInstance.get("/api/v1/project/top10");
};

export const getProjectDetailById = (axiosInstance, id) => {
  return axiosInstance.get(`/api/v1/project/${id}`);
};
