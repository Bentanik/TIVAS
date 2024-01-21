import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Navigations from "~/components/Layouts/Navigations";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("home-wrapper")}>
      {/* Header */}
      <header className={cx("header")}>
        {/* Navigations */}
        <Navigations />
      </header>
      {/* Main */}
      <main>Main</main>
      {/* Footer */}
      <div className={cx("footer")}>Footer</div>
    </div>
  );
}

export default Home;
