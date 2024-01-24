import classNames from "classnames/bind";
import styles from "./InputItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { faXbox } from "@fortawesome/free-brands-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function InputItem({ value, setValue, placeholder, errors, type = "text" }) {
  const [typeValue, setTypeValue] = useState(type);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleChangeValue = () => {
    const object = typeValue === "text" ? "password" : "text";
    setTypeValue(object);
  };

  return (
    <div className={cx("input-wrapper")}>
      <div className={cx("input")}>
        <input
          type={typeValue}
          placeholder={placeholder}
          className={cx("input-item", {
            error: errors && value === "",
          })}
          value={value}
          onChange={handleValue}
        />

        {type === "password" && value !== "" && (
          <div className={cx("password-icons")} onClick={handleChangeValue}>
            {typeValue === "password" ? (
              <div className={cx("show-password")}>
                <FontAwesomeIcon icon={faEyeSlash} />
              </div>
            ) : (
              <div className={cx("hide-password")}>
                <FontAwesomeIcon icon={faEye} />
              </div>
            )}
          </div>
        )}
        {errors && value === "" && (
          <div className={cx("error-icon")}>
            <FontAwesomeIcon icon={faCircleExclamation}  className={cx("icon")}/>
          </div>
        )}
      </div>
      {errors && value === "" && <span className={cx("text-error")}>{errors}</span>}
    </div>
  );
}

export default InputItem;
