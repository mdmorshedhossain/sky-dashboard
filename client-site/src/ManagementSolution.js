import generalLogo from './images/general.png';
import mentalLogo from './images/mental.png';
import hairLossLogo from './images/hair.png';
import cardioLogo from './images/cardio.png';
import paediatricLogo from './images/paediatric.png';
import alliedLogo from './images/allied.png';
import ehrLogo from './images/ehr.png';
import healthLogo from './images/health.png';
import iphone from './images/iPhone.png';
import React from "react";
import Slider from "react-slick";
import logs from './images/logs.png';
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import world_fav from './images/world_fav.png';
import world_quantic from './images/world_quantic.png';
import world_navorium from './images/world_navorium.png';
import world_edb from './images/world_edb.png';
// import testimonial_card_img from './images/testimonial_card_img.jpg';

function ManagementSolution() {

    // const WebTechnologiesFrameworksSlider = {
    //     className: "center mx-4",
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 5,
    //     swipeToSlide: true,
    //     adaptiveHeight: true,
    //     afterChange: function (index) {
    //         console.log(
    //             `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //         );
    //     }
    // };

    // const [ourWorldwidePartners, setOurWorldwidePartners] = useState([
    //     { technologies_img: world_fav, id: 1 },
    //     { technologies_img: world_quantic, id: 2 },
    //     { technologies_img: world_navorium, id: 3 },
    //     { technologies_img: world_edb, id: 4 },
    //     { technologies_img: world_fav, id: 5 },
    //     { technologies_img: world_quantic, id: 6 },
    //     { technologies_img: world_navorium, id: 7 },
    //     { technologies_img: world_edb, id: 8 },

    // ]);

    return (
        <>
            <div className='medical-practice-management'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='header-1st'>
                                <div className='title-head col-4 mx-auto text-center'>
                                    <span className='medical-practice-management-title'>
                                        <span className='fw-bold'> Not Just a </span>Medical Practice Management Software
                                    </span>

                                </div>
                                <p className="col-md-7  mx-auto mt-3 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

                            </div>


                            <div className='card-carousal rounded mt-5 d-flex justify-content-evenly px-5'>

                                <div class=" bg-white  d-flex justify-content-center" style={{ width: '16rem', borderRadius: '20px', boxShadow: '3px 3px 40px rgba(0,0,0,0.2)' }}>
                                    <div class="card-body">
                                        <div class="top-logo d-flex justify-content-center mt-3">
                                            <div className='inside-div-medical mx-4' >
                                                <img src={healthLogo} className="lolo-medical" />
                                            </div>
                                        </div>
                                        <h6 class="mt-4 text-center" style={{ color: '#5AAB46' }}>ELectronic Health Records</h6>
                                        <p class="card-text text-center mt-3">Some quick example text to build on the  the bulk of the card's contentcard title and make up the bulk of the card's content .</p>
                                    </div>
                                </div>

                                <div class=" bg-white  d-flex justify-content-center" style={{ width: '16rem', borderRadius: '20px', boxShadow: '3px 3px 40px rgba(0,0,0,0.2)' }}>
                                    <div class="card-body">
                                        <div class="top-logo d-flex justify-content-center mt-3">
                                            <div className='inside-div-medical mx-4' >
                                                <img src={healthLogo} className="lolo-medical" />
                                            </div>
                                        </div>
                                        <h6 class="mt-4 text-center" style={{ color: '#5AAB46' }}>ELectronic Health Records</h6>
                                        <p class="card-text text-center mt-3">Some quick example text to build on the  the bulk of the card's contentcard title and make up the bulk of the card's content .</p>
                                    </div>
                                </div>

                                <div class=" bg-white  d-flex justify-content-center" style={{ width: '16rem', borderRadius: '20px', boxShadow: '3px 3px 40px rgba(0,0,0,0.2)' }}>
                                    <div class="card-body">
                                        <div class="top-logo d-flex justify-content-center mt-3">
                                            <div className='inside-div-medical mx-4' >
                                                <img src={healthLogo} className="lolo-medical" />
                                            </div>
                                        </div>
                                        <h6 class="mt-4 text-center" style={{ color: '#5AAB46' }}>ELectronic Health Records</h6>
                                        <p class="card-text text-center mt-3">Some quick example text to build on the  the bulk of the card's contentcard title and make up the bulk of the card's content .</p>
                                    </div>
                                </div>
                                {/* <div class=" bg-white  d-flex justify-content-center" style={{ width: '16rem', borderRadius: '20px', boxShadow: '3px 3px 40px rgba(0,0,0,0.2)' }}>
                                    <div class="card-body">
                                        <div class="top-logo d-flex justify-content-center mt-3">
                                            <div className='inside-div-medical mx-4' >
                                                <img src={healthLogo} className="lolo-medical" />
                                            </div>
                                        </div>
                                        <h6 class="mt-4 text-center" style={{ color: '#5AAB46' }}>ELectronic Health Records</h6>
                                        <p class="card-text text-center mt-3">Some quick example text to build on the  the bulk of the card's contentcard title and make up the bulk of the card's content .</p>
                                    </div>
                                </div> */}

                            </div>
                        </div>

                    </div>

                </div>
                <div className='management-software-2 mt-5 ' style={{
                    backgroundColor: '#F1F5F6',
                }}>
                    <div className='container'>
                        <div className='row d-flex align-items-stretch justify-content-between'>
                            <div className='col-md-6 p-5 '>
                                <div className='header-1st '>
                                    <span className='medical-practice-management-title'>
                                        <span className='fw-bold me-2'> Best Practice Management Software</span>
                                        for Any Type of Medical Practice
                                    </span>
                                </div>
                                <p className='mt-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus pretium ipsum, turpis ipsum nibh nisl, tempor id porttitor. Habitasse dictum purus consectetur ullamcorper risus elementum tortor, sit. Imperdiet dictum pharetra arcu massa turpis cursus neque massa in. Ullamcorper sit aliquam, dictum ac cras est congue.
                                </p>

                                <div class="list-para ">
                                    <div class="one-list d-flex ">
                                        <img src={logs} style={{ width: '17px', height: '17px' }} />
                                        <p class=" mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </div>
                                <div class="one-list d-flex ">
                                    <img src={logs} style={{ width: '17px', height: '17px' }} />
                                    <p class="mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                                <div class="one-list d-flex ">
                                    <img src={logs} style={{ width: '17px', height: '17px' }} />
                                    <p class="mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                                <div class="one-list d-flex ">
                                    <img src={logs} style={{ width: '17px', height: '17px' }} />
                                    <p class="mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                            </div>
                            <div className='col-md-5 px-2'>
                                <div className='management-right-img mx-4'>
                                    <img src={iphone} style={{ width: '90%', height: 'auto', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>




            <div className="management py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-between">
                            {/* <div className="col-4">

                        </div> */}
                            <div className="col-4 mx-auto text-center">
                                <p className="management-para">
                                    <span className="fw-bold"> Management Solution  </span>
                                    for Your Private Practice

                                </p>
                            </div>
                            {/* <div className="col-4">

                        </div> */}
                        </div>
                        <span className="col-md-7  mx-auto ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit...</span>

                        <div className="col-md-12 mt-4 mx-5">
                            <div className="col-md-12 d-flex py-4">

                                <div className="col-md-3 ">
                                    <div className='inside-div mx-4' >
                                        <img src={generalLogo} className="lolo" />
                                    </div>

                                    <div className='mt-3 fw-bold'>For General Practice</div>

                                </div>
                                <div className="col-md-3">
                                    <div className='inside-div mx-4' >
                                        <img src={mentalLogo} className="lolo" />
                                    </div>
                                    <div className='mt-3 fw-bold'>For Mental Health</div>

                                </div>
                                <div className="col-md-3">
                                    <div className='inside-div mx-4' >
                                        <img src={hairLossLogo} className="lolo" />
                                    </div>
                                    <div className='mt-3 fw-bold col-7'>For Trichologists and Hair Loss Clinics</div>

                                </div>
                                <div className="col-md-3">
                                    <div className='inside-div mx-4' >
                                        <img src={cardioLogo} className="lolo" />
                                    </div>
                                    <div className='mt-3 fw-bold'>EHR For Cardiologists
                                    </div>

                                </div>

                            </div>
                            <div className="col-md-12 d-flex mt-4">

                                <div className="col-md-3">
                                    <div className='inside-div mx-4' >
                                        <img src={paediatricLogo} className="lolo" />
                                    </div>
                                    <div className='mt-3 fw-bold'>For Paediatricians</div>

                                </div>
                                <div className="col-md-3">
                                    <div className='inside-div mx-4' >
                                        <img src={alliedLogo} className="lolo" />
                                    </div>
                                    <div className='mt-3 fw-bold col-7'>For Allied Healthcare Practitioners</div>

                                </div>
                                <div className="col-md-3">
                                    <div className='inside-div mx-4' >
                                        <img src={ehrLogo} className="lolo" />
                                    </div>
                                    <div className='mt-3 fw-bold '>EHR For Ophthalmologists</div>

                                </div>
                                <div className="col-md-3">
                                    <div className='inside-div mx-4' >
                                        <img src={healthLogo} className="lolo" />
                                    </div>
                                    <div className='mt-3 fw-bold col-7'>For Alternative Health Practitioners</div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* 
            <div className='our-partners' style={{ backgroundColor: '#F1F5F6' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 p-5'>
                            <h4 className='fw-bold text-center'>Our Partners</h4>
                            <Slider {...WebTechnologiesFrameworksSlider}>
                                {
                                    ourWorldwidePartners.length > 0 && ourWorldwidePartners.map((item, id) => {
                                        return (
                                            <div key={id} className="row g-2">
                                                <div className="col-12">
                                                    <div className="web__carousel__box__card" >
                                                        <div className="card text-center" style={{borderRadius:'10px'}}>
                                                            <div className="d-flex justify-content-center pt-3 ">
                                                                <img src={item.technologies_img} className="card-img-top mx-2" alt="partner img" style={{ width: "210px", height: "90px" }} />
                                                            </div>
                                                            <div className="card-body">
                                                                <p className="web__carousel__box__card__discription ">{item.technologies_name}</p>
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
            </div> */}


        </>
    )
}

export default ManagementSolution;