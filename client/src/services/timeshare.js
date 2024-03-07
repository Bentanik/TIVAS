export const getAllTimeshare =  (axiosInstance, form) => {
    const page = form?.page;
    const limit = 10;
    return axiosInstance.get(
        `/api/v1/timeshare/getAll?page=${page}&limit=${limit}&orderBy=startDate&orderType=DESC`
      );
}