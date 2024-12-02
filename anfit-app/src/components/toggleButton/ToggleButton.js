import React, { useState } from "react";

import styles from "./ToggleButton.module.css";

const ToggleButton = ({ title }) => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle((prev) => !prev);
    }
    return (
        <>
            <div className={`${styles.toggle_wrap}`}>
                <div className={`${styles.toggle_title}`}>{title}</div>
                <label>
                    <input
                    type="checkbox"
                    onChange={handleToggle}/>
                    <div className={`${styles.toggle_btn}`}></div>
                </label>
            </div>
        </>
    );
};

export default ToggleButton;