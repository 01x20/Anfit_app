import React from "react";

import styles from "./DetailMember.module.css";
import classPass from "../../../../assets/styles/classPass.module.css";
import button from "../../../../assets/styles/button.module.css";
import label from "../../../../assets/styles/label.module.css";
import filter from '../../../../components/searchFilter/SearchFilter.module.css';

import Tab from "../../../../components/tab/Tab";
import SearchFilter from "../../../../components/searchFilter/SearchFilter";

//icons
import { BsPeople, BsPerson } from "react-icons/bs";


const DetailMember = () => {
    const items = [
        {
            id: "abc",
            text: "예약",
            className: `${filter.check_btn}`,
        },
        {
            id: "def",
            text: "수업일 순",
            className: `${filter.check_btn}`,
        },
    ];

    const tabArr = [
        {name : "수강권 정보", content: 
            <>
            <div className={`${classPass.class_pass}`}>
                <div className={`${classPass.pass_icon}`}></div>
                <div className={`${classPass.pass_info}`}>
                    <div className={`${classPass.member_detail_top}`}>
                        <ul className={`${classPass.info_top}`}>
                            <li>횟수제</li>
                            <li>개인형</li>
                            <li>1:1</li>
                        </ul>
                        <div className={`${label.label_box} ${label.label_white}`}>사용 중</div>
                    </div>
                    <div className={`${classPass.pass_title}`}>
                        [빙수코치] 1:1 PT 10회 (66,000 단가)
                    </div>
                    <div className={`${classPass.member_detail_bottom}`}>
                        <p>2024년 11월 15일 ~ 2025년 1월 13일</p>
                        <p>잔여 <strong>7</strong>회</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.detail_tab_title}`}>예약한 수업</div>
            <ul className={`${styles.class_list}`}>
                <li>
                    <div className={`${styles.class_top}`}>
                        <div>2024년 12월 6일 11:00 ~ 11:50</div>
                        <div className={`${styles.class_state}`}>예약</div>
                    </div>
                    <div className={`${styles.class_bottom}`}>
                        <div>권주희</div>
                        <div className={`${styles.class_info_detail}`}>
                            <div style={{marginRight : "0.5rem"}}><BsPerson /> <span>1:1</span></div>
                            빙수 코치
                        </div>
                    </div>
                </li>
            </ul>
            </>
        }, {
            name : "이용 내역", content: 
            <>
            <SearchFilter items={items} />
            <ul className={`${styles.class_list}`}>
                <li>
                    <div className={`${styles.class_top}`}>
                        <div>2024년 12월 6일 11:00 ~ 11:50</div>
                        <div className={`${styles.class_state}`}>예약</div>
                    </div>
                    <div className={`${styles.class_bottom}`}>
                        <div>권주희</div>
                        <div className={`${styles.class_info_detail}`}>
                            <div style={{marginRight : "0.5rem"}}><BsPerson /> <span>1:1</span></div>
                            빙수 코치
                        </div>
                    </div>
                    <div className={`${styles.use_pass_history}`}>
                        <div>예약 일시 : 2024년 11월 14일 22:00:00</div>
                        <div>사용 수강권 : [빙수코치] 1:1 PT 10회 (66,000 단가)</div>
                    </div>
                </li>
            </ul>
            </>
        }
    ];
    return (
        <>
        <div className={`contents_bottom_line ${styles.member_detail_top}`}>
            <div>
                <div className={`${styles.info_top}`}>
                    <p className={`${styles.name}`}>홍길동</p>
                    <p>010-1234-5678</p>
                </div>
                <div>등록일 : 2024년 11월 11일</div>
            </div>
            <button type="button" className={`${button.button_default}`}>정보 수정</button>
        </div>
        <div style={{marginTop : "2rem"}}>
            <Tab tabArr={tabArr} />
        </div>
        </>
    );
};

export default DetailMember;