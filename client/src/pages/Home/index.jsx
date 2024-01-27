import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Navigations from "~/components/Layouts/Navigations";
import Footer from "~/components/Layouts/Footer";
import Popup from "~/components/AuthPopup";
import { useState } from "react";
import Login from "~/components/Layouts/Login";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "~/services";
import createAxios from "~/configs/axios";
import { resetLogin } from "~/redux/authSlice";
import Register from "~/components/Layouts/Register";
import ToastNotify from "~/components/ToastNotify";

const cx = classNames.bind(styles);

function Home() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.login.user);

  const handleCloseLogin = () => {
    setLogin(false);
    dispatch(resetLogin());
  };

  const handleCloseRegister = () => {
    setRegister(false);
    // dispatch(resetLogin());
  };

  const handleAccessRegister = () => {
    setLogin(false);
    setRegister(true);
  };

  const handleAccessLogin = () => {
    setLogin(true);
    setRegister(false);
  };

  const axiosInstance = createAxios(dispatch, currentUser);

  const action = async () => {
    try {
      const res = await getAll(axiosInstance);
      console.log(res);
    } catch (err) {
      console.log("Error");
    }
  };

  return (
    <div className={cx("home-wrapper")}>
      {/* Header */}
      <header className={cx("header")}>
        {/* Navigations */}
        <Navigations triggerLogin={setLogin} triggerRegister={setRegister} />
      </header>
      {/* Main */}
      <main>
        <div onClick={action}>Button</div>
      </main>
      {/* Footer */}
      <footer className={cx("footer")}>
        <Footer />
      </footer>
      {!currentUser && (
        <>
          <Popup trigger={login} onClose={handleCloseLogin}>
            <Login handleAccessRegister={handleAccessRegister} />
          </Popup>
          <Popup trigger={register} onClose={handleCloseRegister}>
            <Register handleAccessLogin={handleAccessLogin} />
          </Popup>
        </>
      )}
    </div>
  );
}

export default Home;
