export const getProject = (axiosInstance, id) => {
    return axiosInstance.get(`/api/v1/project/${id}`);
};
