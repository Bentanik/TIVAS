import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Navigations from "~/components/Layouts/Navigations";

import { Link } from "react-router-dom";

import Footer from "~/components/Layouts/Footer";
import images from "~/assets/images";
import { useState } from "react";

import Slider from "react-slick";

const cx = classNames.bind(styles);

const blog_link = {
  link: "/blog",
};

const BLOG = [
  {
    title: "Tourist destinations worth staying in 2024",
    image: images.blogResort,
    desc: "In 2024, there are many beautiful tourist destinations that are worth staying at even once",
    date: "June 16, 2024",
    view: 120,
  },
  {
    title: "Tourist destinations worth staying in 2024",
    image: images.blogResort,
    desc: "In 2024, there are many beautiful tourist destinations that are worth staying at even once",
    date: "June 16, 2024",
    view: 120,
  },
  {
    title: "Tourist destinations worth staying in 2024",
    image: images.blogResort,
    desc: "In 2024, there are many beautiful tourist destinations that are worth staying at even once",
    date: "June 16, 2024",
    view: 120,
  },
];

const FEED_BACK = [
  {
    image: images.portrait,
    desc: "I feel this application is great, it has helped me have a satisfactory house for my family this Tet holiday.",
    fullName: "Nguyen Mai Viet Vy",
  },
  {
    image: images.portrait,
    desc: "I feel this application is great, it has helped me have a satisfactory house for my family this Tet holiday.",
    fullName: "Nguyen Van Teo",
  },
  {
    image: images.portrait,
    desc: "I feel this application is great, it has helped me have a satisfactory house for my family this Tet holiday.",
    fullName: "Bentanick",
  },
  {
    image: images.portrait,
    desc: "I feel this application is great, it has helped me have a satisfactory house for my family this Tet holiday.",
    fullName: "Kolorado",
  },
  {
    image: images.portrait,
    desc: "I feel this application is great, it has helped me have a satisfactory house for my family this Tet holiday.",
    fullName: "Ro nan do",
  },
];

const settingsFeedback = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: "linear",
  prevArrow: <CustomPrevArrowFeedback />,
  nextArrow: <CustomNextArrowFeedback />,
};

function CustomNextArrowFeedback(props) {
  const { onClick } = props;
  return (
    <div className={cx("feedback-btn", "feedback-next")} onClick={onClick}>
      <svg
        className={cx("icon")}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
      </svg>
    </div>
  );
}

function CustomPrevArrowFeedback(props) {
  const { onClick } = props;
  return (
    <div className={cx("feedback-btn", "feedback-prev")} onClick={onClick}>
      <svg
        className={cx("icon")}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
      </svg>
    </div>
  );
}

function Home() {
  const [listBlog, setListBlog] = useState(BLOG);
  const [listFeedback, setListFeedback] = useState(FEED_BACK);
  const [listTimeshareSale, setListTimeshareSale] = useState(FEED_BACK);

  const renderTimeshareSale = () => {
    return listTimeshareSale.map((item, index) => {
      return (
        <div key={index} className={cx("timeshare-box")}>
          <Link to="#!">
            <img
              src={images.timeshareResort}
              alt="Timeshare"
              className={cx("image")}
            />
          </Link>
          <div className={cx("content")}>
            {/* Location */}
            <div className={cx("location")}>
              {/* Icon */}
              <svg
                className={cx("icon")}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                s
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <p className={cx("text")}>District 9, Ho Chi Minh city</p>
            </div>
            {/* title */}
            <Link to="#!">
              <h3 className={cx("title")}>PHOENIX BEACH RESORT</h3>
            </Link>
            {/* Desc */}
            <p className={cx("desc")}>
              Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos
              equidem admodum
            </p>
            {/* Price */}
            <div className={cx("row", "timeshare-footer")}>
              <span className={cx("price")}>265,000$</span>
              <div className={cx("list-feature")}>
                {/* Size */}
                <div className={cx("size")}>
                  <svg
                    className={cx("icon")}
                    width="18.214"
                    height="19.601"
                    viewBox="0 0 18.214 19.601"
                  >
                    <path
                      d="M7.87.151h10.013a.181.181 0 0 1 .181.179v2.4a.181.181 0 1 1-.362 0V.511H8.051v4.224a.181.181 0 0 1-.181.181H.511v14.173h17.191V6.296h-6.421v2.139a.181.181 0 1 1-.362 0v-2.32a.181.181 0 0 1 .181-.181h6.783a.181.181 0 0 1 .181.181V19.27a.181.181 0 0 1-.181.181H.331a.181.181 0 0 1-.181-.181V4.735a.181.181 0 0 1 .181-.181h7.358V.33A.181.181 0 0 1 7.87.151Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth=".3"
                    ></path>
                    <path
                      d="M11.1 11.249h2.158a.181.181 0 0 1 0 .362h-1.977v1.669a.181.181 0 0 1-.181.181H.33a.181.181 0 0 1 0-.362h10.589v-1.67a.181.181 0 0 1 .181-.18Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth=".3"
                    ></path>
                    <path
                      d="M16.121 11.249h1.762a.181.181 0 0 1 0 .362h-1.762a.181.181 0 0 1 0-.362Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth=".3"
                    ></path>
                    <path
                      d="M11.1 15.83a.181.181 0 0 1 .181.181v3.259a.181.181 0 1 1-.362 0v-3.259a.181.181 0 0 1 .181-.181Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth=".3"
                    ></path>
                  </svg>
                  <span className={cx("text")}>
                    290m<sup>2</sup>
                  </span>
                </div>
                {/* Bed */}
                <div className={cx("bed")}>
                  <svg
                    className={cx("icon")}
                    width="24.017"
                    height="17.998"
                    viewBox="0 0 24.017 17.998"
                  >
                    <path
                      d="M21.333 8.065H2.683a.355.355 0 0 1-.355-.355V3.059A3.063 3.063 0 0 1 5.387 0h13.242a3.063 3.063 0 0 1 3.059 3.059V7.71a.355.355 0 0 1-.355.355Zm-18.295-.71h17.94v-4.3A2.352 2.352 0 0 0 18.629.706H5.387a2.352 2.352 0 0 0-2.349 2.349Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12.008 8.065H4.421a.355.355 0 0 1-.355-.355V4.719a2.128 2.128 0 0 1 2.125-2.125h4.046a2.128 2.128 0 0 1 2.125 2.125V7.71a.355.355 0 0 1-.354.355Zm-7.232-.71h6.877V4.719a1.417 1.417 0 0 0-1.415-1.415H6.192a1.417 1.417 0 0 0-1.415 1.415Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M19.59 8.065h-7.587a.355.355 0 0 1-.355-.355V4.719a2.128 2.128 0 0 1 2.125-2.125h4.046a2.127 2.127 0 0 1 2.125 2.125V7.71a.355.355 0 0 1-.354.355Zm-7.232-.71h6.877V4.719a1.417 1.417 0 0 0-1.415-1.415h-4.046a1.417 1.417 0 0 0-1.415 1.415Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M23.662 16.844H.355A.355.355 0 0 1 0 16.489v-5.717a3.421 3.421 0 0 1 3.417-3.417h17.182a3.421 3.421 0 0 1 3.418 3.417v5.717a.355.355 0 0 1-.355.355Zm-22.951-.71h22.6v-5.362a2.71 2.71 0 0 0-2.707-2.707H3.417a2.71 2.71 0 0 0-2.706 2.707Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M2.637 17.997a.355.355 0 0 1-.355-.355v-1.14a.355.355 0 1 1 .71 0v1.14a.355.355 0 0 1-.355.355Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M21.333 17.997a.355.355 0 0 1-.355-.355v-1.14a.355.355 0 1 1 .71 0v1.14a.355.355 0 0 1-.355.355Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className={cx("text")}>4</span>
                </div>
                {/* Shower */}
                <div className={cx("shower")}>
                  <svg
                    className={cx("icon")}
                    width="28.528"
                    height="21.994"
                    viewBox="0 0 28.528 21.994"
                  >
                    <path
                      d="M21.283 20.649H7.252c-2.119 0-5.529-3.517-5.529-5.7V12.36a.383.383 0 0 1 .383-.383h24.316a.383.383 0 0 1 .383.378v2.593c0 2.184-3.406 5.701-5.522 5.701Zm-18.8-7.909v2.207c0 1.8 3.028 4.937 4.764 4.937h14.031c1.734 0 4.757-3.138 4.757-4.937v-2.206Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M5.057 10.882a.383.383 0 0 1-.383-.383V3.382A3.5 3.5 0 0 1 5.6.853a2.921 2.921 0 0 1 2.094-.854 2.979 2.979 0 0 1 3.045 2.755.38225907.38225907 0 1 1-.762.062A2.228 2.228 0 0 0 7.694.764a2.162 2.162 0 0 0-1.551.627 2.759 2.759 0 0 0-.7 1.991v7.117a.383.383 0 0 1-.386.383Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M27.525 12.74H1.003a1 1 0 0 1-1-1v-.377a1 1 0 0 1 1-1h26.522a1 1 0 0 1 1 1v.377a1 1 0 0 1-1 1ZM1.003 11.123a.24.24 0 0 0-.238.237v.377a.241.241 0 0 0 .238.237h26.522a.241.241 0 0 0 .238-.237v-.377a.24.24 0 0 0-.238-.237Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12.648 5.466a.383.383 0 0 1-.382-.383 1.917 1.917 0 0 0-3.833 0 .383.383 0 0 1-.765 0 2.682 2.682 0 1 1 5.363 0 .383.383 0 0 1-.383.383Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M13.505 5.824H7.194a.383.383 0 1 1 0-.765h6.311a.383.383 0 0 1 0 .765Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M5.917 21.995a.383.383 0 0 1-.293-.629l1.128-1.344a.383.383 0 0 1 .586.492l-1.129 1.344a.38.38 0 0 1-.292.137Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M22.61 21.995a.38.38 0 0 1-.293-.137l-1.129-1.344a.383.383 0 0 1 .586-.492l1.131 1.344a.383.383 0 0 1-.293.629Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className={cx("text")}>3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderBlog = () => {
    return listBlog.map((item, index) => {
      return (
        <div key={index} className={cx("blog")}>
          <img src={item.image} alt="blog" className={cx("image")} />
          <div className={cx("content")}>
            <h4 className={cx("title")}>{item.title}</h4>
            <p className={cx("desc")}>{item.desc}</p>
            <div className={cx("footer-blog")}>
              <div className={cx("element")}>
                <svg
                  className={cx("icon")}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                <span className={cx("text")}>{item.date}</span>
              </div>
              <div className={cx("element")}>
                <svg
                  className={cx("icon")}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                </svg>
                <span className={cx("text")}>{item.view} views</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderFeedback = () => {
    return listFeedback.map((item, index) => {
      return (
        <div key={index}>
          <div className={cx("feedback")}>
            <img src={item.image} alt={item.name} className={cx("image")} />
            <div className={cx("content")}>
              <h3 className={cx("heading")}>What our guests say</h3>
              <div className={cx("review")}>
                <div className={cx("rating")}>
                  <div className={cx("list-icon")}>
                    <svg
                      className={cx("icon")}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className={cx("icon")}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className={cx("icon")}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className={cx("icon")}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className={cx("icon")}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <p className={cx("text")}>{item.desc}</p>
                  <span className={cx("full-name")}>{item.fullName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={cx("home-wrapper")}>
      {/* Header */}
      <header className={cx("header")}>
        {/* Navigations */}
        <section className={cx("navigation")}>
          <Navigations />
        </section>
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
        {/* Timeshare now available for sale. */}
        <section className={cx("sale-wrapper")}>
          <h2 className={cx("heading")}>
            <span className={cx("point")}>Timeshare</span>
            <br /> now available for sale.
          </h2>
          <div className={cx("list-timeshare")}>{renderTimeshareSale()}</div>
          <div className={cx("browse-more")}>
            <Link to="#!">
              <div className={cx("action", "button_slide ")}>
                <span className={cx("text")}>Browse More Properties</span>
              </div>
            </Link>
          </div>
        </section>
        {/* Explore */}
        <section className={cx("explore-wrapper")}>
          <div className={cx("explore-content")}>
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
              <Link to={blog_link.link} className={cx("explore-link")}>
                Search Property
              </Link>
            </div>
          </div>
        </section>
        {/* Feedback */}
        <section className={cx("feedback-wrapper")}>
          <Slider {...settingsFeedback}>{renderFeedback()}</Slider>
          {/* <div className={cx("button")}></div> */}
        </section>
        {/* Blog */}
        <section className={cx("blog-wrapper")}>
          <div className={cx("row")}>
            <h3 className={cx("heading")}>Tivas news</h3>
            <div className={cx("view-all")}>
              <span className={cx("text")}>View all news</span>
            </div>
          </div>
          <div className={cx("list-blog")}>{renderBlog()}</div>
        </section>
      </main>
      {/* Footer */}
      <footer className={cx("footer")}>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
