import classNames from "classnames/bind";
import styles from "./ListingDetails.module.scss";
import React, { useState } from "react";
import Navigations from "~/components/Layouts/Navigations";
import Footer from "~/components/Layouts/Footer";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SearchPage from "~/components/SearchPage";
import Slider from "react-slick";
import Search from "~/components/Search";
import { Rating } from "@mui/material";

const cx = classNames.bind(styles);

const FAVORITE_DESTINATIONS = [
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Da Nang City",
    description: "Club Wyndham Vino Bello Resort",
    price: "from $2300 night",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Ho Chi Minh city",
    description: "Marriot's Desert Springs Villa",
    price: "from $2300 night",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Da Lat city",
    description: "CarIsbad Seapointe by Hilton Grand Vacation",
    price: "from $2300 night",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Da Nang City",
    description: "Club Wyndham Vino Bello Resort",
    price: "from $2300 night",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Ho Chi Minh city",
    description: "Marriot's Desert Springs Villa",
    price: "from $2300 night",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Da Lat city",
    description: "CarIsbad Seapointe by Hilton Grand Vacation",
    price: "from $2300 night",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Da Lat city",
    description: "CarIsbad Seapointe by Hilton Grand Vacation",
    price: "from $2300 night",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Da Nang City",
    description: "Club Wyndham Vino Bello Resort",
    price: "from $2300 night",
  },
];
const FEATURED_RESORT = [
  {
    link: "#!",
    image: images.resort,
    name: "Margaritaville Vacation Club by Wyndham - Rio Mar",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: " $285/night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Margaritaville Vacation Club by Wyndham - Rio Mar",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: " $285/night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Margaritaville Vacation Club by Wyndham - Rio Mar",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: " $285/night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Margaritaville Vacation Club by Wyndham - Rio Mar",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: " $285/night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Margaritaville Vacation Club by Wyndham - Rio Mar",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: " $285/night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Margaritaville Vacation Club by Wyndham - Rio Mar",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: " $285/night",
  },
];

const TOP_RESORT = [
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "from $125 night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "from $125 night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "from $125 night",
  },
];
const RESORT_DETAIL = [
  {
    link: "#!",
    image: images.koala,
    name: "Gatlinburg, Tennessee",
    address: "Westgate Smoky Mountain Resor",
    unit: "5 Bedrooms Villa",
    room: "20",
    date: "June 30 - Jul 7 2024",
    night: "7",
    price: "$875 night",
    host: images.koala_myles,
  },
  {
    link: "#!",
    image: images.koala,
    name: "Gatlinburg, Tennessee",
    address: "Westgate Smoky Mountain Resor",
    unit: "5 Bedrooms Villa",
    room: "20",
    date: "June 30 - Jul 7 2024",
    night: "7",
    price: "$875 night",
    host: images.koala_myles,
  },
  {
    link: "#!",
    image: images.koala,
    name: "Gatlinburg, Tennessee",
    address: "Westgate Smoky Mountain Resor",
    unit: "5 Bedrooms Villa",
    room: "20",
    date: "June 30 - Jul 7 2024",
    night: "7",
    price: "$875 night",
    host: images.koala_myles,
  },
  {
    link: "#!",
    image: images.koala,
    name: "Gatlinburg, Tennessee",
    address: "Westgate Smoky Mountain Resor",
    unit: "5 Bedrooms Villa",
    room: "20",
    date: "June 30 - Jul 7 2024",
    night: "7",
    price: "$875 night",
    host: images.koala_myles,
  },
  {
    link: "#!",
    image: images.koala,
    name: "Gatlinburg, Tennessee",
    address: "Westgate Smoky Mountain Resor",
    unit: "5 Bedrooms Villa",
    room: "20",
    date: "June 30 - Jul 7 2024",
    night: "7",
    price: "$875 night",
    host: images.koala_myles,
  },
  {
    link: "#!",
    image: images.koala,
    name: "Gatlinburg, Tennessee",
    address: "Westgate Smoky Mountain Resor",
    unit: "5 Bedrooms Villa",
    room: "20",
    date: "June 30 - Jul 7 2024",
    night: "7",
    price: "$875 night",
    host: images.koala_myles,
  },
  {
    link: "#!",
    image: images.koala,
    name: "Gatlinburg, Tennessee",
    address: "Westgate Smoky Mountain Resor",
    unit: "5 Bedrooms Villa",
    room: "20",
    date: "June 30 - Jul 7 2024",
    night: "7",
    price: "$875 night",
    host: images.koala_myles,
  },
];
const blog_link = {
  link: "/blog",
};

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
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

function ListingDetails() {
  const [input, setInput] = useState("");
  const [topResort, setTopResort] = useState(TOP_RESORT);
  const [featuredResort, setFeaturedResort] = useState(FEATURED_RESORT);
  const [favList, setFavList] = useState(FAVORITE_DESTINATIONS);
  const [listingResort, setListingResort] = useState(RESORT_DETAIL);

  const featuredListing = () => {
    return featuredResort.map((item, index) => {
      return (
        <div>
          <div className={cx("featured-box")}>
            <Link to="#!">
              <img src={item.image} alt={item.name} className={cx("f-image")} />
              <div className={cx("heart-bandle")}></div>

              <section className={cx("f-content")}>
                <h4>{item.available}</h4>
                <h3 className={cx("f-name")}>{item.name}</h3>
                <div className={cx("f-row")}></div>
                <span className={cx("f-available")}></span>
                <span className={cx("date")}>{item.time}</span>
                <div className={cx("f-row", "f-price")}>
                  <p className={cx("f-text")}>{item.price}</p>
                </div>
              </section>
            </Link>
          </div>
        </div>
      );
    });
  };
  const detailsListing = () => {
    return listingResort.map((item, index) => {
      return (
        <div className={cx("room-type-wrapper")}>
          <div className={cx("room-type-block")}>
            <div className={cx("content-wrapper")}>
              {/* Left content */}
              <div className={cx("left-content")}>
                <div className={cx("left-row")}>
                  <img
                    src={images.koala}
                    alt="Thumb_Image"
                    style={{ borderRadius: 12 }}
                    className={cx("thumb-img")}
                  />
                  <div className={cx("list-item")}>
                    {/* First List */}
                    <div className={cx("first-list")}>
                      <div className={cx("left-content")}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "start",
                            border: " 1px solid #b7b7b7",
                            borderRadius: 5,
                            width: "35%",
                            alignItems: "center",
                            color: "red",
                            padding: 2,
                            marginBottom: 8,
                          }}
                          className={cx("heart-bandle")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M16.5 7.99992C16.5 9.49992 16 11.4999 13.6 12.2999C14.3 10.5999 14.4 8.89992 13.9 7.29992C13.2 5.19992 10.9 3.59992 9.3 2.69992C8.9 2.39992 8.2 2.79992 8.3 3.39992C8.3 4.49992 8 6.09992 6.3 7.79992C4.1 9.99992 3 12.2999 3 14.4999C3 17.3999 5 20.9999 9 20.9999C5 16.9999 8 13.4999 8 13.4999C8.8 19.3999 13 20.9999 15 20.9999C16.7 20.9999 20 19.7999 20 14.5999C20 11.4999 18.7 9.09992 17.6 7.69992C17.3 7.19992 16.6 7.49992 16.5 7.99992Z"
                              fill="#FF0101"
                            />
                          </svg>
                          <text className={cx("bandle")}>Hot Deal</text>
                        </div>
                        <h2 className={cx("sub-title")}>{item.name}</h2>
                        <h2
                          style={{ fontWeight: 400 }}
                          className={cx("sub-title")}
                        >
                          {item.address}
                        </h2>
                      </div>
                      <div className={cx("guest", "row")}>
                        <div className={cx("text")}>{item.unit}</div>
                      </div>
                      <div className={cx("area", "row")}>
                        <div className={cx("text")}>{item.room}</div>
                      </div>
                      <div className={cx("area", "row")}>
                        <div className={cx("text")}>{item.date}</div>
                      </div>
                      <div className={cx("area", "row")}>
                        <div className={cx("text")}>{item.night}</div>
                      </div>
                      <div className={cx("area", "row")}>
                        <div className={cx("text")}>{item.price}</div>
                      </div>
                      <div className={cx("icon")}>
                        <img
                          style={{ marginLeft: 15 }}
                          src={item.host}
                          className={cx("crumb-img")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              {/* <img src={images.resort} alt="Home" /> */}
            </div>
          </Link>
          <FontAwesomeIcon icon={faChevronRight} className={cx("icon-arrow")} />
          <div className={cx("nav")}>
            <Link to="/destinations">
              <span className={cx("text-nav")}>Listing</span>
            </Link>
          </div>
        </div>
      </section>
      {/* Main */}
      <main className={cx("main")}>
        <div className={cx("top-content")}>
          {/* <h1 className={cx("heading")}>
            Rent Direct From Vacation Club Owners
          </h1> */}
          <div className={cx("heading")}>
            <label>Timeshares</label>
            <label style={{ color: "#1cb954" }}>Rentals</label>
            <label>From</label>
            <label>HCM</label>
            <label>City</label>
          </div>
          <img className={cx("header-img")} src={images.koala} alt="pic" />
          {/*Search*/}
          <section className={cx("search")}>{/* <SearchPage /> */}</section>
        </div>

        {/* Content */}
        <section className={cx("body")}>
          {/* Favorite destination */}
          <div className={cx("favorite-box")}>
            <h2 className={cx("title")}></h2>
            {/* List box */}
            {/* <div className={cx("list-box")}>{renderFavoriteDestination()}</div> */}
          </div>
          {/* Top 25 resort */}
          <div className={cx("top-resort")}>
            {/* List box */}
            <div style={{ marginTop: 60 }} className={cx("top-resort-header")}>
              <h2 style={{ fontWeight: 600 }} className={cx("title")}>
                Featured Listing
              </h2>
            </div>
            {/*Featured Listing */}
            <div className={cx("featured-listing")}>
              <Slider {...settings}>{featuredListing()}</Slider>
            </div>
            {/*Listing Details */}
            <div className={cx("top-unit")}>
              <div className={cx("crumb-unit")}>
                <div style={{ fontWeight: "bold" }} className={cx("sub-title")}>
                  Listing 4368 result
                </div>
              </div>
              <div className={cx("left-content")}>
                <div className={cx("row")}>
                  <div className={cx("text")}>Unit</div>
                </div>
                <div className={cx("row")}>
                  <div className={cx("text")}>Sleep</div>
                </div>
                <div className={cx("row")}>
                  <div style={{ marginLeft: 0 }} className={cx("text")}>
                    Dates/Nights
                  </div>
                </div>
                <div className={cx("row")}>
                  <div className={cx("text")}>Price</div>
                </div>
                <div className={cx("area", "row")}>
                  <div className={cx("text")}>Host</div>
                </div>
              </div>
            </div>
            <div>{detailsListing()}</div>
            <div className={cx("benefit")}>
              <div className={cx("crumb-benefit")}>
                <img className={cx("benefit-img")} src={images.one} alt="pic" />
                <p className={cx("benefit-text")}>
                  #1 marketplace to rent directly from vacation club owners
                </p>
              </div>
              <div className={cx("crumb-benefit")}>
                <img className={cx("benefit-img")} src={images.two} alt="pic" />
                <p className={cx("benefit-text")}>
                  Unbeatable travel deals you won’t find anywhere else
                </p>
              </div>
              <div className={cx("crumb-benefit")}>
                <img
                  className={cx("benefit-img")}
                  src={images.three}
                  alt="pic"
                />
                <p className={cx("benefit-text")}>
                  {" "}
                  You are protected, so go ahead and book with confidence
                </p>
              </div>
            </div>
          </div>
          {/* FAQ's */}
          <section className={cx("faq-wrapper")}>
            <div className={cx("faq-content")}>
              <div className={cx("top-content")}>
                <h3 className={cx("text-header")}>
                  Get first dibs on the world’s hottest timeshare rentals
                </h3>
                <p className={cx("crumb-text")}>
                  Millions of timeshare owners worldwide own recurring vacation
                  time with popular brands like Marriott, Wyndham, Disney, and
                  more, but sometimes they’re unable to use it.
                </p>
                <p className={cx("crumb-text")}>
                  What does this mean? Timeshare owners still have to pay for
                  the time they don’t use. Renting to a vacationer helps them
                  cover their fees instead of throwing away thousands of dollars
                  per year.
                </p>
                <label className={cx("bottom-text")}>
                  KOALA helps these owners securely rent their unused timeshare
                  to anyone in the world.
                </label>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <button className={cx("faq-button")}>Find More</button>
              </div>
            </div>
          </section>
          {/* I love deals */}
          <section className={cx("explore-wrapper")}>
            <div className={cx("explore-content")}>
              <div className={cx("right-content")}>
                <h3 className={cx("right-header")}>
                  Get first dibs on the world’s hottest timeshare rentals
                </h3>
                <div className={cx("input", "click")}>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className={cx("search-input")}
                    placeholder="Email Address"
                  />
                  {/* <a href="!#"> */}
                  <Link to={blog_link.link} className={cx("explore-link")}>
                    Yes, I love a deal!
                  </Link>
                </div>
                <div className={cx("checkbox")}>
                  <input className={cx("input-checkbox")} type="checkbox" />
                  <label>Yes, subscribe me for awesome deals</label>
                </div>
              </div>
            </div>
          </section>
          {/* Features Rentals */}
        </section>
      </main>

      <div>{/* <PaymentIntro /> */}</div>
      <Footer />
    </div>
  );
}

export default ListingDetails;
