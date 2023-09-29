import React from "react";
import HeroSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NextArrow,PrevArrow } from "./Arrows.component";

const HeroCarousel=()=>{

    const settingslg={
     arrows:true,
     autoplay:true,
     centerMode:true,
     infinite: true, 
     slidesToShow: 1,
     slidesToScroll: 1,
     nextArrow:<NextArrow/>,
     prevArrow:<PrevArrow/>
    }
 const settings = {
     arrows:true,
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     nextArrow:<NextArrow/>,
     prevArrow:<PrevArrow/>
   };
   const images=[
     "https://assets-in.bmscdn.com/promotions/cms/creatives/1695071372300_web.jpg",
     "https://assets-in.bmscdn.com/promotions/cms/creatives/1695719901463_arcadiadesktop.jpg",
     "https://assets-in.bmscdn.com/promotions/cms/creatives/1694003473688_ronankeatingdesktop.jpg",
     "https://assets-in.bmscdn.com/promotions/cms/creatives/1695884381670_petfeddesktop.jpg",
       ];
   return(
     <>
        <div className="lg:hidden">
        <HeroSlider {...settings}>
             {
                 images.map((image)=>(
                     <div className="w-full h-44 ms:88 py-2">
                         <img src={image} key={image}  alt="image" className="w-full h-full rounded-md"/>
                     </div>
                 ))
             }
         </HeroSlider>
        </div>

        <div className="hidden lg:block">
        <HeroSlider {...settingslg}>
             {
                 images.map((image)=>(
                     <div className="w-full h-80 px-1 py-2">
                         <img src={image} key={image} alt="image" className="w-full h-full rounded-md"/>
                     </div>
                 ))
             }
         </HeroSlider>
        </div>

     </>
   );
}
export default HeroCarousel;