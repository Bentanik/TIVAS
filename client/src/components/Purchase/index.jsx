import classNames from "classnames/bind";
import styles from "./Purchase.module.scss";

import PurchasedProject from "~/components/PurchasedProject";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function Purchase() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab
                        label="Purchased Project"
                        {...a11yProps(0)}
                        className={cx("test")}
                        sx={{
                            fontSize: "1.2rem",
                            fontFamily: "Poppin, sans-serif",
                            minWidth: "225px",
                            fontWeight: "600",
                        }}
                    />
                    <Tab
                        label="Timeshare Booked"
                        {...a11yProps(1)}
                        className={cx("test")}
                        sx={{
                            fontSize: "1.2rem",
                            fontFamily: "Poppin, sans-serif",
                            minWidth: "225px",
                            fontWeight: "600",
                        }}
                    />
                    <Tab
                        label="Booked Success"
                        {...a11yProps(2)}
                        className={cx("test")}
                        sx={{
                            fontSize: "1.2rem",
                            fontFamily: "Poppin, sans-serif",
                            minWidth: "225px",
                            fontWeight: "600",
                        }}
                    />
                    <Tab
                        label="Purchase Success"
                        {...a11yProps(3)}
                        className={cx("test")}
                        sx={{
                            fontSize: "1.2rem",
                            fontFamily: "Poppin, sans-serif",
                            minWidth: "225px",
                            fontWeight: "600",
                        }}
                    />
                    <Tab
                        label="Purchase Fail"
                        {...a11yProps(4)}
                        className={cx("test")}
                        sx={{
                            fontSize: "1.2rem",
                            fontFamily: "Poppin, sans-serif",
                            minWidth: "225px",
                            fontWeight: "600",
                        }}
                    />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <PurchasedProject />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                Item 4
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                Item 5
            </CustomTabPanel>
        </Box>
    );
}

export default Purchase;
