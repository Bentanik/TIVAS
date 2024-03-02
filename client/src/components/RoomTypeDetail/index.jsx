import classNames from "classnames/bind";
import styles from "./RoomTypeDetail.module.scss";
import React, { useState } from "react";
import Navigations from "~/components/Layouts/Navigations";
import Footer from "~/components/Layouts/Footer";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SearchPage from "~/components/SearchPage";
import Slider from "react-slick";

const cx = classNames.bind(styles);

const blog_link = {
    link: "/blog",
};

function RoomTypeDetail() {
    const item = [
        "Wi-Fi Internet Access",
        "Jetted Tub",
        "In Room Safe",
        "Washer & Dryer",
    ];

    const RoomTypeDetail = [
        {
            link: "#!",
            image: images.resort,
            name: "Maria Resorts Beach",
        },
        {
            link: "#!",
            image: images.resort,
            name: "Maria Resorts Beach",
        },
        {
            link: "#!",
            image: images.resort,
            name: "Maria Resorts Beach",
        },
        {
            link: "#!",
            image: images.resort,
            name: "Maria Resorts Beach",
        },
        {
            link: "#!",
            image: images.resort,
            name: "Maria Resorts Beach",
        },
    ];

    function CustomNextArrow(props) {
        const { onClick } = props;
        return (
            <div className={cx("slick-btn", "slick-next")} onClick={onClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                >
                    <path d="M1 1L7 7L1 13" stroke="currentColor" />
                </svg>
            </div>
        );
    }

    function CustomPrevArrow(props) {
        const { onClick } = props;
        return (
            <div className={cx("slick-btn", "slick-prev")} onClick={onClick}>
                <svg
                    className={cx("icon")}
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                >
                    <path d="M7 1L1 7L7 13" stroke="currentColor" />
                </svg>
            </div>
        );
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    const renderRoomTypeDetail = () => {
        return RoomTypeDetail.map((item, index) => {
            return (
                <div>
                    <div className={cx("box")}>
                        <img
                            src={item.image}
                            alt={item.name}
                            className={cx("image")}
                        />
                    </div>
                </div>
            );
        });
    };
    return (
        <div className={cx("room-type-detail-wrapper")}>
            <div className={cx("main-content")}>
                {/* List box */}
                <div className={cx("list-box")}>
                    <Slider {...settings}>{renderRoomTypeDetail()}</Slider>
                </div>
                {/* Bedroom Detail */}
                <div className={cx("content")}>
                    <div className={cx("bedroom-detail")}>
                        <h2 className={cx("type-name")}>1 Bedroom Deluxe</h2>
                        {/* First Row */}
                        <div className={cx("row-wrapper")}>
                            <div className={cx("first", "row")}>
                                <div className={cx("bedroom", "row")}>
                                    <img
                                        className={cx("icon")}
                                        src={images.bedIcon}
                                        alt="bed-icon"
                                    />
                                    <div className={cx("text")}>1 Bedroom</div>
                                </div>

                                <div className={cx("guests", "row")}>
                                    <img
                                        className={cx("icon")}
                                        src={images.personIcon}
                                        alt="person-icon"
                                    />
                                    <div className={cx("text")}>4 Guests</div>
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
                                    <div className={cx("text")}>1 King</div>
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
                                    <div key={index} className={cx("item")}>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            {/* Between List */}
                            <div className={cx("between-list")}>
                                {item.map((item, index) => (
                                    <div key={index} className={cx("item")}>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            {/* Right List */}
                            <div className={cx("right-list")}>
                                {item.map((item, index) => (
                                    <div key={index} className={cx("item")}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Unit Desciption */}
                    <div className={cx("unit-desc")}>
                        <h3 className={cx("title")}>Unit Description</h3>
                        <div className={cx("desc")}>
                            Cozy yet spacious. Intimate yet extensive. This
                            one-bedroom features luxurious comfort for memories
                            together and space to escape the getaway.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomTypeDetail;
