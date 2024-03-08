import classNames from "classnames/bind";
import styles from "./AdminShowListing.module.scss";
import { useEffect, useRef } from "react";
import { useState } from "react";
import TippyHeadless from "@tippyjs/react/headless";
import MenuList from "~/components/MenuList";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AdminShowListing() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handlePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleClose = () => {
        setIsPopupOpen(false);
    };
    return (
        <div className={cx("wrapper")}>
            <TippyHeadless
                render={(attrs) => (
                    <div
                        placement="top"
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <div className={cx("popup-wrapper")}>
                            <MenuList />
                        </div>
                    </div>
                )}
                visible={isPopupOpen}
                onClickOutside={handleClose}
            >
                <Link className={cx("listing")} onClick={handlePopup}>
                    <h1 className={cx("show")}>...</h1>
                </Link>
            </TippyHeadless>
        </div>
    );
}

export default AdminShowListing;
