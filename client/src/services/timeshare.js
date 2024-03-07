export const getTimeshareDetailById = (axiosInstance, id) => {
    return axiosInstance.get(`/api/v1/timeshare/${id}`);
};
