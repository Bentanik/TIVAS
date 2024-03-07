import classNames from "classnames/bind";
import styles from "./AdminManageProject.module.scss";
import images from "~/assets/images";
import ListProject from "~/components/ListProject";

const cx = classNames.bind(styles);

function AdminManageProject() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Manage Project</h1>
      <div className={cx("content")}>
        <div className={cx("list-project")}>
          <div className={cx("header-list")}>
            <div className={cx("header")}>Thumnail</div>
            <div className={cx("header")}>Project Name</div>
            <div className={cx("header")}>Location Name</div>
            <div className={cx("header")}>Open Date</div>
            <div className={cx("header")}>Status</div>
          </div>

          <ListProject />
          <ListProject />
          <ListProject />
          <ListProject />
          <ListProject />
          <ListProject />
          <ListProject />
          <ListProject />
          <ListProject />
        </div>
      </div>
    </div>
  );
}

export default AdminManageProject;
