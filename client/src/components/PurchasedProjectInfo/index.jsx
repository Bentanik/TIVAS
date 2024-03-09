import classNames from "classnames/bind";
import styles from "./PurchasedProjectInfo.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function PurchasedProjectInfo() {
    return (
        <div className={cx("ticket-detail-wrapper")}>
            <div className={cx("ticket-detail")}>
                {/* Left- Content */}
                <img
                    className={cx("img")}
                    src={images.resort}
                    alt="Thumb Project"
                />
                {/* Right- Content */}
                <div className={cx("right-content")}>
                    <div className={cx("project-name")}>
                        Alma Cam Ranh resort
                    </div>
                    <div className={cx("location")}>Cam Ranh city</div>
                    <div className={cx("code")}>
                        Reservation Code: <span className="text">12345</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PurchasedProjectInfo;
