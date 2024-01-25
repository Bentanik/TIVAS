import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import InputItem from "~/components/InputItem";
import { useState } from "react";
import images from "~/assets";
import { login as validateLogin } from "~/middlewares/Validates/validateForm";
import { useDispatch, useSelector } from "react-redux";
import { login, loginGoogle } from "~/controllers/auth";
import createAxios from "~/configs/axios";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import LoginGoogle from "~/components/LoginGoogle";

const cx = classNames.bind(styles);

function Login() {
  const [loginValue, setLoginValue] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth.login.user);
  const error = useSelector((state) => state.auth.login.error);
  const statusLogin = useSelector((state) => state.auth.login.isFetching);

  const axiosInstance = createAxios(dispatch, currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = { loginValue, password };
    const err = validateLogin(form);
    console.log(err);
    if (err.numberErrors !== 0) {
      setErrors(err);
    } else {
      setErrors({});
      if (err.email)
        login(dispatch, axiosInstance, { email: loginValue, password });
      else login(dispatch, axiosInstance, { username: loginValue, password });
    }
  };

  const handleLoginGoogle = () => {
    loginGoogle(dispatch, axiosInstance);
  };

  return (
    <div className={cx("login-wrapper")}>
      <h2 className={cx("heading")}>Login</h2>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <div className={cx("list-input")}>
          <InputItem
            value={loginValue}
            setValue={setLoginValue}
            placeholder="Username or email *"
            errors={errors.loginValue}
            error={error !== "" ? error : null}
          />
          <div>
            <InputItem
              type="password"
              value={password}
              setValue={setPassword}
              placeholder="Password *"
              errors={errors.password}
              error={error !== "" ? error : null}
            />
            <p className={cx("error")}>{error}</p>
          </div>
        </div>
        <div className={cx("footer")}>
          <p className={cx("text")}>
            Forgot your <span className={cx("link")}>username </span>
            or <span className={cx("link")}>password</span>?
          </p>
          <button
            type={loginValue === "" || password === "" ? "button" : "submit"}
            className={cx("action-login", {
              "hide-login": loginValue === "" || password === "",
              "show-login": loginValue !== "" && password !== "",
            })}
          >
            Log In
          </button>
          <p className={cx("text")}>
            Not a member? <span className={cx("link")}>Sign up</span>
          </p>
          <LoginGoogle />
          <div className={cx("login-google")} onClick={handleLoginGoogle}>
            <img src={images.googleIcon} alt="Google" className={cx("icon")} />
            <span className={cx("text")}>Continue with Google</span>
          </div>
        </div>
      </form>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={statusLogin}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Login;
