export const getAvatarUser = (axiosInstance, param) => {
    return axiosInstance.get(`/api/v1/user/getavtuser/${param}`);
};

export const getUser = (axiosInstance, param) => {
    return axiosInstance.get(`/api/v1/user/getuser/${param}`);
};

export const editUser = (axiosInstance, form) => {
    return axiosInstance.put(`/api/v1/user/edituser`, form);
};
