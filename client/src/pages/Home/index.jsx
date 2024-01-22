import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { Button } from "@mui/material";
import ResortBox from "~/components/ResortBox";
import RealEstateForSale from "~/components/RealEstateForSale/RealEstateForSale";
import MiddleHome from "~/components/MiddleHome/MiddleHome";
import Footer from "~/components/Footer";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("intro")}>
      <header>
        <div className={cx("title-slogan")}>
          <div>
            <h1 className={cx("title")}>TIVACS</h1>
            <div className={cx("title-right")}>
              <Button className={cx("login-button")}>SIGN IN</Button>
              <div className={cx("register-op")}>REGISTER FOR FREE!</div>
            </div>
          </div>
          <div className={cx("line")}></div>
          <div className={cx("option")}>
            <a>About</a>
            <a>Books</a>
            <a>Hotels</a>
            <a>Vila</a>
            <a>Stories</a>
          </div>
          <div className={cx("slogan")}>
            <span>We LOVE Tivas, it has given us flexibility and tools to make timeshare ownership not a burden, but rather a blessing. We have referred and booked weeks for family and friends through Tivas too! I feel like we are telling people about it everyday. I cannot thank you enough!</span>
          </div>
        </div>
        <div className={cx("main")}>
          <img className={cx("header-img")} src={require("../../assets/The 8 Best Beaches on Koh Samui in Thailand - Northabroad.jpg")}>
          </img>
        </div>
      </header>
      {/* Body */}
      <div className={cx("body")}>
        <h1 className={cx("top-resort")}>
          TOP RESORT
        </h1>
        <div className={cx("list-box")}><ResortBox /></div>
        <div className={cx("list-box3")}><MiddleHome /></div>
        <div>
         <div>
         <h2 className={cx("rentals")}>Real estate for rentals</h2></div>
        
          <div className={cx("list-box2")}><RealEstateForSale /></div>
        </div>
      </div>
      {/*Footerrrrrrrr*/}
      <Footer/>
    </div>
  );
}

export default Home;
