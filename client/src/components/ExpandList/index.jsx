import classNames from "classnames/bind";
import styles from "./ExpandList.module.scss";

import { useEffect, useState } from "react";
import { getAllLocation } from "~/controllers/location";
import createAxios from "~/configs/axios";

import { useDispatch, useSelector } from "react-redux";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ExpandList({ locationDetail }) {
    // const [locationData, setLocationData] = useState([]);

    // const dispatch = useDispatch();
    // const currentUser = useSelector((state) => state.auth.login.user);
    // const axiosInstance = createAxios(dispatch, currentUser);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const resLocation = await getAllLocation(axiosInstance);

    //         if (resLocation?.err === 0) {
    //             setLocationData(resLocation.data);
    //             console.log(locationData);
    //         }
    //     };
    //     fetchData();
    // }, []);

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
                        <p className={cx("list-header")}>All locations</p>
                    </div>
                </div>
                {/* List Content */}
                <div className={cx("list-content")}>
                    {locationDetail?.map((item) => (
                        <Link to="/locate">
                            <span className={cx("desc")}>{item?.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExpandList;
