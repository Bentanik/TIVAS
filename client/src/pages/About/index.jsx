import classNames from "classnames/bind";
import styles from "./About.module.scss";
import React, { useState } from "react";
import Navigations from "~/components/Layouts/Navigations";
import Footer from "~/components/Layouts/Footer";
import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function About() {
  return (
    <div className={cx("main")}>
      <Navigations />
      <div className={cx("about-wrapper")}>
        <div className={cx("top-container")}>
          <label className={cx("head-text")}>BUSINESS INFORMATION</label>
          <img className={cx("head-img")} src={images.alma} alt="pic" />
        </div>
        <div className={cx("block-content")}>
          <div className={cx("block-group-container")}>
            <h3 className={cx("block-text")}>PIONEER UNIT</h3>
            <h3 className={cx("block-text")}>
              PIONEER UNIT IN THE FIELD OF “Vacation OWNERSHIP”
            </h3>
            <hr className={cx("line")}></hr>
            <div className={cx("block-desc")}>
              <p className={cx("btn-child")}>
                TIVAS resort is a high-end resort project exclusively for
                families invested and developed by Thien Duong Bay Tourist Area
                Company Limited.
              </p>
              <p className={cx("btn-child")}>
                As a pioneer in Vietnam providing an outstanding resort model,
                meeting the diverse relaxation needs of generations, TIVAS is
                one of the few resorts developed and operated operates in
                accordance with international standards of the world's vacation
                ownership model in terms of scale, class and amenities.
              </p>
              <p className={cx("btn-child")}>
                At TIVAS, we look for the smartest and most modern solutions to
                help preserve the core values of life, which is love and
                connection between family members.
              </p>
            </div>
            <div className={cx("layout")}>
              <div className={cx("crumb-img")}>
                <img className={cx("head-img")} src={images.resort} alt="pic" />
              </div>
              <div className={cx("crumb-img")}>
                <img
                  className={cx("head-img")}
                  src={images.portrait}
                  alt="pic"
                />
              </div>
            </div>
          </div>
          <div className={cx("third-content")}>
            <div className={cx("block-container")}>
              <h3 className={cx("block-text")}>PIONEER UNIT</h3>
              <h3 className={cx("block-text")}>
                PIONEER UNIT IN THE FIELD OF “Vacation OWNERSHIP”
              </h3>
              <hr className={cx("line")}></hr>
              <div className={cx("block-desc")}>
                <p className={cx("ntn-child")}>
                  As a pioneer in Vietnam in the field of Vacation Ownership,
                  TIVAS is proud to bring together experienced experts from
                  countries with developed Vacation Ownership industries in the
                  world such as UK, USA, Israel, Italy…
                </p>
                <p className={cx("ntn-child")}>
                  The diversity of experience, expertise and culture of the
                  staff has helped TIVAS become the leading unit in Vietnam in
                  terms of scale, professionalism, premium quality, as well as
                  model suitability. Vacation ownership for Vietnamese families.
                </p>
              </div>
              <div className={cx("third-layout")}>
                <div className={cx("crumb-img")}>
                  <img
                    className={cx("head-img")}
                    src={images.resort}
                    alt="pic"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={cx("browse-desc")}>
            <div className={cx("browse-content")}>
              <div className={cx("browse-text")}>
                <label>Over</label>
                <label style={{ color: "#1cb954" }}>950+</label>
                <label>Travel</label>
                <label>Locations</label>
              </div>
              <div className={cx("bottom-content")}>
                <p>
                We have availability in resorts all around the world.
                </p>
                <Link to="/destinations">
                <button className={cx("browse-button")}>
                  BROWSE DESTINATION
                </button>
                </Link>
              </div>
              <img className={cx("crumb-img")} src={images.almabeach} alt="pic" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
