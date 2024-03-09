import classNames from "classnames/bind";
import styles from "./PurchasedProject.module.scss";
import PurchasedProjectInfo from "~/components/PurchasedProjectInfo";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function PurchasedProject() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("row")}>
                <h1 className={cx("title")}>Purchased Project</h1>
                <img
                    className={cx("locate-icon")}
                    src={images.locateIcon}
                    alt="Locate Icon"
                />
            </div>

            <div className={cx("content")}>
                <PurchasedProjectInfo />
            </div>
        </div>
    );
}

export default PurchasedProject;
