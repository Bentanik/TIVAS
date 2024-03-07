import classNames from "classnames/bind";
import styles from "./ListUser.module.scss";

import TippyHeadless from "@tippyjs/react/headless";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import React, { useState } from "react";

import images from "~/assets/images";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

const cx = classNames.bind(styles);

function ListUser() {
  const [openBan, setOpenBan] = useState(false);
  const [reasonText, setReasonText] = useState("");

  const handleClickOpen = () => {
    setOpenBan(true);
  };

  const handleClose = () => {
    setOpenBan(false);
  };

  return (
    <div className={cx("user")}>
      <div className={cx("user-info")}>
        <img src={images.unknown} alt="Avatar" className={cx("img")} />

        <div className={cx("text")}>Bentanik</div>
        <div className={cx("text")}>Nguyễn Mai Viết Vỹ</div>
        <div className={cx("text")}>012345678</div>

        <div className={cx("row")}>
          <div onClick={handleClickOpen} className={cx("ban-btn")}>
            Ban
          </div>
        </div>
        <>
          <Dialog
            open={openBan}
            onClose={handleClose}
            PaperProps={{
              component: "form",
              onSubmit: (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(formData.entries());
                const email = formJson.email;
                console.log(email);
                handleClose();
              },
            }}
            className={cx("popup")}
          >
            <DialogTitle>
              <h3 className={cx("title-ban")}>Ban user: Bentanick</h3>
            </DialogTitle>
            <DialogContent className={cx("popup-content")}>
              <label htmlFor="reason" className={cx("label")}>
                Fill in the reason for banning this user
              </label>
              <textarea
                id="reason"
                type="text"
                value={reasonText}
                className={cx("textarea")}
                onChange={(e) => setReasonText(e.target.value)}
                placeholder="Reason"
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button style={{ fontSize: "1rem" }} onClick={handleClose}>
                Cancel
              </Button>
              <Button style={{ fontSize: "1rem" }} type="submit">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </>
      </div>
    </div>
  );
}

export default ListUser;
