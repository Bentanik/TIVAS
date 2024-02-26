import classNames from "classnames/bind";
import styles from "./MenuAvatar.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import createAxios from "~/configs/axios";


const cx = classNames.bind(styles);

function MenuAvatar({handleLogout}) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.login.user);
  const axiosInstance = createAxios(dispatch, currentUser);

  

  return (
    <div className={cx("wrapper")}>
      <div className={cx("box")}>
        <div className={cx("title")}>
          <FontAwesomeIcon icon={faUser} className={cx("icon")} />
          <h2 className={cx("heading")}>My stuff</h2>
        </div>
        <div className={cx("list-option")}>
          <Link to="/user/account/profile">
            <div className={cx("option")}>Profile</div>
          </Link>
          <Link to="/setting">
            <div className={cx("option")}>User setting</div>
          </Link>
        </div>
      </div>
      <div className={cx("box", "logout")} onClick={handleLogout}>
        <div className={cx("title")}>
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className={cx("icon")}
          />
          <h2 className={cx("heading")}>Log out</h2>
        </div>
      </div>
    </div>
  );
}

export default MenuAvatar;
