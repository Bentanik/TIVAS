import {
  loginError,
  loginStart,
  loginSuccess,
  logoutError,
  logoutStart,
  logoutSuccess,
  registerError,
  registerGoogleError,
  registerGoogleStart,
  registerGoogleSuccess,
  registerStart,
  registerSuccess,
  resetLogin,
  resetSendMail,
  sendMailError,
  sendMailStart,
  sendMailSuccess,
} from "~/redux/authSlice";
import { resetForm } from "~/redux/formRegisterSlice";
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
      sessionStorage.setItem("emailRegister", res.email);
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

export const checkUsername = async (axiosInstance, form) => {
  try {
    const res = await services.checkUsername(axiosInstance, form);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const register = async (dispatch, axiosInstance, form) => {
  dispatch(registerStart());
  try {
    const res = await services.register(axiosInstance, form);
    if (res.err === 0) {
      dispatch(registerSuccess());
      dispatch(resetForm());
    } else {
      dispatch(registerError());
    }
  } catch (err) {
    dispatch(registerError());
    console.log(err);
  }
};

export const loginGoogle = async (dispatch, axiosInstance, form) => {
  dispatch(loginStart());
  try {
    const res = await services.loginGoogle(axiosInstance, form);
    if (res.err === 0) {
      dispatch(loginSuccess(res));
      dispatch(resetSendMail());
    } else {
      if (res.register === false) {
        dispatch(sendMailSuccess(res.registerGoogle));
        dispatch(resetLogin());
      } else {
        dispatch(loginError(res.mess));
      }
    }
  } catch (err) {
    dispatch(loginError("Error"));
  }
};

export const registerGoogle = async (dispatch, axiosInstance, form) => {
  dispatch(registerGoogleStart());
  dispatch(loginStart());
  try {
    const res = await services.registerGoogle(axiosInstance, form);
    if (res.err === 0) {
      dispatch(registerGoogleSuccess());
      dispatch(loginSuccess(res));
      dispatch(resetSendMail());
    } else {
      dispatch(registerGoogleError());
    }
  } catch (err) {
    dispatch(registerGoogleError());
  }
};
