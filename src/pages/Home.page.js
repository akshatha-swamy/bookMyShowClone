import React from "react";

import EntertainmentCardSlider from "../components/EntertainmentCarousel/Entertainment.component";


import { Premier } from "../components/premier/Premier.component";

import PosterSlider from "../components/slider/PosterSlider.component";

import TempPoster from "../config/TempPosters.config";

function HomePage() {
  return( 
  <>

    <div className="container px-6 py-6 mx-auto ">
      <PosterSlider images={TempPoster} title="Recommended Movies"/>
      </div>

  <div className="container mx-auto px-3 py-6">
  <h1 className="text-2xl font-bold text-gray-800">The Best Of Entertainment</h1>
  <EntertainmentCardSlider/>
  </div>
  
  <div className="bg-navCol-200 py-5 px-16 " >
    <div className="flex  " >
      <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="premier" className="w-full h-full "/>


    </div>

    <PosterSlider images={TempPoster} title="Premiers" subtitle="Brand New Releases Every Friday" isDark={true}/>
    
  </div>

 <div className="container px-6 py-6 mx-auto ">
  <PosterSlider images={TempPoster} title="Online Streaming Events" isDark={false}/>
  </div>
    
  </>
  );
}


export default HomePage;