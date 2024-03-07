import * as services from "~/services";

export const getTimeshareDetailById = async (axiosInstance, id) => {
    try {
        const res = await services.getTimeshareDetailById(axiosInstance, id);
        return res;
    } catch (err) {
        console.log(err);
    }
};
