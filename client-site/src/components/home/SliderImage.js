import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./SliderImage.css";
import home_img from '../../images/home_img.png';

const sliderImage = () => {

    const responsiveSettings = [
        {
            breakpoint: 800,
            autoplay: "true",
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ];
    const slideImages = [
        {
            id: 1,
            image: home_img,
            caption: 'Slide 1'
        },
        {
            id: 2,
            image: home_img,
            caption: 'Slide 1'
        },
    ];
    return (
            <Slide slidesToScroll={2} slidesToShow={1} indicators={true} responsive={responsiveSettings}>

                {
                    slideImages.map((item, id) => (
                        <div key={id} className="slide_img">
                            <img src={item.image} alt="image" />
                        </div>
                    ))}
            </Slide>
    );
};

export default sliderImage;