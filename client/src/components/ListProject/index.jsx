import classNames from "classnames/bind";
import styles from "./ListProject.module.scss";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ListProject() {
    return (
        <div className={cx("project")}>
            <Link to="#!" className={cx("project-info")}>
                <img src={images.resort} alt="Avatar" className={cx("img")} />

                <div className={cx("text")}>TTC Resort Ninh Thuan</div>
                <div className={cx("text")}>Phan Rang</div>
                <div className={cx("text")}>2024-03-19</div>
                <div className={cx("text", "up-coming")}>Up Comming</div>
            </Link>
        </div>
    );
}

export default ListProject;
