import { getUserError, getUserStart, getUserSuccess } from "~/redux/userSlice";
import * as services from "~/services";

export const getAvatarUser = async (axiosInstance, param) => {
  try {
    const res = await services.getAvatarUser(axiosInstance, param);
    if (res.err === 0) {
      return res;
    }
    return null;
  } catch (err) {
    console.log(err);
  }
};

export const getMyUser = async (dispatch, axiosInstance, param) => {
  dispatch(getUserStart());
  try {
    const res = await services.getUser(axiosInstance, param);
    if (res.err === 0) {
      dispatch(getUserSuccess(res));
    } else {
      dispatch(getUserError(res.mess));
    }
  } catch (err) {
    console.log(err);
    dispatch(getUserError("Error"));
  }
};
