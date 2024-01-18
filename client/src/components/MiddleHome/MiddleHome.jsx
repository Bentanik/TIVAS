import classNames from "classnames/bind";
import styles from "./MiddleHome.module.scss";
import { Rating } from "@mui/material";

const cx = classNames.bind(styles);

function MiddleHome() {
    return (
        <div className={cx("list-box-resort")}>
            <div className={cx("list-box")}>
                <div className={cx("main")}>
                    <img className={cx("header-img")} src={require("../../assets/The 8 Best Beaches on Koh Samui in Thailand - Northabroad.jpg")}>
                    </img>
                    <div className={cx("overlay")}>
                        <div className={cx("text")}>MORDERN LUXURY WITH ALL THE COMFORTS</div>
                    </div>
                    <div className={cx("real-estate")}>REAL ESTATE </div>
                </div>
            </div>
            <div className={cx("list-box")}>
                <div className={cx("main")}>
                    <img className={cx("header-img")} src={require("../../assets/The 8 Best Beaches on Koh Samui in Thailand - Northabroad.jpg")}>
                    </img>
                    <div className={cx("overlay")}>
                        <div className={cx("text")}>MORDERN LUXURY WITH ALL THE COMFORTS</div>
                    </div>
                    <div className={cx("real-estate")}>REAL ESTATE </div>
                </div>
            </div>
            <div className={cx("list-box")}>
                <div className={cx("main")}>
                    <img className={cx("header-img")} src={require("../../assets/The 8 Best Beaches on Koh Samui in Thailand - Northabroad.jpg")}>
                    </img>
                    <div className={cx("overlay")}>
                        <div className={cx("text")}>MORDERN LUXURY WITH ALL THE COMFORTS</div>
                    </div>
                    <div className={cx("real-estate")}>REAL ESTATE </div>
                </div>
            </div>
        </div>

    );
}

export default MiddleHome;