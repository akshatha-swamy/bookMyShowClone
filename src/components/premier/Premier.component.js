import React from "react";
//slider
import Slider from "react-slick";
//component
import Poster from "../poster/Poster.component";

//config
import settings from "../../config/PosterCarousel.config";
import PremierImages from "../../config/TempPosters.config";


export const Premier=()=>{
   
    return(
        <>
            <Slider {...settings}>
                {PremierImages.map((image)=>(
                    <Poster {...image} isDark/>
                ))}
            </Slider>
        </>
    );
}
