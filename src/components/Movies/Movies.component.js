import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import Buttons from "./Buttons.component";
import {IoLocationOutline} from "react-icons/io5";
import {FiFilter} from "react-icons/fi";
import PosterDisplay from "./PosterDisplay.component";

const Movies = () => {
return(
  <>
      <Buttons/>
      <div>
      <div className="flex justify-between p-10">
      <h1 className="text-xl sm:text-3xl flex justify-between font-bold text-gray-800">Coming Soon </h1>
<h1 className="flex items-center text-buttonPink-300 text-sm sm:text-xl">Explore Upcoming 
<BiChevronRight/></h1>
        
      </div>

      <PosterDisplay/>

      <div className="flex items-center justify-between p-8 ">
        <button className="flex items-center text-white bg-buttonPink-300 p-4 rounded-full gap-3 text-lg fixed bottom-10"><IoLocationOutline/>Browse By Location</button>
        <button className="p-4 flex items-center justify-center rounded-full bg-buttonPink-300 text-white fixed bottom-10 right-8">
          <FiFilter className="w-8 h-auto"/>
        </button>


      </div>
      </div>
      
    </>
  );

};
  export default Movies;
