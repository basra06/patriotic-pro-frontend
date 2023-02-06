import React, { useState } from 'react'
import Slider from "react-slick";
import first from "../assets/images/sliderimages/Mask group (1).png"
import seacond from "../assets/images/sliderimages/Mask group (2).png"
import third from "../assets/images/sliderimages/Mask group (3).png"
import fourth from "../assets/images/sliderimages/Mask group (4).png"
import fifth from "../assets/images/sliderimages/Mask group (5).png"
import sixth from "../assets/images/sliderimages/Mask group (6).png"
import seven from "../assets/images/sliderimages/Mask group (7).png"
import "../sass/global/global.css"
import "../sass/industry/indestry.css"

export const Industry = () => {
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
           <button
                className={className}
                style={{ display: "block", color: "white", border: "none", cursor: 'pointer', borderRadius: "50%", width: "20px", height: "20px", position: 'absolute', background: "#D42443", top: 70, left: 10, zIndex: 700 }}
                onClick={onClick}
            />
        );
    }


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ display: "block", color: "white", border: "none", cursor: 'pointer', borderRadius: "50%", width: "20px", height: "20px", position: 'absolute', background: "#D42443", top: 70, right: 10, zIndex: 700 }}
                onClick={onClick}
            />
        );
    }


    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        autoplay: true,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToScroll: 1,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    
                }
            },

            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,


                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    nextArrow:false,
                    prevArrow:false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    nextArrow:false,
                    prevArrow:false,
                }
            }
        ]
    };




    return (
        <>

            <div className="industrylist ">
                <div className="container">
                    <div className="row  ">
                        <div className="textdata">
                            <h2>popular industry list</h2>
                            <p>You love America, Hire a Pro that does too. Free for Pros, Free for Homeowners.</p>
                        </div>

                        <Slider {...settings}>
                            <div className='slider'>
                                <div className="card " >
                                    <img className='image-fluid' src={first} />
                                </div>
                                <div className="texthead ">
                                    <p>Air Conditioning</p>
                                </div>
                            </div>
                            <div className='slider'>
                                <div className="card " >
                                    <img className='image-fluid' src={seacond} />
                                </div>
                                <div className="texthead ">
                                    <p>Carpentry</p>
                                </div>
                            </div>

                            <div className='slider'>
                                <div className="card " >
                                    <img className='image-fluid' src={third} />
                                </div>
                                <div className="texthead ">
                                    <p>Cleaning</p>
                                </div>
                            </div>

                            <div className="slider">
                                <div className="card " >
                                    <img className='image-fluid' src={fourth} />
                                </div>
                                <div className="texthead">
                                    <p>Concrete</p>
                                </div>
                            </div>

                            <div className='slider'>
                                <div className="card " >
                                    <img className='image-fluid' src={fifth} />
                                </div>
                                <div className="texthead ">
                                    <p>Drywall</p>
                                </div>
                            </div>

                            <div className='slider'>
                                <div className="card " >
                                    <img className='image-fluid' src={sixth} />
                                </div>
                                <div className="texthead ">
                                    <p>Electrician</p>
                                </div>
                            </div>

                            <div className='slider'>
                                <div className="card " >
                                    <img className='image-fluid' src={seven} />
                                </div>
                                <div className="texthead ">
                                    <p>Fencing</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        </>
    )
}
