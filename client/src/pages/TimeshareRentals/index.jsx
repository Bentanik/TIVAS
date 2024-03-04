import classNames from "classnames/bind";
import styles from "./TimeshareRentals.module.scss";
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

const RESORT_DETAIL = [
  {
    link: "#!",
    date: "04/04/2024 - 04/07/2024",
    nights: "3",
    price: "$1,995($665/nights)",
    room: "2 Bedroom Villa",
    sleeps: "8",
    building: "Unassigned",
    view: "Ocean View",
  },
  {
    link: "#!",
    date: "04/04/2024 - 04/07/2024",
    nights: "3",
    price: "$1,995($665/nights)",
    room: "2 Bedroom Villa",
    sleeps: "8",
    building: "Unassigned",
    view: "Ocean View",
  },
  {
    link: "#!",
    date: "04/04/2024 - 04/07/2024",
    nights: "3",
    price: "$1,995($665/nights)",
    room: "2 Bedroom Villa",
    sleeps: "8",
    building: "Unassigned",
    view: "Ocean View",
  },
  {
    link: "#!",
    date: "04/04/2024 - 04/07/2024",
    nights: "3",
    price: "$1,995($665/nights)",
    room: "2 Bedroom Villa",
    sleeps: "8",
    building: "Unassigned",
    view: "Ocean View",
  },
  {
    link: "#!",
    date: "04/04/2024 - 04/07/2024",
    nights: "3",
    price: "$1,995($665/nights)",
    room: "2 Bedroom Villa",
    sleeps: "8",
    building: "Unassigned",
    view: "Ocean View",
  },
  {
    link: "#!",
    date: "04/04/2024 - 04/07/2024",
    nights: "3",
    price: "$1,995($665/nights)",
    room: "2 Bedroom Villa",
    sleeps: "8",
    building: "Unassigned",
    view: "Ocean View",
  },
  {
    link: "#!",
    date: "04/04/2024 - 04/07/2024",
    nights: "3",
    price: "$1,995($665/nights)",
    room: "2 Bedroom Villa",
    sleeps: "8",
    building: "Unassigned",
    view: "Ocean View",
  },
  {
    link: "#!",
    date: "04/04/2024 - 04/07/2024",
    nights: "3",
    price: "$1,995($665/nights)",
    room: "2 Bedroom Villa",
    sleeps: "8",
    building: "Unassigned",
    view: "Ocean View",
  },
  {
    link: "#!",
    date: "04/04/2024 - 04/07/2024",
    nights: "3",
    price: "$1,995($665/nights)",
    room: "2 Bedroom Villa",
    sleeps: "8",
    building: "Unassigned",
    view: "Ocean View",
  },
  {
    link: "#!",
    date: "04/04/2024 - 04/07/2024",
    nights: "3",
    price: "$1,995($665/nights)",
    room: "2 Bedroom Villa",
    sleeps: "8",
    building: "Unassigned",
    view: "Ocean View",
  },
  {
    link: "#!",
    date: "04/04/2024 - 04/07/2024",
    nights: "3",
    price: "$1,995($665/nights)",
    room: "2 Bedroom Villa",
    sleeps: "8",
    building: "Unassigned",
    view: "Ocean View",
  },
  {
    link: "#!",
    date: "04/04/2024 - 04/07/2024",
    nights: "3",
    price: "$1,995($665/nights)",
    room: "2 Bedroom Villa",
    sleeps: "8",
    building: "Unassigned",
    view: "Ocean View",
  },
];
const blog_link = {
  link: "/blog",
};
function TimeshareRentals() {
  const [listingResort, setListingResort] = useState(RESORT_DETAIL);

  const detailsListing = () => {
    return listingResort.map((item, index) => {
      return (
        <div className={cx("room-type-wrapper")}>
          <div className={cx("room-type-block")}>
            <div className={cx("content-wrapper")}>
              {/* Left content */}
              <div className={cx("left-content")}>
                <div className={cx("left-row")}>
                  <div className={cx("list-item")}>
                    {/* First List */}
                    <div className={cx("first-list")}>
                      <div className={cx("left-content")}>
                        <h2 style={{ width: 300 }} className={cx("sub-title")}>
                          {item.date}
                          <p className={cx("new")}>New!</p>
                        </h2>
                      </div>
                      <div style={{ width: 85, textAlign: 'start'}} className={cx("guest", "row")}>
                        <div className={cx("text")}>{item.nights}</div>
                      </div>
                      <div
                        style={{ width: 206, fontWeight: 600, textAlign: 'start'  }}
                        className={cx("area", "row")}
                      >
                        <div className={cx("text")}>{item.price}</div>
                      </div>
                      <div style={{ width: 205, textAlign: 'start'  }} className={cx("area", "row")}>
                        <div className={cx("text")}>{item.room}</div>
                      </div>
                      <div style={{ width: 65 ,textAlign: 'start'  }} className={cx("area", "row")}>
                        <div className={cx("text")}>{item.sleeps}</div>
                      </div>
                      <div style={{ width: 122, textAlign: 'start'}} className={cx("area", "row")}>
                        <div className={cx("text")}>{item.building}</div>
                      </div>
                      <div style={{ width: 122, textAlign: 'start'  }} className={cx("area", "row")}>
                        <div className={cx("text")}>{item.view}</div>
                      </div>
                      <button
                        className={cx("button-listing")}
                        style={{ width: 122 }}
                      >
                        VIEW & BOOK
                      </button>
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
              <span className={cx("text-nav")}>Project Details</span>
            </Link>
          </div>
        </div>
        <div className={cx("ancillary")}>
          <div className={cx("mid-text")}>
            <img className={cx("left-image")} src={images.resort} alt="pic" />
            <div className={cx("left-child")}>
              <h1 style={{ fontWeight: 500 }} className={cx("text")}>
                Marriott's Aruba Surf Club
                <span>TIMESHARE RENTALS</span>
                <a className={cx("click")}>« Back to resort</a>
              </h1>
            </div>
          </div>
          <div className={cx("right-content")}>
            <p className={cx("crumb-text")}>Own a timeshare here?</p>
            <a className={cx("crumb-button")}>RENT MY TIME SHARE</a>
          </div>
        </div>
        <div className={cx("crumb-item")}>
          <div className={cx("crumb")}>
            <label className={cx("unit")}>1.320 rentals from $186/night</label>
            <div className={cx("filter")}>More Filters</div>
            <input className={cx("calendar")} type="date" />
          </div>
          <div className={cx("sort")}>
            <p className={cx("crumb-unit")}>Sort by:</p>
            <select id="cars" className={cx("sort-box")}>
              <option value="volvo">Featured</option>
              <option value="saab">Newest</option>
              <option value="opel">Date</option>
              <option value="audi">Total Price</option>
              <option value="audi">Unit View</option>
            </select>
          </div>
        </div>
      </section>
      {/* Main */}
      <main className={cx("main")}>
        {/* Content */}
        <section className={cx("body")}>
          {/* Favorite destination */}
          <div className={cx("favorite-box")}>
            <h2 className={cx("title")}></h2>
            {/* List box */}
          </div>
          {/* Top 25 resort */}
          <div className={cx("top-resort")}>
            {/* List box */}
            <div className={cx("top-resort-header")}></div>
            {/*Listing Details */}
            <div className={cx("top-unit")}>
              <thead className={cx("listing-content")}>
                <tr className={cx("listing-item")}>
                  <th className={cx("listing-dates")}>Dates</th>
                  <th className={cx("listing-nights")}>Nights</th>
                  <th className={cx("listing-price")}>Price</th>
                  <th className={cx("listing-be-ba")}>
                    <span className={cx("show-for-medium-up")}>Room</span>
                  </th>
                  <th className={cx("listing-sleeps")}>
                    <span className={cx("show-for-medium-up")}>Sleeps</span>
                  </th>
                  <th className={cx("listing-building")}>Building</th>
                  <th className={cx("listing-view")}>
                    <span className={cx("show-for-medium-up")}>View</span>
                  </th>
                  <th className={cx("listing-action")}>&nbsp;</th>
                </tr>
              </thead>
            </div>
            <div>{detailsListing()}</div>
            {/* <div>{detailsListing()}</div> */}
          </div>
          {/* Features Rentals */}
        </section>
      </main>
      <div>{/* <PaymentIntro /> */}</div>
      <Footer />
    </div>
  );
}

export default TimeshareRentals;
