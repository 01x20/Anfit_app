import React from "react";
import { Link, useLocation } from 'react-router-dom';

//icons
import { GoHomeFill } from "react-icons/go";
import { FaUserGear } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { BsChatFill } from "react-icons/bs";
import { HiTicket } from "react-icons/hi2";

import styles from '../../assets/styles/layout.module.css';

const Footer = () => {
    const location = useLocation();

    const footerList = [
        {path : "/home", icon : <GoHomeFill />, text : "홈"},
        {path : "/member", icon : <FaUserGear />, text : "회원관리"},
        {path : "/class-pass", icon : <HiTicket />, text : "수강권 관리"},
        {path : "/community", icon : <BsChatFill />, text : "커뮤니티"},
        {path : "/setting", icon : <IoMdSettings />, text : "관리"},
    ];
    return (
        <footer className={`${styles.fixed}`}>
            <ul className={`${styles.footer}`}>
            {footerList.map((item, index) => (
                <li key={index} className={`${styles.footer_btn}`}>
                    <Link to={item.path} className={
                        location.pathname.includes(item.path)
                        ? `${styles.active_color}`
                        : `${styles.default_color}`
                    }>
                        {item.icon}
                        <span className={`${styles.footer_text}`}>{item.text}</span>
                    </Link>
                </li>
            ))}
            </ul>
        </footer>
    );
};

export default Footer;