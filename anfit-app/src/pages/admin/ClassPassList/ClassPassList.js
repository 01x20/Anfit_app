import React from "react";
import { useNavigate } from "react-router-dom";

import SearchInput from "../../../components/searchInput/SearchInput";
import SearchFilter from "../../../components/searchFilter/SearchFilter";
import Button from "../../../components/buttons/Button";

import styles from "./ClassPassList.module.css";
import classPass from "../../../assets/styles/classPass.module.css";
import filter from "../../../components/searchFilter/SearchFilter.module.css";
import button from "../../../assets/styles/button.module.css";

const ClassPass = () => {
    const navigate = useNavigate();
    
    const items = [
        {
            id: "abc",
            text: "그룹형",
            className: `${filter.check_btn}`,
        },
        {
            id: "def",
            text: "개인형",
            className: `${filter.check_btn}`,
        },
        {
            id: "deff",
            text: "빙수 코치",
            className: `${filter.check_btn}`,
        },
        
        {
            id: "deffgas",
            text: "다빈 코치",
            className: `${filter.check_btn}`,
        },
    ];

    return (
        <>
            <div className={`${styles.class_pass_list}`}>
                <SearchInput placeholder={"수강권명을 입력해 주세요"} />
                <SearchFilter items={items} />
                <ul className={`${styles.list_wrap}`}>
                    <li>
                    <div className={`${classPass.class_pass} ${classPass.group_pass}`}>
                        <div className={`${classPass.pass_icon}`}></div>
                        <div className={`${classPass.pass_info}`}>
                            <ul className={`${classPass.info_top}`}>
                                <li>횟수제</li>
                                <li>그룹형</li>
                                <li>4:1</li>
                            </ul>
                            <div className={`${classPass.pass_title}`}>
                                [텀블벅 전용] 비기너 패키지 그룹 수업 3회
                            </div>
                            <ul className={`${classPass.info_bottom}`}>
                                <li>60일 이내 소진</li>
                                <li>3회</li>
                            </ul>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className={`${classPass.class_pass}`}>
                        <div className={`${classPass.pass_icon}`}></div>
                        <div className={`${classPass.pass_info}`}>
                            <ul className={`${classPass.info_top}`}>
                                <li>횟수제</li>
                                <li>개인형</li>
                                <li>1:1</li>
                            </ul>
                            <div className={`${classPass.pass_title}`}>
                                [빙수코치] 1:1 PT 10회 (66,000 단가)
                            </div>
                            <ul className={`${classPass.info_bottom}`}>
                                <li>60일 이내 소진</li>
                                <li>10회</li>
                            </ul>
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
            <div className={`${button.fixed_button_box}`}>
                <Button type="button" title="수강권 생성" onClick={() => {navigate('regist');}} className={`${button.btn}`} />
            </div>
        </>
    );
};

export default ClassPass;