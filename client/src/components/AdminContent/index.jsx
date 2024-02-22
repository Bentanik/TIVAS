import classNames from "classnames/bind";
import styles from "./AdminContent.module.scss";
import ViewProject from "~/components/ViewProject";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const blog_link = {
    link: "/add project",
};

function AdminContent() {
    return (
        <div className={cx("content-wrapper")}>
            {/* Content Header  */}
            <div className={cx("content-header")}>
                {/*Content Name */}
                <h1 className={cx("content-name")}>Project</h1>
                {/* Button Add Project */}
                <div className={cx("add-btn")}>
                    <Link to={blog_link.link} className={cx("blog-link")}>
                        <img
                            src={images.plusIcon}
                            alt="plus-icon"
                            className={cx("plus-icon")}
                        />
                        <span className={cx("action")}>Add Project</span>
                    </Link>
                </div>
            </div>
            {/* Main Content */}
            <div className={cx("main-content")}>
                {/* Content */}
                <div className={cx("content")}>
                    <ViewProject />
                </div>
            </div>
        </div>
    );
}

export default AdminContent;
