import React, { useState } from "react";
import { BsSliders } from "react-icons/bs";

import styles from './SearchFilter.module.css';

const Checkbox = ({ item, selectedItems, setSelectedItems }) => {
    const isChecked = selectedItems.has(item.id);

    const checkHandled = ({ target }) => {
        setSelectedItems((prevSet) => {
            const updatedSet = new Set(prevSet);
            if (target.checked) {
                updatedSet.add(target.id);
            } else {
                updatedSet.delete(target.id);
            }
            return updatedSet;
        });
    };

    return (
        <label>
            <input
                id={item.id}
                type="checkbox"
                checked={isChecked}
                onChange={(e) => checkHandled(e)}
            />
            <p className={`${item.className}`}>{item.text}</p>
        </label>
    );
};

const SearchFilter = ( {items} ) => {
    const [selectedItems, setSelectedItems] = useState(new Set());

    if (!items || items.length === 0) {
        return <p></p>;
    }

    return (
        <div className={`${styles.search_wrap}`}>
            <div className={`${styles.filter_selected_num}`}>
                <span className={`${styles.icon}`}><BsSliders /></span>
                <span>{selectedItems.size}</span>
            </div>
            <div className={`${styles.hide_bg}`}></div>
            <ul className={`${styles.filter_list}`}>
                {items.map((item) => (
                    <li key={item.id} className={`${styles.select_btn}`}>
                        <Checkbox
                            item={item}
                            selectedItems={selectedItems}
                            setSelectedItems={setSelectedItems}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchFilter;