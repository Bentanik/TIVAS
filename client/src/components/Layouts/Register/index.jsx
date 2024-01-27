import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import InputItem from "~/components/InputItem";
import { useEffect, useState } from "react";
import images from "~/assets";
import { login as validateLogin } from "~/middlewares/Validates/validateForm";
import { useDispatch, useSelector } from "react-redux";
import { loginGoogle, sendMail } from "~/controllers/auth";
import createAxios from "~/configs/axios";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { handlerTimeSendMail, resetSendMail } from "~/redux/authSlice";
import RegisterEmail from "../RegisterEmail";

const cx = classNames.bind(styles);

function Register({ handleAccessLogin }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const [registerPath, setRegisterPath] = useState(0);

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth.login.user);
  const error = useSelector((state) => state.auth.login.error);
  const statusLogin = useSelector((state) => state.auth.login.isFetching);

  const axiosInstance = createAxios(dispatch, currentUser);

  const stateEmail = useSelector((state) => state.auth.sendMail);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSendCodeEmail = () => {
    sendMail(dispatch, axiosInstance, { email });
  };

  return (
    <div className={cx("login-wrapper")}>
      {registerPath === 0 ? <RegisterEmail handleAccessLogin={handleAccessLogin}/> : <div>Hi</div>}
    </div>
  );
}

export default Register;
