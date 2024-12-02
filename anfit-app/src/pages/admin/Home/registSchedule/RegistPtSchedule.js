import React, { useState, forwardRef } from "react";
import DatePicker from 'react-datepicker';
import {ko} from "date-fns/locale";

import styles from './RegistPtSchedule.module.css';
import form from "../../../../assets/styles/form.module.css";
import button from "../../../../assets/styles/button.module.css";
import 'react-datepicker/dist/react-datepicker.css';

import Button from "../../../../components/buttons/Button";
import Modal from "../../../../components/modals/Modals";
import ToggleButton from "../../../../components/toggleButton/ToggleButton";
import Checkbox from "../../../../components/checkbox/Checkbox";
import SearchInput from "../../../../components/searchInput/SearchInput";

//icons
import { BsCalendar, BsSearch } from "react-icons/bs";

const RegistPtSchedule = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <input type="text" className="int" readOnly value={value} onClick={onClick} ref={ref} />
      ));

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
        <div className={`${form.form_wrap}`}>
            <div className={`contents_bottom_line ${form.form_box}`}>
                <ToggleButton title={"반복 설정"} />
            </div>
            <div className={`${form.form_box}`}>
                <div className={`${form.form_title}`} style={{paddingTop: "2rem"}}>수강 회원 선택</div>
                <div className={`${styles.select_member_wrap}`}>
                    <button type="button" className={`${styles.search_member}`} onClick={openModal}><BsSearch/> 회원 검색</button>
                    <input type="text" className={`int ${styles.selected_member}`} readOnly placeholder="회원을 선택해 주세요" />
                </div>
            </div>
            <div className={`${form.form_box}`}>
                <div className={`${form.form_title}`}>수업 일정</div>
                <div className={`${form.pick_date_time}`}>
                    <div className={`${form.pick_box} ${form.date_pick_wrap}`}>
                        <DatePicker
                            shouldCloseOnSelect
                            selected={startDate}
                            locale={ko}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="yyyy년 M월 d일"
                            customInput={<CustomInput />}/>
                        <div className={`${form.date_icon}`}><BsCalendar /></div>
                    </div>
                    <div className={`${form.pick_box} ${form.time_pick_wrap}`}>
                        <select name="" id="" className="int">
                            <option value="0">00</option>
                        </select>
                        시
                        <select name="" id="" className="int">
                            <option value="0">00</option>
                        </select>
                        분
                    </div>
                </div>
            </div>
        </div>
        <div className={`${button.fixed_button_box}`}>
            <Button type="button" title="등록하기" className={`${button.btn}`} />
        </div>
        <Modal isOpen={isModalOpen} title="회원 검색" closeModal={closeModal}>
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

export default RegistPtSchedule;