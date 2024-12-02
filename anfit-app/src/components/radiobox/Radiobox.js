import React, { useState } from "react";

import styles from './Radiobox.module.css';

const Radiobox = ({ items }) => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <>
            <ul className={`${styles.select_list}`}>
                {items.map((item) => (
                    <li key={item.id} className={`${styles.select}`}>
                        <label>
                            <input
                                type="radio"
                                name={item.formName}
                                value={item.value}
                                checked={selectedValue === item.value}
                                onChange={handleChange}
                            />
                            <div className={`${styles.select_box}`}>{item.text}</div>
                        </label>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Radiobox;