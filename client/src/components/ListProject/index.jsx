import classNames from "classnames/bind";
import styles from "./ListProject.module.scss";
import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { DialogTitle, IconButton, DialogContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

import AdminShowListing from "../AdminShowListing";
import Reservation from "~/components/Reservation";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ListProject() {
    const [open, setOpen] = useState(false);
    const [click, setClick] = useState(false);

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        "& .MuiDialogContent-root": {
            padding: theme.spacing(2),
        },
        "& .MuiDialogActions-root": {
            padding: theme.spacing(1),
        },
    }));

    // useEffect(() => {
    //     if (open === true) {
    //         setClick(true);
    //     }
    // }, [open]);

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={cx("project")}>
            <div className={cx("project-info")}>
                <div className={cx("project-detail")}>
                    <img
                        src={images.resort}
                        alt="Avatar"
                        className={cx("img")}
                    />

                    <div className={cx("text")}>TTC Resort Ninh Thuan</div>
                    <div className={cx("text")}>Phan Rang</div>
                    <div className={cx("text")}>2024-03-19</div>
                    <div className={cx("text", "up-coming")}>Up Comming</div>
                </div>

                <div className={cx("listing")}>
                    <button
                        type="button"
                        className={cx("booking-btn", "text")}
                        onClick={() => setOpen(true)}
                        disabled={click}
                    >
                        Reservation
                    </button>
                    <>
                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <DialogTitle
                                sx={{ m: 0, p: 2 }}
                                id="customized-dialog-title"
                            >
                                Booking
                            </DialogTitle>
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: "absolute",
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <DialogContent dividers>
                                <Reservation />
                            </DialogContent>
                        </BootstrapDialog>
                    </>
                </div>
            </div>
        </div>
    );
}

export default ListProject;
