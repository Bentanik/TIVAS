import classNames from "classnames/bind";
import styles from "./ListUser.module.scss";

import TippyHeadless from "@tippyjs/react/headless";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import React, { useState } from "react";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ListUser({ handleLinkClick }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        console.log("close");
    };

    const handleClick1 = () => {
        setIsPopupOpen(openPopup); //
    };

    const handleClick = () => {
        handleClick1();
        handleLinkClick();
    };

    return (
        <div className={cx("user")}>
            <Link to="#!" className={cx("user-info")}>
                <img src={images.unknown} alt="Avatar" className={cx("img")} />

                <div className={cx("text")}>Bentanik</div>
                <div className={cx("text")}>Nguyễn Mai Viết Vỹ</div>
                <div className={cx("text")}>012345678</div>

                <div className={cx("row")}>
                    <button
                        type="button"
                        onClick={() => {
                            console.log("xin chào");
                        }}
                        className={cx("ban-btn")}
                    >
                        Ban
                    </button>
                </div>
            </Link>
        </div>
    );
}

export default ListUser;
