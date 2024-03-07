import classNames from "classnames/bind";
import styles from "./ListProject.module.scss";

import images from "~/assets/images";
import { Link } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

const cx = classNames.bind(styles);

function ListProject() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={cx("project")}>
      <Link to="#!" className={cx("project-info")}>
        <img src={images.resort} alt="Avatar" className={cx("img")} />

        <div className={cx("text")}>TTC Resort Ninh Thuan</div>
        <div className={cx("text")}>Phan Rang</div>
        <div className={cx("text")}>2024-03-19</div>
        <div className={cx("text", "up-coming")}>Up Comming</div>
        <button className={cx("text")} onClick={handleClickOpen}>Open reservation</button>
      </Link>
      <Dialog
        open={open}
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
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ListProject;
