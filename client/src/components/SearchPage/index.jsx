import classNames from "classnames/bind";
import styles from "./SearchPage.module.scss";
import { useState } from "react";
import TippyHeadless from "@tippyjs/react/headless";
import images from "~/assets";

const cx = classNames.bind(styles);

function SearchPage() {
    const [searchPage, setSearchPage] = useState("");

    return (
        <div className={cx("search-page-wrapper")}>
            <TippyHeadless
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <div className={cx("search-page-result")}>
                            Search result
                        </div>
                    </div>
                )}
            >
                <div className={cx("search-page")}>
                    {/* Input */}
                    <input
                        type="text"
                        value={searchPage}
                        onChange={(e) => setSearchPage(e.target.value)}
                        className={cx("search-input")}
                        placeholder="Search"
                    />
                    {/* Icon */}
                    <img
                        src={images.iconSearch}
                        alt="Search"
                        className={cx("icon-search")}
                    />
                    <button className={cx("btn-search")}>Search</button>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default SearchPage;
