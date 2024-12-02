import React, { useState } from "react";

import Button from "../../../../components/buttons/Button";
import Modal from "../../../../components/modals/Modals";
import SearchInput from "../../../../components/searchInput/SearchInput";

import styles from './ScheduleDetail.module.css';
import label from '../../../../assets/styles/label.module.css';
import button from '../../../../assets/styles/button.module.css';

//icons
import { BsPeople } from "react-icons/bs";
import Checkbox from "../../../../components/checkbox/Checkbox";

const ScheduleDetail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const items = [
        {
            "id" : "abc",
            "name" : "홍길동 (010-1234-5678)"
        },
        {
            "id" : "def",
            "name" : "김길동 (010-1234-5678)"
        },
    ];

    const memberList = [
        {
            "id" : "12",
            "name" : "홍길동 (010-1234-5678)"
        },
        {
            "id" : "1234",
            "name" : "김길동 (010-1234-5678)"
        },
    ];

    
    return (
        <>
        <div className={`contents_bottom_line ${styles.detail_top}`}>
            <div className={`${label.label_box} ${label.label_gray}`}>그룹 수업</div>
            <div className={`${styles.detail_info}`}>
                <div className={`${styles.schedule_info}`}>2024년 11월 30일 (토) 10:00 ~ 10: 50</div>
                <div className={`${styles.class_limit}`}>
                    <span className={`${styles.icon}`}><BsPeople/></span>
                    <span className="limit">4 / 4</span>
                </div>
            </div>
        </div>
        <div className={`${styles.detail_bottom}`}>
            <div className={`${styles.button_box}`} style={{marginBottom : "20px"}}>
                <Button type="button" title={"회원변경"} onClick={openModal} className={`${button.button_default} ${button.bg_type}`} />
                <div className={`${styles.button_box}`}>
                    <Button type="button" title={"출석"} className={`${button.button_default}`} />
                    <Button type="button" title={"결석"} className={`${button.button_default} ${button.red_line}`} />
                </div>
            </div>
            <div className={`${styles.class_detail_list}`}>
                <Checkbox items={items} types={"all"} />
            </div>
        </div>
        <div className={`${button.fixed_button_box}`}>
            <Button type="button" title="수업 삭제" className={`${button.btn} ${button.red_btn}`} />
            <Button type="button" title="완료" className={`${button.btn}`} />
        </div>
        <Modal isOpen={isModalOpen} title="회원 변경" closeModal={closeModal}>
            < SearchInput placeholder={"회원명 또는 휴대폰 번호를 입력해 주세요"} />
            <div className={`${styles.check_list}`}>
                <Checkbox items={memberList} />
            </div>
            <div className={`${button.fixed_button_box}`} style={{bottom : 0}}>
                <Button type="button" title="선택완료" className={`${button.btn}`} />
            </div>
        </Modal>
        </>
    );
};

export default ScheduleDetail;