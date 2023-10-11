import React from "react";

import CastCrew from "../poster/CastCrew.component";
import settings from "../../config/PosterCarousel.config";

import Slider from "react-slick";

const CastSlider=(props)=>{
    return(
        <>
        <div className="flex flex-col items-start py-4">
            <h3 className={`text-2xl font-bold ${props.isDark ?"text-white":"text-gray-800"}`}>{props.title}</h3> 
           
        </div>
            <Slider {...settings}>
                {props.images.map((image)=>(
                    <CastCrew {...image} isDark={props.isDark}/>
                ))}
            </Slider>
        </>
    );
}

export default CastSlider;