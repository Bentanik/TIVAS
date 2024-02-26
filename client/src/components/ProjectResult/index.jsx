import classNames from "classnames/bind";
import styles from "./ProjectResult.module.scss";

import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ProjectResult() {
    return (
        <div className={cx("project-result")}>
            <div className={cx("content")}>
                {/* Left Content */}
                <div className={cx("left-content")}>
                    {/* Thumb Project */}

                    <Link to="/detail">
                        <img
                            className={cx("thumb-project")}
                            src={images.thumbProject}
                            alt="Thumb Project "
                        />
                    </Link>
                </div>

                {/* Right Content */}
                <div className={cx("right-content")}>
                    <Link to="/detail">
                        <h1 className={cx("project-name")}>The Rivus</h1>
                    </Link>

                    {/* Locate Row */}
                    <div className={cx("row-locate")}>
                        <Link to="/detail">
                            <img
                                className={cx("locate-icon")}
                                src={images.locateIcon}
                                alt="Locate Icon"
                            />
                        </Link>
                        <Link to="/detail">
                            <p className={cx("desc")}>
                                Thu Duc district, Ho Chi Minh
                            </p>
                        </Link>
                    </div>
                    {/* Utilities Row */}
                    <div className={cx("row-utilities")}>
                        <Link to="/detail">
                            <p className={cx("desc")}>Swimming pool</p>
                        </Link>
                        <Link to="/detail">
                            <p className={cx("desc")}>Gym</p>
                        </Link>
                        <Link to="/detail">
                            <p className={cx("desc")}>Air conditioning</p>
                        </Link>
                        <Link to="/detail">
                            <img
                                className={cx("right-arrow")}
                                src={images.rightArrow}
                                alt="Right Arrow"
                            />
                        </Link>
                    </div>

                    {/* Project Desc */}
                    <div className={cx("project-desc")}>
                        <p className={cx("desc")}>
                            ASIA’S FIRST RIVERFRONT VILLAinspired by HAUTE
                            COUTUREFor the very first time in Asia, ELIE SAAB,
                            together with Masterise Homes, collaborated to
                            launch a collection of exquisite villas by the
                            river, creating a world defined by timeless elegance
                            and beauty. The project introduces a new era of
                            Branded Residences in Vietnam.
                        </p>
                    </div>
                    {/* Detail */}
                    <div className={cx("detail")}>
                        <Link to="/detail">
                            <p className={cx("desc")}>Detail</p>
                        </Link>
                        <Link to="/detail">
                            <img
                                className={cx("right-arrow")}
                                src={images.rightArrow}
                                alt="Right Arrow"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectResult;
