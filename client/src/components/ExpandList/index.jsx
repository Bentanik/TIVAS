import classNames from "classnames/bind";
import styles from "./ExpandList.module.scss";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ExpandList() {
    return (
        <div className={cx("expand-list-wrapper")}>
            <div className={cx("content")}>
                {/* Expand Header */}
                <div className={cx("expand-header-wrapper")}>
                    <div className={cx("expand-header")}>
                        <img
                            className={cx("list-icon")}
                            src={images.listIcon}
                            alt="List Icon"
                        />
                        <p className={cx("list-header")}>
                            All within Ho Chi Minh areas
                        </p>
                    </div>
                </div>
                {/* List Content */}

                <div className={cx("list-content")}>
                    <Link to="/locate">
                        <span className={cx("desc")}>Quan 1</span>
                    </Link>
                    <Link to="/locate">
                        <span className={cx("desc")}>Quan 7</span>
                    </Link>
                    <Link to="/locate">
                        <span className={cx("desc")}>Quan Binh Thanh</span>
                    </Link>
                    <Link to="/locate">
                        <span className={cx("desc")}>Quan 9</span>
                    </Link>
                    <Link to="/locate">
                        <span className={cx("desc")}>Quan Go Vap</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ExpandList;
