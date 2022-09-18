import React, { useState, useEffect } from 'react';
import "../headerTop/HeaderTop.css";

const HeaderTop = () => {
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 250) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, []);

    return (
        <div className="header__top">
            <div className={`active1 ${show && 'hidden'}`}>
                <div className="container pt-1">
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-4">
                            <div className="ht-email">
                                <span className="me-3">
                                    <i className="me-2 fa-solid fa-phone"></i> +880 1611685570
                                </span>
                                <span className="me-3">
                                    <i className="me-2 fa-solid fa-envelope"></i> info.tdab@gmail.com
                                </span>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="d-flex justify-content-end">
                                <div className="ht_dropdown">
                                    <select defaultValue={'DEFAULT'} className="form-select form-select-sm"  aria-label=".form-select-sm example">
                                        <option value="DEFAULT" disabled>Select Language</option>
                                        <option value="1">English</option>
                                        <option value="2">Bengali</option>
                                        <option value="3">Others</option>
                                    </select>
                                </div>
                                <div className="ht-social">
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
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;

