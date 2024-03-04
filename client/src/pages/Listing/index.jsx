import classNames from "classnames/bind";
import styles from "./Listing.module.scss";
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

const cx = classNames.bind(styles);

const FAVORITE_DESTINATIONS = [
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Da Nang City",
    description:
      "A tropical paradise of beaches, mountains and life arrfirming beauty",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Ho Chi Minh city",
    description:
      "Dynamic citites, dramatic coastline, and oh, those spacific sunset",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Da Lat city",
    description:
      "A relaxed pace of island life and blis-making blue of the sea",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Ha Noi capital",
    description:
      "A tropical paradise of beaches, mountains and life arrfirming beauty",
  },
  {
    link: "#!",
    image: images.timeshareResort,
    name: "Nha Trang capital",
    description:
      "Dynamic citites, dramatic coastline, and oh, those spacific sunset",
  },
];
const FEATURED_RESORT = [
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "$285 per night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "$285 per night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "$285 per night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "$285 per night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "$285 per night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "$285 per night",
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

const FEATURE_EVENTS = [
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "$285 per night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "$285 per night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "$285 per night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "$285 per night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "$285 per night",
  },
  {
    link: "#!",
    image: images.resort,
    name: "Lahaina, Hawaii",
    time: "May 4 - May 11, 2024",
    available: "Hilton Vacation Club Kaanapali Beach",
    price: "$285 per night",
  },
];
const blog_link = {
  link: "/blog",
};

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
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

function Listing() {
  // const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [topResort, setTopResort] = useState(TOP_RESORT);
  const [featuredResort, setFeaturedResort] = useState(FEATURED_RESORT);
  const [eventsResort, setEventsResort] = useState(FEATURE_EVENTS);
  const [favList, setFavList] = useState(FAVORITE_DESTINATIONS);

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  //   // setList(data);
  // };

  const renderFavoriteDestination = () => {
    return favList.map((item, index) => {
      return (
        <div key={index} className={cx("d-box")}>
          <Link to={item.link} className={cx("link")}>
            <img src={item.image} alt={item.name} className={cx("img")} />
            <h3 className={cx("name")}>{item.name}</h3>
            <div className={cx("description")}> {item.description}</div>
          </Link>
        </div>
      );
    });
  };
  const renderTopResort = () => {
    return topResort.map((item, index) => {
      return (
        <div>
          <div className={cx("box")}>
            <Link to="#!">
              <img src={item.image} alt={item.name} className={cx("image")} />
              <div className={cx("heart-bandle")}>
                <text className={cx("bandle")}>Top 21 Resort</text>
                <svg
                  className={cx("heart-icon")}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                    fill="#FFD233"
                  />
                </svg>
              </div>
              <section className={cx("content")}>
                <h3 className={cx("name")}>{item.name}</h3>
                <div className={cx("row")}></div>
                <span className={cx("available")}>{item.available}</span>
                <div className={cx("row", "price")}>
                  <p className={cx("text")}>{item.price}</p>
                  <div className={cx("rating")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_71_211)">
                        <path
                          d="M10.9202 2.86795C11.0303 2.67911 11.1879 2.52242 11.3774 2.41352C11.5669 2.30462 11.7817 2.24731 12.0002 2.24731C12.2188 2.24731 12.4335 2.30462 12.623 2.41352C12.8125 2.52242 12.9702 2.67911 13.0802 2.86795L15.8752 7.66595L21.3032 8.84195C21.5167 8.88835 21.7144 8.9899 21.8764 9.13648C22.0384 9.28307 22.1592 9.46956 22.2267 9.67737C22.2942 9.88519 22.306 10.1071 22.261 10.3209C22.216 10.5347 22.1157 10.733 21.9702 10.8959L18.2702 15.0369L18.8302 20.562C18.8523 20.7795 18.817 20.9991 18.7277 21.1987C18.6384 21.3983 18.4983 21.571 18.3214 21.6995C18.1444 21.828 17.9369 21.9079 17.7195 21.9312C17.502 21.9544 17.2823 21.9202 17.0822 21.832L12.0002 19.5919L6.91823 21.832C6.71815 21.9202 6.49842 21.9544 6.28098 21.9312C6.06355 21.9079 5.85601 21.828 5.6791 21.6995C5.50219 21.571 5.36209 21.3983 5.2728 21.1987C5.1835 20.9991 5.14814 20.7795 5.17023 20.562L5.73023 15.0369L2.03023 10.8969C1.88446 10.734 1.78398 10.5356 1.73884 10.3217C1.6937 10.1077 1.70547 9.88568 1.77297 9.6777C1.84048 9.46973 1.96135 9.2831 2.12354 9.13645C2.28572 8.98979 2.48353 8.88825 2.69723 8.84195L8.12523 7.66595L10.9202 2.86795Z"
                          fill="#FFCC41"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_71_211">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <strong>4.6</strong>
                  </div>
                </div>
              </section>
            </Link>
          </div>
        </div>
      );
    });
  };
  const featuredListing = () => {
    return featuredResort.map((item, index) => {
      return (
        <div>
          <div className={cx("featured-box")}>
            <Link to="#!">
              <img src={item.image} alt={item.name} className={cx("f-image")} />
              <div className={cx("f-heart-bandle")}>
                <text className={cx("f-bandle")}>Exclusive</text>
                <svg
                  className={cx("f-heart-icon")}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                    fill="#FFD233"
                  />
                </svg>
              </div>

              <section className={cx("f-content")}>
                <h3 className={cx("f-name")}>{item.name}</h3>
                <div className={cx("f-row")}></div>
                <span className={cx("f-available")}></span>
                <span className={cx("date")}>{item.time}</span>
                <div className={cx("f-row", "f-price")}>
                  <p className={cx("f-text")}>{item.price}</p>
                  <div className={cx("f-sale")}>
                    <button className={cx("f-button")}>40% off</button>
                  </div>
                </div>
              </section>
            </Link>
          </div>
        </div>
      );
    });
  };
  const featuredEvents = () => {
    return eventsResort.map((item, index) => {
      return (
        <div>
          <div className={cx("events-box")}>
            <Link to="#!">
              <div className={cx("e-content")}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={cx("e-image")}
                />
                <div className={cx("e-price")}>from $560 night</div>
                <label className={cx("e-name")}>Halloween at DaNang</label>
              </div>
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
            <label>Rent</label>
            <label style={{ color: "#1cb954" }}>Direct</label>
            <label>From</label>
            <label>Vacation</label>
            <label>Club</label>
            <label>Owners</label>
          </div>
          <img className={cx("header-img")} src={images.banner} alt="pic" />
          {/*Search*/}
          <section className={cx("search")}>{/* <SearchPage /> */}</section>
        </div>

        {/* Content */}
        <section className={cx("body")}>
          {/* Favorite destination */}
          <div className={cx("favorite-box")}>
            <h2 className={cx("title")}></h2>
          </div>
          {/* Top 25 resort */}
          <div className={cx("top-resort")}>
            <div className={cx("top-resort-header")}>
              <h2 className={cx("title")}>Top 25 Resorts</h2>
              <button className={cx("button")}>See all</button>
            </div>
            {/* List box */}
            <div className={cx("list-box")}>
              <Slider {...settings}>{renderTopResort()}</Slider>
            </div>
            <div style={{ marginTop: 60 }} className={cx("top-resort-header")}>
              <h2 className={cx("title")}>Featured Listing</h2>
            </div>
            {/*Featured Listing */}
            <div className={cx("featured-listing")}>
              <Slider {...settings}>{featuredListing()}</Slider>
            </div>
            {/*Feature Events */}
            <div style={{ marginTop: 60 }} className={cx("feature-events")}>
              <h2 className={cx("title")}>Featured Events</h2>
              <label className={cx("crumb-events")}>
                Our lowest price stays on sporting events, concerts and more
              </label>
            </div>
            <div className={cx("featured-events")}>{featuredEvents()}</div>
            <div style={{ marginTop: 60 }} className={cx("feature-events")}>
              <h2 className={cx("title")}>Featured Destinations</h2>
              <label className={cx("crumb-events")}>
                Exclusive deals in our most popular locations at up to 70% off
              </label>
            </div>
            <div className={cx("destination-box")}>
              {renderFavoriteDestination()}
            </div>
            {/* Benefit*/}
            <div className={cx("benefit")}>
              <div className={cx("crumb-benefit")}>
                <img className={cx("benefit-img")} src={images.one} alt="pic" />
                <p className={cx("benefit-text")}>#1 marketplace to rent directly from vacation club owners</p>
              </div>
              <div className={cx("crumb-benefit")}>
                <img className={cx("benefit-img")} src={images.two} alt="pic" />
                <p className={cx("benefit-text")}>Unbeatable travel deals you won’t find anywhere else</p>
              </div>
              <div className={cx("crumb-benefit")}>
                <img className={cx("benefit-img")} src={images.three} alt="pic"/>
                <p className={cx("benefit-text")}> You are protected, so go ahead and book with confidence</p>
              </div>
            </div>
          </div>

          {/* I love deals */}
          <section className={cx("explore-wrapper")}>
            <div className={cx("explore-content")}>
              {/*Rigth content*/}
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

export default Listing;
