import classNames from "classnames/bind";
import styles from "./RealEstateForSale.module.scss";
import { Rating } from "@mui/material";
import { faWeight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function RealEstateForSale() {
    return (
        <div >
            <div className={cx("list-box-resort")}>
                <div className={cx("list-box")}>
                    <div className={cx("card-item")}>
                        <img className={cx("box-img")} src={require("src/assets/The 8 Best Beaches on Koh Samui in Thailand - Northabroad.jpg")} alt="anh" />
                    </div>
                    <div className={cx("content-bottom")}>
                        <div className={cx("content-left")}>
                            <span className={cx("name-re")}>Name Of The Real Estate</span>
                            <div className={cx("middle-rating")}>
                                <a>100m2</a>
                                <a style={{ color: 'red', fontWeight: 'bold', marginTop: -3 }}> 160$/tháng</a>
                            </div>
                            <span className={cx("status")}>1 phút trước - TP. Hồ Chí Minh</span>
                        </div>
                    </div>
                </div>
                <div className={cx("list-box")}>
                    <div className={cx("card-item")}>
                        <img className={cx("box-img")} src={require("src/assets/The 8 Best Beaches on Koh Samui in Thailand - Northabroad.jpg")} alt="anh" />
                    </div>
                    <div className={cx("content-bottom")}>
                        <div className={cx("content-left")}>
                            <span className={cx("name-re")}>Name Of The Real Estate</span>
                            <div className={cx("middle-rating")}>
                                <a>100m2</a>
                                <a style={{ color: 'red', fontWeight: 'bold', marginTop: -3 }}> 160$/tháng</a>
                            </div>
                            <span className={cx("status")}>1 phút trước - TP. Hồ Chí Minh</span>
                        </div>
                    </div>
                </div>
                <div className={cx("list-box")}>
                    <div className={cx("card-item")}>
                        <img className={cx("box-img")} src={require("src/assets/The 8 Best Beaches on Koh Samui in Thailand - Northabroad.jpg")} alt="anh" />
                    </div>
                    <div className={cx("content-bottom")}>
                        <div className={cx("content-left")}>
                            <span className={cx("name-re")}>Name Of The Real Estate</span>
                            <div className={cx("middle-rating")}>
                                <a>100m2</a>
                                <a style={{ color: 'red', fontWeight: 'bold', marginTop: -3 }}> 160$/tháng</a>
                            </div>
                            <span className={cx("status")}>1 phút trước - TP. Hồ Chí Minh</span>
                        </div>
                    </div>
                </div>
                <div className={cx("list-box")}>
                    <div className={cx("card-item")}>
                        <img className={cx("box-img")} src={require("src/assets/The 8 Best Beaches on Koh Samui in Thailand - Northabroad.jpg")} alt="anh" />
                    </div>
                    <div className={cx("content-bottom")}>
                        <div className={cx("content-left")}>
                            <span className={cx("name-re")}>Name Of The Real Estate</span>
                            <div className={cx("middle-rating")}>
                                <a>100m2</a>
                                <a style={{ color: 'red', fontWeight: 'bold', marginTop: -3 }}> 160$/tháng</a>
                            </div>
                            <span className={cx("status")}>1 phút trước - TP. Hồ Chí Minh</span>
                        </div>
                    </div>
                </div>
                <div className={cx("list-box")}>
                    <div className={cx("card-item")}>
                        <img className={cx("box-img")} src={require("src/assets/The 8 Best Beaches on Koh Samui in Thailand - Northabroad.jpg")} alt="anh" />
                    </div>
                    <div className={cx("content-bottom")}>
                        <div className={cx("content-left")}>
                            <span className={cx("name-re")}>Name Of The Real Estate</span>
                            <div className={cx("middle-rating")}>
                                <a>100m2</a>
                                <a style={{ color: 'red', fontWeight: 'bold', marginTop: -3 }}> 160$/tháng</a>
                            </div>
                            <span className={cx("status")}>1 phút trước - TP. Hồ Chí Minh</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("footer-line")}>
                <div className={cx("line")}></div>
                <span className={cx("show-more")}>View 13,451 other news  </span>

            </div>
        </div>

    );
}

export default RealEstateForSale;