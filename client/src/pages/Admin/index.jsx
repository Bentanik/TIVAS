import classNames from "classnames/bind";
import styles from "./Admin.module.scss";
import AdminLayout from "~/components/AdminLayout";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Admin() {
    return (
        <div className={cx("admin-wrapper")}>
            {/* Admin Layout */}
            <div className={cx("admin-layout")}>
                <AdminLayout />
            </div>
        </div>
    );
}

export default Admin;
