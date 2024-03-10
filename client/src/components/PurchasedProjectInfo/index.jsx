import classNames from "classnames/bind";
import styles from "./PurchasedProjectInfo.module.scss";
import images from "~/assets/images";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Rating, Stack, Pagination } from "@mui/material";
import { getAllTimeshare } from "~/controllers/timeshare";
import { useDispatch, useSelector } from "react-redux";
import createAxios from "~/configs/axios";

const cx = classNames.bind(styles);

function PurchasedProjectInfo() {
    const [countPage, setCountPage] = useState(1);
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector((state) => state.auth.login.user);
    const axiosInstance = createAxios(dispatch, currentUser);

    const handlePageChange = (event, value) => {
        setPage(value);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchListing = async () => {
            const res = await getAllTimeshare(axiosInstance, { page: page });
            // setListingResort(res.data);
            // console.log(res.data);
            setCountPage(res.countPages);
        };
        fetchListing();
    }, [page]);
    return (
        <div className={cx("ticket-detail-wrapper")}>
            <div className={cx("ticket-detail")}>
                <table className={cx("table")}>
                    <thead className={cx("thead")}>
                        <tr>
                            <th className={cx("column", "index")}>
                                <h4 className={cx("title")}>ID</h4>
                            </th>
                            <th className={cx("project", "column")}>
                                <h4 className={cx("title")}>Project</h4>
                            </th>
                            <th className={cx("unit", "column")}>
                                <h4 className={cx("title")}>
                                    Reservation Date
                                </h4>
                            </th>
                            <th className={cx("date", "column")}>
                                <h4 className={cx("title")}>
                                    Reservation code
                                </h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody className={cx("tbody")}>
                        <tr
                            // key={index}
                            className={cx("trow")}
                            // onClick={() => handleNavigate(item.id)}
                        >
                            <td className={cx("index", "column")}>
                                <span className={cx("num", "text")}>1</span>
                            </td>
                            <td className={cx("project", "column")}>
                                <figure className={cx("infor")}>
                                    <img
                                        src={images.resort}
                                        alt="image_one"
                                        className={cx("image")}
                                    />
                                    <section className={cx("box")}>
                                        <h3
                                            className={cx(
                                                "name-project",
                                                "text"
                                            )}
                                        >
                                            cc
                                        </h3>
                                        <div className={cx("location")}>
                                            <svg
                                                className={cx("icon")}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                            </svg>
                                            <span
                                                className={cx(
                                                    "position",
                                                    "text"
                                                )}
                                            >
                                                cc
                                            </span>
                                        </div>
                                    </section>
                                </figure>
                            </td>
                            <td className={cx("unit", "column")}>
                                <span className={cx("name", "text")}>cc</span>
                            </td>

                            <td className={cx("date", "column")}>
                                <span className={cx("name")}>cc</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <tfoot className={cx("tfoot")}>
                <tr className={cx("trow")}>
                    <Stack spacing={2}>
                        <Pagination
                            count={countPage}
                            page={page}
                            variant="outlined"
                            shape="rounded"
                            onChange={handlePageChange}
                            className={cx("pagination")}
                        />
                    </Stack>
                </tr>
            </tfoot>
        </div>
    );
}

export default PurchasedProjectInfo;
