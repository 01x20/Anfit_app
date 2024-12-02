import React, { useState, forwardRef } from "react";
import DatePicker from 'react-datepicker';
import {ko} from "date-fns/locale";

import Button from "../../../../components/buttons/Button";

import styles from "./AddMember.module.css";
import form from "../../../../assets/styles/form.module.css";
import button from "../../../../assets/styles/button.module.css";
import classPass from "../../../../assets/styles/classPass.module.css";
import 'react-datepicker/dist/react-datepicker.css';

//icons
import { BsCalendar } from "react-icons/bs";

const AddMember = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [birthtDate, setBirthtDate] = useState(new Date());
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <input type="text" className="int" readOnly value={value} onClick={onClick} ref={ref} />
      ));

    return (
        <>
        <div className={`${form.form_wrap}`}>
            <div className={`${form.form_box}`}>
                <div className={`${form.form_title}`}>회원명</div>
                <div className={`${form.input_wrap}`}>
                    <input type="text" className={`int`} placeholder="회원명을 입력해 주세요" />
                </div>
            </div>
            <div className={`${form.form_box}`}>
                <div className={`${form.form_title}`}>휴대폰 번호</div>
                <div className={`${form.input_wrap}`}>
                    <input type="text" className={`int`} placeholder="휴대폰 번호를 입력해 주세요" />
                </div>
            </div>
            <div className={`${form.form_box}`}>
                <div className={`${form.form_title}`}>생년월일</div>
                <div className={`${form.date_pick_wrap} ${form.input_wrap}`}>
                    <DatePicker
                        shouldCloseOnSelect
                        selected={birthtDate}
                        locale={ko}
                        onChange={(date) => setBirthtDate(date)}
                        dateFormat="yyyy년 M월 d일"
                        customInput={<CustomInput />}/>
                    <div className={`${form.date_icon}`}><BsCalendar /></div>
                </div>
            </div>
            <div className={`${form.form_box}`}>
                <button type="button" className={`${styles.select_pass_btn} ${button.button_default}`}>수강권 선택하기</button>
                <div className={`${styles.selected_pass}`}>
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
                </div>
            </div>
            <div className={`${form.form_box}`}>
                <div className={`${form.form_title}`}>수강권 시작일</div>
                <div className={`${form.date_pick_wrap} ${form.input_wrap}`}>
                    <DatePicker
                        shouldCloseOnSelect
                        selected={startDate}
                        locale={ko}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="yyyy년 M월 d일"
                        customInput={<CustomInput />}/>
                    <div className={`${form.date_icon}`}><BsCalendar /></div>
                </div>
            </div>
        </div>
        <div className={`${button.fixed_button_box}`}>
            <Button type="button" title="등록하기" className={`${button.btn}`} />
        </div>
        </>
    );
};

export default AddMember;