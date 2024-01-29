import classNames from "classnames/bind";
import styles from "./Popup.module.scss";

const cx = classNames.bind(styles);

function Popup({ trigger, children, onClose }) {
  return trigger ? (
    <div className={cx("popup-wrapper")}>
      <div className={cx("popup-inner")}>
        <header className={cx("header")}>
          <div className={cx("close")} onClick={onClose}>
            <svg
              rpl=""
              fill="currentColor"
              height="16"
              icon-name="close-outline"
              viewBox="0 0 20 20"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m18.442 2.442-.884-.884L10 9.116 2.442 1.558l-.884.884L9.116 10l-7.558 7.558.884.884L10 10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558Z"></path>
            </svg>
          </div>
        </header>
        <section className={cx("container")}>
          {children}
        </section>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Popup;
