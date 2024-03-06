import classNames from "classnames/bind";
import styles from "./Banking.module.scss";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Banking() {
    return (
        <div className={cx("wrapper")}>
            <h2 className={cx("heading")}>Banking</h2>
            <div className={cx("banking-wrapper")}>
                <div className={cx("form")}>
                    <section className={cx("banking-card")}>
                        <div className={cx("card-wrapper")}>
                            <img
                                src={images.masterCard}
                                alt="master-card"
                                className={cx("img")}
                            />
                            <div className={cx("card-info")}>
                                <h3 className={cx("card-id")}>
                                    Mastercard •••• 2550
                                </h3>
                                <div className={cx("exp")}>
                                    <span>Expires 01/28</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className={cx("text-wrapper")}>
                        <div className={cx("text")}>Primary</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banking;
