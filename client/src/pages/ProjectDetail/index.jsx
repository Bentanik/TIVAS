import classNames from "classnames/bind";
import styles from "./ProjectDetail.module.scss";
import Navigations from "~/components/Layouts/Navigations";
import RoomType from "~/components/RoomType";
import SimpleGallery from "./simplegallery";
import "photoswipe/style.css";
import { Link, useParams } from "react-router-dom";

import Footer from "~/components/Layouts/Footer";
import { useState, useEffect } from "react";
import { getProjectDetailById } from "~/controllers/project";
import { useDispatch, useSelector } from "react-redux";
import createAxios from "~/configs/axios";
import { Backdrop, CircularProgress } from "@mui/material";

const cx = classNames.bind(styles);

function ProjectDetail() {
    const [projectData, setProjectData] = useState({});
    const [typeRooms, setTypeRooms] = useState([]);
    const [listImage, setListImage] = useState([]);
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.login.user);
    const axiosInstance = createAxios(dispatch, currentUser);

    const [isLoading, setIsLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        const projectDetail = async () => {
            const res = await getProjectDetailById(axiosInstance, id);
            if (res?.err === 0) {
                setProjectData(res.data.Project);
                setTypeRooms(res.data.TypeRoom);
                setListImage(
                    res.data.Project.images.map((item) => {
                        return {
                            largeURL: item.pathUrl,
                            thumbnailURL: item.pathUrl,
                            width: 974,
                            height: 641,
                        };
                    })
                );
                setIsLoading(true);
            }
        };
        projectDetail();
    }, []);

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

    const renderTypeRoom = () => {
        return typeRooms.map((item, index) => (
            <RoomType key={index} data={item} />
        ));
    };

    console.log(typeRooms);
    return (
        <div className={cx("project-detail-wrapper")}>
            {isLoading === true && (
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
                        <div className={cx("list-img")}>
                            <SimpleGallery
                                galleryID="my-test-gallery"
                                images={listImage}
                            />
                        </div>
                    </div>

                    <div className={cx("content")}>
                        <div className={cx("info-detail")}>
                            <h1 className={cx("title")}>
                                {/* The Rivus Project from Thu Duc district, Ho Chi Minh */}
                                {projectData?.name}
                            </h1>

                            <div className={cx("desc")}>
                                {projectData?.description}
                            </div>

                            <div className={cx("rate")}>
                                <div className={cx("rating")}>4.5</div>
                                <h2 className={cx("sub-title")}>
                                    Excellent Value
                                </h2>
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
                                        {projectData?.features
                                            ?.slice(0, 3)
                                            .map((item, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className={cx("item")}
                                                    >
                                                        {item}
                                                    </div>
                                                );
                                            })}
                                    </div>

                                    <div className={cx("right-list")}>
                                        {projectData?.features
                                            ?.slice(3, 6)
                                            .map((item, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className={cx("item")}
                                                    >
                                                        {item}
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Room Type */}
                        <div className={cx("all-room-type")}>
                            <h1 className={cx("title")}>Room Type</h1>
                            <div>{renderTypeRoom()}</div>
                        </div>

                        {/* Resort Amenities */}
                        <div className={cx("resort-amenities-wrapper")}>
                            <h1
                                id={cx("resort-amenities")}
                                className={cx("title")}
                            >
                                Resort Amenities
                            </h1>
                            <div className={cx("resort-amenities-list")}>
                                {projectData?.features?.map((item, index) => {
                                    return (
                                        <div key={index} className={cx("item")}>
                                            {item}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Attractions */}
                        <div className={cx("resort-amenities-wrapper")}>
                            <h1
                                id={cx("resort-amenities")}
                                className={cx("title")}
                            >
                                Nearby Attractions
                            </h1>
                            <div className={cx("resort-amenities-list")}>
                                {projectData?.attractions?.map(
                                    (item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={cx("item")}
                                            >
                                                {item}
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Footer */}
                    <footer className={cx("footer")}>
                        <Footer />
                    </footer>
                </div>
            )}
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={!isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}

export default ProjectDetail;
