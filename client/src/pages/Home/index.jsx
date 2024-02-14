import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Navigations from "~/components/Layouts/Navigations";

import images from "~/assets";
import { Link } from "react-router-dom";

import Footer from "~/components/Layouts/Footer";
import Popup from "~/components/AuthPopup";
import { useState } from "react";
import Login from "~/components/Layouts/Login";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "~/services";
import createAxios from "~/configs/axios";
import { resetLogin } from "~/redux/authSlice";

const cx = classNames.bind(styles);

const blog_link = {
    link: "/blog",
};

function Home() {
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
        <div className={cx("home-wrapper")}>
            {/* Header */}
            <header className={cx("header")}>
                {/* Navigations */}
                <Navigations triggerLogin={setLogin} />
                {/* Hero */}
                <div className={cx("hero-wrapper")}>
                    <img
                        src={images.heroImg}
                        alt="Hero-Image"
                        className={cx("hero-img")}
                    />
                    <h1 className={cx("hero-title")}>
                        Welcome to <span>Tivas</span>
                    </h1>
                </div>
            </header>
            {/* Main */}
            <main className={cx("content")}>
                {/* Owner Blog */}
                <div className={cx("blog-wrapper")}>
                    <div className={cx("blog-content")}>
                        {/* Thumb Image */}
                        <img
                            src={images.thumbImg}
                            alt="Thumb-Image"
                            className={cx("thumb-img")}
                        />
                        {/*Rigth content*/}
                        <div className={cx("right-content")}>
                            <h3 className={cx("right-header")}>
                                Explore your home Time for payment
                            </h3>
                            <p className={cx("desc")}>
                                We support flexible payments in stages to help
                                you manage your finances conveniently, while
                                ensuring your real estate purchase progress goes
                                smoothly.
                            </p>

                            {/* <a href="!#"> */}
                            <Link
                                to={blog_link.link}
                                className={cx("blog-link")}
                            >
                                Search Property
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            {/* Footer */}
            <footer className={cx("footer")}>
                <Footer />
            </footer>
            {!currentUser && (
                <Popup trigger={login} onClose={handleCloseLogin}>
                    <Login />
                </Popup>
            )}
        </div>
    );
}

export default Home;
