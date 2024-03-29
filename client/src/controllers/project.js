import * as services from "~/services";

export const getTop10 = async (axiosInstance) => {
  try {
    const res = await services.getTop10(axiosInstance);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getAllProjects = async (axiosInstance, form) => {
  try {
    const res = await services.getAllProject(axiosInstance, form);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getAllWithType = async (axiosInstance, form) => {
  try {
    const res = await services.getAllWithType(axiosInstance, form);
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

export const updateReservation = async (axiosInstance, id, form) => {
  try {
    const res = await services.updateReservation(axiosInstance, id, form);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const openReservaion = async (axiosInstance, id) => {
  try {
    const res = await services.openReservaion(axiosInstance, id);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getProjectByStatus = async (axiosInstance, form) => {
  try {
    const res = await services.getProjectByStatus(axiosInstance, form);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const putOpenBooking = async (axiosInstance, id) => {
  try {
    const res = await services.putOpenBooking(axiosInstance, id);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const createNewProject = async (axiosInstance, form) => {
  try {
    const res = await services.createNewProject(axiosInstance, form);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getAllTypeOfProject = async (axiosInstance, param) => {
  try {
    const res = await services.getAllTypeOfProject(axiosInstance, param);
    return res;
  } catch (err) {
    console.log(err);
  }
};
