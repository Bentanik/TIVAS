import classNames from "classnames/bind";
import styles from "./Admin.module.scss";
import AdminLayout from "~/components/AdminLayout";

import images from "~/assets";
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
