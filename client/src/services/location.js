export const getAllLocation = (axiosInstance) => {
    return axiosInstance.get(`/api/v1/location/getAll`);
};
