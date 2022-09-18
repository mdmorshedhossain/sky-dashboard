import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import BannerImage from './bannerImage/BannerImage';
import Table from './table/Table';
// import logo from '../../../../client-site/public/LOGO_01.png'

const Dashboard = () => {

    // const [selectedState, setSelectedState] = useState('dashboard');
    return (
        <div>
            <div className="container-scroller">
                {/* partial:partials/_navbar.html */}
                <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                        {/* <a className="navbar-brand brand-logo mr-5" href="index.html"><img src="images/logo.svg" className="mr-2" alt="logo" /></a> */}
                        <Link className="navbar-brand brand-logo mr-5" to="/"><img src="LOGO_01.png" alt="" /></Link>
                        <Link className="navbar-brand brand-logo-mini" to="/"><img src="LOGO_01.png" alt="logo" /></Link>

                    </div>
                    <div className="navbar-menu-wrapper d-flex align-items-center justify-content-start">
                        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span className="icon-menu" />
                        </button>
                        <ul className="navbar-nav mr-lg-2">
                            <li className="nav-item nav-search d-none d-lg-block">
                                {/* //top search bar
                     <div className="input-group">
                        <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                        <span className="input-group-text" id="search">
                            <i className="icon-search" />
                        </span>
                        </div>
                        <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" />
                    </div> */}
                            </li>
                        </ul>
                        {/* //top profile
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item dropdown">
                    <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                        <i className="icon-bell mx-0" />
                        <span className="count" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                        <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                        <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                            <div className="preview-icon bg-success">
                            <i className="ti-info-alt mx-0" />
                            </div>
                        </div>
                        <div className="preview-item-content">
                            <h6 className="preview-subject font-weight-normal">Application Error</h6>
                            <p className="font-weight-light small-text mb-0 text-muted">
                            Just now
                            </p>
                        </div>
                        </a>
                        <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                            <div className="preview-icon bg-warning">
                            <i className="ti-settings mx-0" />
                            </div>
                        </div>
                        <div className="preview-item-content">
                            <h6 className="preview-subject font-weight-normal">Settings</h6>
                            <p className="font-weight-light small-text mb-0 text-muted">
                            Private message
                            </p>
                        </div>
                        </a>
                        <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                            <div className="preview-icon bg-info">
                            <i className="ti-user mx-0" />
                            </div>
                        </div>
                        <div className="preview-item-content">
                            <h6 className="preview-subject font-weight-normal">New user registration</h6>
                            <p className="font-weight-light small-text mb-0 text-muted">
                            2 days ago
                            </p>
                        </div>
                        </a>
                    </div>
                    </li>
                    <li className="nav-item nav-profile dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                        <img src="images/faces/face28.jpg" alt="profile" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                        <a className="dropdown-item">
                        <i className="ti-settings text-primary" />
                        Settings
                        </a>
                        <a className="dropdown-item">
                        <i className="ti-power-off text-primary" />
                        Logout
                        </a>
                    </div>
                    </li>
                    <li className="nav-item nav-settings d-none d-lg-flex">
                    <a className="nav-link" href="#">
                        <i className="icon-ellipsis" />
                    </a>
                    </li>
                </ul> */}
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            <span className="icon-menu" />
                        </button>
                    </div>
                </nav>
                {/* partial */}
                <div className="container-fluid page-body-wrapper">
                    {/* partial:partials/_settings-panel.html */}
                    <div className="theme-setting-wrapper">
                        <div id="settings-trigger"><i className="ti-settings" /></div>
                        <div id="theme-settings" className="settings-panel">
                            <i className="settings-close ti-close" />
                            <p className="settings-heading">SIDEBAR SKINS</p>
                            <div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border mr-3" />Light</div>
                            <div className="sidebar-bg-options" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border mr-3" />Dark</div>
                            <p className="settings-heading mt-2">HEADER SKINS</p>
                            <div className="color-tiles mx-0 px-4">
                                <div className="tiles success" />
                                <div className="tiles warning" />
                                <div className="tiles danger" />
                                <div className="tiles info" />
                                <div className="tiles dark" />
                                <div className="tiles default" />
                            </div>
                        </div>
                    </div>
                    <div id="right-sidebar" className="settings-panel">
                        <i className="settings-close ti-close" />
                        <ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="chats-tab" data-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
                            </li>
                        </ul>
                    </div>
                    {/* partial */}
                    {/* partial:partials/_sidebar.html */}
                    <nav className="sidebar sidebar-offcanvas" id="sidebar">
                        <ul className="nav">
                            {/* Start all sidebar menue */}
                            {/* <li className="nav-item">
                                <Link className="nav-link" to='/dashboard/landing-page/banner-image'>
                                    <i className="icon-grid menu-icon" />
                                    <span className="menu-title">Dashboard</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                                    <i className="icon-layout menu-icon" />
                                    <span className="menu-title">Landing Page</span>
                                    <i className="menu-arrow" />
                                </a>

                                <div className="collapse" id="ui-basic">
                                    <ul className="nav flex-column sub-menu">
                                        <li className="nav-item"> <Link style={{ listStyle: 'none' }} className="nav-link" to="/dashboard/landing-page/banner-image">Banner Image</Link></li>
                                        <li className="nav-item"> <Link style={{ listStyle: 'none' }} className="nav-link" to="/dashboard/landing-page/welcome">Welcome</Link></li>
                                        <li className="nav-item"> <Link style={{ listStyle: 'none' }} className="nav-link" to="/dashboard/landing-page/our-events">Our Events</Link></li>
                                        <li className="nav-item"> <Link style={{ listStyle: 'none' }} className="nav-link" to="/dashboard/landing-page/upcoming-events">Upcomming Events</Link></li>
                                        <li className="nav-item"> <Link style={{ listStyle: 'none' }} className="nav-link" to="/dashboard/landing-page/tourism-news">Tourism News</Link></li>
                                        <li className="nav-item"> <Link style={{ listStyle: 'none' }} className="nav-link" to="/dashboard/landing-page/gallery">Gallery</Link></li>
                                        <li className="nav-item"> <Link style={{ listStyle: 'none' }} className="nav-link" to="/dashboard/landing-page/our-partners">Our Partners</Link></li>
                                    </ul>
                                </div>
                            </li> */}

                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/landing-page/banner-image">
                                    <i className="icon-paper menu-icon" />
                                    <span className="menu-title">Banner Image</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/landing-page/welcome">
                                    <i className="icon-paper menu-icon" />
                                    <span className="menu-title">Welcome</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/landing-page/our-events">
                                    <i className="icon-paper menu-icon" />
                                    <span className="menu-title">Our Events</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/landing-page/upcoming-events">
                                    <i className="icon-paper menu-icon" />
                                    <span className="menu-title">Upcoming Events</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/landing-page/tourism-news">
                                    <i className="icon-paper menu-icon" />
                                    <span className="menu-title">Tourism News</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/landing-page/gallery">
                                    <i className="icon-paper menu-icon" />
                                    <span className="menu-title">Gallery</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/landing-page/our-partners">
                                    <i className="icon-paper menu-icon" />
                                    <span className="menu-title">Our Partners</span>
                                </Link>
                            </li>
                            {/* Board Of Directors */}
                            {/* <li className="nav-item">
                    <Link className="nav-link" to="dashboard/board-of-directory">
                        <i className="icon-paper menu-icon" />
                        <span className="menu-title">Board Of Directors</span>
                    </Link>
                    </li> */}

                            {/* All airlines */}
                            {/* <li className="nav-item">
                    <Link className="nav-link" to="dashboard/all-airlines">
                        <i className="icon-paper menu-icon" />
                        <span className="menu-title">All Airlines</span>
                    </Link>
                    </li> */}

                            {/* All Enquiries */}
                            {/* <li className="nav-item">
                    <Link className="nav-link" to="dashboard/enquiry-form">
                        <i className="icon-paper menu-icon" />
                        <span className="menu-title">All Enquiries</span>
                    </Link>
                    </li> */}
                            {/* End of all sidebar menue */}
                        </ul>
                    </nav>

                    {/* Content area */}
                    <Outlet />
                    {/* Content area end*/}

                </div>
                {/* page-body-wrapper ends */}
            </div>

        </div>
    );
};

export default Dashboard;