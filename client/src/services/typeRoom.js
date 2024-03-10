export const createNewTypeRoom = (axiosInstance, param, form) => {
  return axiosInstance.post(`/api/v1/typeroom/create/${param}`, form);
};
