import classNames from "classnames/bind";
import styles from "./AdminProjectDetail.module.scss";
import RoomType from "~/components/RoomType";
import { useState } from "react";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AdminProjectDetail() {
    const [typeRooms, setTypeRooms] = useState([]);

    const renderTypeRoom = () => {
        return typeRooms.map((item, index) => (
            <RoomType key={index} data={item} />
        ));
    };
    return (
        <div className={cx("wrapper")}>
            <h1 className={cx("title")}>Project Detail Page</h1>
            <div className={cx("project-detail")}>
                <img src={images.resort} alt="Avatar" className={cx("img")} />
                {/* Project */}
                <div className={cx("info-detail")}>
                    <h2 className={cx("sub-title")}>About Project</h2>
                    <div className={cx("content")}>
                        {/* Project Name Row */}
                        <div className={cx("row")}>
                            <label
                                htmlFor="project-name"
                                className={cx("text")}
                            >
                                Project Name
                            </label>
                            <input
                                type="text"
                                className={cx("info")}
                                id="project-name"
                                readOnly
                                placeholder="The Rivus"
                            />
                        </div>

                        {/* Location Row */}
                        <div className={cx("row")}>
                            <label htmlFor="location" className={cx("text")}>
                                Location
                            </label>
                            <input
                                type="text"
                                className={cx("info")}
                                id="location"
                                readOnly
                                placeholder="TTC Resort Ninh Thuan"
                            />
                        </div>

                        {/*Row */}
                        <div className={cx("row-wrapper")}>
                            {/*  */}
                            <div className={cx("row")}>
                                <label
                                    htmlFor="type-project"
                                    className={cx("text")}
                                >
                                    Type project
                                </label>
                                <select
                                    className={cx("info")}
                                    id="type-project"
                                    disabled
                                >
                                    <option value="1">Vila</option>
                                    <option value="2">Hotel</option>
                                    <option value="3">Vila and Hotel</option>
                                </select>
                            </div>
                            {/*  */}
                            <div className={cx("row")}>
                                <label
                                    htmlFor="building-status"
                                    className={cx("text")}
                                >
                                    Building Status
                                </label>
                                <select
                                    className={cx("info")}
                                    id="building-status"
                                    disabled
                                >
                                    <option value="1">Up coming</option>
                                    <option value="2">On going </option>
                                    <option value="3">
                                        Already implemented
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Feature Row */}
                        <div className={cx("row")}>
                            <label htmlFor="feature" className={cx("text")}>
                                Feature
                            </label>
                            <input
                                type="text"
                                className={cx("info")}
                                id="feature"
                                readOnly
                                placeholder="Feature"
                            />
                        </div>

                        {/* Amenities Row */}
                        <div className={cx("row")}>
                            <label htmlFor="amenities" className={cx("text")}>
                                Amenities
                            </label>
                            <input
                                type="text"
                                className={cx("info")}
                                id="amenities"
                                readOnly
                                placeholder="Amenities"
                            />
                        </div>

                        {/* Desc Row */}
                        <div className={cx("row")}>
                            <label
                                htmlFor="project-desc"
                                className={cx("text")}
                            >
                                Description
                            </label>
                            <textarea
                                id="project-desc"
                                cols="30"
                                rows="10"
                                className={cx("text-area")}
                                readOnly
                            />
                        </div>
                    </div>
                </div>

                {/* Room Type */}
                <div className={cx("all-room-type")}>
                    <h1 className={cx("title")}>Room Type</h1>
                    <div>{renderTypeRoom()}</div>
                </div>
            </div>
        </div>
    );
}
export default AdminProjectDetail;
