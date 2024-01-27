import {
  loginError,
  loginStart,
  loginSuccess,
  logoutError,
  logoutStart,
  logoutSuccess,
  sendMailError,
  sendMailStart,
  sendMailSuccess,
} from "~/redux/authSlice";
import * as services from "~/services";

export const sendMail = async (dispatch, axiosInstance, form) => {
  dispatch(sendMailStart());
  try {
    const res = await services.sendMail(axiosInstance, form);
    if (res.err === 0) {
      dispatch(sendMailSuccess(res));
    } else {
      dispatch(sendMailError(res.mess));
    }
  } catch (err) {
    dispatch(sendMailError("Error"));
  }
};

export const registerByEmail = async (dispatch, axiosInstance, form) => {
  dispatch(sendMailStart());
  try {
    const res = await services.registerByEmail(axiosInstance, form);
    if (res.err === 0) {
      dispatch(sendMailSuccess(res));
    } else {
      dispatch(sendMailError(res.mess));
    }
  } catch (err) {
    dispatch(sendMailError("Error"));
  }
};

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

export const loginGoogle = async (dispatch, axiosInstance, form) => {
  dispatch(loginStart());
  try {
    window.open(
      `${process.env.REACT_APP_SERVER_URL}/api/v1/auth/google`,
      "_self"
    );
    // const res =
    // if (res.err === 0) {
    //   dispatch(loginSuccess(res));
    // } else {
    //   dispatch(loginError(res.mess));
    // }
    dispatch(loginError("error"));
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
