import classNames from "classnames/bind";
import styles from "./PurchasedProject.module.scss";
import PurchasedProjectInfo from "~/components/PurchasedProjectInfo";
import images from "~/assets/images";
import Tippy from "@tippyjs/react";

const cx = classNames.bind(styles);

function PurchasedProject() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("row")}>
                <h1 className={cx("title")}>Reservation Project</h1>

                <Tippy
                    content="This is all reservation ticket you buy for project"
                    placement="top"
                >
                    <img
                        className={cx("icon")}
                        src={images.importantIcon}
                        alt="Locate Icon"
                    />
                </Tippy>
            </div>

            <div className={cx("content")}>
                <PurchasedProjectInfo />
            </div>
        </div>
    );
}

export default PurchasedProject;
