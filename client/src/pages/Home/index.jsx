import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Navigations from "~/components/Layouts/Navigations";
import Footer from "~/components/Layouts/Footer";
import Popup from "~/components/AuthPopup";
import { useState } from "react";
import Login from "~/components/Layouts/Login";

const cx = classNames.bind(styles);

function Home() {
  const [login, setLogin] = useState(false);

  const handleCloseLogin = () => {
    setLogin(false);
  };

  return (
    <div className={cx("home-wrapper")}>
      {/* Header */}
      <header className={cx("header")}>
        {/* Navigations */}
        <Navigations triggerLogin={setLogin} />
      </header>
      {/* Main */}
      <main>Main</main>
      {/* Footer */}
      <footer className={cx("footer")}>
        <Footer />
      </footer>
      <Popup trigger={login} onClose={handleCloseLogin}>
        <Login />
      </Popup>
    </div>
  );
}

export default Home;
