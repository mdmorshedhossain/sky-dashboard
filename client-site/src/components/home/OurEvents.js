import React, { useState } from 'react';
import our_events_img from "../../images/our_events_img.png";

import events_img1 from '../../images/events_img1.png';
import events_img2 from '../../images/events_img2.png';
import events_img3 from '../../images/events_img3.png';

const OurEvents = () => {
    const [ourEvents, setOurEventts] = useState([
        {
            events_name: "TDAB New Board of Directors A Courtesy Meeting with Mr. JABED Ahmed (Additional Secretary) CEO Bangladesh Tourism Board .", events_description: "TDAB New Board of Directors A Courtesy Meeting with Mr. JABED Ahmed (Additional Secretary) CEO Bangladesh Tourism Board .",
            image: events_img1, events_date: "22-08-2022", id: 1
        },
        {
            events_name: "Pre-Budget Discussion", events_description: "জাতীয় রাজস্ব বোর্ডের (এনবিআর) চেয়ারম্যান জনাব আবু হেনা মো. রহমাতুল ইসলাম এর সভাপতিত্বে প্রাক বাজেট আলোচনায় উপস্থিত। যেখানে আগামী ২০২২-২৩ অর্থবছরের জাতীয় বাজেটের কর সংক্রান্ত বিষয়ে মতবিনিময় অনুষ্ঠিত...",
            image: events_img2, events_date: "22-08-2022", id: 2
        },
        {
            events_name: "TDAB Celebrate World Tourism Day 2017 & 20th Anniversary of TDAB.", events_description: "Tourism Developers Association of Bangladesh  (TDAB), Celebrate the World tourism Day every Year on 27th September, World Tourism Day 2017 presents a unique opportunity to raise awareness on...",
            image: events_img3, events_date: "22-08-2022", id: 3
        },
        {
            events_name: "Pre-Budget Discussion", events_description: "Tourism Developers Association of Bangladesh  (TDAB), Celebrate the World tourism Day every Year on 27th September, World Tourism Day 2017 presents a unique opportunity to raise awareness on...",
            image: events_img3, events_date: "22-08-2022", id: 4
        },
        {
            events_name: "Pre-Budget Discussion", events_description: "Tourism Developers Association of Bangladesh  (TDAB), Celebrate the World tourism Day every Year on 27th September, World Tourism Day 2017 presents a unique opportunity to raise awareness on...",
            image: events_img3, events_date: "22-08-2022", id: 5
        },
    ]);

    const [upcomingEvents, setUpcomingEventts] = useState([
        {
            events_name: "TDAB New Board of Directors A Courtesy Meeting with Mr. JABED Ahmed (Additional Secretary) CEO Bangladesh Tourism Board .", events_description: "TDAB New Board of Directors A Courtesy Meeting with Mr. JABED Ahmed (Additional Secretary) CEO Bangladesh Tourism Board .",
            image: events_img1, events_date: "22-08-2022", id: 1
        },
        {
            events_name: "Pre-Budget Discussion", events_description: "জাতীয় রাজস্ব বোর্ডের (এনবিআর) চেয়ারম্যান জনাব আবু হেনা মো. রহমাতুল ইসলাম এর সভাপতিত্বে প্রাক বাজেট আলোচনায় উপস্থিত। যেখানে আগামী ২০২২-২৩ অর্থবছরের জাতীয় বাজেটের কর সংক্রান্ত বিষয়ে মতবিনিময় অনুষ্ঠিত...",
            image: events_img2, events_date: "22-08-2022", id: 2
        },
        {
            events_name: "TDAB Celebrate World Tourism Day 2017 & 20th Anniversary of TDAB.", events_description: "Tourism Developers Association of Bangladesh  (TDAB), Celebrate the World tourism Day every Year on 27th September, World Tourism Day 2017 presents a unique opportunity to raise awareness on...",
            image: events_img3, events_date: "22-08-2022", id: 3
        },
        {
            events_name: "Pre-Budget Discussion", events_description: "Tourism Developers Association of Bangladesh  (TDAB), Celebrate the World tourism Day every Year on 27th September, World Tourism Day 2017 presents a unique opportunity to raise awareness on...",
            image: events_img3, events_date: "22-08-2022", id: 4
        },
        {
            events_name: "Pre-Budget Discussion", events_description: "Tourism Developers Association of Bangladesh  (TDAB), Celebrate the World tourism Day every Year on 27th September, World Tourism Day 2017 presents a unique opportunity to raise awareness on...",
            image: events_img3, events_date: "22-08-2022", id: 5
        },

    ]);


    return (
        <div className="bg__body">
            <div className="banner_img">
                <img src={our_events_img} className="img-fluid" alt="our_events_img" />
                <div className="banner_img_text">
                    <h3 className="text-white">Our Events</h3>
                </div>
            </div>
            <div className="container mb-5 pt-4" >
                <div className="row">
                    <div className="col-12">
                        {/* <h3 className="header_text_bold text-center">Events</h3> */}
                        <h3 className="text-center">
                            <span className="header_text_normal_bm header_text_bold">Eve</span><span className="header_text_bold">nts</span>
                        </h3>
                    </div>
                </div>
                <div className="row g-4 justify-content-center pt-3">
                    {
                        ourEvents.length > 0 && ourEvents.map((item, id) => {
                            return (
                                <div key={id} className="col-md-4">
                                    <div className="our_events_card">
                                        <div className="card">
                                            <img src={item.image} className="card-img-top" alt="image" />
                                            <div className="card-body">
                                                <p className="events_carousel_date"><i className="fa-solid fa-calendar"></i> <span className="ms-2">{item.events_date}</span></p>
                                                <h6 className="events_carousel_card_title mb-2">{item.events_name}</h6>
                                                <p className="events_carousel_discription">{item.events_description}</p>
                                                <div className="pt-0">
                                                    <a src="#" type="button" className="btn btn_read_carousel">
                                                        <span>Read More</span>
                                                        <span className="ms-2"><i className="fa-solid fa-arrow-right-long"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row pt-4">
                    <div className="col-12">
                        {/* <h3 className="header_text_bold text-center">Upcoming Events</h3> */}
                        <h3 className="mb-3 text-center">
                            <span className="header_text_normal_bm">Upc</span><span className="header_text_normal">oming</span>
                            <span className="header_text_bold"> Events</span>
                        </h3>
                    </div>
                </div>
                <div className="row g-4 justify-content-center pt-3">
                    {
                        upcomingEvents.length > 0 && upcomingEvents.map((item, id) => {
                            return (
                                <div key={id} className="col-md-4">
                                    <div className="upcoming_events_card">
                                        <img src={item.image} className="card-img-top" alt="image" />
                                        <div className="p-3">
                                            <div className="row g-0">
                                                <div className="col-3">
                                                    <h6 className="header_event_card_month">SEP</h6>
                                                    <p className="header_event_card_date">16</p>
                                                </div>
                                                <div className="col-9">
                                                    <h6 className="upc_events_carousel_card_title">{item.events_name}</h6>
                                                    <p className="upc_events_carousel_discription">{item.events_description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default OurEvents;