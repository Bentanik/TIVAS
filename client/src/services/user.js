export const getUser = (axiosInstance, param) => {
    return axiosInstance.get(`/api/v1/user/getuser/${param}`);
};
