import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Navigations from "~/components/Layouts/Navigations";

import { Link } from "react-router-dom";

import Footer from "~/components/Layouts/Footer";
import images from "~/assets/images";

const cx = classNames.bind(styles);

const blog_link = {
  link: "/blog",
};

function Home() {
  return (
    <div className={cx("home-wrapper")}>
      {/* Header */}
      <header className={cx("header")}>
        {/* Navigations */}
        <section className={cx("navigation")}><Navigations /></section>
        {/* Hero */}
        <div className={cx("hero-wrapper")}>
          <img
            src={images.heroImg}
            alt="Hero_Image"
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
              alt="Thumb_Image"
              className={cx("thumb-img")}
            />
            {/*Rigth content*/}
            <div className={cx("right-content")}>
              <h3 className={cx("right-header")}>
                Explore your home Time for payment
              </h3>
              <p className={cx("desc")}>
                We support flexible payments in stages to help you manage your
                finances conveniently, while ensuring your real estate purchase
                progress goes smoothly.
              </p>

              {/* <a href="!#"> */}
              <Link to={blog_link.link} className={cx("blog-link")}>
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
    </div>
  );
}

export default Home;
