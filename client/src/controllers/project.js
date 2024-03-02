import * as services from "~/services";

export const getProjectDetail = async (axiosInstance, id) => {
    try {
        const res = await services.getProject(axiosInstance, id);
        return res;
    } catch (err) {
        console.log(err);
    }
};
