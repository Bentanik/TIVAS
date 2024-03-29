import classNames from "classnames/bind";
import styles from "./PaymentIntro.module.scss";
const cx = classNames.bind(styles);

function PaymentIntro() {
    return (
        <div className={cx("payment-intro")}>
            <div className={cx("header-slogan")}>
                <span>
                    How It Works?
                </span>
                <span>
                    Find a perfect home
                </span>
            </div>
            <div className={cx("part")}>
                <div className={cx("e-part")}>
                    <div className={cx("body")}>
                        <div className={cx("body-left")}>
                            <logo>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <path d="M4.80005 8.40005C4.79879 7.54988 5.09845 6.72669 5.64596 6.07628C6.19347 5.42588 6.9535 4.99023 7.79144 4.8465C8.62938 4.70277 9.49114 4.86024 10.2241 5.29101C10.9571 5.72178 11.5139 6.39805 11.7961 7.20005H39.6001C40.4508 7.19887 41.2745 7.49903 41.9251 8.0473C42.5756 8.59557 43.0109 9.35651 43.1539 10.1952C43.2968 11.0339 43.1381 11.8961 42.7059 12.6289C42.2737 13.3617 41.596 13.9177 40.7929 14.1984L40.8001 14.4V31.2C40.8001 33.1096 40.0415 34.941 38.6912 36.2912C37.341 37.6415 35.5096 38.4 33.6001 38.4H16.8001C15.0286 38.4023 13.3189 37.7492 12.0001 36.5664V41.4C12.0001 41.8774 11.8104 42.3353 11.4728 42.6728C11.1353 43.0104 10.6774 43.2 10.2001 43.2H6.60005C6.12266 43.2 5.66483 43.0104 5.32726 42.6728C4.98969 42.3353 4.80005 41.8774 4.80005 41.4V8.40005ZM38.4001 31.2V14.4H12.0001V31.2C12.0001 32.4731 12.5058 33.694 13.4059 34.5942C14.3061 35.4943 15.527 36 16.8001 36H33.6001C34.8731 36 36.094 35.4943 36.9942 34.5942C37.8943 33.694 38.4001 32.4731 38.4001 31.2ZM9.60005 12H39.6001C39.9183 12 40.2235 11.8736 40.4486 11.6486C40.6736 11.4235 40.8001 11.1183 40.8001 10.8C40.8001 10.4818 40.6736 10.1766 40.4486 9.95152C40.2235 9.72648 39.9183 9.60005 39.6001 9.60005H9.60005V8.40005C9.60005 8.08179 9.47362 7.77656 9.24858 7.55152C9.02354 7.32648 8.71831 7.20005 8.40005 7.20005C8.08179 7.20005 7.77657 7.32648 7.55153 7.55152C7.32648 7.77656 7.20005 8.08179 7.20005 8.40005V40.8H9.60005V12ZM18.0001 23.892V30.012C18.0001 30.3303 18.1265 30.6355 18.3515 30.8606C18.5766 31.0856 18.8818 31.212 19.2001 31.212H21.6001C21.9183 31.212 22.2235 31.0856 22.4486 30.8606C22.6736 30.6355 22.8001 30.3303 22.8001 30.012V27.612C22.8001 27.2938 22.9265 26.9886 23.1515 26.7635C23.3766 26.5385 23.6818 26.412 24.0001 26.412H26.4001C26.7183 26.412 27.0235 26.5385 27.2486 26.7635C27.4736 26.9886 27.6001 27.2938 27.6001 27.612V30.012C27.6001 30.3303 27.7265 30.6355 27.9515 30.8606C28.1766 31.0856 28.4818 31.212 28.8001 31.212H31.2001C31.5183 31.212 31.8235 31.0856 32.0486 30.8606C32.2736 30.6355 32.4001 30.3303 32.4001 30.012V23.892C32.4001 23.5528 32.3283 23.2174 32.1893 22.908C32.0503 22.5986 31.8473 22.3221 31.5937 22.0968L25.9969 17.1288C25.7772 16.9338 25.4937 16.8261 25.2001 16.8261C24.9064 16.8261 24.6229 16.9338 24.4033 17.1288L18.8065 22.0968C18.5528 22.3221 18.3498 22.5986 18.2108 22.908C18.0718 23.2174 18 23.5528 18.0001 23.892Z" fill="black" />
                                </svg>
                            </logo>
                            <div className={cx("fe")}>Find real estate</div>
                            <span className={cx("text-fe")}>Unlock your dream home – luxury, comfort, prime location. Let's make it yours!"
                            </span>
                        </div>
                        <div className={cx("line")}></div>
                    </div>
                </div>
                <div className={cx("e-part")}>
                    <div className={cx("body")}>
                        <div className={cx("body-left")}>
                            <logo>
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" viewBox="0 0 45 40" fill="none">
                                    <path d="M37.4 21.8L26 33.2H21.4V28.6L32.8 17.2L37.4 21.8ZM44.2 20.2C44.2 20.8 43.6 21.4 43 22L38 27L36.2 25.2L41.4 20L40.2 18.8L38.8 20.2L34.2 15.6L38.6 11.4C39 11 39.8 11 40.4 11.4L43.2 14.2C43.6 14.6 43.6 15.4 43.2 16C42.8 16.4 42.4 16.8 42.4 17.2C42.4 17.6 42.8 18 43.2 18.4C43.8 19 44.4 19.6 44.2 20.2ZM4 36V4H18V14H28V17L32 13V12L20 0H4C1.8 0 0 1.8 0 4V36C0 38.2 1.8 40 4 40H28C30.2 40 32 38.2 32 36H4ZM20 30.2C19.6 30.2 19.2 30.4 19 30.4L18 26H15L10.8 29.4L12 24H9L7 34H10L15.8 28.8L17 33.4H19L20 33.2V30.2Z" fill="black" />
                                </svg>
                            </logo>
                            <div className={cx("fe")}>Place deposit</div>
                            <span className={cx("text-fe")}>I am pleased to announce that we have reached an agreement and to secure your place.
                            </span>
                        </div>
                        <div className={cx("line")}></div>
                    </div>
                </div>
                <div className={cx("e-part")}>
                    <div className={cx("body")}>
                        <div className={cx("body-left")}>
                            <logo>
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" fill="none">
                                    <path d="M32.052 9.23199L25.694 0.317993L2.316 18.994L1.02 18.98V19H0V43H42V19H40.076L36.248 7.80199L32.052 9.23199ZM35.85 19H15.794L30.732 13.908L33.776 12.934L35.85 19ZM28.1 10.58L12.68 15.836L24.892 6.07999L28.1 10.58ZM4 35.338V26.658C4.84379 26.359 5.61021 25.8754 6.24339 25.2426C6.87657 24.6098 7.36053 23.8436 7.66 23H34.34C34.6393 23.8439 35.1232 24.6104 35.7564 25.2436C36.3896 25.8768 37.1561 26.3607 38 26.66V35.34C37.1561 35.6393 36.3896 36.1232 35.7564 36.7564C35.1232 37.3896 34.6393 38.1561 34.34 39H7.664C7.36437 38.1554 6.87993 37.3883 6.24604 36.7547C5.61215 36.1212 4.8448 35.6372 4 35.338Z" fill="black" />
                                </svg>
                            </logo>
                            <div className={cx("fe")}>Deposit</div>
                            <span className={cx("text-fe")}>I recommend placing a deposit now to ensure you secure this opportunity.
                            </span>
                        </div>
                        <div className={cx("line")}></div>
                    </div>
                </div>
                <div className={cx("e-part")}>
                    <div className={cx("body")}>
                        <div className={cx("body-left")}>
                            <logo>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="44" viewBox="0 0 30 44" fill="none">
                                    <path d="M15.3201 25.34C14.6401 26 13.8601 26.58 13.0001 27V40L9.00008 44L5.00008 40L9.00008 36.58L6.00008 34L9.00008 31.42L5.00008 28V27C3.49626 26.2748 2.22856 25.1385 1.3437 23.7227C0.458832 22.307 -0.00701203 20.6695 7.97804e-05 19C7.97804e-05 14 4.00008 10 9.00008 10H9.22008C9.18008 10.14 9.08008 10.24 9.00008 10.36C8.46008 11.58 8.16008 12.86 8.06008 14.16C7.3845 14.3838 6.81065 14.8408 6.4413 15.4492C6.07195 16.0575 5.93122 16.7775 6.04432 17.4801C6.15741 18.1828 6.51695 18.8222 7.05854 19.2839C7.60012 19.7456 8.28839 19.9995 9.00008 20H9.20008C10.4801 22.5 12.6801 24.4 15.3201 25.34ZM22.0001 10C22.0001 8.74 21.8001 7.5 21.4401 6.36C24.1201 7.12 26.4201 9.1 27.4601 11.92C28.6601 15.24 27.7801 18.78 25.5001 21.18L30.0001 33.36L27.5601 38.5L22.4401 36.1L25.0001 31.52L21.3201 30.12L23.2601 26.68L18.3201 24.82L18.0001 23.9C16.3374 23.7226 14.7576 23.0835 13.4392 22.055C12.1209 21.0265 11.1166 19.6496 10.5401 18.08C9.72785 15.836 9.83797 13.3616 10.8463 11.1987C11.8547 9.03575 13.6791 7.36057 15.9201 6.54C16.2801 6.42 16.6601 6.34 17.0001 6.26C16.3351 4.97715 15.3307 3.90148 14.0963 3.15029C12.8619 2.3991 11.445 2.00121 10.0001 2C5.58008 2 2.00008 5.58 2.00008 10C2.00008 10.18 2.00008 10.34 2.06008 10.52C1.40008 11.06 0.80008 11.64 0.30008 12.3C0.12008 11.56 7.97804e-05 10.8 7.97804e-05 10C7.97804e-05 4.48 4.48008 0 10.0001 0C15.5201 0 20.0001 4.48 20.0001 10C20.0001 12.32 19.2001 14.42 17.8801 16.12C22.1601 15.76 22.0001 10 22.0001 10ZM15.6201 14.2C15.7401 14.54 15.9201 14.82 16.1201 15.08C17.2401 13.76 17.9401 12.08 18.0001 10.22C17.7801 10.26 17.6001 10.3 17.4001 10.36C15.8401 10.94 15.0001 12.66 15.6201 14.2Z" fill="black" />
                                </svg>
                            </logo>
                            <div className={cx("fe")}>Take the keys</div>
                            <span className={cx("text-fe")}>After completing the transaction, the house keys will be transferred to you."
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PaymentIntro;