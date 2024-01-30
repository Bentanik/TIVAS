import classNames from "classnames/bind";
import styles from "./GoogleRegister.module.scss";

const cx = classNames.bind(styles);

function GoogleRegister() {
  return <div className={cx("register-wrapper")}>Google Register</div>;
}

export default GoogleRegister;
