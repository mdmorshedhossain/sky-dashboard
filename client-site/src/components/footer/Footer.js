import React from 'react';
import '../footer/Footer.css';
import LOGO_01 from '../../images/LOGO_01.png';
import footer_bg from '../../images/footer_bg.png';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='footer_bg_img'>
            <div className="pt-4">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-md-3 pe-md-5">
                            <div className="text-center">
                                <Link to="/" className="LOGO_01__footer" >
                                    <img src={LOGO_01} className="img-fluid" alt="LOGO_01" border="0" />
                                </Link>
                            </div>
                            <h6 className="footer_header pt-3">TOURISM DEVELOPERS</h6>
                            <h6 className="footer_header2">ASSOCIATION OF BANGLADESH</h6>
                            <div className="footer_contact pt-2">
                                <ul className="list-unstyled">
                                    <li>
                                        <span className="d-flex align-items-start ">
                                            <i className="footer_text p-1 text__color fa-solid fa-phone"></i>
                                            <p className="px-3 footer_text">+8802-9675471-72</p>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="d-flex align-items-start ">
                                            <i className="footer_text p-1 text__color fa-solid fa-envelope"></i>
                                            <p className="px-3 footer_text">info.tdab@gmail.com</p>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="d-flex align-items-start ">
                                            <i className="footer_text p-1 text__color fa-solid fa-location-dot"></i>
                                            <p className="px-3 footer_text">8, Link Road, (2nd Floor), Banglamotor, Dhaka-1000, Bangladesh.</p>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h5 className="header_link_footer mb-2">About TDAB</h5>
                            <div className="quick_link_footer">
                                <Link to="/" className="link_footer">
                                    <span className="d-flex align-items-start ">
                                        <i className="footer_right_arrow p-1 fa-solid fa-play"></i>
                                        <p className="px-3 footer_text">Home</p>
                                    </span>
                                </Link>
                                <Link to="/about" className="link_footer">
                                    <span className="d-flex align-items-start ">
                                        <i className="footer_right_arrow p-1 fa-solid fa-play"></i>
                                        <p className="px-3 footer_text">President’s Message</p>
                                    </span>
                                </Link>
                                <Link to="/contact" className="link_footer">
                                    <span className="d-flex align-items-start ">
                                        <i className="footer_right_arrow p-1 fa-solid fa-play"></i>
                                        <p className="px-3 footer_text">Board of Directors</p>
                                    </span>
                                </Link>
                                <Link to="/contact" className="link_footer">
                                    <span className="d-flex align-items-start ">
                                        <i className="footer_right_arrow p-1 fa-solid fa-play"></i>
                                        <p className="px-3 footer_text">Advisors</p>
                                    </span>
                                </Link>
                                <Link to="/contact" className="link_footer">
                                    <span className="d-flex align-items-start ">
                                        <i className="footer_right_arrow p-1 fa-solid fa-play"></i>
                                        <p className="px-3 footer_text">TOAB Committees</p>
                                    </span>
                                </Link>
                                <Link to="/contact" className="link_footer">
                                    <span className="d-flex align-items-start ">
                                        <i className="footer_right_arrow p-1 fa-solid fa-play"></i>
                                        <p className="px-3 footer_text">TOAB Secretariat</p>
                                    </span>
                                </Link>
                                {/* <a href="#" className="link_footer"><p>Login</p></a> */}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h5 className="header_link_footer mb-2">Quick Link</h5>
                            <div className="quick_link_footer">
                                <Link to="/" className="link_footer">
                                    <span className="d-flex align-items-start ">
                                        <i className="footer_right_arrow p-1 fa-solid fa-play"></i>
                                        <p className="px-3 footer_text">Member Search</p>
                                    </span>
                                </Link>
                                <Link to="/about" className="link_footer">
                                    <span className="d-flex align-items-start ">
                                        <i className="footer_right_arrow p-1 fa-solid fa-play"></i>
                                        <p className="px-3 footer_text">Membership Criteria & Fee</p>
                                    </span>
                                </Link>
                                <Link to="/contact" className="link_footer">
                                    <span className="d-flex align-items-start ">
                                        <i className="footer_right_arrow p-1 fa-solid fa-play"></i>
                                        <p className="px-3 footer_text">Visit Bangladesh</p>
                                    </span>
                                </Link>
                                <Link to="/contact" className="link_footer">
                                    <span className="d-flex align-items-start ">
                                        <i className="footer_right_arrow p-1 fa-solid fa-play"></i>
                                        <p className="px-3 footer_text">Completed Events</p>
                                    </span>
                                </Link>
                                <Link to="/contact" className="link_footer">
                                    <span className="d-flex align-items-start ">
                                        <i className="footer_right_arrow p-1 fa-solid fa-play"></i>
                                        <p className="px-3 footer_text">Upcoming Events</p>
                                    </span>
                                </Link>
                                {/* <a href="#" className="link_footer text__color"><p>Login</p></a> */}
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <h5 className="header_link_footer mb-2">Follow Us</h5>
                            <p className="text__color footer_text">Keep in touch. Join us on Social Media.</p>
                            <div className="footer_social">
                                <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#" className="whatsapp"><i className="fab fa-whatsapp"></i></a>
                                <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                                {/* <a href="#" className="pinterest"><i className="fab fa-pinterest-p"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer_copyright mb-0">Copyright ©2022 <a href='https://zaimahtech.com/' target='_blank' style={{ color: '#0D2C49', background: 'inherit' }}>Zaimah technologies ltd.</a> All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;