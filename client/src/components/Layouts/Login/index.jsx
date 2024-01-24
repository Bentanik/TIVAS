import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import InputItem from "~/components/InputItem";
import { useState } from "react";
import images from "~/assets";
import { login as validateLogin } from "~/middlewares/Validates/validateForm";

const cx = classNames.bind(styles);

function Login() {
  const [loginValue, setLoginValue] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = { loginValue, password };
    const err = validateLogin(form);
    console.log(err);
    if (err.numberErrors === 1) {
      setErrors(err);
    } else {
      console.log(form);
    }
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
          />
          <InputItem
            type="password"
            value={password}
            setValue={setPassword}
            placeholder="Password *"
            errors={errors.password}
          />
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
            })}
          >
            Log In
          </button>
          <p className={cx("text")}>
            Not a member? <span className={cx("link")}>Sign up</span>
          </p>
          <a
            className={cx("login-google")}
            href={`${process.env.REACT_APP_SERVER_URL}api/v1/auth/google`}
          >
            <img src={images.googleIcon} alt="Google" className={cx("icon")} />
            <span className={cx("text")}>Continue with Google</span>
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
