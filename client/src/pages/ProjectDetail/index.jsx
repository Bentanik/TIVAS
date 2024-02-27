import classNames from "classnames/bind";
import styles from "./ProjectDetail.module.scss";
import Navigations from "~/components/Layouts/Navigations";
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
                    ]}
                />
            </div>
            <div className={cx("info-detail")}>
                <h1 className={cx("title")}>
                    The Rivus Project from Thu Duc district, Ho Chi Minh Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Porro,
                    iste?
                </h1>
            </div>
        </div>
    );
}

export default ProjectDetail;
