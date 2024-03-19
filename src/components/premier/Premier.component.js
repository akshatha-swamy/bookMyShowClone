import React from "react";
//slider
import Slider from "react-slick";
//component
import Poster from "../poster/Poster.component";
import MovieImages from "../Movies/MoviesList.component";

//config
import settings from "../../config/PosterCarousel.config";
import PremierImages from "../../config/TempPosters.config";


export const Premier=()=>{
   
    return(
        <>
            <Slider {...settings}>
                {MovieImages.map((image)=>(
                    <Poster {...image} isDark/>
                ))}
            </Slider>
        </>
    );
}
