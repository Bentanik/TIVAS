import classNames from "classnames/bind";
import styles from "./AdminCreateProject.module.scss";
import DropImageFile from "~/components/DropFileImage";
import { useEffect, useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import ToastNotify from "~/components/ToastNotify";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function AdminCreateProject() {
    const [errorImage, setErrorImage] = useState(false);

    const [listImage, setListImage] = useState("");
    const [thumbNail, setThumbNail] = useState(null);

    const thumbNailRef = useRef();

    const onFileChange = (files) => {
        setListImage(files);
    };

    useEffect(() => {
        return () => {
            thumbNail && URL.revokeObjectURL(thumbNail.preview);
        };
    }, [thumbNail]);

    useEffect(() => {
        if (errorImage === true) {
            toast.custom(
                () => (
                    <ToastNotify
                        type="error"
                        title="Error!"
                        desc="You have selected the wrong image format, please select again!"
                    />
                ),
                { duration: 2000 }
            );
        }
    }, [errorImage]);

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const allowedTypes = ["image/jpg", "image/jpeg", "image/png"];
            if (allowedTypes.includes(newFile?.type)) {
                const updatedList = newFile;
                updatedList.preview = URL.createObjectURL(updatedList);
                setThumbNail(updatedList);
            } else {
                // setError(true);
            }
        }
    };

    const fileRemove = () => {
        const updatedList = null;
        setThumbNail(updatedList);
        thumbNailRef.current.value = "";
        // URL.revokeObjectURL(image.preview);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
    };

    return (
        <div className={cx("wrapper")}>
            <Toaster position="top-right" richColors expand={true} />
            <form onSubmit={handleSubmit}>
                <div className={cx("form")}>
                    <div className={cx("thumbnail")}>
                        <DropImageFile
                            error={errorImage}
                            setError={setErrorImage}
                            onFileChange={(files) => onFileChange(files)}
                        />
                    </div>
                    <div className={cx("input_compo")}>
                        <label htmlFor="name_project" className={cx("label")}>
                            Project name
                        </label>
                        <input
                            type="text"
                            id="name_project"
                            className={cx("input")}
                            placeholder="Enter project name"
                        />
                    </div>
                    <div className={cx("input_compo")}>
                        <label htmlFor="name_project" className={cx("label")}>
                            Thumbnail
                        </label>
                        <input
                            ref={thumbNailRef}
                            type="file"
                            id="name_project"
                            className={cx("input")}
                            placeholder="Enter project name"
                            onChange={onFileDrop}
                        />
                        {thumbNail && (
                            <div className={cx("file_preview")}>
                                <img
                                    src={thumbNail.preview}
                                    alt="img"
                                    className={cx("img")}
                                />
                                <div className={cx("file_info")}>
                                    <h4 className={cx("title")}>
                                        {thumbNail.name}
                                    </h4>
                                </div>
                                <span
                                    className={cx("file_remove")}
                                    onClick={() => fileRemove(thumbNail)}
                                >
                                    <img
                                        src={images.trashIcon}
                                        alt="icon"
                                        className={cx("icon")}
                                    />
                                </span>
                            </div>
                        )}
                    </div>
                    <div className={cx("row")}>
                        <div className={cx("input_compo")}>
                            <label htmlFor="type" className={cx("label")}>
                                Type project
                            </label>
                            <select className={cx("input")} id="type">
                                <option value="1">Vila</option>
                                <option value="2">Hotel</option>
                                <option value="3">Vila and Hotel</option>
                            </select>
                        </div>
                        <div className={cx("input_compo")}>
                            <label htmlFor="location" className={cx("label")}>
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                className={cx("input")}
                                placeholder="Enter project name"
                            />
                        </div>
                    </div>
                    <div className={cx("row")}>
                        <div className={cx("input_compo")}>
                            <label htmlFor="building" className={cx("label")}>
                                Building status
                            </label>
                            <select className={cx("input")} id="building">
                                <option value="1">Up coming</option>
                                <option value="2">On going </option>
                                <option value="3">Already implemented </option>
                            </select>
                        </div>
                        <div className={cx("input_compo")}>
                            <label htmlFor="location" className={cx("label")}>
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                className={cx("input")}
                                placeholder="Enter project name"
                            />
                        </div>
                    </div>
                    <div className={cx("desc", "input_compo")}>
                        <label htmlFor="desc" className={cx("label")}>
                            Description
                        </label>
                        <textarea
                            id="desc"
                            cols="30"
                            rows="10"
                            className={cx("text-area")}
                        />
                    </div>
                </div>

                <button type="submit" className={cx("action")}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AdminCreateProject;
