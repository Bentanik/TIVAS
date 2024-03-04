import classNames from "classnames/bind";
import styles from "./AdminProjectDetail.module.scss";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AdminProjectDetail() {
    return (
        <div className={cx("wrapper")}>
            <h1 className={cx("title")}>Project Detail Page</h1>
        </div>
    );
}
export default AdminProjectDetail;
