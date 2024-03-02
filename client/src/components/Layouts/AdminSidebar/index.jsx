import classNames from "classnames/bind";
import styles from "./AdminSidebar.module.scss";
import images from "~/assets/images";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

function AdminSidebar() {
    // const renderOptions = OPTIONS.map((item, index) => {
    //     return
    // })

    const location = useLocation();

    return (
        <div className={cx("sidebar-wrapper")}>
            {/* Logo */}
            <section className={cx("logo")}>
                <h1 className={cx("logo-text")}>TIVAS</h1>
            </section>
            {/* List options */}
            <section className={cx("list-options")}>
                {/* Option */}
                <div
                    className={cx("option", {
                        active: location.pathname === "/admin",
                    })}
                >
                    <svg
                        className={cx("icon")}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                    </svg>
                    <h4 className={cx("text")}>Dashboard</h4>
                </div>
                <div
                    className={cx("option", {
                        active: location.pathname === "/admin",
                    })}
                >
                    <svg
                        className={cx("icon")}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                    </svg>
                    <h4 className={cx("text")}>Manage User</h4>
                </div>
            </section>
        </div>
    );
}

export default AdminSidebar;
