import classNames from "classnames/bind";
import styles from "./AdminLayout.module.scss";
import AdminHeader from "~/components/AdminHeader";
import AdminSidebar from "~/components/AdminSidebar";
import AdminContent from "~/components/AdminContent";
import images from "~/assets/images";
import { Link } from "react-router-dom";

import Footer from "~/components/Layouts/Footer";
import Popup from "~/components/AuthPopup";
import { useState } from "react";
import Login from "~/components/Layouts/Login";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "~/services";
import createAxios from "~/configs/axios";
import { resetLogin } from "~/redux/authSlice";

const cx = classNames.bind(styles);

function AdminLayout() {
    return (
        <div className={cx("layout-wrapper")}>
            {/* Sidebar */}
            <div className={cx("sidebar")}>
                <AdminSidebar />
            </div>

            {/* Admin content */}
            <div className={cx("main-content")}>
                {/*Admin Header */}
                <div className={cx("admin-header")}>
                    <AdminHeader />
                </div>
                {/* Admin Content */}
                <div className={cx("admin-content")}>
                    <AdminContent />
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
