import classNames from "classnames/bind";
import styles from "./AllUserPurchasedSuccess.module.scss";
// import PurchasedProjectInfo from "~/components/PurchasedProjectInfo";
import images from "~/assets/images";
import Tippy from "@tippyjs/react";

import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Rating, Stack, Pagination } from "@mui/material";
import { getUserPriority } from "~/controllers/reservationTicket";

import { useDispatch, useSelector } from "react-redux";
import createAxios from "~/configs/axios";

const cx = classNames.bind(styles);

const limit = 5;

// Set Date
function formatDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
}

function AllUserPurchasedSuccess() {
    const [userPriorityData, setUserPriorityData] = useState([]);
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

    const { id } = useParams();

    useEffect(() => {
        const fetchListing = async () => {
            const res = await getUserPriority(axiosInstance, id, {
                page: page,
                limit,
            });

            if (res?.err === 0) {
                setUserPriorityData(res?.data);
                setCountPage(res.countPages);
            } else {
                setUserPriorityData([]);
                setCountPage(1);
            }
        };
        fetchListing();
    }, [page]);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("row")}>
                <h1 className={cx("title")}>Purchased Success</h1>

                <Tippy
                    content="Show all timeshare you purchased success"
                    placement="top"
                >
                    <img
                        className={cx("icon")}
                        src={images.importantIcon}
                        alt="Locate Icon"
                    />
                </Tippy>
            </div>
            {userPriorityData.length === 0 ? (
                <div className={cx("empty-wrapper")}>
                    <img
                        src={images.empty}
                        alt="empty"
                        className={cx("empty-img")}
                    />
                </div>
            ) : (
                <div className={cx("content")}>
                    <div className={cx("ticket-detail-wrapper")}>
                        <div className={cx("ticket-detail")}>
                            <table className={cx("table")}>
                                <thead className={cx("thead")}>
                                    <tr>
                                        <th className={cx("column", "index")}>
                                            <h4 className={cx("title")}>ID</h4>
                                        </th>
                                        <th className={cx("project", "column")}>
                                            <h4 className={cx("title")}>
                                                Project
                                            </h4>
                                        </th>

                                        <th className={cx("sleep", "column")}>
                                            <h4 className={cx("title")}>
                                                TypeRoom
                                            </h4>
                                        </th>
                                        <th className={cx("date", "column")}>
                                            <h4 className={cx("title")}>
                                                User Name
                                            </h4>
                                        </th>
                                        <th className={cx("date", "column")}>
                                            <h4 className={cx("title")}>
                                                Booking Status
                                            </h4>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className={cx("tbody")}>
                                    {userPriorityData?.map((item, index) => {
                                        return (
                                            <tr
                                                // key={index}
                                                className={cx("trow")}
                                                // onClick={() => handleNavigate(item.id)}
                                            >
                                                <td
                                                    className={cx(
                                                        "index",
                                                        "column"
                                                    )}
                                                >
                                                    <span
                                                        className={cx(
                                                            "num",
                                                            "text"
                                                        )}
                                                    >
                                                        {index + 1}
                                                    </span>
                                                </td>
                                                <td
                                                    className={cx(
                                                        "project",
                                                        "column"
                                                    )}
                                                >
                                                    <figure
                                                        className={cx("infor")}
                                                    >
                                                        <img
                                                            src={
                                                                item?.projectThumbnailPathUrl
                                                            }
                                                            alt="image_one"
                                                            className={cx(
                                                                "image"
                                                            )}
                                                        />
                                                        <section
                                                            className={cx(
                                                                "box"
                                                            )}
                                                        >
                                                            <h3
                                                                className={cx(
                                                                    "name-project",
                                                                    "text"
                                                                )}
                                                            >
                                                                {
                                                                    item?.projectName
                                                                }
                                                            </h3>
                                                            <div
                                                                className={cx(
                                                                    "location"
                                                                )}
                                                            >
                                                                <svg
                                                                    className={cx(
                                                                        "icon"
                                                                    )}
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
                                                                    {
                                                                        item?.location
                                                                    }
                                                                </span>
                                                            </div>
                                                        </section>
                                                    </figure>
                                                </td>
                                                {/* <td className={cx("unit", "column")}>
                                        <span className={cx("name", "text")}>
                                            cc
                                        </span>
                                    </td> */}

                                                <td
                                                    className={cx(
                                                        "type-room",
                                                        "column"
                                                    )}
                                                >
                                                    <span
                                                        className={cx("name")}
                                                    >
                                                        {item?.typeRoomName}
                                                    </span>
                                                </td>
                                                <td
                                                    className={cx(
                                                        "date",
                                                        "column"
                                                    )}
                                                >
                                                    <span
                                                        className={cx("name")}
                                                    >
                                                        {item?.username}
                                                    </span>
                                                </td>
                                                <td
                                                    className={cx(
                                                        "date",
                                                        "column"
                                                    )}
                                                >
                                                    <span
                                                        className={cx("name")}
                                                    >
                                                        {item?.bookingStatus ===
                                                            0 && (
                                                            <div
                                                                className={cx(
                                                                    "btn-wrapper"
                                                                )}
                                                            >
                                                                <button
                                                                    className={cx(
                                                                        "success",
                                                                        "btn"
                                                                    )}
                                                                >
                                                                    Success
                                                                </button>
                                                                <button
                                                                    className={cx(
                                                                        "fail",
                                                                        "btn"
                                                                    )}
                                                                >
                                                                    fail
                                                                </button>
                                                            </div>
                                                        )}
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
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
            )}
        </div>
    );
}

export default AllUserPurchasedSuccess;
