import React from 'react';
import Header from '../header/Header';
import { Outlet } from "react-router-dom";
import Footer from '../footer/Footer';
import HeaderTop from '../headerTop/HeaderTop';

const Layouts = ({ childdren }) => {
    // window.addEventListener('load', (event) => {
    //     console.log('page is fully loaded');
    //   });
    return (
        <>
            <HeaderTop />
            <Header />
            <div>{childdren}</div>

            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layouts;