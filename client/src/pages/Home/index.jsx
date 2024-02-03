import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Navigations from "~/components/Layouts/Navigations";

import { Link } from "react-router-dom";

import Footer from "~/components/Layouts/Footer";
import Popup from "~/components/AuthPopup";
import { useCallback, useEffect, useState } from "react";
import Login from "~/components/Layouts/Login";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "~/services";
import createAxios from "~/configs/axios";
import { resetLogin, resetRegister, resetSendMail } from "~/redux/authSlice";
import Register from "~/components/Layouts/Register";
import { resetForm } from "~/redux/formRegisterSlice";
import Pagination from "~/components/Pagination";
import { Toaster, toast } from "sonner";
import ToastNotify from "~/components/ToastNotify";
import images from "~/assets";

const cx = classNames.bind(styles);

const blog_link = {
  link: "/blog",
};

function Home() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.login.user);

  const statusRegister = useSelector((state) => state.auth.register);

  const handleCloseLogin = () => {
    setLogin(false);
    dispatch(resetSendMail());
    dispatch(resetLogin());
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCloseRegister = useCallback(() => {
    setRegister(false);
    dispatch(resetSendMail());
    dispatch(resetForm());
    dispatch(resetRegister());
    sessionStorage.removeItem("emailRegister");
  });

  const handleAccessRegister = () => {
    setLogin(false);
    setRegister(true);
  };

  const handleAccessLogin = () => {
    setLogin(true);
    setRegister(false);
  };

  useEffect(() => {
    if (statusRegister.success) {
      handleCloseRegister();
      toast.custom(
        () => (
          <ToastNotify
            type="success"
            title="Success"
            desc={"Your account registered successfully"}
          />
        ),
        { duration: 2000 }
      );
    }
  }, [dispatch, handleCloseRegister, statusRegister.success]);

  const axiosInstance = createAxios(dispatch, currentUser);

  const action = async () => {
    try {
      const res = await getAll(axiosInstance);
      console.log(res);
      console.log(1);
    } catch (err) {
      console.log("Error");
    }
  };

  return (
    <div className={cx("home-wrapper")}>
      <Toaster position="top-right" richColors expand={true} />

      {/* Header */}
      <header className={cx("header")}>
        {/* Navigations */}
        <Navigations triggerLogin={setLogin} triggerRegister={setRegister} />
        {/* Hero */}
        <div className={cx("hero-wrapper")}>
          <img
            src={images.heroImg}
            alt="Hero_Image"
            className={cx("hero-img")}
          />
          <h1 className={cx("hero-title")}>
            Welcome to <span>Tivas</span>
          </h1>
        </div>
      </header>
      {/* Main */}
      <main className={cx("content")}>
        {/* Owner Blog */}
        <div className={cx("blog-wrapper")}>
          <div className={cx("blog-content")}>``
            {/* Thumb Image */}
            <img
              src={images.thumbImg}
              alt="Thumb_Image"
              className={cx("thumb-img")}
            />
            {/*Rigth content*/}
            <div className={cx("right-content")}>
              <h3 className={cx("right-header")}>
                Explore your home Time for payment
              </h3>
              <p className={cx("desc")}>
                We support flexible payments in stages to help you manage your
                finances conveniently, while ensuring your real estate purchase
                progress goes smoothly.
              </p>

              {/* <a href="!#"> */}
              <Link to={blog_link.link} className={cx("blog-link")}>
                Search Property
              </Link>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className={cx("footer")}>
        <Footer />
      </footer>
      {!currentUser && (
        <>
          {login === true && (
            <Popup trigger={login} onClose={handleCloseLogin}>
              <Login handleAccessRegister={handleAccessRegister} />
            </Popup>
          )}
          {register === true && (
            <Register
              handleAccessLogin={handleAccessLogin}
              trigger={register}
              handleCloseRegister={handleCloseRegister}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Home;
