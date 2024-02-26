import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import InputItem from "~/components/InputItem";
import { useEffect, useState } from "react";
import images from "~/assets/images";
import { useRef } from "react";
import { getMyUser } from "~/controllers/user";
import { useDispatch, useSelector } from "react-redux";
import createAxios from "~/configs/axios";
import { Backdrop, CircularProgress } from "@mui/material";

const cx = classNames.bind(styles);

function Profile() {
  const [avatar, setAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [numberPhone, setNumberPhone] = useState("");

  const avatarRef = useRef();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth.login.user);
  const axiosInstance = createAxios(dispatch, currentUser);

  useEffect(() => {
    const fetchDataUser = async () => {
      const res = await getMyUser(axiosInstance, "vynmvse170255");
      if (res?.err === 0) {
        setIsLoading(true);
        setUsername(res?.data?.username);
        setFullName(res?.data?.fullName);
        setNumberPhone(res?.data?.numberPhone);
      } else {
        setIsLoading(false);
        setUsername("");
        setFullName("");
        setNumberPhone("");
      }
    };
    fetchDataUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => avatar && URL.revokeObjectURL(avatar.preview);
  }, [avatar]);

  const handleFileImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      file.preview = URL.createObjectURL(file);
      setAvatar(file);
    }
  };

  const removeAvatar = () => {
    setAvatar(null);
    avatarRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={cx("wrapper")}>
      {isLoading !== "" && (
        <div>
          <h2 className={cx("heading")}>My profile</h2>
          <h3 className={cx("title")}>This is account login by Google</h3>
          <div className={cx("profile")}>
            <form onSubmit={handleSubmit}>
              <div className={cx("form")}>
                <section className={cx("information")}>
                  {/* Login google */}
                  <section className={cx("login-google")}>
                    <div className={cx("input_compo")}>
                      <label htmlFor="username" className={cx("label")}>
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        className={cx("input")}
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className={cx("input_compo")}>
                      <label htmlFor="full_name" className={cx("label")}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        className={cx("input")}
                        placeholder="Enter FullName"
                        value={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div className={cx("input_compo")}>
                      <label htmlFor="number_phone" className={cx("label")}>
                        Number phone
                      </label>
                      <input
                        type="text"
                        id="number_phone"
                        className={cx("input")}
                        placeholder="Enter Number phone"
                        value={(e) => setNumberPhone(e.target.value)}
                      />
                    </div>
                    {/* <div className={cx("input_compo")}>
                    <label htmlFor="gender" className={cx("label")}>
                      Genders
                    </label>
                    <select id="gender" className={cx("input")}>
                      <option value="male" className={cx("option")}>
                        Male
                      </option>
                      <option value="female" className={cx("option")}>
                        Female
                      </option>
                    </select>
                  </div> */}
                  </section>
                </section>
                <section className={cx("choose-avatar")}>
                  <figure className={cx("box")}>
                    <img
                      src={avatar?.preview || images.unknown}
                      alt="avatar"
                      className={cx("avatar")}
                    />
                    {avatar !== null && (
                      <img
                        src={images.trashIcon}
                        alt="remove"
                        className={cx("icon")}
                        onClick={removeAvatar}
                      />
                    )}
                  </figure>
                  <div className={cx("action")}>
                    <div className={cx("button")}>Choose image</div>
                    <input
                      ref={avatarRef}
                      type="file"
                      className={cx("input")}
                      onChange={handleFileImage}
                    />
                  </div>
                </section>
              </div>
              <button type="submit" className={cx("action-save")}>
                Save
              </button>
            </form>
          </div>
        </div>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={!isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Profile;
