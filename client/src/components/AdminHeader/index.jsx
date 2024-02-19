import classNames from "classnames/bind";
import styles from "./AdminHeader.module.scss";
import Search from "~/components/Search";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AdminHeader() {
    return (
        <div className={cx("header-wrapper")}>
            {/* Search */}
            <Search />

            {/*Notification */}
            <div className={cx("notification")}>
                <img
                    src={images.whiteBell}
                    alt="bell-icon"
                    className={cx("bell-icon")}
                />
                {/* Admin info */}
                <div className={cx("admin-info")}>
                    <img
                        src={images.avatar}
                        alt="avatar"
                        className={cx("avatar")}
                    />
                    <p className={cx("admin-name")}>Admin name</p>
                </div>
            </div>
        </div>
    );
}

export default AdminHeader;
