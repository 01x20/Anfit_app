import React from "react";
import { useNavigate } from 'react-router-dom';

import styles from '../../assets/styles/layout.module.css';

import { BsChevronLeft } from "react-icons/bs";

const SubHeader = ({title}) => {
    const navigate = useNavigate();

    return (
        <header className={`${styles.sub_header}`}>
            <button type="button" onClick={() => {navigate(-1);}} className={`${styles.btn_back}`}><BsChevronLeft /></button>
            <div className={`${styles.sub_title}`}>{title}</div>
        </header>
    );
}
export default SubHeader;