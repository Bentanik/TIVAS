import classNames from "classnames/bind";
import styles from "./Destination.module.scss";
import React, { useState } from "react";
import ListItemBox from "~/components/ListItemBox";
import Navigations from "~/components/Layouts/Navigations";
import Footer from "~/components/Layouts/Footer";
import PaymentIntro from "~/components/PaymentIntro/PaymentIntro";
import images from "~/assets";
const cx = classNames.bind(styles);
const DATA = [
    {
        reName: "Hot Xoan",
    },
    {
        reName: "Hot Xoan",
    },
    {
        reName: "Hot Xoan",
    },
    {
        reName: "Hot Xoan",
    },
    {
        reName: "Hot Xoan",
    },
];

function Destination() {
    const [search, setSearch] = useState("");
    const [list, setList] = useState(DATA);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        // setList(data);
    };

    return (
        <div className={cx("destination-intro")}>
            <Navigations />
            <h1 className={cx("slogan")}>FIND A TIMESHARE RESORT</h1>
            <div className={cx("favorite-item")}>
                <h2 className={cx("text-item")}>
                    Our Comunity's Favorite Destination
                </h2>
                <div className={cx("list-item")}>
                    {list.map((item, index) => {
                        return <ListItemBox id={item.id} name={item.reName} />;
                    })}
                </div>
            </div>
            <div className={cx("feature-intro")}>
                <h2 className={cx("text-item-feature")}>Features & Rentals</h2>
                <div className={cx("feature-body")}>
                    <div className={cx("item")}>
                        <div className={cx("feature-icon")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 32 32"
                                fill="none"
                            >
                                <path
                                    d="M24.3175 21.9048H6.53968V9.33337H24.3175M24.3175 3.61909H23.0476V1.33337H20.5079V3.61909H10.3492V1.33337H7.80952V3.61909H6.53968C5.86612 3.61909 5.22014 3.8599 4.74386 4.28856C4.26757 4.71721 4 5.29859 4 5.9048V21.9048C4 22.511 4.26757 23.0924 4.74386 23.521C5.22014 23.9497 5.86612 24.1905 6.53968 24.1905H24.3175C24.991 24.1905 25.637 23.9497 26.1133 23.521C26.5896 23.0924 26.8571 22.511 26.8571 21.9048V5.9048C26.8571 5.29859 26.5896 4.71721 26.1133 4.28856C25.637 3.8599 24.991 3.61909 24.3175 3.61909ZM21.181 12.8305L19.8349 11.6191L13.6381 17.1962L10.946 14.7734L9.6 15.9848L13.6381 19.6191L21.181 12.8305Z"
                                    fill="#FFCC41"
                                />
                            </svg>
                        </div>
                        <span className={cx("feature-text")}>
                            Valentine's Day
                        </span>
                    </div>
                    <div className={cx("item")}>
                        <div className={cx("feature-icon")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 32 32"
                                fill="none"
                            >
                                <path
                                    d="M24.3175 21.9048H6.53968V9.33337H24.3175M24.3175 3.61909H23.0476V1.33337H20.5079V3.61909H10.3492V1.33337H7.80952V3.61909H6.53968C5.86612 3.61909 5.22014 3.8599 4.74386 4.28856C4.26757 4.71721 4 5.29859 4 5.9048V21.9048C4 22.511 4.26757 23.0924 4.74386 23.521C5.22014 23.9497 5.86612 24.1905 6.53968 24.1905H24.3175C24.991 24.1905 25.637 23.9497 26.1133 23.521C26.5896 23.0924 26.8571 22.511 26.8571 21.9048V5.9048C26.8571 5.29859 26.5896 4.71721 26.1133 4.28856C25.637 3.8599 24.991 3.61909 24.3175 3.61909ZM21.181 12.8305L19.8349 11.6191L13.6381 17.1962L10.946 14.7734L9.6 15.9848L13.6381 19.6191L21.181 12.8305Z"
                                    fill="#FFCC41"
                                />
                            </svg>
                        </div>
                        <span className={cx("feature-text")}>
                            President Day
                        </span>
                    </div>
                    <div className={cx("item")}>
                        <div className={cx("feature-icon")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="55"
                                height="55"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M5.5 7C5.10218 7 4.72064 6.84196 4.43934 6.56066C4.15804 6.27936 4 5.89782 4 5.5C4 5.10218 4.15804 4.72064 4.43934 4.43934C4.72064 4.15804 5.10218 4 5.5 4C5.89782 4 6.27936 4.15804 6.56066 4.43934C6.84196 4.72064 7 5.10218 7 5.5C7 5.89782 6.84196 6.27936 6.56066 6.56066C6.27936 6.84196 5.89782 7 5.5 7ZM21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.89 2 2 2.89 2 4V11C2 11.55 2.22 12.05 2.59 12.41L11.58 21.41C11.95 21.77 12.45 22 13 22C13.55 22 14.05 21.77 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.44 21.77 11.94 21.41 11.58Z"
                                    fill="#FFCC41"
                                    fill-opacity="0.97"
                                />
                            </svg>
                        </div>
                        <span className={cx("feature-text")}>
                            Rentals with Flexible Cancellation
                        </span>
                    </div>
                </div>
                <div className={cx("feature-body-bottom")}>
                    <div className={cx("item")}>
                        <div className={cx("feature-icon")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="55"
                                height="55"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M5.5 7C5.10218 7 4.72064 6.84196 4.43934 6.56066C4.15804 6.27936 4 5.89782 4 5.5C4 5.10218 4.15804 4.72064 4.43934 4.43934C4.72064 4.15804 5.10218 4 5.5 4C5.89782 4 6.27936 4.15804 6.56066 4.43934C6.84196 4.72064 7 5.10218 7 5.5C7 5.89782 6.84196 6.27936 6.56066 6.56066C6.27936 6.84196 5.89782 7 5.5 7ZM21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.89 2 2 2.89 2 4V11C2 11.55 2.22 12.05 2.59 12.41L11.58 21.41C11.95 21.77 12.45 22 13 22C13.55 22 14.05 21.77 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.44 21.77 11.94 21.41 11.58Z"
                                    fill="#FFCC41"
                                    fill-opacity="0.97"
                                />
                            </svg>
                        </div>
                        <span className={cx("feature-text")}>
                            Spring & Summer Day
                        </span>
                    </div>
                    <div className={cx("item")}>
                        <div className={cx("feature-icon")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="55"
                                height="55"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M5.5 7C5.10218 7 4.72064 6.84196 4.43934 6.56066C4.15804 6.27936 4 5.89782 4 5.5C4 5.10218 4.15804 4.72064 4.43934 4.43934C4.72064 4.15804 5.10218 4 5.5 4C5.89782 4 6.27936 4.15804 6.56066 4.43934C6.84196 4.72064 7 5.10218 7 5.5C7 5.89782 6.84196 6.27936 6.56066 6.56066C6.27936 6.84196 5.89782 7 5.5 7ZM21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.89 2 2 2.89 2 4V11C2 11.55 2.22 12.05 2.59 12.41L11.58 21.41C11.95 21.77 12.45 22 13 22C13.55 22 14.05 21.77 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.44 21.77 11.94 21.41 11.58Z"
                                    fill="#FFCC41"
                                    fill-opacity="0.97"
                                />
                            </svg>
                        </div>
                        <span className={cx("feature-text")}>
                            Newest Timeshare Rentals
                        </span>
                    </div>
                    <div className={cx("item")}>
                        <div className={cx("feature-icon")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="55"
                                height="55"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M5.5 7C5.10218 7 4.72064 6.84196 4.43934 6.56066C4.15804 6.27936 4 5.89782 4 5.5C4 5.10218 4.15804 4.72064 4.43934 4.43934C4.72064 4.15804 5.10218 4 5.5 4C5.89782 4 6.27936 4.15804 6.56066 4.43934C6.84196 4.72064 7 5.10218 7 5.5C7 5.89782 6.84196 6.27936 6.56066 6.56066C6.27936 6.84196 5.89782 7 5.5 7ZM21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.89 2 2 2.89 2 4V11C2 11.55 2.22 12.05 2.59 12.41L11.58 21.41C11.95 21.77 12.45 22 13 22C13.55 22 14.05 21.77 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.44 21.77 11.94 21.41 11.58Z"
                                    fill="#FFCC41"
                                    fill-opacity="0.97"
                                />
                            </svg>
                        </div>
                        <span className={cx("feature-text")}>
                            Last-minutes Timeshare Rentals
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx("destination-img")}>
                <img
                    className={cx("box-img")}
                    style={{ witdh: "1400px" }}
                    src={images.DestinationImg}
                    alt="anh"
                />
            </div>
            <div>
                <PaymentIntro />
            </div>
            <Footer />
        </div>
    );
}

export default Destination;
