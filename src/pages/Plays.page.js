import React from "react";
import HeroCarousel from "../components/heroCarousel/HeroCarousel.component";
import Plays from "../components/Plays/Plays.component";
import NavBar from "../components/navbar/Navbar.component";
const PlaysPage=()=>{
    return(
        <>
        <div>
        <div className="hidden lg:block">
            <NavBar/>
        </div>
       <HeroCarousel/>
       <Plays/>
       </div>
      

      
        </>

    );
};

export default PlaysPage;