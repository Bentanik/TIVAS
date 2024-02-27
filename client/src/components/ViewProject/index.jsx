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
            <div className={cx("column")}>
                <div className={cx("title")}>Project Name</div>
                <div className={cx("list-items")}>
                    <div className={cx("item")}>Tivas</div>
                    <div className={cx("item")}>Tivas</div>
                    <div className={cx("item")}>Tivas</div>
                    <div className={cx("item")}>Tivas</div>
                </div>
            </div>

            {/* Status */}
            <div className={cx("column")}>
                <div className={cx("title")}>Status</div>
                <div className={cx("list-items")}>
                    <div className={cx("row")}>
                        <img
                            src={images.onGoingIcon}
                            alt="on-going-icon"
                            className={cx("icon")}
                        />
                        <div className={cx("item-row")}>Ongoing</div>
                    </div>
                    <div className={cx("row")}>
                        <img
                            src={images.completeIcon}
                            alt="complete-icon"
                            className={cx("icon")}
                        />
                        <div className={cx("item-row")}>complete</div>
                    </div>
                    <div className={cx("row")}>
                        <img
                            src={images.pendingIcon}
                            alt="pending-icon"
                            className={cx("icon")}
                        />
                        <div className={cx("item-row")}>Pending</div>
                    </div>
                    <div className={cx("row")}>
                        <img
                            src={images.onGoingIcon}
                            alt="on-going-icon"
                            className={cx("icon")}
                        />
                        <div className={cx("item-row")}>Ongoing</div>
                    </div>
                </div>
            </div>

            {/* Date */}
            <div className={cx("column")}>
                <div className={cx("title")}>Date</div>
                <div className={cx("list-items")}>
                    <div className={cx("item")}>Nov21,2023</div>
                    <div className={cx("item")}>Nov21,2023</div>
                    <div className={cx("item")}>Nov21,2023</div>
                    <div className={cx("item")}>Nov21,2023</div>
                </div>
            </div>

            {/* Locate */}
            <div className={cx("column")}>
                <div className={cx("title")}>Locate</div>
                <div className={cx("list-items")}>
                    <div className={cx("item")}>Thu Duc district, HCM</div>
                    <div className={cx("item")}>Thu Duc district, HCM</div>
                    <div className={cx("item")}>Thu Duc district, HCM</div>
                    <div className={cx("item")}>Thu Duc district, HCM</div>
                </div>
            </div>

            {/* TimeShare Quality */}
            <div className={cx("column")}>
                <div className={cx("title")}>TimeShare Quality</div>
                <div className={cx("list-items")}>
                    <div className={cx("item")}>20</div>
                    <div className={cx("item")}>20</div>
                    <div className={cx("item")}>20</div>
                    <div className={cx("item")}>20</div>
                </div>
            </div>
        </div>
    );
}

export default ViewProject;
