import React from "react";

import EntertainmentCardSlider from "../components/EntertainmentCarousel/Entertainment.component";

import { Premier } from "../components/premier/Premier.component";

function HomePage() {
  return( 
  <>
  <div className="container mx-auto px-3 py-6">
  <h1 className="text-2xl font-bold text-gray-800">The Best Of Entertainment</h1>
  <EntertainmentCardSlider/>
  </div>
  <div className="containerMovie mx-auto px-6 py-6">
  <h1 className="text-2xl font-bold text-gray-800 my-3">Recommended movies</h1>
  <Premier/>
  </div>
    
  </>
  );
}


export default HomePage;