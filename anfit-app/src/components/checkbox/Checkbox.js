import React, { useState } from "react";

import styles from './Checkbox.module.css';

const Checkbox = ({ items, types }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelectAll = (isChecked) => {
        if (isChecked) {
            setSelectedItems(items.map((item) => item.id));
        } else {
            setSelectedItems([]);
        }
    };

    const handleSelectItem = (id) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((itemId) => itemId !== id)
                : [...prevSelected, id]
        );
    };

    const isAllSelected = selectedItems.length === items.length;

    return (
        <>
            {types ? (
                <div className={`${styles.select} ${styles.select_all}`}>
                    <label>
                        <input
                            type="checkbox"
                            checked={isAllSelected}
                            onChange={(e) => handleSelectAll(e.target.checked)}
                        />
                        <div className={`${styles.select_box}`}>전체 선택</div>
                    </label>
                </div>) : null
            }
            <ul className={`${styles.select_list}`}>
                {items.map((item) => (
                    <li key={item.id} className={`${styles.select}`}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedItems.includes(item.id)}
                                onChange={() => handleSelectItem(item.id)}
                            />
                            <div className={`${styles.select_box}`}>{item.name}</div>
                        </label>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Checkbox;