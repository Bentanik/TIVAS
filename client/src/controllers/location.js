import * as services from "~/services";

export const getAllLocation = async (axiosInstance) => {
    try {
        const res = await services.getAllLocation(axiosInstance);
        return res;
    } catch (err) {
        console.log(err);
    }
};
