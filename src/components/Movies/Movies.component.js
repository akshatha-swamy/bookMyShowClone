import React from "react";
import { BiChevronRight } from "react-icons/bi";
import Buttons from "./Buttons.component";
import {IoLocationOutline} from "react-icons/io5";
import {FiFilter} from "react-icons/fi";
import PosterDisplay from "./PosterDisplay.component";
import Filter from "./Filter.component";


const Movies = () => {
return(
  <>
  <div className="lg:hidden">
  <div>
      <Buttons/>
      </div>
      <div>
      <div className="flex justify-between p-10">
      <h1 className="text-xl sm:text-3xl flex justify-between font-bold text-gray-800">Coming Soon </h1>
      <h1 className="flex items-center text-buttonPink-300 text-sm sm:text-xl">Explore Upcoming 
      <BiChevronRight/></h1>
      </div>

      <PosterDisplay/>

      <div className="flex items-center justify-between p-8 lg:hidden">
        <button className="flex items-center text-white bg-buttonPink-300 p-4 rounded-full gap-3 text-lg fixed bottom-10"><IoLocationOutline/>Browse By Location</button>
        <button className="p-4 flex items-center justify-center rounded-full bg-buttonPink-300 text-white fixed bottom-10 right-8">
          <FiFilter className="w-8 h-auto"/>
        </button>
      </div>


      </div>
</div>

<div className="hidden lg:block bg-slate-100">
<div className="flex">
<div className="w-2/5">
  <Filter />
</div>
<div className="py-4 gap-3 mx-3">
      <div className="flex justify-between p-6 bg-white ">
      <h1 className="text-xl sm:text-3xl flex justify-between font-bold text-gray-800">Coming Soon </h1>
      <h1 className="flex items-center text-buttonPink-300 text-sm sm:text-xl">Explore Upcoming 
      <BiChevronRight/></h1>
      </div>

      <PosterDisplay/>

      

      </div>


</div>

</div>
     
      
    </>
  );

};
  export default Movies;
