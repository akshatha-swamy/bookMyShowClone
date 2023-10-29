import React from "react";
//component
import CastCrew from "./CastCrew.component";
//config
import settings from "../../config/PosterCarousel.config";

//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";



const CastCrewSlider=(props)=>{
    return(
        <>
        <div className="flex flex-col items-start py-4 ">
          </div>
            <Slider {...settings}>
                {props.images.map((image)=>(
                    <CastCrew {...image} isDark={props.isDark}/>
                ))}
            </Slider>
        </>
    );
}

export default CastCrewSlider;