import React from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function CakeCarousel() {
  return (
    <div className="carousel-wrapper">
        <Carousel>
            <div>
                <img src={`${process.env.PUBLIC_URL + '/img-test/img1.jpg'}`} />
            </div>
            <div>
                <img src={`${process.env.PUBLIC_URL + '/img-test/img8.jpg'}`} />
            </div>
            <div>
                <img src={`${process.env.PUBLIC_URL + '/img-test/img5.jpg'}`} />
            </div>
        </Carousel>
    </div>
  );
}