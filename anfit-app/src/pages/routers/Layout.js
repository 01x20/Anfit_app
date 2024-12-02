import React from "react";
import { useLocation } from 'react-router-dom';

import Header from "../../components/header/Header";
import SubHeader from "../../components/header/SubHeader";
import Footer from "../../components/footer/Footer";

import '../../assets/styles/common.css';

const Layout = (prop) => {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case '/home/schedule':
                return '컨디셔닝';
            case '/home/regist-group':
                return '그룹 수업 등록';
            case '/home/regist-pt':
                return '개인 수업 등록';
            case '/member':
                return '회원 목록';
            case '/member/regist':
                return '회원 등록';
            case '/member/detail':
                return '회원 정보';
            case '/class-pass':
                return '수강권 목록';
            case '/class-pass/regist':
                return '수강권 생성';
            default:
                return null;
        }
    }
    return (
        <>
            {location.pathname === '/home' ?
                <Header /> : <SubHeader title={getTitle()} />
            }
            <main className="contents_wrapper">
                {prop.children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;