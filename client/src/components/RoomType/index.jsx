import classNames from "classnames/bind";
import styles from "./RoomType.module.scss";
import { Link } from "react-router-dom";

import images from "~/assets/images";
const cx = classNames.bind(styles);

const blog_link = {
    link: "/blog",
};

function RoomType() {
    return (
        <div className={cx("room-type-wrapper")}>
            <div className={cx("room-type-block")}>
                <div className={cx("content-wrapper")}>
                    {/* Left content */}
                    <div className={cx("left-content")}>
                        <div className={cx("left-row")}>
                            <img
                                src={images.thumbImg}
                                alt="Thumb_Image"
                                className={cx("thumb-img")}
                            />
                            <div className={cx("list-item")}>
                                {/* First List */}
                                <div className={cx("first-list")}>
                                    <h2 className={cx("sub-title")}>
                                        1 Bedroom Deluxe
                                    </h2>
                                    <div className={cx("guest", "row")}>
                                        <img
                                            className={cx("icon")}
                                            src={images.personIcon}
                                            alt="Locate Icon"
                                        />
                                        <div className={cx("text")}>Guests</div>
                                    </div>
                                    <div className={cx("area", "row")}>
                                        <img
                                            className={cx("icon")}
                                            src={images.areaIcon}
                                            alt="Locate Icon"
                                        />
                                        <div className={cx("text")}>902</div>
                                    </div>
                                </div>
                                {/* Second List */}
                                <div className={cx("second-list")}>
                                    <div className={cx("text", "bold")}>
                                        1 Room
                                    </div>
                                    <div className={cx("type-bed", "row")}>
                                        <img
                                            className={cx("icon")}
                                            src={images.bedIcon}
                                            alt="Locate Icon"
                                        />
                                        <div className={cx("text")}>1 King</div>
                                    </div>
                                    <div className={cx("bath", "row")}>
                                        <img
                                            className={cx("icon")}
                                            src={images.bathIcon}
                                            alt="Locate Icon"
                                        />
                                        <div className={cx("text")}>
                                            1 Bathrooms
                                        </div>
                                    </div>
                                    <div className={cx("kitchen", "row")}>
                                        <img
                                            className={cx("icon")}
                                            src={images.kitchenIcon}
                                            alt="Locate Icon"
                                        />
                                        <div className={cx("text")}>
                                            Full Kitchen
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Content */}
                    <div className={cx("right-content")}>
                        <div className={cx("price")}>
                            From <span className={cx("both")}>$96</span> night
                        </div>
                        <Link to="#!" className={cx("unit-btn")}>
                            Unit Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomType;
