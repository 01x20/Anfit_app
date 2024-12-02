import React, { useState } from "react";

import tab from './Tab.module.css';

const Tab = ({tabArr}) => {
    const [currentTab, clickTab] = useState(0);
    
    const selectMenuHandler = (index) => {
        clickTab(index);
    };

    return (
        <>
        <ul className={`${tab.tab_nav}`}>
            {tabArr.map((el,index) => (
                <li key={index} className={index === currentTab ? `${tab.nav_btn_active} ${tab.nav_btn}`: `${tab.nav_btn}` }
                onClick={() => selectMenuHandler(index)}>{el.name}</li>
            ))}
            </ul>
        <div className={`${tab.tab_contents}`}>
            <div>{tabArr[currentTab].content}</div>
        </div>
        </>
    )
}

export default Tab;