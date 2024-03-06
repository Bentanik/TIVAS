import classNames from "classnames/bind";
import styles from "./AdminUserBanList.module.scss";
import UserBanList from "~/components/UserBanList";

import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AdminUserBanList() {
    const handlePageChange = () => {
        console.log("paginate");
    };

    return (
        <div className={cx("wrapper")}>
            <h1 className={cx("title")}> Manage Ban User</h1>
            <div className={cx("content")}>
                <div className={cx("list-user")}>
                    <div className={cx("header-list")}>
                        <div className={cx("header")}>Avatar</div>
                        <div className={cx("header")}>User Name</div>
                        <div className={cx("header")}>Full Name</div>
                        <div className={cx("header")}>Phone Name</div>
                        <div className={cx("header")}>Ban Name</div>
                    </div>

                    <UserBanList />
                    <UserBanList />
                    <UserBanList />
                    <UserBanList />
                    <UserBanList />
                    <UserBanList />
                    <UserBanList />
                    <UserBanList />
                    <UserBanList />
                    <UserBanList />
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

export default AdminUserBanList;
