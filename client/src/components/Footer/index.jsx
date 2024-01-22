import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Rating } from "@mui/material";

const cx = classNames.bind(styles);

function ResortBox() {
    return (
        
        <div>
          <div>
            <div className={cx("footer-wrapper")} style={{display: 'flex'}}>
            <logo className={cx("logo-footer")}>
                TIVAS
            </logo>
              <div className={cx("navigation-2")}>
                <div className={cx("nav-item1")}>ABOUT US</div>
                <div className={cx("nav-item")}>Testimonial & Reviews</div>
                <div className={cx("nav-item")}>Contact us</div>
                <div className={cx("nav-item")}>Press</div>
              </div>
              <div className={cx("navigation-2")}>
                <div className={cx("nav-item1")}>ABOUT US</div>
                <div className={cx("nav-item")}>Travel Guides and Tips</div>
                <div className={cx("nav-item")}>Help Resources and Articles</div>
                <div className={cx("nav-item")}>Owner Resources</div>
                <div className={cx("nav-item")}>FAQs</div>
              </div>
              <div className={cx("navigation-2", "footer-contact")}>
                <div>
                  <div className={cx("nav-item-rentals")}>TIMESHARE FOR RENTALS</div>
                  <div className={cx("box-contact")}>
                    <div className={cx("contact-item")}>Find a Timeshare to Rent</div>
                    <div className={cx("contact-item")}>Rent My Timeshare </div>
                  </div>
                </div>
                <div>
                  <div className={cx("nav-item2")}>TIMESHARE FOR SALE</div>
                  <div className={cx("box-contact")}>
                    <div className={cx("contact-item")}>Find a Timeshare for Sale</div>
                    <div className={cx("contact-item")}>Buy Timeshare Points</div>
                    <div className={cx("contact-item")}>Buy Timeshare Points</div>
                  </div>
                </div>
              </div>
              <div className={cx("navigation-2")}>
                <div className={cx("nav-item1")}>CONTACT US</div>
                <div className={cx("nav-item")}>PHONE: 0905015080</div>
                <div className={cx("nav-item")}>EMAIL: tivas@gmail.com</div>
              </div>
            <div className={cx("footer-text")}>
              <div className={cx("a")}>© 2024 Tivas.com</div>
              <div className={cx("a1")}>Term of service</div>
              <div className={cx("a1")}>Privacy Prolite</div>
            </div>
            </div>
          </div>
        </div>

    );
}

export default ResortBox;