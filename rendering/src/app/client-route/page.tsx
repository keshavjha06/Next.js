"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./ImageSlider.css";

export default function ClientRoutePage() {
    const settings = {
        dots: true,
    };
    return (
        <div className="image-slider-container">
            <Slider {...settings}>
                <div>
                    <img src="https://picsum.photos/400/200" />
                </div>
                <div>
                    <img src="https://picsum.photos/400/300" />
                </div>
                <div>
                    <img src="https://picsum.photos/400/250" />
                </div>
                <div>
                    <img src="https://picsum.photos/400/350" />
                </div>
            </Slider>
        </div>
    );
};