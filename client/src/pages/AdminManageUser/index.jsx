import classNames from "classnames/bind";
import styles from "./AdminManageUser.module.scss";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AdminManageUser() {
    return (
        <div className={cx("wrapper")}>
            <h1> Manage User</h1>
        </div>
    );
}

export default AdminManageUser;
