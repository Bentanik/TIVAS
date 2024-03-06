import classNames from "classnames/bind";
import styles from "./AdminManageUser.module.scss";
import ListUser from "~/components/ListUser";
import { useRef, useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
// import ReactPaginate from "react-paginate";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AdminManageUser() {
    const wrapperRef = useRef(null);
    const [isWrapperColorChanged, setIsWrapperColorChanged] = useState(null);
    const [isClickedOutside, setIsClickedOutside] = useState(false);

    const handleClick = () => {
        setIsWrapperColorChanged(!isWrapperColorChanged);
    };

    const handlePageClick = () => {};

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                setIsClickedOutside(true);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isClickedOutside) {
            setIsClickedOutside(false);
            setIsWrapperColorChanged(false);
        }
    }, [isClickedOutside]);

    const handlePageChange = () => {
        console.log("xin chào ");
    };

    return (
        <div
            className={cx("wrapper", {
                "color-changed": isWrapperColorChanged,
            })}
            ref={wrapperRef}
        >
            <h1 className={cx("title")}> Manage User</h1>
            <div className={cx("content")}>
                <div className={cx("list-user")}>
                    <div className={cx("header-list")}>
                        <div className={cx("header")}>Avatar</div>
                        <div className={cx("header")}>User Name</div>
                        <div className={cx("header")}>Full Name</div>
                        <div className={cx("header")}>Phone Name</div>
                        <div className={cx("header")}>Ban Name</div>
                    </div>

                    <ListUser handleLinkClick={handleClick} />
                    <ListUser handleLinkClick={handleClick} />
                    <ListUser handleLinkClick={handleClick} />
                    <ListUser handleLinkClick={handleClick} />
                    <ListUser handleLinkClick={handleClick} />
                    <ListUser handleLinkClick={handleClick} />
                    <ListUser handleLinkClick={handleClick} />
                    <ListUser handleLinkClick={handleClick} />
                    <ListUser handleLinkClick={handleClick} />
                    <ListUser handleLinkClick={handleClick} />
                    <ListUser handleLinkClick={handleClick} />
                </div>
                {/* <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={15}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                /> */}
                <div className={cx("paginate")}>
                    <Stack spacing={2}>
                        <Pagination
                            count={22}
                            variant="outlined"
                            color="primary"
                            onChange={handlePageChange}
                        />
                    </Stack>
                </div>
            </div>
        </div>
    );
}

export default AdminManageUser;
