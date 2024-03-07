import classNames from "classnames/bind";
import styles from "./TimeshareDetail.module.scss";
import Navigations from "~/components/Layouts/Navigations";
import RoomType from "~/components/RoomType";
import SimpleGallery from "../ProjectDetail/simplegallery";
import "photoswipe/style.css";
import { Link, useParams } from "react-router-dom";
import images from "~/assets/images";

import Footer from "~/components/Layouts/Footer";
import { useState, useEffect } from "react";
import { getTimeshareDetailById } from "~/controllers/timeshare";
import { useDispatch, useSelector } from "react-redux";
import createAxios from "~/configs/axios";
import { Backdrop, CircularProgress } from "@mui/material";

const cx = classNames.bind(styles);

function TimeshareDetail() {
  const [timeshareData, setTimeshareData] = useState({});
  const [typeRoomData, setTypeRoomData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [listImage, setListImage] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.login.user);
  const axiosInstance = createAxios(dispatch, currentUser);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTimeshareDetailById(axiosInstance, id);
      console.log(res);
      if (res?.err === 0) {
        setProjectData(res.data.Project);
        setListImage(res.data.TypeRoom.images);
        setTypeRoomData(res.data.TypeRoom);
        setTimeshareData(res.data.TimeShare);
        setAmenities(res.data.TypeRoom.amenities);
      }
    };
    fetchData();
  }, []);

  const image = listImage.map((item) => {
    return {
      largeURL: item.pathUrl,
      thumbnailURL: item.pathUrl,
      width: 974,
      height: 641,
    };
  });
  function formatDate(date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var day = date.getDate().toString().padStart(2, "0");
    return `${month}-${day}-${year}`;
  }

  var startDateString = timeshareData.startDate;
  var endDateString = timeshareData.endDate;

  var startDate = new Date(startDateString);
  var endDate = new Date(endDateString);

  var formattedStartDate = formatDate(startDate);
  var formattedEndDate = formatDate(endDate);

  return (
    <div className={cx("timeshare-detail-wrapper")}>
      <div>
        {/* Header */}
        <header className={cx("header")}>
          {/* Navigations */}
          <section className={cx("navigation")}>
            <Navigations />
          </section>
        </header>

        <div className={cx("content")}>
          <h1 className={cx("main-title")}>{projectData.name}</h1>

          {/* List Image */}
          <div className={cx("list-img")}>
            <SimpleGallery galleryID="my-test-gallery" images={image} />
          </div>

          <div className={cx("content-info")}>
            {/* Left Content */}
            <div className={cx("left-content")}>
              <div className={cx("bedroom-detail")}>
                <h2 className={cx("type-name")}>{typeRoomData.name}</h2>
                <div className={cx("row-wrapper")}>
                  <div className={cx("bedroom", "row")}>
                    <img
                      className={cx("icon")}
                      src={images.bedIcon}
                      alt="bed-icon"
                    />
                    <div className={cx("text")}>
                      {typeRoomData.bedrooms} Bedroom
                    </div>
                  </div>

                  <div className={cx("guests", "row")}>
                    <img
                      className={cx("icon")}
                      src={images.personIcon}
                      alt="person-icon"
                    />
                    <div className={cx("text")}>
                      {typeRoomData.persons} Guests
                    </div>
                  </div>
                  <div className={cx("area", "row")}>
                    <img
                      className={cx("icon")}
                      src={images.areaIcon}
                      alt="area-icon"
                    />
                    <div className={cx("text")}>{typeRoomData.size} Sq Ft</div>
                  </div>

                  <div className={cx("bedroom", "row")}>
                    <img
                      className={cx("icon")}
                      src={images.bedIcon}
                      alt="bed-icon"
                    />
                    <div className={cx("text")}>{typeRoomData.bedTypes}</div>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className={cx("amenities")}>
                <h3 className={cx("title")}>Unit Amenites</h3>

                <div className={cx("list-amenities")}>
                  {amenities.map((item, index) => (
                    <div key={index} className={cx("item")}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Unit Desciption */}
              <div className={cx("unit-desc")}>
                <h3 className={cx("title")}>Unit Description</h3>
                <div className={cx("desc")}>{typeRoomData.description}</div>
              </div>
            </div>
            {/* Right Content */}
            <div className={cx("right-content")}>
              <div className={cx("booking-info")}>
                <div className={cx("price")}>
                  {timeshareData.price}${" "}
                  <span className={cx("text")}>Total</span>
                </div>

                <div className={cx("dates")}>
                  <div className={cx("text-dates", "text")}>DATES</div>
                  <div className={cx("dates-detail", "text")}>
                    {formattedStartDate} - {formattedEndDate}
                  </div>
                </div>
                
                <div className={cx("total", "row-booking")}>
                  <div className={cx("text")}>Total (USD)</div>
                  <div className={cx("price")}>{timeshareData.price}$</div>
                </div>
                
                <button type="submit" className={cx("booking-btn", "text")}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={cx("footer")}>
          <Footer />
        </footer>
      </div>
      
    </div>
  );
}

export default TimeshareDetail;
