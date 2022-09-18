import React from 'react';
import contact_img1 from "../../images/contact_img1.png";


const Contact = () => {
    return (
        <div className="bg__body">
            <div className="banner_img">
                <img src={contact_img1} className="img-fluid" alt="contact_img1" />
                <div className="banner_img_text">
                    <h3 className="text-white">Contact</h3>
                </div>
            </div>
            <div className="container mb-5 pt-4" >
                <div className="row g-4 ">
                    <div className="col-md-5">
                        <div className="contact_bg">
                            <h3 className="header_contact mb-2">Contact Us</h3>
                            <div className="card">
                                <div className="card-body">
                                    <ul className="list-unstyled">
                                        <li>
                                            <span className="d-flex align-items-start ">
                                                <i className="fa-solid fa-phone"></i>
                                                <p>+8802-9675471-72</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="d-flex align-items-start ">
                                                <i className="fa-solid fa-envelope"></i>
                                                <p>info.tdab@gmail.com</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="d-flex align-items-start ">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <p>8, Link Road, (2nd Floor), Banglamotor, Dhaka-1000, Bangladesh.</p>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer_social text-center">
                                    <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#" className="whatsapp"><i className="fab fa-whatsapp"></i></a>
                                    <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="pinterest"><i className="fab fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h3 className="header_text_bold text-center mb-2">Enquiry Form</h3>
                        <form 
                            action='http://localhost:5000/addEnquiry'
                            method='post'
                            encType='multipart/form-data'
                            className="contact_enquiry">
                            <div className="mb-1">
                                <label htmlFor="exampleInputEmail1" className="col-form-label col-form-label-sm">Name</label>
                                <input name='name' type="text" className="form-control form-control-sm" id="name" aria-describedby="text" />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="exampleInputEmail1" className="col-form-label col-form-label-sm">Email address</label>
                                <input name='email' type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="exampleInputPassword1" className="col-form-label col-form-label-sm">Phone</label>
                                <input name='phone' type="phone" className="form-control form-control-sm" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-1 ">
                                <label htmlFor="exampleInputPassword1" className="col-form-label col-form-label-sm">Your Comments</label>
                                <textarea name='comment' className="form-control form-control-sm" placeholder="Leave a comment here" style={{ height: '100px' }}></textarea>
                            </div>
                            <div className="mt-2 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">I agree to the Privacy Policy and Terms of Service.</label>
                            </div>
                            <input type="submit" value='All Enquiry' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;