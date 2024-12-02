import React from "react";
import { Link, useNavigate } from 'react-router-dom';

import Calendar from '../../../components/calendar/Calendar';
import SearchFilter from '../../../components/searchFilter/SearchFilter';
import Button from "../../../components/buttons/Button";

import styles from './Home.module.css';
import button from '../../../assets/styles/button.module.css';
import label from '../../../assets/styles/label.module.css';
import filter from '../../../components/searchFilter/SearchFilter.module.css';

//icons
import { BsPeople, BsPerson } from "react-icons/bs";

const Home = () => {
    const navigate = useNavigate();

    const items = [
        {
            id: "abc",
            text: "그룹 수업",
            className: `${filter.check_btn}`,
        },
        {
            id: "def",
            text: "개인 수업",
            className: `${filter.check_btn}`,
        },
    ];
    
    return (
        <>
        <div className={`${styles.common_padding} ${button.button_box}`}>
            <Button type="button" title={"📢 공지사항 등록하기"} className={`${styles.button}`}/>
            <Button type="button" title={"📰 안핏레터 작성하기"} className={`${styles.button}`}/>
        </div>
        <div className={`contents_bottom_line ${styles.common_padding}`}>
            <div className={`${styles.contents_title}`}>일정</div>
            <Calendar />
        </div>
        <div className={`${styles.padding_wrap}`}>
            <SearchFilter items={items} />
            <div className={`${styles.schedule_wrap}`}>
                <ul className={`${styles.list_wrap}`}>
                    <li className={`${styles.schedule_list}`}>
                        <Link to="schedule">
                        <div className={`${styles.list_top}`}>
                            <div className={`${styles.class_time}`}>10:00 ~ 10:50</div>
                            <div className={`${styles.class_limit}`}>
                                <span className={`${styles.icon}`}><BsPeople/></span>
                                <span>4 / 4</span>
                            </div>
                        </div>
                        <div className={`${styles.list_bottom}`}>
                            <div className={`${label.label_box} ${label.label_gray}`}>그룹 수업</div>
                            <div>컨디셔닝</div>
                        </div>
                        </Link>
                    </li>
                    <li className={`${styles.schedule_list} ${styles.schedule_passed}`}>
                        <Link to="schedule">
                        <div className={`${styles.list_top}`}>
                            <div className={`${styles.class_time}`}>10:00 ~ 10:50</div>
                            <div className={`${styles.class_limit}`}>
                                <span className={`${styles.icon}`}><BsPerson/></span>
                                <span>1 / 1</span>
                            </div>
                        </div>
                        <div className={`${styles.list_bottom}`}>
                            <div className={`${label.label_box} ${label.label_gray}`}>개인 수업</div>
                            <div>홍길동</div>
                        </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className={`${button.fixed_button_box}`}>
            <Button type="button" title="그룹 수업 등록" onClick={() => {navigate('regist-group');}} className={`${button.btn}`} />
            <Button type="button" title="개인 수업 등록" onClick={() => {navigate('regist-pt');}} className={`${button.btn}`} />
        </div>
        </>
    );
};

export default Home;