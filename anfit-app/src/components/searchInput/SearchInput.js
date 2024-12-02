import React from "react";

import styles from "./SearchInput.module.css";

//icons
import { BsSearch } from "react-icons/bs";

const SearchInput = ({onchange, placeholder}) => {
    return (
        <div className={`${styles.search_wrap}`}>
            <input type="text" className={`int`} onChange={onchange ? onchange : undefined} placeholder={placeholder} />
            <button type="button" className={`${styles.search_btn}`}><BsSearch /> 검색</button>
        </div>
    );
};

export default SearchInput;