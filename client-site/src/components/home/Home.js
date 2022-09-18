import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImage from "./SliderImage";

import events_img1 from '../../images/events_img1.png';
import events_img2 from '../../images/events_img2.png';
import events_img3 from '../../images/events_img3.png';
import tourism_img1 from '../../images/tourism_img1.png';
import tourism_img2 from '../../images/tourism_img2.png';
import tourism_img3 from '../../images/tourism_img3.png';

import gallery_img1 from '../../images/gallery_img1.png';
import gallery_img2 from '../../images/gallery_img2.png';
import gallery_img3 from '../../images/gallery_img3.png';
import gallery_img4 from '../../images/gallery_img4.png';
import gallery_img5 from '../../images/gallery_img5.png';
import gallery_img6 from '../../images/gallery_img6.png';
import gallery_img7 from '../../images/gallery_img7.png';
import gallery_img8 from '../../images/gallery_img8.png';

import partners_img1 from '../../images/partners_img1.png';
import partners_img2 from '../../images/partners_img2.png';
import partners_img3 from '../../images/partners_img3.png';
import partners_img4 from '../../images/partners_img4.png';
import partners_img5 from '../../images/partners_img5.png';
import Welcome from './Welcome';



function OurEventsNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}

function OurEventsPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}

function UpcomingEventsNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}

function UpcomingEventsPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}

function TourismNewsNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}

function TourismNewsPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}

function OurPartnersNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}

function OurPartnersPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}

const Home = () => {

    const [ourEvents, setOurEventts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/ourEvents')
        .then(res => res.json())
        .then(data => {
            setOurEventts(data);
            console.log("ourEvents",data);
        })
    },[])

    const [ourUpcomingEvents, setOurUpcomingEventts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/upcomingEvents')
        .then(res => res.json())
        .then(data => {
            setOurUpcomingEventts(data);
            console.log("Upcoming ourEvents",data);
        })
    },[])

    const [tourismNews, setTourismNews] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/tourismNews')
        .then(res => res.json())
        .then(data => {
            setTourismNews(data);
            console.log(" tourism News",data);
        })
    },[])
    // galleryImage
    
    const [galleryImage, setGalleryImage] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/galleryimage')
        .then(res => res.json())
        .then(data => {
            setGalleryImage(data);
            console.log(" setGalleryImage",data);
        })
    },[])

    // ourPartners 

    const [ourPartners, setOurPartners] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/partners')
        .then(res => res.json())
        .then(data => {
            setOurPartners(data);
            console.log(" setOurPartners",data);
        })
    },[])

    const ourEventsSlider = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <OurEventsNextArrow />,
        prevArrow: <OurEventsPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    
    
    const upcomingEventsSlider = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <UpcomingEventsNextArrow />,
        prevArrow: <UpcomingEventsPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };


    const tourismNewsSlider = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <TourismNewsNextArrow />,
        prevArrow: <TourismNewsPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    const ourPartnersSlider = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        nextArrow: <OurPartnersNextArrow />,
        prevArrow: <OurPartnersPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };


    return (
        <>
            <div className="bg__body">
                <SliderImage />
                <div className="container">
                    <Welcome/>
                    {/* our events  */}
                    <div className="row pt-4">
                        <div className="col-12">
                            <h3 className="mb-1 text-center">
                                <span className="header_text_normal_bm">Our</span>
                                <span className="header_text_bold"> Events</span>
                            </h3>
                            <div className="events_carousel pt-4 mb-3">
                                <Slider {...ourEventsSlider}>
                                    {
                                        ourEvents.length > 0 && ourEvents.map((item, id) => {
                                            return (
                                                <div key={id} className="row g-3">
                                                    <div className="col-md-12">
                                                        <div className="events_carousel_box_card">
                                                            <div className="card">
                                                                <img src= {`http://localhost:5000/images/${item.image}`} className="card-img-top" alt="image" />
                                                                <div className="card-body">
                                                                    <p className="events_carousel_date"><i className="fa-solid fa-calendar"></i> <span className="ms-2">{item.date}</span></p>
                                                                    <h6 className="events_carousel_card_title mb-2">{item.title}</h6>
                                                                    <p className="events_carousel_discription">{item.details}</p>
                                                                    <div className="pt-0">
                                                                        <a src="#" type="button" className="btn btn_read_carousel">
                                                                            <span>Read More....</span>
                                                                            <span className="ms-2"><i className="fa-solid fa-arrow-right-long"></i></span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                            <div className="pt-5 text-center">
                                <Link to="our-events" type="button" className="btn btn_read">
                                    <span>Show All Events</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* upcoming events  */}
                    <div className="row pt-4">
                        <div className="col-12">
                            <h3 className="mb-1 text-center">
                                <span className="header_text_normal_bm">Upc</span><span className="header_text_normal">oming</span>
                                <span className="header_text_bold"> Events</span>
                            </h3>
                            <div className="events_carousel pt-4 mb-3">
                                <Slider {...upcomingEventsSlider}>
                                    {
                                        ourUpcomingEvents.length > 0 && ourUpcomingEvents.map((item, id) => {
                                            return (
                                                <div key={id} className="row g-3">
                                                    <div className="col-12">
                                                        <div className="card_bg">
                                                            <img src= {`http://localhost:5000/images/${item.image}`} className="card-img-top" alt="image" />
                                                            <div className="p-3">
                                                                <div className="row g-0">
                                                                    <div className="col-3">
                                                                        <h6 className="header_event_card_month">{item.date}</h6>
                                                                    </div>
                                                                    <div className="col-9">
                                                                        <h6 className="upc_events_carousel_card_title">{item.title}</h6>
                                                                        <p className="upc_events_carousel_discription">{item.details}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                            <div className="pt-5 text-center">
                                <Link to="our-events" type="button" className="btn btn_read">
                                    <span>Show All Upcoming Events</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Tourism news  */}
                    <div className="row mb-5 pt-4">
                        <div className="col-12">
                            <h3 className="mb-1 text-center">
                                <span className="header_text_normal_bm">Tour</span><span className="header_text_normal">ism</span>
                                <span className="header_text_bold"> News</span>
                            </h3>
                            <div className="tourism_carousel pt-4 mb-3">
                                <Slider {...tourismNewsSlider}>
                                    {
                                        tourismNews.length > 0 && tourismNews.map((item, id) => {
                                            return (
                                                <div key={id} className="row g-3">
                                                    <div className="col-md-12">
                                                        <div className="tourism_carousel_box_card">
                                                            <div className="card">
                                                                <img src= {`http://localhost:5000/images/${item.image}`} className="card-img-top" alt="image" />
                                                                <div className="card-body">
                                                                    <div className="d-flex justify-content-between">
                                                                        {/* <p className="tourism_carousel_date">
                                                                            <span><i className="fa-regular fa-user"></i> </span>
                                                                            <span className="ms-2">{item.title}</span>
                                                                        </p> */}
                                                                        <p className="tourism_carousel_date">
                                                                            <span><i className="fa-solid fa-calendar"></i> </span>
                                                                            <span className="ms-2">{item.date}</span>
                                                                        </p>
                                                                    </div>
                                                                    <h6 className="tourism_carousel_card_title mb-2">{item.title}</h6>
                                                                    <p className="tourism_carousel_discription">{item.details}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                    {/* Gallery  */}
                    <div className="row g-3 pt-3">
                        <h3 className="mb-3 text-center">
                            <span className="header_text_normal_bm header_text_bold">Gallery</span>
                        </h3>

                        {
                            galleryImage.length > 0 && galleryImage.map((item, id) => {
                                return (
                                    <div key={id} className="col-md-3">
                                        <div className="gallery_img">
                                            <img src= {`http://localhost:5000/images/${item.image}`} alt="" />
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className="pt-4 text-center">
                            <a src="#" type="button" className="btn btn_read">
                                <span>Load More</span>
                            </a>
                        </div>
                    </div>

                    {/* Partners  */}
                    <div className="row pt-4">
                        <div className="col-12">
                            <h3 className="mb-1 text-center">
                                <span className="header_text_normal_bm">Our</span>
                                <span className="header_text_bold"> Partners</span>
                            </h3>
                            <div className="partners_carousel pt-4 mb-5">
                                <Slider {...ourPartnersSlider}>
                                    {
                                        ourPartners.length > 0 && ourPartners.map((item, id) => {
                                            return (
                                                <div key={id} className="row g-2">
                                                    <div className="col-12">
                                                        <div className="partners_carousel_box_card">
                                                            <div className="card text-center">
                                                                <div className="d-flex justify-content-center pt-3">
                                                                    <img src= {`http://localhost:5000/images/${item.image}`} className="card-img-top" alt="partner img" style={{ width: "100%", height: "90px", padding: "10px" }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;


