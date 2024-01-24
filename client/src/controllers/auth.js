import {
  loginError,
  loginStart,
  loginSuccess,
  logoutError,
  logoutStart,
  logoutSuccess,
} from "~/redux/authSlice";
import * as services from "~/services";

export const login = async (dispatch, axiosInstance, form) => {
  dispatch(loginStart());
  try {
    const res = await services.login(axiosInstance, form);
    if (res.err === 0) {
      dispatch(loginSuccess(res));
    } else {
      dispatch(loginError(res.mess));
    }
  } catch (err) {
    dispatch(loginError("Error"));
  }
};

export const logout = async (dispatch, axiosInstance) => {
  dispatch(logoutStart());
  try {
    const res = await services.logout(axiosInstance);
    if (res.err === 0) {
      dispatch(logoutSuccess());
    } else {
      dispatch(logoutError());
    }
  } catch (err) {
    dispatch(logoutError());
    console.log(err);
  }
};