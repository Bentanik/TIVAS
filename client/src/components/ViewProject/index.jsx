import classNames from "classnames/bind";
import styles from "./ViewProject.module.scss";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const blog_link = {
    link: "/add project",
};

function ViewProject() {
    return (
        <div className={cx("view-project-wrapper")}>
            {/* Project Name */}
            <div className={cx("project-name", "column")}>
                <div className={cx("title")}>Project Name</div>
                <div className="list-item">
                    <div className={cx("item")}>Tivas</div>
                    <div className={cx("item")}>Tivas</div>
                    <div className={cx("item")}>Tivas</div>
                    <div className={cx("item")}>Tivas</div>
                </div>
            </div>

            {/* Status */}
            <div className={cx("status", "column")}>
                <div className={cx("title")}>Status</div>
                <div className="list-item">
                    <div className={cx("item")}>Ongoing</div>
                </div>
            </div>

            {/* Date */}
            <div className={cx("column")}>
                <div className={cx("title")}>Project Name</div>
                <div className="list-item">
                    <div className={cx("item")}>Tivas</div>
                    <div className={cx("item")}>Tivas</div>
                    <div className={cx("item")}>Tivas</div>
                    <div className={cx("item")}>Tivas</div>
                </div>
            </div>

            {/* Locate */}
            <div className={cx("column")}>
                <div className={cx("title")}>Project Name</div>
                <div className="list-item">
                    <div className={cx("item")}>Tivas</div>
                    <div className={cx("item")}>Tivas</div>
                    <div className={cx("item")}>Tivas</div>
                    <div className={cx("item")}>Tivas</div>
                </div>
            </div>

            {/* TimeShare Quality */}
            <div className={cx("column")}>
                <div className={cx("title")}>TimeShare Quality</div>
                <div className="list-item">
                    <div className={cx("item")}>Tivas</div>
                    <div className={cx("item")}>Tivas</div>
                    <div className={cx("item")}>Tivas</div>
                    <div className={cx("item")}>Tivas</div>
                </div>
            </div>
        </div>
    );
}

export default ViewProject;
