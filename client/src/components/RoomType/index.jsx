import classNames from "classnames/bind";
import styles from "./RoomType.module.scss";
import { Link } from "react-router-dom";
import TippyHeadless from "@tippyjs/react/headless";

import images from "~/assets/images";
import { useState } from "react";
import Popup from "../AuthPopup";
import RoomTypeDetail from "../RoomTypeDetail";
const cx = classNames.bind(styles);

const blog_link = {
  link: "/blog",
};

function RoomType({ data }) {
  const [openDetail, setOpenDetail] = useState(false);

  const hideCloseDetail = () => {
    setOpenDetail(false);
  };

  const hideOnClickOutSide = (check) => {
  };

  return (
    <div className={cx("room-type-wrapper")}>
      <div className={cx("room-type-block")}>
        <div className={cx("content-wrapper")}>
          {/* Left content */}
          <div className={cx("left-content")}>
            <div className={cx("left-row")}>
              <img
                src={data.images[0].pathUrl}
                alt="Thumb_Image"
                className={cx("thumb-img")}
              />
              <div className={cx("list-item")}>
                {/* First List */}
                <div className={cx("first-list")}>
                  <h2 className={cx("sub-title")}>{data.name}</h2>
                  <div className={cx("guest", "row")}>
                    <img
                      className={cx("icon")}
                      src={images.personIcon}
                      alt="Locate Icon"
                    />
                    <div className={cx("text")}>Guests</div>
                  </div>
                  <div className={cx("area", "row")}>
                    <img
                      className={cx("icon")}
                      src={images.areaIcon}
                      alt="Locate Icon"
                    />
                    <div className={cx("text")}>{data.size}</div>
                  </div>
                </div>
                {/* Second List */}
                <div className={cx("second-list")}>
                  <div className={cx("text", "bold")}>{data.bedrooms} Room</div>
                  <div className={cx("type-bed", "row")}>
                    <img
                      className={cx("icon")}
                      src={images.bedIcon}
                      alt="Locate Icon"
                    />
                    <div className={cx("text")}>{data.bedTypes}</div>
                  </div>
                  <div className={cx("bath", "row")}>
                    <img
                      className={cx("icon")}
                      src={images.bathIcon}
                      alt="Locate Icon"
                    />
                    <div className={cx("text")}>{data.bathrooms} Bathrooms</div>
                  </div>
                  <div className={cx("kitchen", "row")}>
                    <img
                      className={cx("icon")}
                      src={images.kitchenIcon}
                      alt="Locate Icon"
                    />
                    <div className={cx("text")}>Full Kitchen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className={cx("right-content")}>
            <div className={cx("price")}>
              From <span className={cx("both")}>$96</span> night
            </div>
            <div className={cx("unit-btn")} onClick={() => setOpenDetail(true)}>
              Unit Details
            </div>
          </div>
        </div>
      </div>
      <Popup
        trigger={openDetail}
        onClose={hideCloseDetail}
        onClickOutSide={hideOnClickOutSide}
      >
        <div></div>
      </Popup>
    </div>
  );
}

export default RoomType;
