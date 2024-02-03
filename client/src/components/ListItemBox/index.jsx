import classNames from "classnames/bind";
import styles from "./ListBeatBox.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "~/assets";

const cx = classNames.bind(styles);

function ListItemBox({ onClick }) {

    
    return (
    <div className={cx("list-box")} onClick={onClick}>
        <div className={cx("card-item")}>
            <img className={cx("box-img")} src={images.pageOwner} alt="anh" />
        </div>
        <div className={cx("content")}>
            {/* Content left */}
            <div className={cx("content-left")}>
                <h2 className={cx("name")}>VietNam</h2>
            </div>
        </div>
    </div>);
}
export default ListItemBox;