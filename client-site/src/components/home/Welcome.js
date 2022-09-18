import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Welcome = () => {
    const [welcomeInfo, setWelcomeInfo] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/welcome')
        .then(res => res.json())
        .then(data => {
            setWelcomeInfo(data[0]);
        })
    },[])
    
    return (
        <div>
            <div className="row g-3 pt-sm-5">
                <div className="col-md-6">
                    <h3 className="mb-1">
                        {/* <span className="header_text_normal">Welcome to</span> */}
                        <span className="header_text_bold">{welcomeInfo.title}</span>
                    </h3>
                    <p className="header_description pe-md-5">
                        {welcomeInfo.details}
                    </p>
                    <div className="pt-0">
                        <a src="#" type="button" className="btn btn_read">
                            <span>Read More</span>
                            <span className="ms-2"><i className="fa-solid fa-arrow-right-long"></i></span>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="tour_img pt-2">
                        <img src= {`http://localhost:5000/images/${welcomeInfo.image}`} className="img-fluid" alt="image" border="0" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;