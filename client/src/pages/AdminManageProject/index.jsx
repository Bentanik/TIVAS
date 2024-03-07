import classNames from "classnames/bind";
import styles from "./AdminManageProject.module.scss";
import images from "~/assets/images";
import ListProject from "~/components/ListProject";
import { getAllProject } from "~/controllers/project";
import { useEffect, useState } from "react";
import createAxios from "~/configs/axios";
// import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

const cx = classNames.bind(styles);

function AdminManageProject() {
    const [projectData, setProjectData] = useState([]);

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.login.user);
    const axiosInstance = createAxios(dispatch, currentUser);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllProject(axiosInstance);
            console.log(res);
            if (res?.err === 0) {
                setProjectData(res.data);
                console.log(res);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={cx("wrapper")}>
            <h1 className={cx("title")}>Manage Project</h1>
            <div className={cx("content")}>
                <div className={cx("list-project")}>
                    <div className={cx("header-list")}>
                        <div className={cx("header")}>Thumnail</div>
                        <div className={cx("header")}>Project Name</div>
                        <div className={cx("header")}>Location Name</div>
                        <div className={cx("header")}></div>
                    </div>
                    {projectData.map((item, index) => {
                        return (
                            <ListProject
                                status={item?.status}
                                key={index}
                                price={item?.reservationPrice}
                                id={item?.id}
                                image={item?.thumbnailPathUrl}
                                name={item?.name}
                                location={item?.location}
                            />
                        );
                    })}
                </div>
            </div>
}

export default AdminManageProject;
