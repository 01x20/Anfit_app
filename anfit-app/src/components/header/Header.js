import React from "react";
import { Link } from 'react-router-dom';
import { PiBellSimpleFill } from "react-icons/pi";
import styles from '../../assets/styles/layout.module.css';

const Header = () => {
    return (
        <header className={`${styles.header}`}>
            <Link to="/">logo</Link>
            <button type="button" className={`${styles.btn_alram}`}><PiBellSimpleFill /></button>
        </header>
    );
}
export default Header;