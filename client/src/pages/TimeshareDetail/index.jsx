import classNames from "classnames/bind";
import styles from "./TimeshareDetail.module.scss";
import Navigations from "~/components/Layouts/Navigations";
import RoomType from "~/components/RoomType";
import SimpleGallery from "../ProjectDetail/simplegallery";
import "photoswipe/style.css";
import { Link, useParams } from "react-router-dom";
import images from "~/assets/images";

import Footer from "~/components/Layouts/Footer";
import { useState, useEffect } from "react";
import { getProjectDetailById } from "~/controllers/project";
import { useDispatch, useSelector } from "react-redux";
import createAxios from "~/configs/axios";
import { Backdrop, CircularProgress } from "@mui/material";

const cx = classNames.bind(styles);

function TimeshareDetail() {
    const item = [
        "Wi-Fi Internet Access",
        "Jetted Tub",
        "In Room Safe",
        "Washer & Dryer",
    ];

    return (
        <div className={cx("timeshare-detail-wrapper")}>
            <div>
                {/* Header */}
                <header className={cx("header")}>
                    {/* Navigations */}
                    <section className={cx("navigation")}>
                        <Navigations />
                    </section>
                </header>
                {/* List Image */}
                <div className={cx("content")}>
                    <h1 className={cx("main-title")}>WorldMark Indio</h1>
                    <img
                        src={images.resort}
                        alt="Avatar"
                        className={cx("img")}
                    />

                    {/* <div className={cx("list-img")}>
                        <SimpleGallery
                            galleryID="my-test-gallery"
                            images={listImage}
                        />
                    </div> */}

                    <div className={cx("content-info")}>
                        {/* Left Content */}
                        <div className={cx("left-content")}>
                            <div className={cx("bedroom-detail")}>
                                <h2 className={cx("type-name")}>
                                    1 Bedroom Deluxe
                                </h2>
                                {/* First Row */}
                                <div className={cx("row-wrapper")}>
                                    <div className={cx("first", "row")}>
                                        <div className={cx("bedroom", "row")}>
                                            <img
                                                className={cx("icon")}
                                                src={images.bedIcon}
                                                alt="bed-icon"
                                            />
                                            <div className={cx("text")}>
                                                1 Bedroom
                                            </div>
                                        </div>

                                        <div className={cx("guests", "row")}>
                                            <img
                                                className={cx("icon")}
                                                src={images.personIcon}
                                                alt="person-icon"
                                            />
                                            <div className={cx("text")}>
                                                4 Guests
                                            </div>
                                        </div>
                                    </div>
                                    {/* Second Row */}
                                    <div className={cx("second", "row")}>
                                        <div className={cx("area", "row")}>
                                            <img
                                                className={cx("icon")}
                                                src={images.areaIcon}
                                                alt="area-icon"
                                            />
                                            <div className={cx("text")}>
                                                753 - 1482 Sq Ft
                                            </div>
                                        </div>

                                        <div className={cx("bedroom", "row")}>
                                            <img
                                                className={cx("icon")}
                                                src={images.bedIcon}
                                                alt="bed-icon"
                                            />
                                            <div className={cx("text")}>
                                                1 King
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Amenities */}
                            <div className={cx("amenities")}>
                                <h3 className={cx("title")}>Unit Amenites</h3>

                                <div className={cx("list-amenities")}>
                                    {/* Left List */}
                                    <div className={cx("left-list")}>
                                        {item.map((item, index) => (
                                            <div
                                                key={index}
                                                className={cx("item")}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Between List */}
                                    <div className={cx("between-list")}>
                                        {item.map((item, index) => (
                                            <div
                                                key={index}
                                                className={cx("item")}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Right List */}
                                    <div className={cx("right-list")}>
                                        {item.map((item, index) => (
                                            <div
                                                key={index}
                                                className={cx("item")}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Unit Desciption */}
                            <div className={cx("unit-desc")}>
                                <h3 className={cx("title")}>
                                    Unit Description
                                </h3>
                                <div className={cx("desc")}>
                                    Cozy yet spacious. Intimate yet extensive.
                                    This one-bedroom features luxurious comfort
                                    for memories together and space to escape
                                    the getaway.
                                </div>
                            </div>
                        </div>
                        {/* Right Content */}
                        <div className={cx("right-content")}>
                            <div className={cx("booking-info")}>
                                <div className={cx("price")}>
                                    $2,079{" "}
                                    <span className={cx("text")}>Total</span>
                                </div>

                                <div className={cx("dates")}>
                                    <div className={cx("text-dates", "text")}>
                                        DATES
                                    </div>
                                    <div className={cx("dates-detail", "text")}>
                                        May 25 - Jun 01, 2024
                                    </div>
                                </div>

                                <div
                                    className={cx("total-dates", "row-booking")}
                                >
                                    <div className={cx("date", "text")}>
                                        $270 x 7 nights
                                    </div>
                                    <div className={cx("total", "text")}>
                                        $ 1,890
                                    </div>
                                </div>

                                <div
                                    className={cx("service-fee", "row-booking")}
                                >
                                    <div className={cx("text")}>
                                        TIVAS service fee:
                                    </div>
                                    <div className={cx("price", "text")}>
                                        $189
                                    </div>
                                </div>

                                <div className={cx("total", "row-booking")}>
                                    <div className={cx("text")}>
                                        Total (USD)
                                    </div>
                                    <div className={cx("price")}>$2,079</div>
                                </div>

                                <button
                                    type="button"
                                    className={cx("booking-btn", "text")}
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className={cx("footer")}>
                    <Footer />
                </footer>
            </div>
        </div>
    );
}

export default TimeshareDetail;
