import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Layout";

//pages
import Home from '../admin/Home/Home';
import ScheduleDetail from '../admin/Home/scheduleDetail/ScheduleDetail';
import RegistGroupSchedule from "../admin/Home/registSchedule/RegistGroupSchedule";
import RegistPtSchedule from "../admin/Home/registSchedule/RegistPtSchedule";
import MemberList from "../admin/MemberMgmt/MemberList";
import AddMember from "../admin/MemberMgmt/AddMember/AddMember";
import DetailMember from "../admin/MemberMgmt/DetailMember/DetailMember";
import ClassPass from "../admin/ClassPassList/ClassPassList";
import AddClassPass from "../admin/ClassPassList/AddClassPass/AddClassPass";

const Router = () => {
    return (
        <BrowserRouter basename="/">
            <Layout>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/home/schedule" element={<ScheduleDetail />} />
                    <Route path="/home/regist-group" element={< RegistGroupSchedule/>}/>
                    <Route path="/home/regist-pt" element={< RegistPtSchedule/>}/>
                    <Route path="/member" element={<MemberList />}/>
                    <Route path="/member/regist" element={<AddMember />}/>
                    <Route path="/member/detail" element={<DetailMember />}/>
                    <Route path="/class-pass" element={<ClassPass/>} />
                    <Route path="/class-pass/regist" element={<AddClassPass/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;