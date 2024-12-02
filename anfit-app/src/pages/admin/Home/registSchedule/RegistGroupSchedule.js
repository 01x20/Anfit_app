import React, { useState, forwardRef } from "react";
import DatePicker from 'react-datepicker';
import {ko} from "date-fns/locale";

import styles from './RegistGroupSchedule.module.css';
import form from "../../../../assets/styles/form.module.css";
import button from "../../../../assets/styles/button.module.css";
import 'react-datepicker/dist/react-datepicker.css';

import Radiobox from "../../../../components/radiobox/Radiobox";
import Button from "../../../../components/buttons/Button";

//icons
import { BsCalendar } from "react-icons/bs";

const RegistGroupSchedule = () => {
    const [startDate, setStartDate] = useState(new Date());
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <input type="text" className="int" readOnly value={value} onClick={onClick} ref={ref} />
      ));

    const items = [
        {
            id: "abc",
            formName : "classType",
            text: "스트렝스",
            value: "class1"
        },
        {
            id: "def",
            formName : "classType",
            text: "소도구",
            value: "class2"
        },
    ];


    return (
        <>
        <div className={`${form.form_wrap}`}>
            <div className={`${form.form_box}`}>
                <div className={`${form.form_title}`}>수업 선택</div>
                <Radiobox items={items} />
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
                            calendarClassName={styles.calenderWrapper}
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
            <div className={`contents_bottom_line ${form.form_box}`}>
                <div className={`${form.form_title}`}>수강 인원 설정</div>
                <ul className={`${styles.select_wrap}`}>
                    <li>
                        <div className={`${styles.select_title}`}>최소 인원</div>
                        <select className="int size_sm" name="class_min" id="classMin">
                            <option value="0">0</option>
                        </select>
                    </li>
                    <li>
                        <div className={`${styles.select_title}`}>최대 인원</div>
                        <select className="int size_sm" name="class_max" id="classMax">
                            <option value="4">4</option>
                        </select>
                    </li>
                </ul>
                <div className={`${styles.notice_text}`}>
                * ‘폐강 시간’ 이후 최소 수강 인원이 채워지지 않으면 이 수업은 자동 삭제됩니다.<br/>
                단, 최소 수강 인원이 0명인경우는 삭제되지 않습니다.
                </div>
            </div>
            <ul className={`${styles.class_info_wrap}`}>
                <li className={`${styles.bottom_line_box}`}>
                    <div className={`${styles.flex_box}`}>
                        <div className={`${styles.select_title}`}>예약 가능 시간 :</div>
                        <select className="int size_sm" name="class_min" id="classMin">
                            <option value="0">0</option>
                        </select>
                        <p style={{margin: "0 1rem 0 0.5rem"}}>시간</p>
                        <select className="int size_sm" name="class_min" id="classMin">
                            <option value="0">0</option>
                        </select>
                        <p style={{marginLeft: "0.5rem"}}>분 전까지</p>
                    </div>
                    <div className={`${styles.flex_box}`}>
                        <div className={`${styles.select_title}`}>취소 가능 시간 :</div>
                        <select className="int size_sm" name="class_min" id="classMin">
                            <option value="0">0</option>
                        </select>
                        <p style={{margin: "0 1rem 0 0.5rem"}}>시간</p>
                        <select className="int size_sm" name="class_min" id="classMin">
                            <option value="0">0</option>
                        </select>
                        <p style={{marginLeft: "0.5rem"}}>분 전까지</p>
                    </div>
                </li>
                <li>
                <div className={`${styles.flex_box}`}>
                        <div className={`${styles.select_title}`}>당일 예약 변경 :</div>
                        <select className="int size_sm" name="class_min" id="classMin">
                            <option value="0">0</option>
                        </select>
                        <p style={{margin: "0 1rem 0 0.5rem"}}>시간</p>
                        <select className="int size_sm" name="class_min" id="classMin">
                            <option value="0">0</option>
                        </select>
                        <p style={{marginLeft: "0.5rem"}}>분 전까지 가능</p>
                    </div>
                    <div className={`${styles.flex_box}`}>
                        <div className={`${styles.select_title}`}>폐강 시간 :</div>
                        <select className="int size_sm" name="class_min" id="classMin">
                            <option value="0">0</option>
                        </select>
                        <p style={{margin: "0 1rem 0 0.5rem"}}>시간</p>
                        <select className="int size_sm" name="class_min" id="classMin">
                            <option value="0">0</option>
                        </select>
                        <p style={{marginLeft: "0.5rem"}}>분 전</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className={`${button.fixed_button_box}`}>
            <Button type="button" title="등록하기" className={`${button.btn}`} />
        </div>
        </>
    );
};

export default RegistGroupSchedule;