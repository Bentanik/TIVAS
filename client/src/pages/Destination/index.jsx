import classNames from "classnames/bind";
import styles from "./Destination.module.scss";
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

const FAVORITE_DESTINATIONS = [
  { link: "#!", image: images.pageOwner, name: "Hai Phong city" },
  { link: "#!", image: images.pageOwner, name: "Ho Chi Minh city" },
  { link: "#!", image: images.pageOwner, name: "Da Lat city" },
  { link: "#!", image: images.pageOwner, name: "Ha Noi capital" },
];

const TOP_RESORT = [
  {
    link: "#!",
    location: "Ho Chi Minh city",
    image: images.resort,
    name: "Maria Resorts Beach",
    available: "293 timeshare rentals available",
    price: "$414 - $1425 /night",
  },
  {
    link: "#!",
    location: "Ho Chi Minh",
    image: images.resort,
    name: "Maria Resorts Beach",
    available: "293 timeshare rentals available",
    price: "$414 - $1425 /night",
  },
  {
    link: "#!",
    location: "Ho Chi Minh thanh pho",
    image: images.resort,
    name: "Maria Resorts Beach",
    available: "293 timeshare rentals available",
    price: "$414 - $1425 /night",
  },
  {
    link: "#!",
    location: "Ho Chi Minh",
    image: images.resort,
    name: "Maria Resorts Beach",
    available: "293 timeshare rentals available",
    price: "$414 - $1425 /night",
  },
];

// const FEATURES_RENTALS = [
//   {
//     icon: 
//   }
// ]


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
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

function Destination() {
  // const [search, setSearch] = useState("");
  const [favList, setFavList] = useState(FAVORITE_DESTINATIONS);
  const [topResort, setTopResort] = useState(TOP_RESORT);

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  //   // setList(data);
  // };

  const renderFavoriteDestination = () => {
    return favList.map((item, index) => {
      return (
        <div key={index} className={cx("box")}>
          <Link to={item.link} className={cx("link")}>
            <img src={item.image} alt={item.name} className={cx("image")} />
            <h3 className={cx("name")}>{item.name}</h3>
          </Link>
        </div>
      );
    });
  };

  const renderTopResort = () => {
    return topResort.map((item, index) => {
      return (
        <div>
          <div  className={cx("box")}>
            <Link to="#!">
              <img src={item.image} alt={item.name} className={cx("image")} />
              <section className={cx("content")}>
                <h3 className={cx("name")}>{item.name}</h3>
                <div className={cx("row", "location")}>
                  <svg
                    className={cx("icon")}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                  <p className={cx("text")}>{item.location}</p>
                </div>
                <span className={cx("available")}>{item.available}</span>
                <div className={cx("row", "price")}>
                  <p className={cx("text")}>{item.price}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="10"
                    viewBox="0 0 28 10"
                    fill="none"
                  >
                    <path
                      d="M19 9.029L27 5.029M27 5.029L19 1M27 5.029L1 5.029"
                      stroke="black"
                    />
                  </svg>
                </div>
              </section>
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={cx("destination-wrapper")}>
      {/* Header */}
      <header className={cx("header")}>
        <div className={cx("navigation")}>
          <Navigations />
        </div>
      </header>
      {/* Breadcrumbs */}
      <section className={cx("breadcrumbs")}>
        <div className={cx("list-nav")}>
          <Link to="/">
            <div className={cx("nav")}>
              <img src={images.iconHome} alt="Home" />
            </div>
          </Link>
          <FontAwesomeIcon icon={faChevronRight} className={cx("icon-arrow")} />
          <div className={cx("nav")}>
            <Link to="/destinations">
              <span className={cx("text-nav")}>Destinations</span>
            </Link>
          </div>
        </div>
      </section>
      {/* Main */}
      <main className={cx("main")}>
        {/* Heading main */}
        <h1 className={cx("heading")}>FIND A TIMESHARE RESORT</h1>
        {/* Search */}
        <section className={cx("search")}>
          <SearchPage />
        </section>
        {/* Content */}
        <section className={cx("body")}>
          {/* Favorite destination */}
          <div className={cx("favorite-box")}>
            <h2 className={cx("title")}>
              Our Community's Favorite Destinations
            </h2>
            {/* List box */}
            <div className={cx("list-box")}>{renderFavoriteDestination()}</div>
          </div>
          {/* Top 25 resort */}
          <div className={cx("top-resort")}>
            <h2 className={cx("title")}>Top 25 Resorts</h2>
            {/* List box */}
            <div className={cx("list-box")}>
              <Slider {...settings}>{renderTopResort()}</Slider>
            </div>
            <div className={cx("view-all")}>
              <div className={cx("action-btn")}>
                <span className={cx("text")}>VIEW ALL TOP RESORTS</span>
              </div>
            </div>
          </div>
          {/* Features Rentals */}
          <div className={cx("feature")}></div>
        </section>
      </main>
      
      <div>{/* <PaymentIntro /> */}</div>
      <Footer />
    </div>
  );
}

export default Destination;
