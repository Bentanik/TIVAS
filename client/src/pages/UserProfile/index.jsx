import classNames from "classnames/bind";
import styles from "./UserProfile.module.scss";
import Navigations from "~/components/Layouts/Navigations";
import Footer from "~/components/Layouts/Footer";

const cx = classNames.bind(styles);

function UserProfile() {
  return (
    <div className={cx("profile-wrapper")}>
      <Navigations />
      <div className={cx("profile")}>
        <div className={cx("volt8A")}>
          <form style={{ marginTop: 20, display: "flex", marginTop: 120, gap: 60,marginBottom: 120 }}>
            <div
              className={cx("left-content")}
              style={{ backgroundColor: "white", padding: 50, width: 800 }}
            >
              <td className={cx("general-text")}> General Infomation</td>
              <div className={cx("user-info")}>
                <div className={cx("crumb-info")}>
                  <label className={cx("full-name")}>First Name</label>
                  <input
                    className={cx("input")}
                    type="text"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className={cx("crumb-info")}>
                  <label className={cx("full-name")}>Last Name</label>
                  <input
                    className={cx("input")}
                    type="text"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              {/**/}
              <div style={{ marginTop: 20 }} className={cx("user-info")}>
                <div className={cx("crumb-info")}>
                  <label className={cx("full-name")}>Email</label>
                  <input className={cx("input")} type="text" placeholder="Enter your email" />
                </div>
                <div className={cx("crumb-info")}>
                  <label className={cx("full-name")}>Phone</label>
                  <input
                    className={cx("input")}
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div style={{ marginTop: 20 }} className={cx("user-info")}>
                <div className={cx("crumb-info")}>
                  <label className={cx("full-name")}>Birthday</label>
                  <input
                    className={cx("input")}
                    type="text"
                    placeholder="dd/mm/yy"
                  />
                </div>
                <div className={cx("crumb-info")}>
                  <label className={cx("full-name")}>Gender</label>
                  <select className={cx("form-control")} name={cx("sort")}>
                    {/* Gender Option */}
                    <option value={cx("relevance")} selected={cx("selected")}>
                      {" "}
                      Male
                    </option>
                    <option value={cx("newest")}>Female</option>
                  </select>
                </div>
              </div>
              <div className={cx("address-content")}>
                <div className={cx("address-info")}>
                  <label className={cx("full-name")}>Address</label>
                  <input
                    className={cx("address-input")}
                    type="text"
                    placeholder="dd/mm/yy"
                  />
                </div>
                <div className={cx("bank-info")}>
                  <label className={cx("full-name")}>Bank account number</label>
                  <input
                    className={cx("bank-input")}
                    type="text"
                    placeholder="1234 5678 8242 1180"
                  />
                </div>
              </div>
              <button className={cx("button")}>Save</button>
            </div>
            <div className={cx("right-content")}>
              <div className={cx("user-img")}>
                <img
                  className={cx("box-img")}
                  alt=""
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhcVcxgW8LzmIu36MCeJb81AHXlI8CwikrHNh5vzY8A&s"
                  }
                />
                <div id="col-rev" className={cx("right-content")}>
                  <div className={cx("box-name")}>NguyenVanA</div>
                  <div className={cx("box-email")}>nvase123456@fpt.edu.vn</div>
                  <div className={cx("box-add")}>TP.Ho Chi Minh, VietNam</div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
