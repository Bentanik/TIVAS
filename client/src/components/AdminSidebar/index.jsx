import classNames from "classnames/bind";
import styles from "./AdminSidebar.module.scss";
import React, { useState } from "react";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const blog_link = {
    link: "/dashboard",
};

function AdminSidebar() {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleDashboardClick = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <div className={cx("sidebar-wrapper")}>
            {/* Logo */}
            <h1 className={cx("logo")}>TIVAS</h1>

            {/* SideBar */}
            <div className={cx("sidebar")}>
                <ul className={cx("sidebar-list")}>
                    {/* Dashboard */}
                    <li className={cx("side-item")}>
                        <div
                            className={cx("blog-link")}
                            onClick={handleDashboardClick}
                        >
                            {/* <Link
                            to={blog_link.link}
                            className={cx("blog-link")}
                            onClick={handleDashboardClick}
                        > */}
                            <img
                                src={images.dashboardIcon}
                                alt="dashboard-icon"
                                className={cx("dashboard-icon")}
                            />
                            <span className={cx("project-detail")}>
                                Dashboard
                            </span>

                            <img
                                src={images.downArrow}
                                alt="down-arrow"
                                className={cx("down-arrow")}
                            />
                            {/* </Link> */}
                        </div>

                        {/* Sub Menu */}
                        <ul
                            className={cx("sub-menu", {
                                "show-sub-menu": isSubMenuOpen,
                            })}
                        >
                            <li>
                                <Link
                                    to={blog_link.link}
                                    className={cx("sub-link")}
                                >
                                    Dashboard 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={blog_link.link}
                                    className={cx("sub-link")}
                                >
                                    Dashboard 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={blog_link.link}
                                    className={cx("sub-link")}
                                >
                                    Dashboard 3
                                </Link>
                            </li>
                        </ul>
                    </li>

                    {/* Project */}
                    <li className={cx("side-item")}>
                        <Link to={blog_link.link} className={cx("blog-link")}>
                            <img
                                src={images.projectIcon}
                                alt="project-icon"
                                className={cx("project-icon")}
                            />
                            <span className={cx("project-detail")}>
                                Project
                            </span>
                        </Link>
                    </li>

                    {/*Timeshare */}
                    <li className={cx("side-item")}>
                        <Link to={blog_link.link} className={cx("blog-link")}>
                            <img
                                src={images.timeshareIcon}
                                alt="timeshare-icon"
                                className={cx("timeshare-icon")}
                            />
                            <span className={cx("project-detail")}>
                                Timeshare
                            </span>

                            <img
                                src={images.downArrow}
                                alt="down-arrow"
                                className={cx("down-arrow")}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AdminSidebar;
