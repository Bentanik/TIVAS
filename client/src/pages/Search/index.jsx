import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import Navigations from "~/components/Layouts/Navigations";
import ProjectResult from "~/components/ProjectResult";
import ExpandList from "~/components/ExpandList";
import SearchPage from "~/components/SearchPage";

import images from "~/assets/images";
import { Link } from "react-router-dom";

import Footer from "~/components/Layouts/Footer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "~/services";
import createAxios from "~/configs/axios";
import { resetLogin } from "~/redux/authSlice";

const cx = classNames.bind(styles);

function Search() {
    const [login, setLogin] = useState(false);
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.login.user);

    const handleCloseLogin = () => {
        setLogin(false);
        dispatch(resetLogin());
    };

    const axiosInstance = createAxios(dispatch, currentUser);

    const action = async () => {
        try {
            const res = await getAll(axiosInstance);
            console.log(res);
        } catch (err) {
            console.log("Error");
        }
    };

    return (
        <div classNames={cx("page-search-wrapper")}>
            {/* Header */}
            <header className={cx("header")}>
                <div className={cx("navigation")}>
                    <Navigations />
                </div>
            </header>

            {/* Main */}
            <main className={cx("main-content")}>
                <div className={cx("container")}>
                    {/* Search Bar*/}
                    <div className={cx("search-wrapper")}>
                        <SearchPage />
                    </div>

                    {/*Content*/}
                    <div className={cx("content")}>
                        {/* Left content */}
                        <div className={cx("left-content")}>
                            {/* Bread Crumb */}
                            <div className={cx("bread-crumb")}>
                                <Link to="/home">
                                    <span className={cx("crumb-name")}>
                                        Home
                                    </span>
                                </Link>
                                <img
                                    className={cx("crumb-icon")}
                                    src={images.rightArrow}
                                    alt="Right Arrow"
                                />
                                <p className={cx("crumb-name")}>
                                    11 project found
                                </p>
                            </div>

                            {/*Row Descript*/}
                            <div className={cx("row")}>
                                {/* Desc */}
                                <p className={cx("desc")}>
                                    Villa, Hotel , Project Launches in Ho Chi
                                    Minh
                                </p>
                                {/* Form Control */}
                                <select
                                    className={cx("form-control")}
                                    name={cx("sort")}
                                    id={cx("sort-box")}
                                >
                                    {/* Relevance option */}
                                    <option
                                        value={cx("relevance")}
                                        selected={cx("selected")}
                                    >
                                        Relevance
                                    </option>
                                    {/* Newest First */}
                                    <option value={cx("newest")}>Newest</option>
                                </select>
                            </div>

                            {/* Project Result */}
                            <>
                                <ProjectResult />
                                <ProjectResult />
                                <ProjectResult />
                                <ProjectResult />
                                <ProjectResult />
                            </>

                            {/* Pagination */}
                            <div className={cx("pagination")}>
                                <img
                                    src={images.rightArrow}
                                    alt="Right Arrow"
                                />
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <img
                                    src={images.rightArrow}
                                    alt="Right Arrow"
                                />
                            </div>
                        </div>
                        {/* Right content */}
                        <div className={cx("right-content")}>
                            <div className={cx("sticky-content")}>
                                <>
                                    <ExpandList />
                                    <ExpandList />
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Footer */}
            <footer className={cx("footer")}>
                <Footer />
            </footer>
        </div>
    );
}

export default Search;
