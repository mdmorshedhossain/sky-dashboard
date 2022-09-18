import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import LOGO_01 from '../../images/LOGO_01.png';
import '../header/Header.css';

const Header = () => {
    const navigate = useNavigate();
    const headerClickHandler = e => {
        e.preventDefault()
        // navigate(-1);
        navigate("/")
    };
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg  header__navbar" >
            <div className="container container-fluid" >
                <Link to="/" className={`navbar-brand`} >
                    <div className="logo_img">
                    <img src={LOGO_01} className="img-fluid"  alt="LOGO_01" border="0" />
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <span onClick={headerClickHandler}></span>

                    <ul className="navbar-nav menu3">
                        <li className="nav-item">
                            <Link to='/' className={`navbar-brand nav-link ${location.pathname === "/" && "active-nav"}`} aria-current="page"><span>Home</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/board-of-directors' className={`navbar-brand nav-link ${location.pathname === "/board-of-directors" && "active-nav"}`} ><span>Board of Directors</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/all-airlines' className={`navbar-brand nav-link ${location.pathname === "/all-airlines" && "active-nav"}`} ><span>All Airlines</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/travel-destinations' className={`navbar-brand nav-link ${location.pathname === "/travel-destinations" && "active-nav"}`} ><span>Travel Destination</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/festivals' className={`navbar-brand nav-link ${location.pathname === "/festivals" && "active-nav"}`} ><span>Festivals</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/embassies' className={`navbar-brand nav-link ${location.pathname === "/embassies" && "active-nav"}`} ><span>Embassies</span></Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/contact' className={`navbar-brand nav-link ${location.pathname === "/contact" && "active-nav"}`}  ><span>Contact</span></Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to='/login' className="nav-link btn_learn_more nav_link_pay_online">Login</Link>
                        </li> */}
                        <li className="nav-item dropdown mx-1" id="drop_down">
                            <Link to='#' className={`navbar-brand nav-link ${location.pathname === "" && "active-nav"}`} id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className="pt-1"><i className="fa-solid fa-bars"></i></span></Link>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                <li className="nav-item">
                                    <Link to="forein-ministry" className={`navbar-brand dropdown-item nav-link ${location.pathname === "/forein-ministry" && "active-nav"}`}>
                                        <span>Foreign Ministry in Bangladesh</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="bangladesh-map" className={`navbar-brand dropdown-item nav-link ${location.pathname === "/bangladesh-map" && "active-nav"}`}>
                                        <span>Bangladesh Map</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="bangladesh-mission" className={`navbar-brand dropdown-item nav-link ${location.pathname === "/bangladesh-mission" && "active-nav"}`}>
                                        <span>Bangladesh Mission in Foreign Countries</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="ministry-info" className={`navbar-brand dropdown-item nav-link ${location.pathname === "/ministry-info" && "active-nav"}`}>
                                        <span>Ministry Information</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="members" className={`navbar-brand dropdown-item nav-link ${location.pathname === "/members" && "active-nav"}`}>
                                        <span>Members</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="gallery" className={`navbar-brand dropdown-item nav-link ${location.pathname === "/gallery" && "active-nav"}`}>
                                        <span>Gallery</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="about-bangladesh" className={`navbar-brand dropdown-item nav-link ${location.pathname === "/about-bangladesh" && "active-nav"}`}>
                                        <span>About Bangladesh</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="tourism-news" className={`navbar-brand dropdown-item nav-link ${location.pathname === "/tourism-news" && "active-nav"}`}>
                                        <span>Tourism News</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;