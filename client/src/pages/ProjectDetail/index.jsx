import classNames from "classnames/bind";
import styles from "./ProjectDetail.module.scss";
import Navigations from "~/components/Layouts/Navigations";
import RoomType from "~/components/RoomType";
import SimpleGallery from "./simplegallery";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { Link } from "react-router-dom";

import Footer from "~/components/Layouts/Footer";
import images from "~/assets/images";
// import { useState, useEffect } from "react";
const cx = classNames.bind(styles);

const blog_link = {
    link: "/blog",
};

function ProjectDetail() {
    return (
        <div className={cx("project-detail-wrapper")}>
            {/* Header */}
            <header className={cx("header")}>
                {/* Navigations */}
                <section className={cx("navigation")}>
                    <Navigations />
                </section>
            </header>
            {/* List Image */}
            <div className={cx("content")}>
                <div className={cx("list-img")}>
                    <SimpleGallery
                        galleryID="my-test-gallery"
                        images={[
                            {
                                largeURL: images.heroImg,
                                thumbnailURL: images.heroImg,
                                width: 974,
                                height: 641,
                            },
                            {
                                largeURL: images.heroImg,
                                thumbnailURL: images.heroImg,
                                width: 974,
                                height: 641,
                            },
                            {
                                largeURL: images.heroImg,
                                thumbnailURL: images.heroImg,
                                width: 974,
                                height: 641,
                            },
                            {
                                largeURL: images.heroImg,
                                thumbnailURL: images.heroImg,
                                width: 974,
                                height: 641,
                            },
                            {
                                largeURL: images.heroImg,
                                thumbnailURL: images.heroImg,
                                width: 974,
                                height: 641,
                            },
                            {
                                largeURL: images.heroImg,
                                thumbnailURL: images.heroImg,
                                width: 974,
                                height: 641,
                            },
                            {
                                largeURL: images.heroImg,
                                thumbnailURL: images.heroImg,
                                width: 974,
                                height: 641,
                            },
                            {
                                largeURL: images.heroImg,
                                thumbnailURL: images.heroImg,
                                width: 974,
                                height: 641,
                            },
                            {
                                largeURL: images.heroImg,
                                thumbnailURL: images.heroImg,
                                width: 974,
                                height: 641,
                            },
                        ]}
                    />
                </div>
            </div>

            <div className={cx("content")}>
                <div className={cx("info-detail")}>
                    <h1 className={cx("title")}>
                        The Rivus Project from Thu Duc district, Ho Chi Minh
                    </h1>

                    <div className={cx("desc")}>
                        The perfect place to use as a home base on your Disney
                        World expedition.
                    </div>

                    <div className={cx("rate")}>
                        <div className={cx("rating")}>4.5</div>
                        <h2 className={cx("sub-title")}>Excellent Value</h2>
                    </div>

                    <div className={cx("amenities")}>
                        <div className={cx("row")}>
                            <h2 className={cx("sub-title")}>
                                Popular amenities
                            </h2>
                            <Link
                                to="#resort-amenities"
                                className={cx("text-wrapper")}
                            >
                                See All
                            </Link>
                        </div>

                        {/* List Amenities */}
                        <div className={cx("list-amenities")}>
                            <div className={cx("left-list")}>
                                <div className={cx("item")}>
                                    Accessible Rooms
                                </div>
                                <div className={cx("item")}>
                                    Children Activities
                                </div>
                                <div className={cx("item")}>
                                    Concierge Service
                                </div>
                            </div>
                            <div className={cx("right-list")}>
                                <div className={cx("item")}>Family Rooms</div>
                                <div className={cx("item")}>Fitness Center</div>
                                <div className={cx("item")}>Hot Tub</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Room Type */}
                <div className={cx("all-room-type")}>
                    <h1 className={cx("title")}>Room Type</h1>
                    <RoomType />
                    <RoomType />
                    <RoomType />
                    <RoomType />
                    <RoomType />
                    <RoomType />
                </div>

                {/* Resort Amenities */}
                <div className={cx("resort-amenities-wrapper")}>
                    <h1 id={cx("resort-amenities")}>Resort Amenities</h1>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
