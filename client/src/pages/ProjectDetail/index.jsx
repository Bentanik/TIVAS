import classNames from "classnames/bind";
import styles from "./ProjectDetail.module.scss";
import Navigations from "~/components/Layouts/Navigations";
import RoomType from "~/components/RoomType";
import SimpleGallery from "./simplegallery";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import createAxios from "~/configs/axios";
import { getProjectDetail } from "~/controllers/project";

import Footer from "~/components/Layouts/Footer";
import images from "~/assets/images";
import { useState, useEffect } from "react";
import { ThemeContext } from "@emotion/react";

const cx = classNames.bind(styles);

const blog_link = {
    link: "/blog",
};

function ProjectDetail() {
    // Get API from project detail
    const [name, setName] = useState("");
    const [images, setImage] = useState(null);
    const [desc, setDesc] = useState("");
    const [location, setLocation] = useState("");
    const [feature, setFeature] = useState([]);
    const [attraction, setAttraction] = useState([]);

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.login.user);
    const axiosInstance = createAxios(dispatch, currentUser);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getProjectDetail(
                axiosInstance
                // currentUser?.data?.username
            );

            // if (res?.err === 0) {
            setName(res?.data?.name);
            setImage(res?.data?.Images);
            setDesc(res?.data?.description);
            setLocation(res?.data?.location);
            setFeature(res?.data?.description);
            setAttraction(res?.data?.attractions);
            // } else {
            //     setName("");
            //     setImage("");
            //     setDesc("");
            //     setLocation("");
            //     setFeature("");
            //     setAttraction("");
            // }
        };
        fetchData();
    }, []);

    console.log(image);

    // Image API
    const image = images.map((image) => ({
        largeURL: image.pathUrl,
        thumbnailURL: image.pathUrl,
        width: 974,
        height: 641,
    }));

    const [scrollToResortAmenities, setScrollToResortAmenities] =
        useState(false);

    useEffect(() => {
        if (scrollToResortAmenities) {
            const resortAmenitiesElement =
                document.getElementById("resort-amenities");
            if (resortAmenitiesElement) {
                resortAmenitiesElement.scrollIntoView({ behavior: "smooth" });
            }

            setScrollToResortAmenities(false);
        }
    }, [scrollToResortAmenities]);

    const handleSeeAllClick = () => {
        setScrollToResortAmenities(true);
    };
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
                    <SimpleGallery galleryID="my-test-gallery" images={image} />
                </div>
            </div>

            <div className={cx("content")}>
                <div className={cx("info-detail")}>
                    <h1 className={cx("title")}>{name}</h1>

                    <div className={cx("desc")}>{desc}</div>

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
                                onClick={handleSeeAllClick}
                            >
                                See All
                            </Link>
                        </div>

                        {/* List Amenities */}
                        <div className={cx("list-amenities")}>
                            <div className={cx("left-list")}>
                                {feature.map((item, index) => (
                                    <div key={index} className={cx("item")}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className={cx("right-list")}>
                                {feature.map((item, index) => (
                                    <div key={index} className={cx("item")}>
                                        {item}
                                    </div>
                                ))}
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
                    <h1 id={cx("resort-amenities")} className={cx("title")}>
                        Resort Amenities
                    </h1>
                    <div className={cx("resort-amenities-list")}>
                        {/* Left */}
                        <div className={cx("left-list")}>
                            <div className={cx("item")}>Accessible Rooms</div>
                            <div className={cx("item")}>
                                Children Activities
                            </div>
                            <div className={cx("item")}>Concierge Services</div>
                            <div className={cx("item")}>Family Rooms</div>

                            <div className={cx("item")}>Fitness Center</div>
                            <div className={cx("item")}>Hot Tub</div>
                            <div className={cx("item")}>Non-Smoking Rooms</div>
                        </div>
                        {/* Between */}
                        <div className={cx("between-list")}>
                            <div className={cx("item")}>Laundry Facilities</div>
                            <div className={cx("item")}>Non-Smoking Hotel</div>
                            <div className={cx("item")}>
                                Swimming Pool (Outdoor)
                            </div>
                            <div className={cx("item")}>Restaurant</div>
                            <div className={cx("item")}>Spa</div>
                            <div className={cx("item")}>Child Friendly</div>
                            <div className={cx("item")}>
                                Shuttle Bus Service
                            </div>
                        </div>
                        {/* Right */}
                        <div className={cx("right-list")}>
                            <div className={cx("item")}>Business Center</div>
                            <div className={cx("item")}>Meeting rooms</div>
                            <div className={cx("item")}>Parking On-Site</div>
                            <div className={cx("item")}>Pool Table</div>
                            <div className={cx("item")}>
                                Shuttle Bus Service
                            </div>
                            <div className={cx("item")}>Bar</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className={cx("footer")}>
                <Footer />
            </footer>
        </div>
    );
}

export default ProjectDetail;
