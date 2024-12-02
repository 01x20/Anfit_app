import React from "react";
import { useNavigate } from "react-router-dom";

import SearchInput from "../../../components/searchInput/SearchInput";
import Button from "../../../components/buttons/Button";

import styles from "./MemberList.module.css";
import button from "../../../assets/styles/button.module.css";

//icons
import { BsChevronRight } from "react-icons/bs";

const MemberList = () => {
    const navigator = useNavigate();

    return (
        <>
            <div className={`${styles.member_list_wrap}`}>
                <SearchInput placeholder={"회원명 또는 휴대폰 번호를 입력해 주세요"} />
                <ul className={`${styles.member_list}`}>
                    <li onClick={() => {navigator('detail');}}>
                        <div className="name">홍길동 (010-1234-5678)</div>
                        <button type="button" className={`${styles.btn_more}`}>회원 정보 <BsChevronRight /></button>
                    </li>
                    <li>
                        <div className="name">홍길동 (010-1234-5678)</div>
                        <button type="button" className={`${styles.btn_more}`}>회원 정보 <BsChevronRight /></button>
                    </li>
                    <li>
                        <div className="name">홍길동 (010-1234-5678)</div>
                        <button type="button" className={`${styles.btn_more}`}>회원 정보 <BsChevronRight /></button>
                    </li>
                </ul>
            </div>
            <div className={`${button.fixed_button_box}`}>
                <Button type="button" onClick={() => {navigator('regist');}} title="회원 신규 등록" className={`${button.btn}`} />
            </div>
        </>
    );
};

export default MemberList;