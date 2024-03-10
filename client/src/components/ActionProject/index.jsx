import TippyHeadless from "@tippyjs/react/headless";
import styles from "./ActionProject.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { banUserById, getAllUsers, unBanUserById } from "~/controllers/user";
import { useDispatch, useSelector } from "react-redux";
import createAxios from "~/configs/axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function ActionProject({ id, nameProject, setNotify }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth.login.user);
  const axiosInstance = createAxios(dispatch, currentUser);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleNavigate = (value, id) => {
    if (value === "view_project_detail") {
      navigate(`/admin/manageproject/projectdetail/${id}`);
    } else if (value === "create_type_room")
      navigate(`/admin/manageproject/createtyperoom/${id}`);
    else if (value === "manage_type_room")
      navigate(`/admin/manageproject/managetyperoom/${id}`);
  };

  return (
    <div>
      <TippyHeadless
        visible={open === true}
        interactive
        render={(attrs) => (
          <div className="box" tabIndex="-1" {...attrs}>
            <section className={cx("container")}>
              <div className={cx("list")}>
                <div
                  className={cx("item", "view_project_detail")}
                  onClick={() => handleNavigate("view_project_detail", id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0" />
                    <path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086z" />
                  </svg>
                  <span className={cx("title")}>View project detail</span>
                </div>
                <div
                  className={cx("item", "create_type_room")}
                  onClick={() => handleNavigate("create_type_room", id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                  </svg>
                  <span className={cx("title")}>Create type room</span>
                </div>
                <div
                  className={cx("item", "manage_type_room")}
                  onClick={() => handleNavigate("manage_type_room", id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1" />
                  </svg>
                  <span className={cx("title")}>Manage type room</span>
                </div>
                {/* {banStatus === 0 ? (
                  <div className={cx("item", "ban")} onClick={handleOpenPopup}>
                    <svg
                      className={cx("icon")}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M2.71 12.584q.328.378.706.707l9.875-9.875a7 7 0 0 0-.707-.707l-9.875 9.875Z" />
                    </svg>
                    <span className={cx("title")}>Ban user</span>
                  </div>
                ) : (
                  <div
                    className={cx("item", "unban")}
                    onClick={handleClickUnban}
                  >
                    <svg
                      className={cx("icon")}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M2.71 12.584q.328.378.706.707l9.875-9.875a7 7 0 0 0-.707-.707l-9.875 9.875Z" />
                    </svg>
                    <span className={cx("title")}>Unban user</span>
                  </div>
                )} */}
              </div>
            </section>
          </div>
        )}
        onClickOutside={handleClose}
      >
        <svg
          onClick={toggleOpen}
          className={cx("icon")}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z" />
          <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
          <path d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z" />
        </svg>
      </TippyHeadless>
    </div>
  );
}

export default ActionProject;
