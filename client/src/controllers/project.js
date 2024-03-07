import * as services from "~/services";

export const getTop10 = async (axiosInstance) => {
    try {
        const res = await services.getTop10(axiosInstance);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getProjectDetailById = async (axiosInstance, id) => {
    try {
        const res = await services.getProjectDetailById(axiosInstance, id);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getAllTypeRoom = async (axiosInstance, id) => {
    try {
        const res = await services.getAllTypeRoom(axiosInstance, id);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getTypeRoom = async (axiosInstance, id) => {
    try {
        const res = await services.getTypeRoom(axiosInstance, id);
        return res;
    } catch (err) {
        console.log(err);
    }
};
