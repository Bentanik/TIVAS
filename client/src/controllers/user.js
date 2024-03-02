import * as services from "~/services";

export const getMyUser = async (axiosInstance, param) => {
    try {
        const res = await services.getUser(axiosInstance, param);
        return res;
    } catch (err) {
        console.log(err);
    }
};
