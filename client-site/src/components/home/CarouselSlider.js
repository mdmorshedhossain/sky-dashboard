import React, {useState} from 'react';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import Slider from "react-slick";
import patient from '../../images/patient.png';
import patient_care from '../../images/patient_care.png';
import patient_money from '../../images/patient_money.png';
import patient_guide from '../../images/patient_guide.png';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey",borderRadius:"100px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey",borderRadius:"100px" }}
        onClick={onClick}
      />
    );
  }
  
const CarouselSlider = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
    const [notJustAMedicalPractice, setNotJustAMedicalPractice] = useState([
        { features_name: "Provide a Better Patient Experience", features_description: "Lessen your administrative burden and focus on what matters most – your patients.", 
            technologies_img: patient, id: 1 },
        { features_name: "Deliver Enhanced Patient Care", features_description: "Lessen your administrative burden and focus on what matters most – your patients.", 
            technologies_img: patient_care, id: 2 },
        { features_name: "Exceptional Value for Money", features_description: "Lessen your administrative burden and focus on what matters most – your patients.", 
            technologies_img: patient_money, id: 3 },
        { features_name: "We Provide Comprehensive, Guided Onboarding", features_description: "Lessen your administrative burden and focus on what matters most – your patients.", 
            technologies_img: patient_guide, id: 4 },

    ]);
    return (
        <div>
            <Slider {...settings} >
                {/* <div class="row g-4">
                    
                        {
                            notJustAMedicalPractice.length > 0 && notJustAMedicalPractice.map((item, id) => {
                                return (
                                    <div key={id} className="col-3">
                                        <div className="features__card">
                                            <div className="card text-center">
                                                <div className="d-flex justify-content-center pt-4">
                                                    <img src={item.technologies_img} className="card-img-top" alt="..." style={{ width: "75px", height: "82px" }} />
                                                </div>
                                                <div className="card-body">
                                                    <h6 className="header__card__title">{item.features_name}</h6>
                                                    <p className="header__card__discription">{item.features_description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div> */}
                <div class="row g-4">
                    
                    {
                           notJustAMedicalPractice.length>0  && notJustAMedicalPractice.map((item, id) => {
                               return (
                                <div class="col-12">
                                    <div class="card_bg">
                                        {/* <img src={EventWhite} class="card-img-top" alt="EventWhite" /> */}
                                        <img src={item.technologies_img} className="card-img-top" alt="..." style={{ width: "75px", height: "82px" }} />
                                        <div className="card-body">
                                            <h6 className="header__card__title">{item.features_name}</h6>
                                            <p className="header__card__discription">{item.features_description}</p>
                                        </div>
                                    </div>
                                </div>
                               )
                           })
                    }
                   
                </div>
            </Slider>
        </div>
    );
};

export default CarouselSlider;