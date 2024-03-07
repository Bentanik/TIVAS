import classNames from "classnames/bind";
import styles from "./Reservation.module.scss";
import { useState } from "react";

import AdminShowListing from "../AdminShowListing";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Reservation() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("content")}>
                <div className={cx("input-compo")}>
                    {/* Reservation Day */}
                    <div className={cx("group")}>
                        <label htmlFor="reservation-day" className={cx("text")}>
                            Reservation Day
                        </label>

                        <input
                            id="reservation-day"
                            type="text"
                            className={cx("input")}
                            placeholder="mm/dd/yyyy"
                        />
                    </div>

                    {/* Reservation Price */}
                    <div className={cx("group")}>
                        <label
                            htmlFor="reservation-price"
                            className={cx("text")}
                        >
                            Reservation Price
                        </label>

                        <input
                            id="reservation-price"
                            type="text"
                            className={cx("input")}
                            placeholder="$"
                        />
                    </div>

                    {/* Open Date */}
                    <div className={cx("group")}>
                        <label htmlFor="open-date" className={cx("text")}>
                            Open Date
                        </label>

                        <input
                            id="open-date"
                            type="text"
                            className={cx("input")}
                            placeholder="mm/dd/yyyy"
                        />
                    </div>

                    {/* Close Day */}
                    <div className={cx("group")}>
                        <label htmlFor="close-day" className={cx("text")}>
                            Close Day
                        </label>

                        <input
                            id="close-day"
                            type="text"
                            className={cx("input")}
                            placeholder="mm/dd/yyyy"
                        />
                    </div>
                </div>

                <button className={cx("submit-btn")}>Submit</button>
            </div>
        </div>
    );
}

export default Reservation;
