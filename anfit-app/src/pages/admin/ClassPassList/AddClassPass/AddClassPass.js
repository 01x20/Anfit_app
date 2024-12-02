import React, { useState, forwardRef } from "react";
import DatePicker from 'react-datepicker';
import {ko} from "date-fns/locale";

import Button from "../../../../components/buttons/Button";

//import styles from "./AddClassPass.module.css";
import form from "../../../../assets/styles/form.module.css";
import button from "../../../../assets/styles/button.module.css";
import 'react-datepicker/dist/react-datepicker.css';

//icons
import { BsCalendar } from "react-icons/bs";
const AddClassPass = () => {
    const [startDate, setStartDate] = useState(new Date());
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <input type="text" className="int" readOnly value={value} onClick={onClick} ref={ref} />
    ));

    return (
        <>
        <div className={`${form.form_wrap}`}>
            <div className={`${form.form_box}`}>
                <div className={`${form.form_title}`}>수강권명</div>
                <div className={`${form.input_wrap}`}>
                    <input type="text" className={`int`} placeholder="수강권명을 입력해 주세요" />
                </div>
            </div>
            <div className={`${form.form_box}`}>
                <div className={`${form.form_title}`}>유형 선택</div>
                <div className={`${form.input_wrap}`}>
                    <input type="text" className={`int`} placeholder="휴대폰 번호를 입력해 주세요" />
                </div>
            </div>
            <div className={`${form.form_box}`}>
                <div className={`${form.form_title}`}>생년월일</div>
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

export default AddClassPass;