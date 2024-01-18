import classNames from "classnames/bind";
import styles from "./ResortBox.module.scss";
import { Rating } from "@mui/material";

const cx = classNames.bind(styles);

function ResortBox() {
    return (
        <div className={cx("list-box-resort")}> 
            <div className={cx("list-box")}>
                <div className={cx("card-item")}>
                    <img className={cx("box-img")} src={require("src/assets/The 8 Best Beaches on Koh Samui in Thailand - Northabroad.jpg")} alt="anh" />
                </div>
                <div className={cx("content-bottom")}>
                    <div className={cx("content-left")}>
                        <span className={cx("name-re")}>Name Of The Real Estate</span>
                        <div className={cx("middle-rating")}>
                            <Rating className={cx("start-icon")} name="size-large" defaultValue={0} size="large" />
                            <a>1023 views</a>
                        </div>
                        <span className={cx("price")}>From 153$ - 2,488$/week</span>
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
                            <Rating className={cx("start-icon")} name="size-large" defaultValue={0} size="large" />
                            <a>1023 views</a>
                        </div>
                        <span className={cx("price")}>From 153$ - 2,488$/week</span>
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
                            <Rating className={cx("start-icon")} name="size-large" defaultValue={0} size="large" />
                            <a>1023 views</a>
                        </div>
                        <span className={cx("price")}>From 153$ - 2,488$/week</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ResortBox;